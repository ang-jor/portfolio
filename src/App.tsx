import "./App.css";
import { useState } from "react";
import Container from "./components/Container.tsx";
import ProjectList from "./components/ProjectList.tsx";
import ContactLinks from "./components/ContactLinks.tsx";

const introContent = (
  <div className="welcome-content">
    <h1>hi, i'm angela</h1>
    <span>ux engineer @ skopje, macedonia</span>
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
          content="A UX engineer with over four years of experience in designing and developing user-centric digital experiences. Passionate about creating intuitive interfaces and seamless user journeys that drive engagement and satisfaction. Skilled in user research, wireframing, prototyping, and front-end development. Committed to staying updated with the latest industry trends and best practices to deliver innovative solutions that meet user needs and business goals."
        />
        <Container
          hasTitle
          title="experience"
          bgColor={colors[2]}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida est non odio blandit, ut consequat metus interdum. Mauris sodales, velit vitae ornare condimentum, metus lacus interdum ligula, sed dapibus risus dolor sit amet purus. Quisque volutpat eros eget metus aliquam mattis. Phasellus bibendum lobortis nunc, vitae luctus lorem finibus eu. "
        />
      </div>
      <div className="col">
        <Container
          hasTitle
          title="projects"
          bgColor={colors[3]}
          content={<ProjectList />}
          className="top-row"
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
    </main>
  );
}

export default App;
