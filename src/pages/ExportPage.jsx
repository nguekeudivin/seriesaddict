import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

import HomePage from "./HomePage";
import NewsListPage from "./NewsListPage";
import SeriesListPage from "./SeriesListPage";
import SearchResultsPage from "./SearchResultsPage";
import CalendarPage from "./CalendarPage";
import UserSpacePage from "./UserSpacePage";

function downloadDataUrl(dataUrl, filename) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

export default function ExportPage() {
  const captureRef = useRef(null);
  const [screen, setScreen] = useState("home");

  const exportSVG = async () => {
    if (!captureRef.current) return;

    // attendre les fonts (important)
    if (document.fonts?.ready) await document.fonts.ready;

    const dataUrl = await htmlToImage.toSvg(captureRef.current, {
      cacheBust: true,
      // backgroundColor: "#050814", // optionnel si tu veux forcer un fond
    });

    downloadDataUrl(dataUrl, `serieaddicted-${screen}.svg`);
  };

  const exportPNG = async () => {
    if (!captureRef.current) return;

    if (document.fonts?.ready) await document.fonts.ready;

    const dataUrl = await htmlToImage.toPng(captureRef.current, {
      cacheBust: true,
      pixelRatio: 2, // plus net
    });

    downloadDataUrl(dataUrl, `serieaddicted-${screen}@2x.png`);
  };

  const ScreenComponent = (() => {
    switch (screen) {
      case "home":
        return <HomePage />;
      case "news":
        return <NewsListPage />;
      case "series":
        return <SeriesListPage />;
      case "search":
        return <SearchResultsPage />;
      case "calendar":
        return <CalendarPage />;
      case "user-space":
        return <UserSpacePage />;
      default:
        return <HomePage />;
    }
  })();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Barre outils (non capturée) */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur px-4 py-3 flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-2">
          {[
            ["home", "Home"],
            ["news", "News list"],
            ["series", "Series list"],
            ["search", "Search results"],
            ["calendar", "Calendrier"],
            ["user-space", "User space"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setScreen(key)}
              className={`rounded-lg px-3 py-2 text-sm border border-white/10 ${
                screen === key ? "bg-white/15" : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="ml-auto flex gap-2">
          <button
            onClick={exportSVG}
            className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
          >
            Export SVG
          </button>
          <button
            onClick={exportPNG}
            className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
          >
            Export PNG (recommandé)
          </button>
        </div>
      </div>

      {/* Zone capturée */}
      <div className="p-6">
        <div
          ref={captureRef}
          id="figma-export"
          className="w-[1440px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950"
        >
          {ScreenComponent}
        </div>
      </div>
    </div>
  );
}
