import { useState } from "react";
import {
  ChevronLeft,
  UserPlus,
  UserCheck,
  UserX,
  Search,
  MoreHorizontal,
  Clock,
  Users,
  Check,
  X,
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

const TABS = [
  { key: "received", label: "Recues", count: 3 },
  { key: "sent", label: "Envoyees", count: 1 },
  { key: "suggestions", label: "Suggestions", count: 5 },
];

const REQUESTS_RECEIVED = [
  {
    id: 1,
    name: "Sarah Dupont",
    username: "sarah_series",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    mutualFriends: 12,
    message:
      "Salut ! J'ai vu que tu aimais aussi Stranger Things. Ca te dit qu'on compare nos seritheques ?",
    time: "Il y a 2 heures",
  },
  {
    id: 2,
    name: "Lucas Martin",
    username: "lucas_tv",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    mutualFriends: 8,
    message: "",
    time: "Il y a 5 heures",
  },
  {
    id: 3,
    name: "Emma Bernard",
    username: "emma_addict",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    mutualFriends: 23,
    message:
      "Tu as une excellente selection de series ! J'adorerais echanger avec toi.",
    time: "Hier",
  },
];

const REQUESTS_SENT = [
  {
    id: 4,
    name: "Thomas Petit",
    username: "thomas_s",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    status: "pending",
    time: "Il y a 1 jour",
  },
];

const SUGGESTIONS = [
  {
    id: 5,
    name: "Marie Dubois",
    username: "marie_d",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&q=80",
    mutualFriends: 15,
    compatibility: 87,
  },
  {
    id: 6,
    name: "Alexandre Leroy",
    username: "alex_l",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
    mutualFriends: 9,
    compatibility: 72,
  },
  {
    id: 7,
    name: "Camille Roux",
    username: "camille_r",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    mutualFriends: 6,
    compatibility: 91,
  },
  {
    id: 8,
    name: "Nicolas Moreau",
    username: "nico_m",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    mutualFriends: 4,
    compatibility: 68,
  },
  {
    id: 9,
    name: "Julie Lambert",
    username: "julie_l",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
    mutualFriends: 11,
    compatibility: 79,
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

function RequestCard({ request, type }) {
  return (
    <div className="group relative overflow-hidden rounded-[24px]">
      <GradientRing radiusClass="rounded-[24px]" thickness={1.5} hoverGlow />
      <div className="relative rounded-[24px] bg-brand-dark/55 p-5 backdrop-blur">
        <div className="flex items-start gap-4">
          <img
            src={request.avatar}
            alt={request.name}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-white">{request.name}</h3>
                <p className="text-sm text-white/60">@{request.username}</p>
              </div>
              <span className="text-xs text-white/40">{request.time}</span>
            </div>

            {type === "received" && (
              <>
                <div className="mt-2 flex items-center gap-2 text-xs text-white/50">
                  <Users className="h-3.5 w-3.5" />
                  {request.mutualFriends} amis en commun
                </div>
                {request.message && (
                  <p className="mt-3 rounded-lg bg-white/5 p-3 text-sm text-white/70">
                    "{request.message}"
                  </p>
                )}
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-full bg-white py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                    <span className="inline-flex items-center gap-1.5">
                      <UserCheck className="h-4 w-4" />
                      Accepter
                    </span>
                  </button>
                  <button className="flex-1 rounded-full border border-white/20 bg-transparent py-2.5 text-sm font-semibold text-white transition hover:bg-white/5">
                    <span className="inline-flex items-center gap-1.5">
                      <UserX className="h-4 w-4" />
                      Refuser
                    </span>
                  </button>
                </div>
              </>
            )}

            {type === "sent" && (
              <div className="mt-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/20 px-3 py-1.5 text-xs font-medium text-yellow-500">
                  <Clock className="h-3.5 w-3.5" />
                  En attente
                </span>
              </div>
            )}

            {type === "suggestion" && (
              <>
                <div className="mt-2 flex items-center gap-4 text-xs text-white/50">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {request.mutualFriends} amis en commun
                  </span>
                  <span className="inline-flex items-center gap-1 text-brand-cyan">
                    <Check className="h-3.5 w-3.5" />
                    {request.compatibility}% compatibilite
                  </span>
                </div>
                <div className="mt-4">
                  <button className="w-full rounded-full bg-white py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                    <span className="inline-flex items-center gap-1.5">
                      <UserPlus className="h-4 w-4" />
                      Ajouter
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FriendRequestPage() {
  const [activeTab, setActiveTab] = useState("received");

  const getRequests = () => {
    switch (activeTab) {
      case "received":
        return REQUESTS_RECEIVED;
      case "sent":
        return REQUESTS_SENT;
      case "suggestions":
        return SUGGESTIONS;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-[380px] w-[380px] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-cyan/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-2xl px-5 py-8">
        <div className="mb-8 flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white">
              Demandes d'amis
            </h1>
            <p className="text-sm text-white/60">
              Gerer vos demandes et suggestions
            </p>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="relative flex-1">
            <div className="relative rounded-full p-[1px]">
              <div
                className={`absolute inset-0 rounded-full ${ACCENT_GRADIENT} opacity-60`}
              />
              <div className="relative flex items-center gap-3 rounded-full bg-brand-dark/80 px-4 py-3 backdrop-blur">
                <Search className="h-4 w-4 text-brand-cyan" />
                <input
                  type="text"
                  placeholder="Rechercher un membre..."
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 flex border-b border-white/10">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={[
                "relative px-4 py-3 text-sm font-medium transition-colors",
                activeTab === tab.key
                  ? "text-white"
                  : "text-white/50 hover:text-white/80",
              ].join(" ")}
            >
              {tab.label}
              <span
                className={[
                  "ml-2 rounded-full px-2 py-0.5 text-xs",
                  activeTab === tab.key
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/60",
                ].join(" ")}
              >
                {tab.count}
              </span>
              {activeTab === tab.key && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${ACCENT_GRADIENT}`}
                />
              )}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {getRequests().map((request) => (
            <RequestCard key={request.id} request={request} type={activeTab} />
          ))}
        </div>

        {getRequests().length === 0 && (
          <div className="py-12 text-center">
            <p className="text-white/50">Aucune demande pour le moment</p>
          </div>
        )}
      </main>
    </div>
  );
}
