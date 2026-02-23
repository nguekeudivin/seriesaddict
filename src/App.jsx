import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import { DEFAULT_ROUTE, formatRoute } from "./config/routes";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import NewsListPage from "./pages/NewsListPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SeriesDetailsPage from "./pages/SeriesDetailsPage";
import SeriesListPage from "./pages/SeriesListPage";
import UserSpacePage from "./pages/UserSpacePage";
import "@fontsource/anton";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHomeRoute = currentPath === "/home" || currentPath === "/";

  return (
    <div className="min-h-screen bg-[#011921] text-white">
      {!isHomeRoute ? <SiteHeader currentPath={currentPath} /> : null}

      <main
        className={
          isHomeRoute
            ? "w-full py-0"
            : "mx-auto w-full max-w-[1200px] px-4 py-6 md:px-6 md:py-8"
        }
      >
        {!isHomeRoute ? (
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#1E6C86]/85">
            Prototype validation client • {formatRoute(currentPath)}
          </p>
        ) : null}
        <Routes>
          <Route path="/" element={<Navigate to={DEFAULT_ROUTE} replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/series-details" element={<SeriesDetailsPage />} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/series" element={<SeriesListPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/user-space" element={<UserSpacePage />} />
          <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
        </Routes>
      </main>

      {!isHomeRoute ? <SiteFooter /> : null}
    </div>
  );
}

export default App;
