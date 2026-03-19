import CollectionsPage from "./CollectionsPage";
import CollectionPage from "./CollectionPage";
import TrailerDetailsPage from "./TrailerDetailsPage";
import TrailersPage from "./TrailersPages";
import MembersPage from "./MembersPage";
import ShopPage from "./ShopPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./PasswordForget";
import {
  CreateListPage,
  MemberFriendsPage,
  MemberListsPage,
  MemberSeriesLibraryPage,
} from "./UserSpaceElements";
import NotFoundPage from "./NotFoundPage";
import ArticlePage from "./ArticlePage";

export default function DesignPage() {
  return (
    <ul className="space-y-8">
      <li>
        <ArticlePage />
      </li>
      <li>
        <TrailersPage />
      </li>
      <li>
        <TrailerDetailsPage />
      </li>
      <li>
        <CollectionsPage />
      </li>

      <li>
        <CollectionPage />
      </li>

      <li>
        <MembersPage />
      </li>

      <li>
        <ShopPage />
      </li>

      <li>
        <LoginPage />
      </li>

      <li>
        <RegisterPage />
      </li>

      <li>
        <NotFoundPage />
      </li>

      <li>
        <ForgotPasswordPage />
      </li>

      <li>
        <MemberFriendsPage />
      </li>

      <li>
        <MemberSeriesLibraryPage />
      </li>

      <li>
        <MemberListsPage />
      </li>

      <li>
        <CreateListPage />
      </li>
    </ul>
  );
}
