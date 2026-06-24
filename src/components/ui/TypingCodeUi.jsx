"use client";

import { useEffect, useRef, useCallback } from "react";
import codeLines from "@/store/uiData/codeLines";


const KEYWORDS = new Set([
  "import","public","private","static","class","void","int","boolean",
  "return","if","else","while","new","null","true","false","for",
]);
const CLASSES = new Set(["BinarySearchTree","Node","String","System"]);
const FUNCTIONS = new Set([
  "insert","insertRec","search","inOrder","main","print","println","out",
]);

function tokenize(text, type) {
  if (type === "comment") return [{ t: text, c: "cm" }];
  if (type === "blank")   return [{ t: " ",  c: ""   }];

  const tokens = [];
  let rem = text;

  const rules = [
    { re: /^(\/\/.*)/, c: "cm" },
    { re: /^("(?:[^"\\]|\\.)*")/, c: "st" },
    { re: /^(\b\d+\b)/, c: "nu" },
    {
      re: /^([a-zA-Z_][a-zA-Z0-9_]*)/,
      c: (w) => KEYWORDS.has(w) ? "kw" : CLASSES.has(w) ? "cl" : FUNCTIONS.has(w) ? "fn" : "",
    },
    { re: /^(\s+)/, c: "" },
    { re: /^([^\w\s"]+)/, c: "" },
    { re: /^(.)/, c: "" },
  ];

  while (rem.length > 0) {
    let matched = false;
    for (const { re, c } of rules) {
      const m = rem.match(re);
      if (m) {
        const cls = typeof c === "function" ? c(m[1]) : c;
        tokens.push({ t: m[1], c: cls });
        rem = rem.slice(m[1].length);
        matched = true;
        break;
      }
    }
    if (!matched) { tokens.push({ t: rem[0], c: "" }); rem = rem.slice(1); }
  }
  return tokens;
}

export default function TypingCodeUi({ className, multiColor = true }) {
  const innerRef = useRef(null);
  const stateRef = useRef({
    completed: [],
    lineIdx: 0,
    charIdx: 0,
    timer: null,
  });

  var TOKEN_COLORS;
  if (multiColor) {
    TOKEN_COLORS = {
      kw: "#9b2257",
      cl: "#1a5fa8",
      fn: "#6b2fa0",
      st: "#1a7a4a",
      cm: "#b07090",
      nu: "#c45000",
    };
  } else {
    TOKEN_COLORS = {
     
    };
  }

  const paint = useCallback((partialTokens = null) => {
    const el = innerRef.current;
    if (!el) return;
    const { completed } = stateRef.current;
    const rows =
      partialTokens !== null ? [...completed, partialTokens] : completed;

    el.innerHTML = "";
    rows.forEach((tokens, ri) => {
      const div = document.createElement("div");
      div.style.cssText = "min-height:1em;";
      tokens.forEach(({ t, c }) => {
        if (!t) return;
        if (c && TOKEN_COLORS[c]) {
          const span = document.createElement("span");
          span.style.color = TOKEN_COLORS[c];
          if (c === "cm") span.style.fontStyle = "italic";
          span.textContent = t;
          div.appendChild(span);
        } else {
          div.appendChild(document.createTextNode(t));
        }
      });
      if (ri === rows.length - 1) {
        const cur = document.createElement("span");
        cur.style.cssText =
          "display:inline-block;width:2px;height:1em;background:#c04080;" +
          "vertical-align:middle;margin-left:1px;animation:_blink .75s step-start infinite;";
        div.appendChild(cur);
      }
      el.appendChild(div);
    });
  }, []);

  const tick = useCallback(() => {
    const s = stateRef.current;
    const src = codeLines;
    const line = src[s.lineIdx % src.length];

    if (line.type === "blank") {
      s.completed.push([{ t: " ", c: "" }]);
      s.lineIdx++;
      if (s.lineIdx % src.length === 0)
        s.completed.push(...src.map((l) => tokenize(l.text, l.type)));
      paint();
      s.timer = setTimeout(tick, 55);
      return;
    }

    const full = line.text;
    if (s.charIdx <= full.length) {
      paint(tokenize(full.slice(0, s.charIdx), line.type));
      s.charIdx++;
      s.timer = setTimeout(tick, 26 + Math.random() * 20);
    } else {
      s.completed.push(tokenize(full, line.type));
      s.lineIdx++;
      s.charIdx = 0;
      if (s.lineIdx % src.length === 0)
        s.completed.push(...src.map((l) => tokenize(l.text, l.type)));
      paint();
      s.timer = setTimeout(tick, 55);
    }
  }, [paint]);

  useEffect(() => {
    stateRef.current.timer = setTimeout(tick, 400);
    return () => clearTimeout(stateRef.current.timer);
  }, [tick]);

  return (
    <div className="size-full relative overflow-hidden">
      <div
        ref={innerRef}
        className={`absolute left-0 right-0 whitespace-pre-wrap break-all ${className}`}
      />
    </div>
  );
}
