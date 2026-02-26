import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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

  return (
    <div className="min-h-screen  text-white">
      <main>
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
    </div>
  );
}

export default App;
