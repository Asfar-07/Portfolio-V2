"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const STORAGE_KEY = "character-message-dismissed";


const DEFAULT_MESSAGES = [
  {
    text: <p>Hey, I'm Asfar! <br></br> My new game is officially live! 🎮 Give it a try, explore, and share your feedback. Your thoughts mean a lot! </p>,
    link: { href: "https://wordcarpet.vercel.app/", label: "Visit the game" },
    duration: 9000,
  }
];

export default function CharacterMessage({
  image = "/character.png",
  messages = DEFAULT_MESSAGES,
  firstDelay = 3000,
  interval = 5000,
  reappearAfter = 0,
  rememberDismiss = true,
}) {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [paused, setPaused] = useState(false); // true while hovering/focusing the bubble

  // Restore dismissal state
  useEffect(() => {
    try {
      if (rememberDismiss && sessionStorage.getItem(STORAGE_KEY) === "1") {
        setDismissed(true);
      }
    } catch {
      /* storage unavailable */
    }
  }, [rememberDismiss]);

  // Show the first message after a delay
  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setVisible(true), firstDelay);
    return () => clearTimeout(t);
  }, [dismissed, firstDelay]);

  // Cycle through messages, then hide after the last one
  useEffect(() => {
    if (!visible || dismissed || paused) return;
    let again;
    const current = messages[index];
    const stayFor =
      (typeof current === "object" && current.duration) || interval;

    const t = setTimeout(() => {
      if (index < messages.length - 1) {
        setIndex((i) => i + 1);
      } else {
        setVisible(false);
        if (reappearAfter > 0) {
          again = setTimeout(() => {
            setIndex(0);
            setVisible(true);
          }, reappearAfter);
        }
      }
    }, stayFor);
    return () => {
      clearTimeout(t);
      clearTimeout(again);
    };
  }, [visible, index, dismissed, paused, messages, interval, reappearAfter]);

  const close = () => {
    setVisible(false);
    setDismissed(true);
    setPaused(false);
    try {
      if (rememberDismiss) sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const reopen = () => {
    setDismissed(false);
    setIndex(0);
    setVisible(true);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  const current =
    typeof messages[index] === "string"
      ? { text: messages[index] }
      : messages[index];
  const link = current?.link;
  const isExternal = link ? /^https?:\/\//.test(link.href) : false;

  const linkClass =
    "mt-3 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--cyan-mark)] px-4 py-1.5 text-sm font-semibold text-[color:var(--p-bg-dark)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  const linkContent = link && (
    <>
      {link.label}
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M7 17L17 7M8 7h9v9" />
      </svg>
    </>
  );

  return (
    <div
      className="fixed bottom-3 right-3 z-50 flex items-end gap-2 sm:bottom-6 sm:right-6 sm:gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Message bubble */}
      <div
        role="status"
        aria-live="polite"
        aria-hidden={!visible}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className={[
          "relative mb-5 w-[min(72vw,20rem)] -top-17 left-10 rounded-xl px-4 py-3 pr-9",
          "border border-[color:var(--cyan-mark)]/30 text-[color:var(--s-font)]",
          "bg-gradient-to-br from-[color:var(--p-bg-light)] to-[color:var(--p-bg-deep)]",
          "shadow-[0_0_24px_-4px_var(--neon-blue)]",
          "transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)]",
          "motion-reduce:transition-none",
          visible
            ? "translate-x-0 scale-100 opacity-100"
            : "pointer-events-none translate-x-6 scale-50 opacity-0",
        ].join(" ")}
      >
        {/* Tail pointing to the character */}
        <span
          aria-hidden
          className="absolute -bottom-2 right-3 h-4 w-4 rotate-45 border-b border-r border-[color:var(--cyan-mark)]/30 bg-[color:var(--p-bg-deep)]"
        />

        <button
          type="button"
          onClick={close}
          aria-label="Close message"
          className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full text-[color:var(--s-font)]/70 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--cyan-mark)]"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* key restarts the fade when the message changes */}
        <div key={index} className="animate-[msgIn_.4s_ease-out]">
          <p className="leading-snug" style={{ fontSize: "var(--para-text)" }}>
            {current?.text}
          </p>

          {link &&
            (isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={visible ? 0 : -1}
                className={linkClass}
              >
                {linkContent}
              </a>
            ) : (
              <Link href={link.href} tabIndex={visible ? 0 : -1} className={linkClass}>
                {linkContent}
              </Link>
            ))}
        </div>
      </div>

      {/* Character (click to toggle the message) */}
      <button
        type="button"
        onClick={visible ? close : reopen}
        aria-label={visible ? "Close message" : "Show message"}
        className={[
          "relative h-22 w-22 shrink-0 overflow-hidden rounded-xl",
          visible ? "animate-[bob_2.4s_ease-in-out_infinite] motion-reduce:animate-none" : "",
        ].join(" ")}
      >
        <Image src={image} alt="" fill sizes="85px" className="object-cover" />
      </button>

      <style jsx global>{`
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}