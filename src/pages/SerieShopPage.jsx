import { useState } from "react";
import {
  ChevronLeft,
  ShoppingCart,
  Heart,
  Bookmark,
  Search,
  Filter,
  Star,
  ChevronRight,
} from "lucide-react";

const BRAND = {
  primary: "#841D4F",
  cyan: "#1E6C86",
  wine: "#3C0A22",
  dark: "#011921",
};

const GRADIENT = `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan})`;
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-brand-primary via-brand-wine to-brand-cyan";

const SERIES = {
  title: "STRANGER THINGS",
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
};

const CATEGORIES = [
  { key: "all", label: "Tout" },
  { key: "clothing", label: "Vetements" },
  { key: "accessories", label: "Accessoires" },
  { key: "collectibles", label: "Figurines" },
  { key: "home", label: "Maison" },
  { key: "posters", label: "Posters" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "T-shirt Logo Vintage",
    universe: "STRANGER THINGS",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    badge: "-25%",
  },
  {
    id: 2,
    name: "Figurine Eleven",
    universe: "STRANGER THINGS",
    price: 49.99,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    badge: "Nouveau",
  },
  {
    id: 3,
    name: "Casquette Hawkins",
    universe: "STRANGER THINGS",
    price: 24.99,
    rating: 4.6,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
    badge: null,
  },
  {
    id: 4,
    name: "Mug The Upside Down",
    universe: "STRANGER THINGS",
    price: 14.99,
    rating: 4.7,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80",
    badge: "Bestseller",
  },
  {
    id: 5,
    name: "Poster Saison 4",
    universe: "STRANGER THINGS",
    price: 19.99,
    rating: 4.5,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?auto=format&fit=crop&w=600&q=80",
    badge: null,
  },
  {
    id: 6,
    name: "Sac en toile Hellfire Club",
    universe: "STRANGER THINGS",
    price: 34.99,
    rating: 4.8,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    badge: "Edition limitee",
  },
];

function GradientRing({
  radiusClass = "rounded-2xl",
  thickness = 2,
  glow = false,
  hoverGlow = false,
  className = "",
}) {
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0",
        radiusClass,
        glow ? "blur-md" : "",
        hoverGlow
          ? "opacity-0 transition-opacity duration-300 group-hover:opacity-70"
          : "",
        className,
      ].join(" ")}
      style={{
        background: GRADIENT,
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: `${thickness}px`,
      }}
    />
  );
}

function SectionHeader({ title, rightLabel, onRightClick }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-[2px] rounded-full ${ACCENT_GRADIENT}`} />
        <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
          {title}
        </h2>
      </div>
      {rightLabel ? (
        <button
          onClick={onRightClick}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white"
        >
          {rightLabel}
          <ChevronRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        </button>
      ) : null}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 backdrop-blur">
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[24px]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          {product.badge && (
            <div className="absolute left-3 top-3">
              <span className="rounded-full bg-brand-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                {product.badge}
              </span>
            </div>
          )}
          <div className="absolute right-3 top-3 flex gap-2">
            <button className="grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white/80 backdrop-blur transition hover:text-brand-primary">
              <Heart className="h-4 w-4" />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white/80 backdrop-blur transition hover:text-brand-cyan">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-cyan">
            {product.universe}
          </p>
          <h3 className="mt-1 text-sm font-bold text-white">{product.name}</h3>
          <div className="mt-2 flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary" />
            <span className="text-xs font-medium text-white">
              {product.rating}
            </span>
            <span className="text-xs text-white/40">({product.reviews})</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">
                {product.price.toFixed(2)} €
              </span>
              {product.originalPrice && (
                <span className="text-sm text-white/40 line-through">
                  {product.originalPrice.toFixed(2)} €
                </span>
              )}
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition hover:scale-105">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SerieShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Boutique
              </p>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
                {SERIES.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
              <ShoppingCart className="h-4 w-4" />
              Panier (0)
            </button>
          </div>
        </div>

        <div className="group relative mb-8 overflow-hidden rounded-[32px]">
          <GradientRing radiusClass="rounded-[32px]" thickness={2} glow />
          <div className="relative rounded-[32px] bg-gradient-to-r from-brand-wine/80 to-brand-primary/60 p-8 backdrop-blur lg:p-12">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Nouvelle collection
                </span>
                <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-wide text-white lg:text-3xl">
                  Edition exclusive Saison 5
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Decouvrez nos produits dedies a la saison finale. Quantites
                  limitees disponibles.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                  Decouvrir la collection
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl lg:h-48 lg:w-48">
                <img
                  src={SERIES.poster}
                  alt={SERIES.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={[
                "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
                activeCategory === cat.key
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <div className="relative rounded-full p-[1px]">
              <div
                className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60`}
              />
              <div className="relative flex items-center gap-3 rounded-full bg-brand-dark/80 px-4 py-2.5 backdrop-blur">
                <Search className="h-4 w-4 text-brand-cyan" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10">
            <Filter className="h-4 w-4" />
            Filtres
          </button>
        </div>

        <SectionHeader title="Produits populaires" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Voir plus de produits
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
