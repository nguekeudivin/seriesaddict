function Chips({ values }) {
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((value) => (
        <span
          key={value}
          className="rounded-full border border-[#1E6C86]/30 bg-[#1E6C86]/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#1E6C86]"
        >
          {value}
        </span>
      ))}
    </div>
  )
}

export default Chips
