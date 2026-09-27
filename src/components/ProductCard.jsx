function ProductCard({ amount, unit, price, badge, onBuy, buyLabel }) {
  return (
    <div className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] p-6 flex flex-col gap-4 transition-colors">
      <span className="inline-flex w-fit items-center rounded-full bg-[#5EF268]/10 px-3 py-1 text-xs font-medium text-[#0F0F0F] dark:text-[#5EF268] ring-1 ring-[#5EF268]/40">
        {badge}
      </span>
      <div>
        <p className="text-3xl font-semibold tracking-tight text-[#0F0F0F] dark:text-white">
          {amount.toLocaleString()}
        </p>
        <p className="text-sm text-black/60 dark:text-white/50">{unit}</p>
      </div>
      <div className="mt-auto flex items-center justify-between pt-2 border-t border-black/10 dark:border-white/10">
        <p className="text-lg font-semibold text-[#0F0F0F] dark:text-white">
          ₱{price.toLocaleString()}
        </p>
        <button
          onClick={onBuy}
          className="rounded-full bg-[#5EF268] px-4 py-2 text-sm font-semibold text-[#0F0F0F] hover:brightness-95 active:scale-95 transition"
        >
          {buyLabel}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
