import Intro from "@/app/components/Intro";
import AboutMe from "@/app/components/AboutMe";
import Iam from "@/app/components/Iam";
import p from "@/app/page.module.scss";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";

const page = () => {
  return (
    <main>
      <Intro />
      <div className={p.body__container}>
        <AboutMe />
        <Iam />
        <Skills />
        <Projects />
      </div>
    </main>
  );
};

export default page;
