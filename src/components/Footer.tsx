import ContactLinks from "./ContactLinks";

const Footer = () => {
  return (
    <footer>
      <ContactLinks />
      <span>
        designed and built by angela jordanova &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
