import CoffeeAnimation from "./CoffeeAnimation";
import ContactLinks from "./ContactLinks";

const Footer = () => {
  return (
    <footer>
      <ContactLinks />
      <span>
        built with lots of
        <CoffeeAnimation />
        by Angela Jordanova
      </span>
    </footer>
  );
};

export default Footer;
