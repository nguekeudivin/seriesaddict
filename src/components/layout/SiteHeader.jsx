import { NavLink, useNavigate } from 'react-router-dom'
import { APP_ROUTES, DEFAULT_ROUTE } from '../../config/routes'

function SiteHeader({ currentPath }) {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-4 px-4 py-3 md:px-6">
        <NavLink to={DEFAULT_ROUTE} className="text-sm font-semibold tracking-[0.25em] text-white">
          SERIEADDICT
        </NavLink>
        <nav className="hidden flex-1 flex-wrap items-center gap-2 lg:flex">
          {APP_ROUTES.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) => `rounded-full px-3 py-1 text-xs uppercase tracking-[0.16em] ${
                isActive
                  ? 'bg-[#841D4F] text-white'
                  : 'border border-white/15 text-white/75 hover:text-white'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/search"
          className="rounded-full border border-[#1E6C86]/40 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#1E6C86]"
        >
          Search
        </NavLink>
      </div>
      <div className="mx-auto w-full max-w-[1200px] px-4 pb-3 lg:hidden md:px-6">
        <select
          value={currentPath}
          onChange={(event) => navigate(event.target.value)}
          className="w-full rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm text-white outline-none"
        >
          {APP_ROUTES.map((item) => (
            <option key={item.key} value={item.path}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}

export default SiteHeader
