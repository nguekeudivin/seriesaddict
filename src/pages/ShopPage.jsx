import React from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Bookmark,
  SlidersHorizontal,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = "linear-gradient(90deg, #841D4F 0%, #1E6C86 100%)";
const BRAND_GRADIENT_TEXT =
  "bg-gradient-to-r from-[#841D4F] to-[#1E6C86] bg-clip-text text-transparent";

const heroShop = {
  eyebrow: "BOUTIQUE SÉRIE",
  title: "Shop Série",
  subtitle:
    "Objets collectors, livres et accessoires inspirés de vos univers préférés.",
  stats: ["240 articles", "18 univers", "Nouveautés chaque semaine"],
  backdrop:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=80",
};

const filters = [
  "Populaire",
  "Collectors",
  "Livres",
  "Accessoires",
  "Éditions limitées",
];

const shopProducts = [
  {
    id: 1,
    title: "Dés Game of Thrones",
    universe: "Game of Thrones",
    price: "29,90 €",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    badge: "Collector",
  },
  {
    id: 2,
    title: "Mug TARDIS",
    universe: "Doctor Who",
    price: "19,90 €",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
    badge: "Best seller",
  },
  {
    id: 3,
    title: "Lucille Replica",
    universe: "The Walking Dead",
    price: "149,90 €",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=80",
    badge: "Édition limitée",
  },
  {
    id: 4,
    title: "Dark Matter",
    universe: "Roman",
    price: "14,90 €",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    badge: "Lecture SF",
  },
  {
    id: 5,
    title: "The Handmaid’s Tale",
    universe: "Livre",
    price: "16,90 €",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80",
    badge: "Roman culte",
  },
  {
    id: 6,
    title: "Sweet Tooth Tome 1",
    universe: "Comics",
    price: "18,50 €",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?auto=format&fit=crop&w=900&q=80",
    badge: "BD",
  },
];

function GradientBorder({ radius = "28px" }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        borderRadius: radius,
        padding: "1.2px",
        background: GRADIENT,
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/[0.06]">
          Menu
        </button>

        <div className="text-center text-xl font-black tracking-[0.2em]">
          <span className="text-white">SERIE</span>
          <span className={BRAND_GRADIENT_TEXT}>ADDICT</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:bg-white/[0.06] hover:text-white">
            <Search className="h-4 w-4" />
          </button>

          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroShop.backdrop})` }}
      />
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,29,79,.18),transparent_35%),radial-gradient(circle_at_right,rgba(30,108,134,.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-14 md:pb-16">
        <div className="max-w-3xl">
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
            {heroShop.eyebrow}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold uppercase tracking-wide text-white md:text-6xl">
            {heroShop.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
            {heroShop.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-white/60">
            {heroShop.stats.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="relative z-10 mt-10">
            <div className="relative overflow-hidden rounded-[28px] bg-[#011921]/55 p-3 backdrop-blur-xl">
              <GradientBorder radius="28px" />

              <div className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-black/30 px-4 py-3 ring-1 ring-white/8">
                  <Search className="h-4 w-4 shrink-0 text-white/45" />
                  <input
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                    placeholder="Rechercher un article, un univers, une licence..."
                  />
                  <button className="hidden rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-black md:block">
                    Rechercher
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {filters.map((item, index) => (
                    <button
                      key={item}
                      className={[
                        "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300",
                        index === 0
                          ? "bg-white text-black"
                          : "bg-white/[0.04] text-white/75 ring-1 ring-white/10 hover:bg-white/[0.07] hover:text-white",
                      ].join(" ")}
                    >
                      {item}
                    </button>
                  ))}

                  <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-wide text-white/75 transition hover:bg-white/[0.08] hover:text-white">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filtres
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
          Catalogue
        </p>
        <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-wide text-white">
          Produits à découvrir
        </h2>
      </div>

      <button className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-white">
        Voir tout
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <button className="group relative overflow-hidden rounded-[28px] text-left">
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.05]"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_bottom,rgba(132,29,79,.18),transparent_45%),radial-gradient(circle_at_right,rgba(30,108,134,.16),transparent_40%)]" />

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
          {item.badge}
        </span>
      </div>

      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
        {item.rating} ★
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
          {item.universe}
        </p>

        <h3 className="mt-2 text-lg font-extrabold uppercase tracking-wide text-white">
          {item.title}
        </h3>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white/85">{item.price}</p>

          <div className="flex items-center gap-2">
            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/85 ring-1 ring-white/15 transition hover:bg-white/[0.14]">
              <Heart className="h-4 w-4" />
            </button>

            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/85 ring-1 ring-white/15 transition hover:bg-white/[0.14]">
              <Bookmark className="h-4 w-4" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:scale-[1.02]">
              <ShoppingBag className="h-3.5 w-3.5" />
              Acheter
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
      <div className="h-[360px] w-full" />
    </button>
  );
}

function ProductsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:py-12">
      <SectionHeader />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {shopProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function PromoBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-14">
      <div className="relative overflow-hidden rounded-[30px] bg-white/[0.03] p-6 ring-1 ring-white/8 md:p-8">
        <GradientBorder radius="30px" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(132,29,79,.14),transparent_35%),radial-gradient(circle_at_right,rgba(30,108,134,.14),transparent_30%)]" />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              Offre membre
            </p>
            <h3 className="mt-2 text-2xl font-extrabold uppercase tracking-wide text-white">
              Accès prioritaire aux éditions collectors
            </h3>
            <p className="mt-3 text-sm text-white/72">
              Alertes nouveautés, sélections premium et avantages réservés aux
              membres les plus engagés.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.02]">
            Découvrir
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
        <div>
          <div className="text-2xl font-black tracking-[0.16em]">
            <span className="text-white">SERIE</span>
            <span className={BRAND_GRADIENT_TEXT}>ADDICT</span>
          </div>
          <p className="mt-2 text-sm text-white/50">
            Boutique dédiée aux univers de séries.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/55">
          <button className="transition hover:text-white">Nouveautés</button>
          <button className="transition hover:text-white">Collectors</button>
          <button className="transition hover:text-white">Livres</button>
          <button className="transition hover:text-white">Accessoires</button>
        </div>
      </div>
    </footer>
  );
}

export default function ShopSeriesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ProductsSection />
      <PromoBand />
    </div>
  );
}
