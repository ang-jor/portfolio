import "./App.css";
import { useState } from "react";
import Container from "./components/Container.tsx";
import ProjectList from "./components/ProjectList.tsx";
import Footer from "./components/Footer.tsx";
import { ProjectModal } from "./components/ProjectModal.tsx";
import Header from "./components/Header.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Intro from "./components/Intro.tsx";

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
                  <img src="assets/me.png" alt="me" className="avatar-img" />
                }
              />
              <Container
                bgColor={colors[0]}
                content={<Intro />}
                className="intro-container"
              />
            </div>
            <Container
              hasTitle
              title="about me"
              className="about-container"
              bgColor={colors[1]}
              content={<AboutMe />}
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
