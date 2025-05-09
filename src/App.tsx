import "./App.css";
import Container from "./components/Container.tsx";
import ContainerWithTitle from "./components/ContainerWithTitle.tsx";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Container content="Hello World" />
      <ContainerWithTitle
        title="about me"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida est non odio blandit, ut consequat metus interdum. Mauris sodales, velit vitae ornare condimentum, metus lacus interdum ligula, sed dapibus risus dolor sit amet purus. Quisque volutpat eros eget metus aliquam mattis. Phasellus bibendum lobortis nunc, vitae luctus lorem finibus eu. "
      />
    </div>
  );
}

export default App;
