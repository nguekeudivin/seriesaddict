import { Navigate, Route, Routes } from "react-router-dom";
import { DEFAULT_ROUTE } from "./config/routes";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import NewsListPage from "./pages/NewsListPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SeriesListPage from "./pages/SeriesListPage";
import UserSpacePage from "./pages/UserSpacePage";
import TrailersPages from "./pages/TrailersPages";
import TrailerDetailsPage from "./pages/TrailerDetailsPage";
import CollectionsPage from "./pages/CollectionsPage";
import CollectionPage from "./pages/CollectionPage";
import ShopPage from "./pages/ShopPage";
import RegisterPage from "./pages/RegisterPage";
import MembersPage from "./pages/MembersPage";
import {
  CreateListPage,
  MemberFriendsPage,
  MemberListsPage,
  MemberSeriesLibraryPage,
} from "./pages/UserSpaceElements";
import DesignPage from "./pages/DesignPage";
import LoginPage from "./pages/LoginPage";
import PasswordForget from "./pages/PasswordForget";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlePage from "./pages/ArticlePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="min-h-screen  text-white">
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={DEFAULT_ROUTE} replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<NewsListPage />} />

          <Route path="/article" element={<ArticlePage />} />

          <Route path="/series" element={<SeriesListPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/user-space" element={<UserSpacePage />} />

          <Route path="/trailers" element={<TrailersPages />} />
          <Route path="/trailer" element={<TrailerDetailsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/password-forget" element={<PasswordForget />} />

          <Route path="/members" element={<MembersPage />} />
          <Route path="/user/friends" element={<MemberFriendsPage />} />
          <Route path="/user/series" element={<MemberSeriesLibraryPage />} />
          <Route path="/user/lists" element={<MemberListsPage />} />
          <Route path="/user/create-liste" element={<CreateListPage />} />

          <Route path="/not-found" element={<NotFoundPage />} />

          <Route path="/design" element={<DesignPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
