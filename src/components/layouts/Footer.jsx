export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-16 py-8 bg-[#050508]
                       flex items-center justify-between
                       max-md:px-6 max-sm:flex-col relative z-20 max-sm:gap-2 max-sm:text-center">
      <span className="text-[#7a9a99] text-[0.82rem]">
        © 2026 ASAFR MUAHAMMED — All systems online
      </span>
      <span className="text-[#7a9a99] text-[0.82rem]">
        Built with{" "}
        <a
          href="#"
          className="text-(--s-bg-light) transition-colors duration-200 hover:text-[#00d9b4]"
        >
          precision
        </a>
      </span>
    </footer>
  );
}