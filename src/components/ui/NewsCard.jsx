function NewsCard({ title, image, summary }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
      <img src={image} alt={title} className="mb-3 h-36 w-full rounded-lg object-cover" />
      <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs leading-relaxed text-white/70">{summary}</p>
    </article>
  )
}

export default NewsCard
