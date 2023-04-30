import Intro from "@/app/components/Intro";
import AboutMe from "@/app/components/AboutMe";
import Iam from "./components/Iam";
import p from "@/app/page.module.scss";

const page = () => {
  return (
    <main>
      <Intro />
      <div className={p.body__container}>
        <AboutMe />
        <Iam />
      </div>
    </main>
  );
};

export default page;
