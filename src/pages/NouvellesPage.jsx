import SerieSeasonsPage from "./SerieSeasonsPage";
import SerieNewsPage from "./SerieNewsPage";
import SerieCommunityPage from "./SerieCommunityPage";
import SerieAvisPage from "./SerieAvisPage";
import SerieTrailersPage from "./SerieTrailersPage";
import SerieShopPage from "./SerieShopPage";
import AddUserSerithequePage from "./AddUserSerithequePage";
import FriendRequestPage from "./FriendRequestPage";
import TagsAndGenrePage from "./TagsAndGenrePage";
import CoupsDeCoeurPage from "./CoupsDeCoeurPage";
import DailyPage from "./DailyPage";
import DailyArticleDetailsPage from "./DailyArticleDetailsPage";
import NewSerieMonthlyPage from "./NewSerieMonthlyPage";
import PressePage from "./PressePage";
import MemberSerithequePage from "./MemberSerithequePage";
import MemberListesPage from "./MemberListesPage";
import MemberFriendsPage from "./MemberFriendsPage";

export default function NouvellesPage() {
  return (
    <ul className="space-y-8">
      <li>
        <SerieSeasonsPage />
      </li>

      <li>
        <SerieNewsPage />
      </li>

      <li>
        <SerieCommunityPage />
      </li>

      <li>
        <SerieAvisPage />
      </li>

      <li>
        <SerieTrailersPage />
      </li>

      <li>
        <SerieShopPage />
      </li>

      <li>
        <AddUserSerithequePage />
      </li>

      <li>
        <FriendRequestPage />
      </li>

      <li>
        <TagsAndGenrePage />
      </li>

      <li>
        <CoupsDeCoeurPage />
      </li>

      <li>
        <DailyPage />
      </li>

      <li>
        <DailyArticleDetailsPage />
      </li>

      <li>
        <NewSerieMonthlyPage />
      </li>

      <li>
        <PressePage />
      </li>

      <li>
        <MemberSerithequePage />
      </li>

      <li>
        <MemberListesPage />
      </li>

      <li>
        <MemberFriendsPage />
      </li>
    </ul>
  );
}
