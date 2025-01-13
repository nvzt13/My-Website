import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Theme from "./Theme";
import Nav from "./Nav";

export default function Home() {

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Nav />
        <Skills />
        <Theme />
        <Projects />
      </div>
    </main>
  );
}
