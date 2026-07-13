import { Search, User } from "lucide-react";
import { MAIN_NAV } from "./data";

export default function MainHeader() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-neutral-900 px-6 py-4">
      <div className="flex items-center gap-12">
        <div className="flex cursor-pointer items-center gap-1 text-xl font-black tracking-tight text-white">
          <span className="text-brand-primary">CS</span>
          <span>HORROR</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {MAIN_NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <Search className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
        <User className="h-5 w-5 cursor-pointer transition-colors hover:text-white" />
      </div>
    </header>
  );
}
