function PosterCard({ title, image, rank }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.06]">
      <img src={image} alt={title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      {rank ? (
        <span className="absolute left-3 top-2 text-3xl font-semibold text-[#1E6C86]/70">{rank}</span>
      ) : null}
      <h3 className="absolute bottom-2 left-3 right-3 text-sm font-semibold text-white">{title}</h3>
    </article>
  )
}

export default PosterCard
