export const APP_ROUTES = [
  { key: "home", path: "/home", label: "Accueil" },
  { key: "series-details", path: "/series-details", label: "Serie Details" },
  { key: "episode", path: "/episode", label: "Episode Seul" },
  { key: "news", path: "/news", label: "Actu List" },
  { key: "series", path: "/series", label: "Series List" },
  { key: "search", path: "/search", label: "Results Recherche" },
  { key: "calendar", path: "/calendar", label: "Calendrier Series" },
  { key: "my-calendar", path: "/my/calendar", label: "Mon Calendrier" },
  { key: "user-space", path: "/user-space", label: "Espace Utilisateur" },
  { key: "series-watch", path: "/series/watch", label: "Regarder la serie" },
  { key: "series-hub", path: "/series-hub", label: "Hub Serie" },
  {
    key: "recommandations",
    path: "/recommandations",
    label: "Recommandations",
  },
  { key: "contact", path: "/contact", label: "Contact" },
  { key: "team", path: "/equipe", label: "Équipe" },
  { key: "help", path: "/aide", label: "Aide" },
  { key: "terms", path: "/cgu", label: "CGU" },
  { key: "cookies", path: "/cookies", label: "Cookies" },
  {
    key: "privacy",
    path: "/donnees-personnelles",
    label: "Données personnelles",
  },
];

export const DEFAULT_ROUTE = "/home";

export function formatRoute(pathname) {
  const match = APP_ROUTES.find((item) => item.path === pathname);
  return match ? match.label : "Page";
}
