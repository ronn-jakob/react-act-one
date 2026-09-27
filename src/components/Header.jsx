function Header({
  navLinks,
  lang,
  setLang,
  darkMode,
  setDarkMode,
  mobileNavOpen,
  setMobileNavOpen,
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="h-8 w-8 rounded-lg bg-[#5EF268] flex items-center justify-center text-[#0F0F0F] font-black">
            DS
          </span>
          DIGISHOP
        </a>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:text-[#5EF268] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "fil" : "en")}
              className="flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/15 px-3 py-1.5 text-sm font-medium hover:border-[#5EF268] transition"
              aria-label="Translate to Filipino"
            >
              <span className="material-symbols-outlined" aria-hidden="true">language</span>
              {lang === "en" ? "FIL" : "EN"}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center rounded-full border border-black/10 dark:border-white/15 h-9 w-9 hover:border-[#5EF268] transition"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Menu">
          <span className="material-symbols-outlined" aria-hidden="true">
            {mobileNavOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 px-5 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileNavOpen(false)} className="text-sm font-medium">
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setLang(lang === "en" ? "fil" : "en")}
              className="flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/15 px-3 py-1.5 text-sm font-medium"
            >
              <span className="material-symbols-outlined" aria-hidden="true">language</span>
              {lang === "en" ? "FIL" : "EN"}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center rounded-full border border-black/10 dark:border-white/15 h-9 w-9"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
