"use client";
import projects from "@/app/components/styles/Projects.module.scss";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { ObjectId } from "mongodb";
import { Fade } from "react-awesome-reveal";

export interface projectProps {
  _id: ObjectId;
  name: string;
  skills: string[];
  github: string;
  link: string;
  notion?: string;
  adminID?: string;
  adminPW?: string;
}

const Projects = () => {
  const [projectData, setProjectData] = useState<projectProps[]>();

  useEffect(() => {
    const getProjectData = async () => {
      await axios
        .get(`/api/projects`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => setProjectData(res.data));
    };
    getProjectData();
  }, []);

  return (
    <div className={projects.wrapper}>
      <h1>Projects</h1>
      <div className={projects.container}>
        <div className={projects.project__container}>
          {projectData &&
            projectData.map((project) => (
              <Fade direction="left" key={project.name}>
                <ProjectCard project={project} />
              </Fade>
            ))}
        </div>
        <div className={projects.info__wrapper}>
          <Fade direction="right">
            <div className={projects.info__container}>
              <div className={projects.info__title__container}>
                <h2>Pikcha</h2>
                <p>23.01 - 23.02</p>
              </div>
              <h3>프로젝트 소개</h3>
              <p className={projects.info__content}>
                Pikcha는 서울에 있는 다양한 명소들을 소개해주고, 다녀온 명소들의
                방문 후기를 작성하여 정보 공유 및 사용자들간의 소통이 가능한
                공간입니다. <br />
                K-digital-training 부트캠프에서 기획부터 디자인까지 함께
                논의하며 진행한 팀 프로젝트입니다. 처음 진행한 팀 프로젝트인
                동시에 처음 TypeScript를 학습했습니다.
              </p>
              <div className={projects.info__team__container}>
                <h3>팀 구성</h3>
                <span className={projects.info__team__fe__content}>
                  4명
                </span>{" "}
                <span className={projects.info__team__be__content}>2명</span>
              </div>
              <h3>팀 내 역할</h3>
              <div className={projects.info__role__container}>
                <ol>
                  <li>명소 / 포스트 리스트 페이지(페이지네이션)</li>
                  <li>명소 / 포스트 지역구 필터링 컴포넌트</li>
                  <li>포스트 상세페이지 CRUD</li>
                </ol>
                <ol>
                  <li>포스트 상세페이지 댓글/대댓글 CRUD</li>
                  <li>포스트 작성/수정 페이지</li>
                  <li>마이페이지 회원 정보 CRUD</li>
                </ol>
              </div>
            </div>
          </Fade>
          <Fade direction="right">
            <div className={projects.info__container}>
              <div className={projects.info__title__container}>
                <h2>NerdNest</h2>
                <p>23.03 - 23.04</p>
              </div>
              <h3>프로젝트 소개</h3>
              <p className={projects.info__content}>
                NerdNest는 Github에서 아이디어를 얻고 기술 블로그를 작성하면
                일명 &quot;<u>잔디</u>&quot;를 심어 시각적으로 자신의 블로그
                기록을 볼 수 있도록 합니다. <br />그 외 다른 사용자들과 기술,
                정보 공유 등 소통 할 수 있는 공간입니다. <br /> 부트캠프에서
                만난 분들과 함께 진행한 팀 프로젝트입니다. 기획과 디자인, API
                명세서 작성 등 같이 백엔드 분들과 협업하며 커뮤니케이션 능력을
                키웠습니다.
              </p>
              <div className={projects.info__team__container}>
                <h3>팀 구성</h3>
                <span className={projects.info__team__fe__content}>
                  2명
                </span>{" "}
                <span className={projects.info__team__be__content}>2명</span>
              </div>
              <h3>팀 내 역할</h3>
              <div className={projects.info__role__container}>
                <ol>
                  <li>헤더</li>
                  <li>메인 페이지(무한스크롤)</li>
                  <li>검색 페이지 (무한스크롤)</li>
                  <li>블로그 상세페이지 CRUD</li>
                </ol>
                <ol>
                  <li>블로그 상세페이지 댓글/대댓글 CRUD</li>
                  <li>블로그 Record 컴포넌트</li>
                  <li>공용 블로그카드 컴포넌트</li>
                </ol>
              </div>
            </div>
          </Fade>
          <Fade direction="right">
            <div className={projects.info__container}>
              <div className={projects.info__title__container}>
                <h2>PortFolio</h2>
                <p>23.04 ~ 23.05</p>
              </div>
              <h3>프로젝트 소개</h3>
              <p className={projects.info__content}>
                SEO에 적합한 프레임워크를 사용해 보고 싶어 SSR 구동 방식인
                Next.js를 사용하여 진행한 솔로 프로젝트입니다. 이전에 경험해보지
                못한 웹 반응형, CSS 전처리기 등 깊게라고는 말씀을 못드리지만
                학습한 개념들을 적용시키고자 노력했습니다.
              </p>
              <div className={projects.info__team__container}>
                <h3>팀 구성</h3>
                <span className={projects.info__team__fe__content}>1명</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;
