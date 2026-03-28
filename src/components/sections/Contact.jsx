import "@/styles/contact.css";
import { Mail, MapPin, DoorOpen } from "lucide-react";
import { RevealWrapper } from "../ui/RevealWrapper";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full  text-(--p-font)z-3 p-[7rem_2rem] max-md:p-[5rem_1.5rem]"
    >
      <main className="w-[90%] max-w-350 m-auto max-md:w-full">
        {/* section label */}
        <div
          className="relative z-10 flex items-center gap-3 text-(--s-bg-light) mb-3
                      text-[0.72rem] font-semibold tracking-[0.12em] uppercase"
        >
          <RevealWrapper type="wipe">
          <span className="w-6 h-px bg-(--s-bg-light)" />
          Get In Touch
          </RevealWrapper>
        </div>

        {/* two-column layout */}
        <div
          className="relative z-10 grid grid-cols-[1fr_1.4fr] gap-16 mt-2
                      items-start max-lg:grid-cols-1 max-lg:gap-10"
        >
          {/* ── LEFT: contact info ── */}
          <div>
            <RevealWrapper type="fadeIn" >
            <h3
              className="font-[Syne,sans-serif] text-[1.55rem] font-extrabold leading-[1.2]
                         tracking-tight text-(--p-font) mb-4"
            >
              Let&rsquo;s build something
              <br />
              <span
                className="bg-gradient-to-r from-(--s-bg-light) to-(--cyan-mark)
                             bg-clip-text text-transparent"
              >
                amazing together.
              </span>
            </h3>
            <p className="text-[#7a7a9a] text-[0.92rem] font-light mb-7 leading-relaxed max-w-xs">
              Whether you have a project in mind, a job opportunity, or just
              want to say hi — my inbox is always open.
            </p>

            {/* contact items */}
            <div className="flex flex-col">
              <a
                href="mailto:asfarmuhammedns@gmail.com"
                className="flex items-center gap-4 py-[0.85rem] border-b border-white/[0.07]
                         text-[#f0f0f8] text-[0.88rem] transition-colors duration-200
                         hover:text-(--cyan-mark) group"
              >
                <span
                  className="w-9 h-9 bg-[#111120] border border-white/[0.07] rounded-[10px]
                               flex items-center justify-center text-base flex-shrink-0
                               group-hover:border-(--cyan-mark)/40 transition-colors duration-200"
                >
                  <Mail />
                </span>
                asfarmuhammedns@gmail.com
              </a>

              <div
                className="flex items-center gap-4 py-[0.85rem] border-b border-white/[0.07]
                            text-[#f0f0f8] text-[0.88rem]"
              >
                <span
                  className="w-9 h-9 bg-[#111120] border border-white/[0.07] rounded-[10px]
                               flex items-center justify-center text-base flex-shrink-0"
                >
                  <MapPin />
                </span>
                Kerala, India
              </div>

              <div className="flex items-center gap-4 py-[0.85rem] text-[#f0f0f8] text-[0.88rem]">
                <span
                  className="w-9 h-9 bg-[#111120] border border-white/[0.07] rounded-[10px]
                               flex items-center justify-center text-base flex-shrink-0"
                >
                  <DoorOpen />
                </span>
                Available for new opportunities
              </div>
            </div>

            {/* social row */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/Asfar-07"
                target="_black"
                title="GitHub"
                className="w-11 h-11 bg-[#111120] border border-white/[0.07] rounded-[12px]
                         flex items-center justify-center text-[#7a7a9a]
                         transition-all duration-200
                         hover:border-(--cyan-mark) hover:text-(--cyan-mark) hover:-translate-y-0.5"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/asfar2003"
                target="_black"
                title="LinkedIn"
                className="w-11 h-11 bg-[#111120] border border-white/[0.07] rounded-[12px]
                         flex items-center justify-center text-[#7a7a9a]
                         transition-all duration-200
                         hover:border-(--cyan-mark) hover:text-(--cyan-mark) hover:-translate-y-0.5"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:asfarmuhammedns@gmail.com"
                target="_black"
                title="Email"
                className="w-11 h-11 bg-[#111120] border border-white/[0.07] rounded-[12px]
                         flex items-center justify-center text-[#7a7a9a] text-[1.1rem]
                         transition-all duration-200
                         hover:border-(--cyan-mark) hover:text-(--cyan-mark) hover:-translate-y-0.5"
              >
                <Mail />
              </a>
            </div>
            </RevealWrapper>
          </div>

          {/* ── RIGHT: form ── */}
          <RevealWrapper type="fadeUp">
          <div className="bg-[#111120] border border-white/[0.07] rounded-3xl p-10 max-md:p-6">
            {/* row 1 */}
            <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-[#7a7a9a]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3
                           text-[#f0f0f8] text-[0.88rem] font-light outline-none w-full
                           placeholder:text-[#7a7a9a]/50 transition-all duration-200
                           focus:border-(--cyan-mark) focus:bg-(--cyan-mark)/[0.06]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-[#7a7a9a]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3
                           text-[#f0f0f8] text-[0.88rem] font-light outline-none w-full
                           placeholder:text-[#7a7a9a]/50 transition-all duration-200
                           focus:border-(--cyan-mark) focus:bg-(--cyan-mark)/[0.06]"
                />
              </div>
            </div>

            {/* row 2 */}
            <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-[#7a7a9a]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3
                           text-[#f0f0f8] text-[0.88rem] font-light outline-none w-full
                           placeholder:text-[#7a7a9a]/50 transition-all duration-200
                           focus:border-(--cyan-mark) focus:bg-(--cyan-mark)/[0.06]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-[#7a7a9a]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3
                           text-[#f0f0f8] text-[0.88rem] font-light outline-none w-full
                           placeholder:text-[#7a7a9a]/50 transition-all duration-200
                           focus:border-(--cyan-mark) focus:bg-(--cyan-mark)/[0.06]"
                />
              </div>
            </div>

            {/* textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-[#7a7a9a]">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                className="resize-y bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3
                         text-[#f0f0f8] text-[0.88rem] font-light outline-none w-full
                         placeholder:text-[#7a7a9a]/50 transition-all duration-200
                         focus:border-(--cyan-mark) focus:bg-(--cyan-mark)/[0.06]"
              />
            </div>

            {/* submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-(--s-bg-deep) text-white rounded-xl py-4 text-[0.92rem]
                       font-semibold tracking-wide transition-all duration-200
                       hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(108,99,255,0.45)]
                       cursor-pointer"
            >
              Send Message →
            </button>
          </div>
          </RevealWrapper>
        </div>
      </main>
    </section>
  );
}
