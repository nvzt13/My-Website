import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import WelcomeSection from "@/components/main/WelcomeSection";
import Theme from "@/components/main/Theme";
import Progress from "@/components/main/Progress";



export default function Home() {

  return (
    <main className=" h-full max-w-[768px] mx-auto overflow-hidden ">
      <div className="flex flex-col">
        <WelcomeSection />
        <Skills />
        <Progress />
        <Projects />
        <Theme />
      </div>
    </main>
  );
}
