import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SectionNavButton({ direction = "right" }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button className="grid h-14 w-14 place-items-center rounded-full border border-brand-primary/45 bg-black/92 text-white/88 shadow-[0_0_0_1px_rgba(30,108,134,.18)] transition hover:border-brand-cyan/70 hover:text-brand-cyan">
      <Icon className="h-7 w-7" />
    </button>
  );
}
