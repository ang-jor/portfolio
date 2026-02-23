import { IconDownload } from "@tabler/icons-react";

const AboutMe = () => {
  return (
    <div className="about-content">
      <div className="about-text">
        <p>
          I'm a UX engineer with over four years of experience in designing and
          building digital solutions. Throughout my career, I've worked mostly
          as a UX generalist, but I find the most purpose working at the
          intersection of design and code.
        </p>
        <p>
          These days I'm leaning more towards front-end development, focusing on
          building accessible, responsive, and user-friendly interfaces.
        </p>
      </div>
      <button className="btn btn-soft resume-btn flex-end">
        Download CV
        <IconDownload size={24} />
      </button>
    </div>
  );
};

export default AboutMe;
