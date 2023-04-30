"use client";
import { RiCake3Fill } from "react-icons/ri";
import { CgUserlane } from "react-icons/cg";
import { FcCallback } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import aboutme from "@/app/components/styles/AboutMe.module.scss";

const AboutMe = () => {
  return (
      <div className={aboutme.container}>
        <h1>About Me</h1>
        <Fade duration={3000} className={aboutme.fade__container}>
          <div className={aboutme.profile__wrapper}>
            <div className={aboutme.profile__container}>
              <div className={aboutme.profile__title}>
                <CgUserlane
                  fill="#36778b"
                  className={aboutme.profile__title__icon}
                />
                <span>이름</span>
              </div>
              <p className={aboutme.profile__title__content}>정세민</p>
            </div>
            <div className={aboutme.profile__container}>
              <div className={aboutme.profile__title}>
                <RiCake3Fill
                  fill="#fbbd05"
                  className={aboutme.profile__title__icon}
                />
                <span>생년월일</span>
              </div>
              <p className={aboutme.profile__title__content}>1997.04.28</p>
            </div>

            <div className={aboutme.profile__container}>
              <div className={aboutme.profile__title}>
                <FcCallback className={aboutme.profile__title__icon} />{" "}
                <span>연락처</span>
              </div>
              <p className={aboutme.profile__title__content}>010-9232-4007</p>
            </div>
            <div className={aboutme.profile__container}>
              <div className={aboutme.profile__title}>
                <SiGmail
                  fill="#ea4336"
                  className={aboutme.profile__title__icon}
                />
                <span>이메일</span>
              </div>
              <p className={aboutme.profile__title__content}>
                ja9cob7@gmail.com
              </p>
            </div>
            <div className={aboutme.profile__container}>
              <div className={aboutme.profile__title}>
                <a href="https://github.com/MINSE97" target="blink">
                  <Image
                    className={aboutme.profile__title__icon}
                    src={"/github.png"}
                    alt="Github"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <p className={aboutme.profile__title__content}>Github</p>
            </div>
            <div className={aboutme.profile__container}>
              <div className={aboutme.profile__title}>
                <a href="https://velog.io/@__ja9cob7" target="blink">
                  <Image
                    className={aboutme.profile__title__icon}
                    src={"/velog.png"}
                    alt="velog"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <p className={aboutme.profile__title__content}>Velog</p>
            </div>
          </div>
        </Fade>
      </div>
  );
};
export default AboutMe;
