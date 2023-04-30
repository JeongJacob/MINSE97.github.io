"use client";
import { useEffect, useRef, useState } from "react";
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
      <hr className={onScroll ? iam.underline : ""} />
    </div>
  );
};

export default Iam;
