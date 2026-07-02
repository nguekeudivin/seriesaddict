import EditorialNav from "../components/EditorialNav";
import Hero from "../components/Hero";
import TrendingToday from "../components/TrendingToday";
import NewReleases from "../components/NewReleases";
import ReleaseCalendar from "../components/ReleaseCalendar";
import EditorialNews from "../components/EditorialNews";
import StreamingSection from "../components/StreamingSection";
import CommunitySection from "../components/CommunitySection";
import CollectionsSection from "../components/CollectionsSection";
import Newsletter from "../components/Newsletter";
import RichFooter from "../components/RichFooter";

export default function HomePage6() {
  return (
    <div className="min-h-screen bg-black text-white">
      <EditorialNav />
      <Hero />
      <TrendingToday />
      <div className="mx-auto max-w-7xl px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      </div>
      <NewReleases />
      <div className="mx-auto max-w-7xl px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
      </div>
      <ReleaseCalendar />
      <div className="mx-auto max-w-7xl px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      </div>
      <EditorialNews />
      <div className="mx-auto max-w-7xl px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
      </div>
      <StreamingSection />
      <div className="mx-auto max-w-7xl px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      </div>
      <CommunitySection />
      <div className="mx-auto max-w-7xl px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
      </div>
      <CollectionsSection />
      <Newsletter />
      <RichFooter />
    </div>
  );
}
