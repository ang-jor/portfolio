import "./App.css";
import Container from "./components/Container.tsx";
import ContainerWithTitle from "./components/ContainerWithTitle.tsx";
import ImageContainer from "./components/ImageContainer.tsx";

function App() {
  return (
    <main>
      <div className="col">
        <div className="row">
          <ImageContainer
            content={
              <img src="../public/avatar.png" alt="me" className="avatar-img" />
            }
          />
          <Container content="Hello World" />
        </div>
      </div>
      <div className="col">
        <ContainerWithTitle
          title="about me"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida est non odio blandit, ut consequat metus interdum. Mauris sodales, velit vitae ornare condimentum, metus lacus interdum ligula, sed dapibus risus dolor sit amet purus. Quisque volutpat eros eget metus aliquam mattis. Phasellus bibendum lobortis nunc, vitae luctus lorem finibus eu. "
        />
        <ContainerWithTitle
          title="about me"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida est non odio blandit, ut consequat metus interdum. Mauris sodales, velit vitae ornare condimentum, metus lacus interdum ligula, sed dapibus risus dolor sit amet purus. Quisque volutpat eros eget metus aliquam mattis. Phasellus bibendum lobortis nunc, vitae luctus lorem finibus eu. "
        />
      </div>
    </main>
  );
}

export default App;
