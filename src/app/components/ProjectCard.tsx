import pc from "@/app/components/styles/ProjectCard.module.scss";
import Image from "next/image";
import { projectProps } from "./Projects";
import Link from "next/link";

const ProjectCard = ({ project }: { project: projectProps }) => {
  return (
    <div className={pc.content__wrapper}>
      <div className={pc.logo__container}>
        <Image
          src={`/${project.name}.png`}
          alt="프로젝트"
          width={project.name === "nerdnest" ? 200 : 300}
          height={200}
        />
      </div>
      <div className={pc.content__container}>
        <div className={pc.content__skills__container}>
          {project.skills.map((skill, idx) => (
            <span key={idx} className={pc.content__skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className={pc.content__link__container}>
          <Link href={project.github} target="blink">
            <Image src={"/github.png"} alt="github" width={30} height={30} />
          </Link>
          <Link href={project.link} target="blink">
            <Image src={"/link.svg"} alt="link" width={30} height={30} />
          </Link>
        </div>
        {project.adminID && (
          <div className={pc.content__admin__container}>
            <p>테스트용 계정</p>
            <p>{project.adminID}</p>
            <p>{project.adminPW}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
