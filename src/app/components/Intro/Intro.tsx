import Image from "next/image";
import intro from "@/app/components/styles/Intro.module.scss";

const Intro = () => {
  return (
    <section>
      <div className={intro.container}>
        <Image
          src={"/semin.png"}
          alt="개발자"
          width={1000}
          height={1000}
          className={intro.semin}
        />
        <p className={intro.typingText}>
          안녕하세요 프론트엔드 개발자 정세민입니다.
        </p>
      </div>
    </section>
  );
};

export default Intro;
