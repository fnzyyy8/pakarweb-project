import HeroSection from "./Section/hero";
import ProfileSection from "./Section/profile";
import ServiceSection from "./Section/service";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <div className="px-9">
        <ProfileSection />
        <ServiceSection />
      </div>
    </main>
  );
}
