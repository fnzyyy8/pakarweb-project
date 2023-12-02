import HeroSection from "./Section/hero";
import ProfileSection from "./Section/profile";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <div className="px-9">
        <ProfileSection />
      </div>
    </main>
  );
}
