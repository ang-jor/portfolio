import React from "react";
import { ProjectItem } from "./ProjectItem";
import { projects } from "../data/projects";

export interface ProjectListProps {
  bgColor?: string;
  onOpenModal?: (
    title: string,
    description: string,
    images?: string[],
    tags?: string[],
  ) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ bgColor, onOpenModal }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          description={project.info}
          tags={project.tags}
          onOpenModal={onOpenModal}
          modalDescription={project.description}
          modalImages={project.images}
          externalLink={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
