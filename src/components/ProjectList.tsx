import React from "react";
import { ProjectItem } from "./ProjectItem";

export interface ProjectListProps {
  bgColor?: string;
  onOpenModal?: (
    title: string,
    description: string,
    images?: string[],
    bgColor?: string,
    tags?: string[],
  ) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ bgColor, onOpenModal }) => {
  return (
    <div className="project-list">
      <ProjectItem
        title="ang-jor"
        description="That's the site you are currently on."
        tags={["Figma", "React", "TypeScript", "Tailwind", "DaisyUI"]}
        modalBgColor={bgColor}
        onOpenModal={onOpenModal}
        modalDescription="Designed in Figma, built with React TSX and styled with Tailwind CSS and DaisyUI. This site was created because I needed to upgrade my portfolio and wanted to practice my frontend skills, so this was my playground of sorts."
        // modalImages={["image1.jpg", "image2.jpg"]}
      />
      <ProjectItem
        title="Metalmancy"
        description="A website built for the Metalmancy community."
        tags={["Vue", "Tailwind"]}
        externalLink="https://metalmancy.tech/"
        modalDescription="Long detailed description about the project..."
        modalImages={["image1.jpg", "image2.jpg"]}
        modalBgColor={bgColor}
        onOpenModal={onOpenModal}
      />
      <ProjectItem
        title="Tikvesh"
        description="Design revamp for a winery events management app."
        tags={["Figma"]}
        modalDescription="Long detailed description about the project..."
        modalBgColor={bgColor}
        onOpenModal={onOpenModal}
      />
      <ProjectItem
        title="Pockety"
        description="Mobile banking app for kids and teens."
        tags={["JavaScript", "API"]}
        modalDescription="Long detailed description about the project..."
        modalImages={["image1.jpg", "image2.jpg"]}
        modalBgColor={bgColor}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};

export default ProjectList;
