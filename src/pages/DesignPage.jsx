import SeriesDetailsPageVariant from "./SeriesDetailsPageVariant";
import ContactPage from "./ContactPage";
import EpisodesToWatchPage from "./EpisodesToWatchPage";
import WatchHistoryPage from "./WatchHistoryPage";
import SerieSeasonSinglePage from "./SerieSeasonSinglePage";
import SerieSeasonsPage from "./SerieSeasonsPage";

export default function DesignPage() {
  return (
    <ul className="space-y-24 bg-dark">
      <li>
        <SeriesDetailsPageVariant />
      </li>

      <li>
        <EpisodesToWatchPage />
      </li>

      <li>
        <WatchHistoryPage />
      </li>

      <li>
        <SerieSeasonSinglePage />
      </li>

      <li>
        <ContactPage />
      </li>

      <li>
        <SerieSeasonsPage />
      </li>
    </ul>
  );
}
