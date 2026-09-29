import { useState } from "react";

const checkoutCopy = {
  en: {
    back: "Back to main page",
    eyebrow: "Secure checkout",
    title: "Complete your order",
    empty: "Your cart is empty.",
    browse: "Browse products",
    products: "Products in your cart",
    review: "Review your top-up packages.",
    item: "items",
    quantity: "Quantity",
    summary: "Bill summary",
    subtotal: "Subtotal",
    vat: "VAT (12%)",
    total: "Total",
    contact: "Contact details",
    contactHint: "We will use these details for your order confirmation.",
    email: "Email address",
    phone: "Phone number",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "09XX XXX XXXX",
    pay: "Pay now",
    processing: "Processing...",
    ready: "Your payment details are ready for processing.",
    failed: "We could not complete your payment. Please try again.",
  },
  fil: {
    back: "Bumalik sa pangunahing pahina",
    eyebrow: "Ligtas na checkout",
    title: "Kumpletuhin ang iyong order",
    empty: "Walang laman ang iyong cart.",
    browse: "Tingnan ang mga produkto",
    products: "Mga produkto sa iyong cart",
    review: "Suriin ang iyong mga top-up package.",
    item: "items",
    quantity: "Dami",
    summary: "Buod ng bayarin",
    subtotal: "Subtotal",
    vat: "VAT (12%)",
    total: "Kabuuan",
    contact: "Mga detalye ng contact",
    contactHint: "Gagamitin namin ang mga detalyeng ito para sa kumpirmasyon ng order.",
    email: "Email address",
    phone: "Numero ng telepono",
    emailPlaceholder: "ikaw@example.com",
    phonePlaceholder: "09XX XXX XXXX",
    pay: "Magbayad ngayon",
    processing: "Pinoproseso...",
    ready: "Handa nang iproseso ang iyong mga detalye ng bayad.",
    failed: "Hindi nakumpleto ang iyong bayad. Pakisubukang muli.",
  },
};

function CheckoutPage({ cartItems, onBack, onPay, lang }) {
  const [contact, setContact] = useState({ email: "", phone: "" });
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const text = checkoutCopy[lang];
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const vat = subtotal * 0.12;
  const total = subtotal + vat;

  async function handleSubmit(event) {
    event.preventDefault();
    setPaymentError(false);
    setIsPaying(true);

    try {
      await onPay({ ...contact, subtotal, vat, total });
      setPaymentSubmitted(true);
    } catch (error) {
      console.error("Unable to complete payment", error);
      setPaymentError(true);
    } finally {
      setIsPaying(false);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-[#0F0F0F] dark:text-white/60 dark:hover:text-white"
      >
        <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
        {text.back}
      </button>

      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#16A34A]">{text.eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight">{text.title}</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-[#1A1A1A]">
          <p className="mb-5 text-black/60 dark:text-white/60">{text.empty}</p>
          <button
            type="button"
            onClick={onBack}
            className="rounded-full bg-[#5EF268] px-5 py-2.5 text-sm font-semibold text-[#0F0F0F] hover:brightness-95"
          >
            {text.browse}
          </button>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#1A1A1A] md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{text.products}</h2>
                <p className="mt-1 text-sm text-black/50 dark:text-white/50">{text.review}</p>
              </div>
              <span className="rounded-full bg-[#5EF268]/15 px-3 py-1 text-xs font-semibold text-[#15803D] dark:text-[#5EF268]">
                {cartItems.reduce((count, item) => count + item.quantity, 0)} {text.item}
              </span>
            </div>

            <div className="divide-y divide-black/10 dark:divide-white/10">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="font-semibold">{item.amount.toLocaleString()} {item.unit}</p>
                    <p className="mt-1 text-sm text-black/50 dark:text-white/50">{item.category} · {text.quantity} {item.quantity}</p>
                  </div>
                  <p className="font-semibold">₱{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col gap-6">
            <section className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#1A1A1A] md:p-8">
              <h2 className="mb-5 text-xl font-semibold">{text.summary}</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-black/60 dark:text-white/60">
                  <span>{text.subtotal}</span>
                  <span>₱{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-black/60 dark:text-white/60">
                  <span>{text.vat}</span>
                  <span>₱{vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-black/10 pt-4 text-base font-bold dark:border-white/10">
                  <span>{text.total}</span>
                  <span>₱{total.toFixed(2)}</span>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#1A1A1A] md:p-8">
              <h2 className="mb-2 text-xl font-semibold">{text.contact}</h2>
              <p className="mb-5 text-sm text-black/50 dark:text-white/50">{text.contactHint}</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium">
                  {text.email}
                  <input
                    required
                    type="email"
                    value={contact.email}
                    onChange={(event) => setContact({ ...contact, email: event.target.value })}
                    placeholder={text.emailPlaceholder}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#5EF268] dark:border-white/15"
                  />
                </label>
                <label className="block text-sm font-medium">
                  {text.phone}
                  <input
                    required
                    type="tel"
                    value={contact.phone}
                    onChange={(event) => setContact({ ...contact, phone: event.target.value })}
                    placeholder={text.phonePlaceholder}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#5EF268] dark:border-white/15"
                  />
                </label>
                <button
                  type="submit"
                  disabled={isPaying}
                  className="w-full rounded-full bg-[#5EF268] px-5 py-3 font-semibold text-[#0F0F0F] transition hover:brightness-95 active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
                >
                  {isPaying ? text.processing : `${text.pay} · ₱${total.toFixed(2)}`}
                </button>
                {paymentSubmitted && (
                  <p className="text-sm font-medium text-[#15803D] dark:text-[#5EF268]" role="status">
                    {text.ready}
                  </p>
                )}
                {paymentError && (
                  <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
                    {text.failed}
                  </p>
                )}
              </form>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}

export default CheckoutPage;
