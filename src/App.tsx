import "./App.css";
import { useState } from "react";
import Container from "./components/Container.tsx";
import ProjectList from "./components/ProjectList.tsx";
import ContactLinks from "./components/ContactLinks.tsx";

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

function App() {
  const [colors, setColors] = useState([
    "var(--color-intro)",
    "var(--color-about)",
    "var(--color-experience)",
    "var(--color-projects)",
    "var(--color-contact)",
  ]);

  const handleShuffleColors = () => {
    setColors(shuffleArray(colorOptions).slice(0, 5));
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
                  <input
                    type="checkbox"
                    defaultChecked
                    className="toggle toggle-lg"
                  />
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
          content={<ProjectList bgColor={colors[3]} />}
          className="top-row"
        />
      </div>
    </main>
  );
}

export default App;
