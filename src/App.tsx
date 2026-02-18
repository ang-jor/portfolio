import "./App.css";
import { useState } from "react";
import Container from "./components/Container.tsx";
import ProjectList from "./components/ProjectList.tsx";

import Footer from "./components/Footer.tsx";
import { ProjectModal } from "./components/ProjectModal.tsx";
import Header from "./components/Header.tsx";

const introContent = (
  <div className="welcome-content">
    <h1>
      hi, i'm&nbsp;
      <span>
        angela
        <svg
          className="scribble-underline"
          width="449"
          height="46"
          viewBox="0 0 449 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.50016 13.4339C8.60312 17.5431 15.1082 22.2709 21.2873 24.4793C43.146 32.2916 65.8266 23.9423 86.8841 18.1199C90.1178 17.2257 93.0976 15.9722 96.7912 15.5217C118.701 12.8495 140.039 19.7189 159.303 29.7438C181.834 41.4694 210.059 45.8699 234.22 38.4116C247.802 34.2187 260.524 25.4073 273.051 18.8578C276.599 17.0026 279.901 16.569 283.584 15.4833C311.565 7.23395 343.727 17.6061 371.132 23.9135C393.023 28.9518 416.93 26.014 435.63 13.1176C438.886 9.91158 442.083 6.95988 445.048 3.50017"
            stroke="black"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </h1>
    <span className="text-lg">ux engineer @ skopje, macedonia</span>
  </div>
);

interface ModalState {
  isOpen: boolean;
  title: string;
  description?: string[];
  images?: string[];
  tags?: string[];
  withAlert?: boolean;
  twoColumns?: boolean;
  role?: string;
  timeline?: string;
  link?: string;
  colors?: string[];
}

function App() {
  const [colors, setColors] = useState([
    "var(--color-intro)",
    "var(--color-about)",
    "var(--color-experience)",
    "var(--color-projects)",
    "var(--color-contact)",
  ]);

  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: "",
    description: [],
    tags: [],
  });

  const openModal = (
    title: string,
    description?: string[],
    images?: string[],
    tags?: string[],
    withAlert?: boolean,
    twoColumns?: boolean,
    role?: string,
    timeline?: string,
    link?: string,
    colors?: string[],
  ) => {
    setModalState({
      isOpen: true,
      title,
      description,
      images,
      tags,
      withAlert,
      twoColumns,
      role,
      timeline,
      link,
      colors,
    });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <>
      <div className="app-wrapper">
        <Header setColors={setColors} />
        <main>
          <div className="col">
            <div className="row">
              <Container
                hasImage
                content={
                  <img
                    src="../src/assets/me.jpg"
                    alt="me"
                    className="avatar-img"
                  />
                }
              />
              <Container
                bgColor={colors[0]}
                content={introContent}
                className="intro-container"
              />
            </div>
            <Container
              hasTitle
              title="about me"
              className="about-container"
              bgColor={colors[1]}
              content={
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-[24px]">
                    <p>
                      I'm a UX engineer with over four years of experience in
                      designing and building digital solutions. Throughout my
                      career, I've worked mostly as a UX generalist, but I find
                      the most purpose working at the intersection of design and
                      code.
                    </p>
                    <p>
                      These days I'm leaning more towards front-end development,
                      focusing on building accessible, responsive, and
                      user-friendly interfaces.
                    </p>
                  </div>
                  <button className="btn btn-soft resume-btn flex-end">
                    Download CV
                    <i className="fa-solid fa-download fa-lg"></i>
                  </button>
                </div>
              }
            />
          </div>
          <div className="col right-col">
            <Container
              hasTitle
              title="my work"
              bgColor={colors[3]}
              content={
                <ProjectList bgColor={colors[3]} onOpenModal={openModal} />
              }
              className="top-row"
            />
          </div>
          <ProjectModal
            isOpen={modalState.isOpen}
            onClose={closeModal}
            title={modalState.title}
            description={modalState.description}
            images={modalState.images}
            tags={modalState.tags}
            withAlert={modalState.withAlert}
            twoColumns={modalState.twoColumns}
            role={modalState.role}
            timeline={modalState.timeline}
            link={modalState.link}
            bgColor={colors[3]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
