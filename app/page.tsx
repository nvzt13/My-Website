import TestimonialsSections from "@/components/layout/TestimonialsSections";
import Skills from "@/components/layout/Services";
import WelcomeSection from "@/components/layout/WelcomeSection";
import Success from "@/components/layout/Success";
import Hizmetler from "@/components/Hizmetler";
import Gallery from "@/components/layout/Gallery";

export default function Home() {
  return (
    <main className="mx-auto overflow-hidden text-primary">
      <div className="flex flex-col">
        <WelcomeSection />
        <Skills />
        <TestimonialsSections />
        <Success />
        <Gallery />
      </div>
    </main>
  );
}
