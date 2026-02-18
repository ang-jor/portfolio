import Controls from "./Controls";

interface HeaderProps {
  setColors: (colors: string[]) => void;
}

const Header = ({ setColors }: HeaderProps) => {
  return (
    <header>
      <span>ang-jor</span>
      <Controls onColorsChange={setColors} />
    </header>
  );
};

export default Header;
