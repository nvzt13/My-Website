import About from "@/components/layout/About";
import BlogSection from "@/components/layout/Blogs";
import Form from "@/components/layout/Form";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import WelcomeSection from "@/components/layout/WelcomeSection";

export default function Home() {
  return (
    <main className="mx-auto overflow-hidden my-12 ">
      <div className="flex flex-col">
        <WelcomeSection />
        <Services />
        <About />
        <BlogSection />
        <Projects />
        <Form />

      </div>
    </main>
  );
}
