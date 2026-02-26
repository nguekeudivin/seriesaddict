// ---------------------------
// Collections Mosaic (grid asymétrique améliorée)
// ---------------------------
function CollectionTile({ item, variant = "small", onClick }) {
  const sizes =
    variant === "featured"
      ? "col-span-12 md:col-span-7 row-span-2 min-h-[320px]"
      : variant === "medium"
        ? "col-span-12 sm:col-span-6 md:col-span-5 min-h-[150px]"
        : "col-span-12 sm:col-span-6 md:col-span-4 min-h-[140px]";

  return (
    <div
      className={`group relative ${sizes} overflow-hidden rounded-2xl cursor-pointer`}
      onClick={onClick}
    >
      {/* Gradient border ring */}
      <GradientRing radiusClass="rounded-2xl" thickness={2} />
      <GradientRing radiusClass="rounded-2xl" thickness={2} glow hoverGlow />

      <div className="relative h-full rounded-2xl bg-brand-dark/55 backdrop-blur">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.bg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/35 to-black/65" />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-5">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-brand-cyan/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80">
                {item.count} séries
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                Collection
              </span>
            </div>

            <h3 className="mt-3 max-w-[22rem] text-base font-extrabold uppercase tracking-wide text-white">
              {item.title}
            </h3>

            {variant === "featured" ? (
              <p className="mt-2 max-w-[34rem] text-sm text-white/70">
                {item.description}
              </p>
            ) : null}
          </div>

          {/* mini posters row */}
          <div className="flex items-end justify-between">
            <div className="flex -space-x-3">
              {item.posters.slice(0, 4).map((p, i) => (
                <div
                  key={i}
                  className="h-16 w-12 overflow-hidden rounded-lg ring-2 ring-black/60"
                >
                  <img src={p} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
              {item.extra ? (
                <div className="grid h-16 w-12 place-items-center rounded-lg bg-black/40 text-xs font-bold text-white ring-2 ring-black/60">
                  +{item.extra}
                </div>
              ) : null}
            </div>

            <button className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white">
              Voir
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
