"use client";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import iam from "@/app/components/styles/Iam.module.scss";

const Iam = () => {
  const [onScroll, setOnScroll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOnScroll(true);
        }
      },
      { threshold: 1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className={iam.container}>
      <h1>I Am</h1>
      <hr className={onScroll ? iam.underline : ""} ref={sectionRef} />
      <div className={iam.content__container}>
        <Fade delay={700} cascade damping={0.1}>
          <p className={iam.content__item}>
            이런 사람입니다.이런 사람입니다.이런 사람입니다.이런 사람입니다.이런
            사람입니다.이런 사람입니다.이런 사람입니다.이런 사람입니다.이런
            사람입니다.
          </p>
        </Fade>
        <Fade delay={1400} cascade damping={0.1}>
          <p className={iam.content__item}>
            이런 사람입니다.이런 사람입니다.이런 사람입니다.이런 사람입니다.이런
            사람입니다.이런 사람입니다.이런 사람입니다.이런 사람입니다.이런
            사람입니다.
          </p>
        </Fade>
        <Fade delay={2100} cascade damping={0.1}>
          <p className={iam.content__item}>
            이런 사람입니다.이런 사람입니다.이런 사람입니다.이런 사람입니다.이런
            사람입니다.이런 사람입니다.이런 사람입니다.이런 사람입니다.이런
            사람입니다.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Iam;
