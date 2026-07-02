import { Navigate, Route, Routes } from "react-router-dom";
import { DEFAULT_ROUTE } from "./config/routes";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import NewsListPage from "./pages/NewsListPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SeriesListPage from "./pages/SeriesListPage";
import SeriesDetailsPage from "./pages/SeriesDetailsPage";
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
  MemberFriendsPage as UserMemberFriendsPage,
  MemberListsPage,
  MemberSeriesLibraryPage,
} from "./pages/UserSpaceElements";
import DesignPage from "./pages/DesignPage";
import LoginPage from "./pages/LoginPage";
import PasswordForget from "./pages/PasswordForget";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlePage from "./pages/ArticlePage";

import SerieSeasonsPage from "./pages/SerieSeasonsPage";
import SerieNewsPage from "./pages/SerieNewsPage";
import SerieCommunityPage from "./pages/SerieCommunityPage";
import SerieAvisPage from "./pages/SerieAvisPage";
import SerieTrailersPage from "./pages/SerieTrailersPage";
import SerieShopPage from "./pages/SerieShopPage";
import AddUserSerithequePage from "./pages/AddUserSerithequePage";
import FriendRequestPage from "./pages/FriendRequestPage";
import TagsAndGenrePage from "./pages/TagsAndGenrePage";
import GenreDetailsPage from "./pages/GenreDetailsPage";
import TagDetailsPage from "./pages/TagDetailsPage";
import CoupsDeCoeurPage from "./pages/CoupsDeCoeurPage";
import DailyPage from "./pages/DailyPage";
import DailyArticleDetailsPage from "./pages/DailyArticleDetailsPage";
import NewSerieMonthlyPage from "./pages/NewSerieMonthlyPage";
import NewSeriesVariantA from "./pages/NewSeriesVariantA";
import NewSeriesVariantB from "./pages/NewSeriesVariantB";
import NewSeriesVariantC from "./pages/NewSeriesVariantC";
import PressePage from "./pages/PressePage";
import MemberSerithequePage from "./pages/MemberSerithequePage";
import MemberListesPage from "./pages/MemberListesPage";
import MemberFriendsPage from "./pages/MemberFriendsPage";
import NouvellesPage from "./pages/NouvellesPage";

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
          <Route path="/series-details" element={<SeriesDetailsPage />} />
          <Route path="/series/seasons" element={<SerieSeasonsPage />} />
          <Route path="/series/news" element={<SerieNewsPage />} />
          <Route path="/series/community" element={<SerieCommunityPage />} />
          <Route path="/series/avis" element={<SerieAvisPage />} />
          <Route path="/series/trailers-page" element={<SerieTrailersPage />} />
          <Route path="/series/shop" element={<SerieShopPage />} />

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
          <Route path="/user/friends" element={<UserMemberFriendsPage />} />
          <Route path="/user/series" element={<MemberSeriesLibraryPage />} />
          <Route path="/user/lists" element={<MemberListsPage />} />
          <Route path="/user/create-liste" element={<CreateListPage />} />
          <Route path="/user/add-serie" element={<AddUserSerithequePage />} />
          <Route path="/user/friend-requests" element={<FriendRequestPage />} />
          <Route path="/user/seritheque" element={<MemberSerithequePage />} />
          <Route path="/user/listes" element={<MemberListesPage />} />
          <Route path="/user/amis" element={<MemberFriendsPage />} />

          <Route path="/not-found" element={<NotFoundPage />} />

          <Route path="/design" element={<DesignPage />} />
          <Route path="/nouvelles" element={<NouvellesPage />} />

          <Route path="/tags" element={<TagsAndGenrePage />} />
          <Route path="/genre/:genreName" element={<GenreDetailsPage />} />
          <Route path="/tag/:tagName" element={<TagDetailsPage />} />
          <Route path="/coups-de-coeur" element={<CoupsDeCoeurPage />} />
          <Route path="/daily" element={<DailyPage />} />
          <Route path="/daily/article" element={<DailyArticleDetailsPage />} />
          <Route path="/nouveautes" element={<NewSerieMonthlyPage />} />
          <Route path="/nouveautes/a" element={<NewSeriesVariantA />} />
          <Route path="/nouveautes/b" element={<NewSeriesVariantB />} />
          <Route path="/nouveautes/c" element={<NewSeriesVariantC />} />
          <Route path="/presse" element={<PressePage />} />

          <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
