function CharacterPanel({ label, image, buyLabel, onBuy }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 flex-1 min-w-[220px]">
      <div
        className="h-100 w-full bg-cover bg-center flex items-end p-4"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="text-white/90 font-semibold tracking-wide">{label}</p>
      </div>

      <div className="bg-white dark:bg-[#1A1A1A] p-4 flex items-center justify-between">
        <span className="text-sm text-black/60 dark:text-white/50">Featured</span>
        <button
          type="button"
          onClick={onBuy}
          className="shrink-0 rounded-full bg-[#5EF268] px-4 py-2 text-sm font-semibold text-[#0F0F0F] hover:brightness-95 active:scale-95 transition"
        >
          {buyLabel}
        </button>
      </div>
    </div>
  );
}
export default CharacterPanel;
