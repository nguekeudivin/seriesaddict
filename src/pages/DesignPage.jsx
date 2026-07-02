import HomePage from "./HomePage";
import GenreDetailsPage from "./GenreDetailsPage";
import TagDetailsPage from "./TagDetailsPage";
import NewSeriesVariantA from "./NewSeriesVariantA";

export default function DesignPage() {
  return (
    <ul className="space-y-16 bg-dark">
      <li>
        <HomePage />
      </li>
      <li>
        <NewSeriesVariantA />
      </li>
      <li>
        <GenreDetailsPage />
      </li>
      <li>
        <TagDetailsPage />
      </li>
    </ul>
  );
}
