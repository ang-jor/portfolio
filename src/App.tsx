import "./App.css";
import Container from "./components/Container.tsx";
import ProjectList from "./components/ProjectList.tsx";
import ContactLinks from "./components/ContactLinks.tsx";

const introContent = (
  <div className="welcome-content">
    <h1>hi, i'm angela</h1>
    <span>ux engineer @ skopje, macedonia</span>
  </div>
);

function App() {
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
            bgColor="#CAE7B9"
            content={introContent}
            className="intro-container"
          />
        </div>
        <Container
          hasTitle
          title="about me"
          bgColor="#F3DE8A"
          content="A UX engineer with over four years of experience in designing and developing user-centric digital experiences. Passionate about creating intuitive interfaces and seamless user journeys that drive engagement and satisfaction. Skilled in user research, wireframing, prototyping, and front-end development. Committed to staying updated with the latest industry trends and best practices to deliver innovative solutions that meet user needs and business goals."
        />
        <Container
          hasTitle
          title="experience"
          bgColor="#EB9486"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida est non odio blandit, ut consequat metus interdum. Mauris sodales, velit vitae ornare condimentum, metus lacus interdum ligula, sed dapibus risus dolor sit amet purus. Quisque volutpat eros eget metus aliquam mattis. Phasellus bibendum lobortis nunc, vitae luctus lorem finibus eu. "
        />
      </div>
      <div className="col">
        <Container
          hasTitle
          title="projects"
          bgColor="#F3DE8A"
          content={<ProjectList />}
          className="top-row"
        />
        <div className="row bottom-row">
          <Container
            hasTitle
            title="get in touch"
            bgColor="#a9c2cb"
            content={<ContactLinks />}
          />
          <div className="col">
            <button className="btn btn-soft">Resume</button>
            <Container
              bgColor="GREY"
              content={
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle toggle-lg"
                />
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
