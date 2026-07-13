import { CHANNELS } from "./data";

export default function TopChannelsBar() {
  return (
    <div className="w-full border-b border-neutral-800 bg-[#181818] text-[11px] font-bold tracking-wider text-gray-400">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-center gap-6 overflow-x-auto px-6 md:justify-start">
        {CHANNELS.map((channel) => (
          <span
            key={channel}
            className={[
              "cursor-pointer whitespace-nowrap rounded px-3 py-1.5 transition-colors",
              channel === "CS HORROR"
                ? "border border-neutral-700 bg-neutral-800 text-white"
                : "hover:text-white",
            ].join(" ")}
          >
            {channel}
          </span>
        ))}
      </div>
    </div>
  );
}
