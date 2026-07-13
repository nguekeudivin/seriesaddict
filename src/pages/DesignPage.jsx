import HomePage from "./HomePage";
import NewSeriesVariantA from "./NewSeriesVariantA";
import GenreDetailsPage from "./GenreDetailsPage";
import TagDetailsPage from "./TagDetailsPage";
import CalendarPage from "./CalendarPage";
import SerieSeasonsPage from "./SerieSeasonsPage";
import SeriesDetailsPageVariant from "./SeriesDetailsPageVariant";
import SerieSeasonSinglePage from "./SerieSeasonSinglePage";
import SingleEpisodePage from "./SingleEpisodePage";
import SerieWatchPage from "./SerieWatchPage";
import SimilarTastePage from "./SimilarTastePage";
import EpisodesToWatchPageVariantC from "./EpisodesToWatchPageVariantC";
import WishlistPage from "./WishlistPage";
import UserCalendarPage from "./UserCalendarPage";
import WatchHistoryPage from "./WatchHistoryPage";
import WatchHistoryPageB from "./WatchHistoryPageB";
import ContactPage from "./ContactPage";
import CookiesPage from "./CookiesPage";
import HelpPage from "./HelpPage";
import PrivacyPage from "./PrivacyPage";
import TeamPage from "./TeamPage";
import TermsPage from "./TermsPage";

export default function DesignPage() {
  return (
    <ul className="space-y-24 bg-dark">
      <li>
        <CalendarPage />
      </li>
      <li>
        <SerieSeasonsPage />
      </li>
      <li>
        <SeriesDetailsPageVariant />
      </li>
      <li>
        <SerieSeasonSinglePage />
      </li>
      <li>
        <SingleEpisodePage />
      </li>
      <li>
        <SerieWatchPage />
      </li>
      <li>
        <SimilarTastePage />
      </li>
      <li>
        <EpisodesToWatchPageVariantC />
      </li>
      <li>
        <WishlistPage />
      </li>
      <li>
        <UserCalendarPage />
      </li>
      <li>
        <WatchHistoryPage />
      </li>
      <li>
        <WatchHistoryPageB />
      </li>
      <li>
        <ContactPage />
      </li>
      <li>
        <CookiesPage />
      </li>
      <li>
        <HelpPage />
      </li>
      <li>
        <PrivacyPage />
      </li>
      <li>
        <TeamPage />
      </li>
      <li>
        <TermsPage />
      </li>
    </ul>
  );
}
