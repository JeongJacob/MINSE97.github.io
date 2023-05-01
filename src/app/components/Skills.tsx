import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div>
      <h2>SKILLS</h2>
      <div>
        <SkillCard
          title="Language"
          content={["HTML", "CSS", "JavaScript", "TypeScript"]}
        />
        <SkillCard
          title="FrameWork"
          content={[
            "React.js",
            "Next.js",
            "Styled-Components",
            "SCSS",
            "Redux",
            "Recoil",
            "Axios",
          ]}
        />
        <SkillCard title="Deploy" content={["Git", "AWS S3", "Vercel"]} />
      </div>
    </div>
  );
};
export default Skills;
