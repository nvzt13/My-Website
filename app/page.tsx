import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import WelcomeSection from "@/components/main/WelcomeSection";
import Progress from "@/components/main/Progress";
import Arrow from "@/components/sub/Arrow";


export default function Home() {

  return (
    <main className="mx-auto overflow-hidden ">
      <div className="flex flex-col">
        <WelcomeSection />
        <Skills />
        <Progress />
        <Projects />
        <Arrow />
      </div>
    </main>
  );
}
