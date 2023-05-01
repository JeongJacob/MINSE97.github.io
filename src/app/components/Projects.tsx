import Image from "next/image";
import projects from "@/app/components/styles/Projects.module.scss";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={projects.wrapper}>
      <h1>Projects</h1>
      <div className={projects.container}>
        <Link href={"/project/pikcha"}>
          <div className={projects.logo__wrapper}>
            <div className={projects.logo__container}>
              <Image
                src={"/pikcha.svg"}
                alt="프로젝트"
                width={200}
                height={200}
              />
            </div>
          </div>
        </Link>
        <Link href={"/project/nerdnest"}>
          <div className={projects.logo__wrapper}>
            <div className={projects.logo__container}>
              <Image
                src={"/nerdnest.png"}
                alt="프로젝트"
                width={200}
                height={150}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
