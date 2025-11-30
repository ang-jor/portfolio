import "./App.css";
import Container from "./components/Container.tsx";
import ProjectList from "./components/ProjectList.tsx";

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
              <img src="../public/avatar.png" alt="me" className="avatar-img" />
            }
          />
          <Container bgColor="#CAE7B9" content={introContent} className="intro-container"/>
        </div>
        <Container
          hasTitle
          title="about me"
          bgColor="#F3DE8A"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida est non odio blandit, ut consequat metus interdum. Mauris sodales, velit vitae ornare condimentum, metus lacus interdum ligula, sed dapibus risus dolor sit amet purus. Quisque volutpat eros eget metus aliquam mattis. Phasellus bibendum lobortis nunc, vitae luctus lorem finibus eu. "
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
        />
        <div className="row">
          <Container
            hasTitle
            title="get in touch"
            bgColor="GREY"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida est non odio blandit, ut consequat metus interdum. Mauris sodales, velit vitae ornare condimentum, metus lacus interdum ligula, sed dapibus risus dolor sit amet purus. Quisque volutpat eros eget metus aliquam mattis. Phasellus bibendum lobortis nunc, vitae luctus lorem finibus eu. "
          />
          <Container
            hasTitle
            title="random"
            bgColor="GREY"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida est non odio blandit, ut consequat metus interdum. Mauris sodales, velit vitae ornare condimentum, metus lacus interdum ligula, sed dapibus risus dolor sit amet purus. Quisque volutpat eros eget metus aliquam mattis. Phasellus bibendum lobortis nunc, vitae luctus lorem finibus eu. "
          />
        </div>
      </div>
    </main>
  );
}

export default App;
