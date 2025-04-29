import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Services";
import WelcomeSection from "@/components/main/WelcomeSection";
import Progress from "@/components/main/Portfolio";
import About from "@/components/main/About";
import BlogSection from "@/components/main/Blogs";
import Form from "@/components/main/Form";

export default function Home() {

  return (
    <main className="mx-auto overflow-hidden ">
      <div className="flex flex-col">
        <WelcomeSection />
        <Skills />
        <Progress />
        <About />
        <BlogSection />
        <Form />
        <Projects />
      </div>
    </main>
  );
}
