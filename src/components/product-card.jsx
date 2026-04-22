import { Bookmark, Heart, ShoppingBag } from "lucide-react";

export default function ProductCard({ item }) {
  return (
    <button className="group relative overflow-hidden rounded-[28px] text-left">
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.05]"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_bottom,rgba(132,29,79,.18),transparent_45%),radial-gradient(circle_at_right,rgba(30,108,134,.16),transparent_40%)]" />

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
          {item.badge}
        </span>
      </div>

      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
        {item.rating} ★
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
          {item.universe}
        </p>

        <h3 className="mt-2 text-lg font-extrabold uppercase tracking-wide text-white">
          {item.title}
        </h3>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white/85">{item.price}</p>

          <div className="flex items-center gap-2">
            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/85 ring-1 ring-white/15 transition hover:bg-white/[0.14]">
              <Heart className="h-4 w-4" />
            </button>

            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/85 ring-1 ring-white/15 transition hover:bg-white/[0.14]">
              <Bookmark className="h-4 w-4" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:scale-[1.02]">
              <ShoppingBag className="h-3.5 w-3.5" />
              Acheter
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
      <div className="h-[360px] w-full" />
    </button>
  );
}
