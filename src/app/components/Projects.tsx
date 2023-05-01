import Image from "next/image";
import projects from "@/app/components/styles/Projects.module.scss";

const Projects = () => {
  return (
    <div className={projects.wrapper}>
      <h1>Projects</h1>
      <div className={projects.container}>
        <div className={projects.content__wrapper}>
          <div className={projects.logo__container}>
            <Image
              src={"/pikcha.svg"}
              alt="프로젝트"
              width={200}
              height={200}
            />
          </div>
          <div className={projects.content__container}>
            <div className={projects.content__skills__container}>
              <span className={projects.content__skill__react}>React.js</span>
              <span className={projects.content__skill__ts}>Typescript</span>
              <span className={projects.content__skill__recoil}>Recoil</span>
              <span className={projects.content__skill__styled}>
                Styled-Comoponets
              </span>
              <span className={projects.content__skill__axios}>Axios</span>
            </div>
            <div className={projects.content__link__container}>
              <Image src={"/github.png"} alt="github" width={30} height={30} />
              <Image src={"/link.svg"} alt="link" width={30} height={30} />
            </div>
            <div className={projects.content__admin__container}>
              <p>테스트용 계정</p>
              <p>admin@gmail.com</p>
              <p>@seb!main36</p>
            </div>
          </div>
        </div>
        <div className={projects.content__wrapper}>
          <div className={projects.logo__container}>
            <Image
              src={"/nerdnest.png"}
              alt="프로젝트"
              width={200}
              height={150}
            />
          </div>
          <div className={projects.content__container}>
            <div className={projects.content__skills__container}>
              <span className={projects.content__skill__react}>React.js</span>
              <span className={projects.content__skill__ts}>Typescript</span>
              <span className={projects.content__skill__recoil}>
                Toas UI Viewer
              </span>
              <span className={projects.content__skill__styled}>
                Styled-Comoponets
              </span>
              <span className={projects.content__skill__axios}>Axios</span>
            </div>
            <div className={projects.content__link__container}>
              <Image src={"/github.png"} alt="github" width={30} height={30} />
              <Image src={"/link.svg"} alt="link" width={30} height={30} />
            </div>
            <div className={projects.content__admin__container}>
              <p>테스트용 계정</p>
              <p>admin@gmail.com</p>
              <p>@seb!main36</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
