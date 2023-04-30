import sc from "@/app/components/styles/SkillCard.module.scss";

interface SkillProps {
  title: string;
  content: string;
}

const SkillCard = (props: SkillProps) => {
  return (
    <div className={sc.container}>
      <p className={sc.title}>{props.title}</p>
      <p className={sc.content}>{props.content}</p>
    </div>
  );
};

export default SkillCard;
