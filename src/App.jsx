import { Navigate, Route, Routes } from "react-router-dom";
import { DEFAULT_ROUTE } from "./config/routes";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import NewsListPage from "./pages/NewsListPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SeriesListPage from "./pages/SeriesListPage";
import SeriesDetailsPage from "./pages/SeriesDetailsPage";
import SeriesDetailsPageVariant from "./pages/SeriesDetailsPageVariant";
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
import SerieSeasonSinglePage from "./pages/SerieSeasonSinglePage";
import SerieNewsPage from "./pages/SerieNewsPage";
import SerieCommunityPage from "./pages/SerieCommunityPage";
import SerieAvisPage from "./pages/SerieAvisPage";
import SerieTrailersPage from "./pages/SerieTrailersPage";
import SerieShopPage from "./pages/SerieShopPage";
import SerieWatchPage from "./pages/SerieWatchPage";
import AddUserSerithequePage from "./pages/AddUserSerithequePage";
import FriendRequestPage from "./pages/FriendRequestPage";
import TagsAndGenrePage from "./pages/TagsAndGenrePage";
import GenreDetailsPage from "./pages/GenreDetailsPage";
import TagDetailsPage from "./pages/TagDetailsPage";
import CoupsDeCoeurPage from "./pages/CoupsDeCoeurPage";
import DailyPage from "./pages/DailyPage";
import DailyArticleDetailsPage from "./pages/DailyArticleDetailsPage";
import UserCalendarPage from "./pages/UserCalendarPage";
import NewSeriesVariantA from "./pages/NewSeriesVariantA";
import PressePage from "./pages/PressePage";
import SimilarTastePage from "./pages/SimilarTastePage";
import MemberSerithequePage from "./pages/MemberSerithequePage";
import MemberListesPage from "./pages/MemberListesPage";
import MemberFriendsPage from "./pages/MemberFriendsPage";
import WatchHistoryPage from "./pages/WatchHistoryPage";
import NouvellesPage from "./pages/NouvellesPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import HelpPage from "./pages/HelpPage";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";
import PrivacyPage from "./pages/PrivacyPage";
import SingleEpisodePage from "./pages/SingleEpisodePage";
import SeriesHubPage from "./pages/SeriesHubPage";
import EpisodesToWatchPage from "./pages/EpisodesToWatchPage";
import WishlistPage from "./pages/WishlistPage";
import MovieDetail from "./pages/MovieDetails";
import ActorPage from "./pages/ActorPage";
import CsHorrorTemplate from "./pages/CsHorrorTemplate";
import ShogunDashboard from "./pages/ShogunDashboard";
import AvatarSeriesDetail from "./pages/SerieDetails/AvatarSerieDetails";
import JungleQueenDashboard from "./pages/SerieDetails/JungleQueenDashboard";
import TalePage from "./pages/SerieDetails/TalePage";

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
          <Route
            path="/series-details-variant"
            element={<SeriesDetailsPageVariant />}
          />

          <Route path="/series/seasons" element={<SerieSeasonsPage />} />
          <Route
            path="/series/season/:seasonNumber"
            element={<SerieSeasonSinglePage />}
          />
          <Route path="/series/news" element={<SerieNewsPage />} />
          <Route path="/series/community" element={<SerieCommunityPage />} />
          <Route path="/series/avis" element={<SerieAvisPage />} />
          <Route path="/series/trailers-page" element={<SerieTrailersPage />} />
          <Route path="/series/shop" element={<SerieShopPage />} />
          <Route path="/series/watch" element={<SerieWatchPage />} />
          <Route path="/series-hub" element={<SeriesHubPage />} />
          <Route path="/episode" element={<SingleEpisodePage />} />

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
          <Route path="/user/history" element={<WatchHistoryPage />} />
          <Route path="/my/calendar" element={<UserCalendarPage />} />
          <Route path="/user/amis" element={<MemberFriendsPage />} />
          <Route path="/my/watchlist" element={<WishlistPage />} />

          <Route path="/not-found" element={<NotFoundPage />} />

          <Route path="/design" element={<DesignPage />} />
          <Route path="/nouvelles" element={<NouvellesPage />} />

          <Route path="/tags" element={<TagsAndGenrePage />} />
          <Route path="/genre/:genreName" element={<GenreDetailsPage />} />
          <Route path="/tag/:tagName" element={<TagDetailsPage />} />
          <Route path="/coups-de-coeur" element={<CoupsDeCoeurPage />} />
          <Route path="/daily" element={<DailyPage />} />
          <Route path="/daily/article" element={<DailyArticleDetailsPage />} />
          <Route path="/nouveautes" element={<NewSeriesVariantA />} />
          <Route path="/presse" element={<PressePage />} />
          <Route path="/recommandations" element={<SimilarTastePage />} />
          <Route path="/episodes-a-voir" element={<EpisodesToWatchPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/aide" element={<HelpPage />} />
          <Route path="/cgu" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/donnees-personnelles" element={<PrivacyPage />} />

          <Route path="/movies-details" element={<MovieDetail />} />
          <Route path="/actor" element={<ActorPage />} />
          <Route path="/cs-horror-templates" element={<CsHorrorTemplate />} />
          <Route path="/shogun" element={<ShogunDashboard />} />
          <Route path="/avatar-details" element={<AvatarSeriesDetail />} />
          <Route path="/jungle-queen" element={<JungleQueenDashboard />} />
          <Route path="/tale" element={<TalePage />} />

          <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
