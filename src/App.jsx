import { Navigate, Route, Routes } from "react-router-dom";
import { DEFAULT_ROUTE } from "./config/routes";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import NewsListPage from "./pages/NewsListPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SeriesListPage from "./pages/SeriesListPage";
import UserSpacePage from "./pages/UserSpacePage";
import "@fontsource/anton";

function App() {
  return (
    <div className="min-h-screen  text-white">
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={DEFAULT_ROUTE} replace />} />
          <Route path="/home" element={<HomePage />} />
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
