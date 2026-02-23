export const APP_ROUTES = [
  { key: 'home', path: '/home', label: 'Accueil' },
  { key: 'series-details', path: '/series-details', label: 'Serie Details' },
  { key: 'news', path: '/news', label: 'Actu List' },
  { key: 'series', path: '/series', label: 'Series List' },
  { key: 'search', path: '/search', label: 'Results Recherche' },
  { key: 'calendar', path: '/calendar', label: 'Calendrier Series' },
  { key: 'user-space', path: '/user-space', label: 'Espace Utilisateur' },
]

export const DEFAULT_ROUTE = '/home'

export function formatRoute(pathname) {
  const match = APP_ROUTES.find((item) => item.path === pathname)
  return match ? match.label : 'Page'
}
