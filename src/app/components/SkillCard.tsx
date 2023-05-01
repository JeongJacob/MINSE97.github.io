"use client";
import sc from "@/app/components/styles/SkillCard.module.scss";
import { useState } from "react";

interface SkillProps {
  title: string;
  content: string[];
}

const SkillCard = (props: SkillProps) => {
  const { title, content } = props;
  const [onTab, setOnTab] = useState(false);
  return (
    <div
      className={onTab ? sc.wrapper__active : sc.wrapper}
      onClick={() => setOnTab(!onTab)}
    >
      <div className={onTab ? sc.container__active : sc.container}>
        <div
          className={
            title === "Language"
              ? sc.language
              : title === "FrameWork"
              ? sc.framework
              : sc.deploy
          }
        >
          <p>{title}</p>
        </div>
        <div
          className={
            title === "Language"
              ? sc.content__language
              : title === "FrameWork"
              ? sc.content__framework
              : sc.content__deploy
          }
        >
          {content.map((content, idx) => (
            <p key={idx}>{content}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
