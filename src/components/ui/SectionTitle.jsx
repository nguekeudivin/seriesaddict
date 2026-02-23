function SectionTitle({ title, action }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-2">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/95">{title}</h2>
      {action ? <button className="text-xs uppercase tracking-[0.2em] text-[#1E6C86]">{action}</button> : null}
    </div>
  )
}

export default SectionTitle
