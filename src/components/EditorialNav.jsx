import { useEffect, useState } from "react";
import { Search, Menu, Bell } from "lucide-react";

export default function EditorialNav({ transparentAtTop = true }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = transparentAtTop && !scrolled
    ? "bg-transparent"
    : "bg-black/80 backdrop-blur-md border-b border-white/5";

  const height = scrolled ? "py-3" : "py-5";

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${bg} ${height}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/80 transition hover:border-brand-cyan/40 hover:text-brand-cyan">
            <Menu className="h-5 w-5" />
          </button>
          <div className="select-none text-lg font-black tracking-[0.2em] md:text-xl">
            <span className="text-white">SERIE</span>
            <span className="bg-gradient-to-r from-brand-primary to-brand-cyan bg-clip-text text-transparent">ADDICT</span>
          </div>
        </div>

        <div className="hidden flex-1 px-8 md:block lg:px-12">
          <div className="relative mx-auto max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Rechercher une série, un acteur..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-cyan/40 focus:bg-white/10"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-brand-cyan/40 hover:text-brand-cyan md:hidden">
            <Search className="h-5 w-5" />
          </button>
          <button className="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-brand-cyan/40 hover:text-brand-cyan">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-primary" />
          </button>
          <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-cyan/30 transition hover:ring-brand-cyan/60">
            <img
              alt="Avatar"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
