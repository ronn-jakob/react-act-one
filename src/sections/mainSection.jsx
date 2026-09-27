import React, { useState, useEffect } from "react";
import "./mainSection.css";
import CharacterPanel from "../components/CharacterPanel.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Header from "../components/Header.jsx";

const copy = {
  en: {
    nav: { home: "Home", about: "About", products: "Products", contact: "Contact" },
    hero: {
      eyebrow: "Top-up • Instant • Secure",
      title: "Load up your account in seconds.",
      subtitle:
        "Buy Mobile Legends: Bang Bang Diamonds and Valorant Points at fair prices, delivered straight to your account.",
      cta: "Browse products",
    },
    characters: { mlbb: "Mobile Legends: Bang Bang", valorant: "Valorant", buyDiamonds: "Buy Diamonds", buyPoints: "Buy Points" },
    featured: {
      title: "Why players top up here",
      items: [
        { h: "Fast delivery", p: "Most orders complete in under 5 minutes." },
        { h: "Fair pricing", p: "No hidden markups on any package." },
        { h: "Always on", p: "Order anytime, 24 hours a day." },
      ],
    },
    about: {
      title: "About Digishop",
      text:
        "Digishop is a small, focused digital shop for two games we actually play: Mobile Legends: Bang Bang and Valorant. We keep the catalog short, the prices honest, and the checkout simple, so topping up is the easy part of your day.",
    },
    products: {
      title: "Products",
      subtitle: "Pick a game to see its top-up options.",
      mlbb: "Mobile Legends",
      valorant: "Valorant",
      buyNow: "Buy now",
    },
    contact: {
      title: "Contact us",
      subtitle: "Questions about an order or a package? Send us a message.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      info: "Contact information",
      social: "Find us on",
    },
    footer: "All game trademarks belong to their respective owners.",
  },
  fil: {
    nav: { home: "Home", about: "Tungkol", products: "Produkto", contact: "Kontak" },
    hero: {
      eyebrow: "Top-up • Mabilis • Ligtas",
      title: "I-load ang account mo sa ilang segundo lang.",
      subtitle:
        "Bumili ng Mobile Legends: Bang Bang Diamonds at Valorant Points sa tamang presyo, direktang mapupunta sa account mo.",
      cta: "Tingnan ang mga produkto",
    },
    characters: { mlbb: "Mobile Legends: Bang Bang", valorant: "Valorant", buyDiamonds: "Bumili ng Diamonds", buyPoints: "Bumili ng Points" },
    featured: {
      title: "Bakit dito nag-to-top up ang mga manlalaro",
      items: [
        { h: "Mabilis na delivery", p: "Karamihan sa order ay tapos sa loob ng 5 minuto." },
        { h: "Tamang presyo", p: "Walang tagong dagdag-presyo sa anumang package." },
        { h: "Bukas 24/7", p: "Pwedeng mag-order anumang oras." },
      ],
    },
    about: {
      title: "Tungkol sa Digishop",
      text:
        "Ang Digishop ay maliit na digital shop para sa dalawang larong talagang nila-laro namin: Mobile Legends: Bang Bang at Valorant. Pinapanatili naming maikli ang listahan, tapat ang presyo, at simple ang checkout, para ang pag-top up ang pinakamadaling parte ng araw mo.",
    },
    products: {
      title: "Mga Produkto",
      subtitle: "Pumili ng laro para makita ang mga top-up options.",
      mlbb: "Mobile Legends",
      valorant: "Valorant",
      buyNow: "Bilhin ngayon",
    },
    contact: {
      title: "Makipag-ugnayan",
      subtitle: "May tanong tungkol sa order o package? Padalhan kami ng mensahe.",
      name: "Pangalan",
      email: "Email",
      message: "Mensahe",
      send: "Ipadala",
      info: "Contact information",
      social: "Sundan kami sa",
    },
    footer: "Pag-aari ng kani-kanilang may-ari ang lahat ng game trademarks.",
  },
};
 
