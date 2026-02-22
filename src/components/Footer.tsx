import ContactLinks from "./ContactLinks";
import { IconCoffee } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer>
      <ContactLinks />
      <span>
        built with lots of
        <IconCoffee strokeWidth={1.3} />
        by Angela Jordanova
      </span>
    </footer>
  );
};

export default Footer;
