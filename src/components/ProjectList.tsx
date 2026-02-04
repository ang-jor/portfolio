import React from "react";
import { ProjectItem } from "./ProjectItem";

export interface ProjectListProps {
  bgColor?: string;
  onOpenModal?: (
    title: string,
    description: string,
    images?: string[],
    bgColor?: string,
  ) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ bgColor, onOpenModal }) => {
  return (
    <div className="project-list">
      <ProjectItem
        title="My portfolio website"
        description="That's the site you are currently viewing. Designed in Figma, built with React TSX and styled with Tailwind CSS and DaisyUI."
        tags={["Figma", "React", "TypeScript", "Tailwind", "DaisyUI"]}
        onOpenModal={onOpenModal}
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
        title="Lorem ipsum"
        description="That's the site you are currently viewing. Designed in Figma, built with React TSX and styled with Tailwind CSS and DaisyUI."
        tags={["JavaScript", "API"]}
        modalDescription="Long detailed description about the project..."
        modalBgColor={bgColor}
        onOpenModal={onOpenModal}
      />
      <ProjectItem
        title="Lorem ipsum"
        description="That's the site you are currently viewing. Designed in Figma, built with React TSX and styled with Tailwind CSS and DaisyUI."
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