function MainSection() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("en");
  const [category, setCategory] = useState("mlbb");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const t = copy[lang];
 
  // Sync the `dark` class on <html> whenever darkMode changes (Tailwind class-strategy dark mode)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
 
  // Sync <html lang> and tab title whenever the language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "fil" ? "Digishop — Digital Top-Up" : "Digishop — Digital Top-Up Shop";
  }, [lang]);
 
  const mlbbProducts = [
    { amount: 15, price: 16 },
    { amount: 100, price: 102 },
    { amount: 500, price: 505 },
  ];
  const valorantProducts = [
    { amount: 1000, price: 305 },
    { amount: 2000, price: 605 },
    { amount: 5000, price: 1510 },
  ];
 
  const activeProducts = category === "mlbb" ? mlbbProducts : valorantProducts;
  const activeUnit = category === "mlbb" ? "Diamonds" : "Valorant Points";
  const activeBadge = category === "mlbb" ? "MLBB" : "VALORANT";
 
  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#contact", label: t.nav.contact },
  ];

  function handleCharacterBuy(selectedCategory) {
    setCategory(selectedCategory);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }
 
  return (
    <div className="site-shell min-h-screen text-[#0F0F0F] dark:text-white transition-colors font-sans">
      <Header
        navLinks={navLinks}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
 
      {/* HOME */}
      <section id="home" className="mx-auto max-w-6xl px-5 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-[#5EF268]/10 text-[#0F0F0F] dark:text-[#5EF268] ring-1 ring-[#5EF268]/40 px-3 py-1 text-xs font-medium mb-5">
              {t.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
              {t.hero.title}
            </h1>
            <p className="text-black/60 dark:text-white/60 text-lg mb-8 max-w-md">{t.hero.subtitle}</p>
            <a
              href="#products"
              className="inline-flex items-center rounded-full bg-[#5EF268] px-6 py-3 font-semibold text-[#0F0F0F] hover:brightness-95 active:scale-95 transition"
            >
              {t.hero.cta}
            </a>
          </div>
 
          {/* Placeholder character panels + quick-buy buttons */}
          <div className="min-w-0 flex flex-col lg:flex-row gap-4">
            <CharacterPanel
              label={t.characters.mlbb}
              image="/src/images/mlbb.png"
              buyLabel={t.characters.buyDiamonds}
              onBuy={() => handleCharacterBuy("mlbb")}
            />
            <CharacterPanel
              label={t.characters.valorant}
              image="/src/images/valorant.png"
              buyLabel={t.characters.buyPoints}
              onBuy={() => handleCharacterBuy("valorant")}
            />
          </div>
        </div>
 
        {/* Featured content */}
        <div className="grid sm:grid-cols-3 gap-5 mt-24">
          {t.featured.items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
              <p className="font-semibold mb-1.5">{item.h}</p>
              <p className="text-sm text-black/60 dark:text-white/50">{item.p}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* ABOUT */}
      <section id="about" className="border-y border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-5">{t.about.title}</h2>
          <p className="text-black/60 dark:text-white/60 text-lg">{t.about.text}</p>
        </div>
      </section>
 
      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-3">{t.products.title}</h2>
          <p className="text-black/60 dark:text-white/60">{t.products.subtitle}</p>
        </div>
 
        {/* Category toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-black/10 dark:border-white/15 p-1">
            <button
              onClick={() => setCategory("mlbb")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                category === "mlbb" ? "bg-[#5EF268] text-[#0F0F0F]" : "text-black/60 dark:text-white/60"
              }`}
            >
              {t.products.mlbb}
            </button>
            <button
              onClick={() => setCategory("valorant")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                category === "valorant" ? "bg-[#5EF268] text-[#0F0F0F]" : "text-black/60 dark:text-white/60"
              }`}
            >
              {t.products.valorant}
            </button>
          </div>
        </div>
 
        <div className="grid sm:grid-cols-3 gap-5">
          {activeProducts.map((p, i) => (
            <ProductCard
              key={i}
              amount={p.amount}
              unit={activeUnit}
              price={p.price}
              badge={activeBadge}
              buyLabel={t.products.buyNow}
              onBuy={() => {}}
            />
          ))}
        </div>
      </section>
 
      {/* CONTACT */}
      <section id="contact" className="border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">{t.contact.title}</h2>
            <p className="text-black/60 dark:text-white/60 mb-8">{t.contact.subtitle}</p>
 
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t.contact.name}
                className="rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#5EF268]"
              />
              <input
                type="email"
                placeholder={t.contact.email}
                className="rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#5EF268]"
              />
              <textarea
                placeholder={t.contact.message}
                rows={4}
                className="rounded-xl border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#5EF268]"
              />
              <button className="self-start rounded-full bg-[#5EF268] px-6 py-3 font-semibold text-[#0F0F0F] hover:brightness-95 active:scale-95 transition">
                {t.contact.send}
              </button>
            </form>
          </div>
 
          <div>
            <h3 className="font-semibold mb-4">{t.contact.info}</h3>
            <ul className="space-y-2 text-sm text-black/60 dark:text-white/60 mb-8">
              <li>support@digishop.ph</li>
              <li>+63 900 000 0000</li>
              <li>Mon-Sun, 9AM-1PM</li>
            </ul>
 
            <h3 className="font-semibold mb-4">{t.contact.social}</h3>
            <div className="flex gap-3">
              {[
                { name: "Facebook", icon: "https://cdn.simpleicons.org/facebook/1877F2" },
                { name: "Instagram", icon: "https://cdn.simpleicons.org/instagram/E4405F" },
                { name: "X", icon: "https://cdn.simpleicons.org/x/000000" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15 hover:border-[#5EF268] transition"
                >
                  <img src={social.icon} alt="" className="h-5 w-5 dark:brightness-0 dark:invert" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      <footer className="mx-auto max-w-6xl px-5 py-8 text-center text-xs text-black/40 dark:text-white/30">
        © {new Date().getFullYear()} Digishop. {t.footer}
      </footer>
    </div>
  );
}

export default MainSection;