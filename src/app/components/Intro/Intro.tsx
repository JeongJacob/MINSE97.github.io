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
      </div>
    </section>
  );
};

export default Intro;