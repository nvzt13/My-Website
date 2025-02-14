import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import WelcomeSection from "@/components/main/WelcomeSection";
import Progress from "@/components/main/Progress";

export default function Home() {
  return (
    <main className="mx-auto my-12 overflow-hidden text-primary opacity-90">
      <div className="flex flex-col">
        <WelcomeSection />
        <Skills />
        <Progress />
        <Projects />
      </div>
    </main>
  );
}
