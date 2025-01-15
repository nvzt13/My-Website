import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import WelcomeSection from "@/components/main/WelcomeSection";
import Theme from "@/components/main/Theme";
import Download from "@/components/main/Download";
import SimpleSlider from './SimpleSlider'
export default function Home() {

  return (
    <main className=" h-full w-full max-w-[768px] mx-auto overflow-hidden ">
      <div className="flex flex-col">
        <WelcomeSection />
        <Skills />
        <Download />
        <SimpleSlider />
      </div>
    </main>
  );
}
