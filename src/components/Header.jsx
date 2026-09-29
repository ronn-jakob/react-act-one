function Header({
  navLinks,
  lang,
  setLang,
  darkMode,
  setDarkMode,
  mobileNavOpen,
  setMobileNavOpen,
  cartItems,
  cartOpen,
  setCartOpen,
  removeFromCart,
  onCheckout,
}) {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15 hover:border-[#5EF268] transition"
                aria-label={`Cart with ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
                aria-expanded={cartOpen}
              >
                <span className="material-symbols-outlined" aria-hidden="true">shopping_cart</span>
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5EF268] px-1 text-[10px] font-bold text-[#0F0F0F]">
                    {cartCount}
                  </span>
                )}
              </button>
              {cartOpen && (
                <div className="absolute right-0 top-12 z-40 w-72 rounded-xl border border-black/10 dark:border-white/10 bg-white p-4 shadow-xl dark:bg-[#1A1A1A]">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="font-semibold">Order summary</h2>
                    <span className="text-xs text-black/50 dark:text-white/50">{cartCount} {cartCount === 1 ? "item" : "items"}</span>
                  </div>
                  {cartItems.length === 0 ? (
                    <p className="py-3 text-sm text-black/60 dark:text-white/60">Your cart is empty.</p>
                  ) : (
                    <>
                      <div className="flex max-h-48 flex-col gap-3 overflow-y-auto">
                        {cartItems.map((item) => (
                          <div key={item.id} className="group flex items-start justify-between gap-3 text-sm">
                            <div>
                              <p className="font-medium">{item.amount.toLocaleString()} {item.unit}</p>
                              <p className="text-xs text-black/50 dark:text-white/50">{item.category} x {item.quantity}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">₱{(item.price * item.quantity).toLocaleString()}</span>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="hidden text-black/50 hover:text-red-500 group-hover:inline-flex dark:text-white/50"
                                aria-label={`Remove ${item.amount.toLocaleString()} ${item.unit}`}
                              >
                                <span className="material-symbols-outlined text-base" aria-hidden="true">close</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 font-semibold dark:border-white/10">
                        <span>Total</span>
                        <span>₱{cartTotal.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                  <button
                    type="button"
                    disabled={cartItems.length === 0}
                    onClick={onCheckout}
                    className="mt-4 w-full rounded-full bg-[#5EF268] px-4 py-2.5 text-sm font-semibold text-[#0F0F0F] transition hover:brightness-95 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Checkout now
                  </button>
                </div>
              )}
            </div>
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
              onClick={() => setCartOpen(!cartOpen)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15"
              aria-label={`Cart with ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
              aria-expanded={cartOpen}
            >
              <span className="material-symbols-outlined" aria-hidden="true">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5EF268] px-1 text-[10px] font-bold text-[#0F0F0F]">
                  {cartCount}
                </span>
              )}
            </button>
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
