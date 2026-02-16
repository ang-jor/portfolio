import "./App.css";
import { useState, useEffect } from "react";
import Container from "./components/Container.tsx";
import ProjectList from "./components/ProjectList.tsx";
import ContactLinks from "./components/ContactLinks.tsx";
import { ProjectModal } from "./components/ProjectModal.tsx";

const introContent = (
  <div className="welcome-content">
    <h1>hi, i'm angela</h1>
    <span className="text-lg">ux engineer @ skopje, macedonia</span>
  </div>
);

const colorOptions = [
  "var(--color-intro)",
  "var(--color-about)",
  "var(--color-projects)",
  "var(--color-experience)",
  "var(--color-contact)",
  "var(--color-toggle-bg)",
];

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

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
}

function App() {
  const [colors, setColors] = useState([
    "var(--color-intro)",
    "var(--color-about)",
    "var(--color-experience)",
    "var(--color-projects)",
    "var(--color-contact)",
  ]);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: "",
    description: [],
    tags: [],
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleShuffleColors = () => {
    setColors(shuffleArray(colorOptions).slice(0, 5));
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

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
    });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <main>
      <div className="col">
        <div className="row">
          <Container
            hasImage
            content={
              <img src="../src/assets/me.jpg" alt="me" className="avatar-img" />
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
          bgColor={colors[1]}
          content="I'm a UX engineer with over four years of experience in designing and building digital experiences. Throughout my career, I've worked mostly as a UX generalist, but I find the most purpose working at the intersection of design and front-end development. These days I'm leaning more towards building accessible, responsive, and performant web applications."
        />
        <div className="row bottom-row">
          <Container
            hasTitle
            title="get in touch"
            bgColor={colors[4]}
            content={<ContactLinks />}
          />
          <div className="col">
            <button className="btn btn-soft resume-btn">
              Resume
              <i className="fa-solid fa-download fa-lg"></i>
            </button>
            <Container
              className="toggle-container"
              bgColor="var(--color-toggle-bg)"
              content={
                <div className="toggle-content">
                  <button
                    onClick={handleToggleDarkMode}
                    className="btn btn-soft theme-toggle-btn"
                    title="Toggle dark/light mode"
                  >
                    <i
                      className={`fa-solid ${
                        isDarkMode ? "fa-moon" : "fa-sun"
                      } theme-icon ${isDarkMode ? "icon-spin-in" : "icon-spin-in"}`}
                      key={isDarkMode ? "moon" : "sun"}
                    />
                  </button>
                  <button
                    onClick={handleShuffleColors}
                    className="btn btn-soft shuffle-btn"
                    title="Shuffle container colors"
                  >
                    <i className="fa-solid fa-shuffle"></i>
                  </button>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="col">
        <Container
          hasTitle
          title="what i've worked on"
          bgColor={colors[3]}
          content={<ProjectList bgColor={colors[3]} onOpenModal={openModal} />}
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
      />
    </main>
  );
}

export default App;
