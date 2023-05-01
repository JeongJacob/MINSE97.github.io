import SkillCard from "./SkillCard";
import skills from "@/app/components/styles/Skills.module.scss";

const Skills = () => {
  return (
    <div className={skills.wrapper}>
      <h1>SKILLS</h1>
      <hr className={skills.underline} />
      <div className={skills.container}>
        <SkillCard
          title="Language"
          content={["HTML", "CSS", "JavaScript", "TypeScript"]}
        />
        <SkillCard
          title="FrameWork/Library"
          content={[
            "React.js",
            "Next.js",
            "Styled-Components",
            "SCSS",
            "Axios",
          ]}
        />
        <SkillCard title="Deploy" content={["Git", "AWS S3", "Vercel"]} />
      </div>
    </div>
  );
};
export default Skills;
