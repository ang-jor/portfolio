import React from "react";
import { ProjectItem } from "./ProjectItem";
import { projects } from "../data/projects";

export interface ProjectListProps {
  bgColor?: string;
  onOpenModal?: (
    title: string,
    description?: string[],
    images?: string[],
    tags?: string[],
    withAlert?: boolean,
    twoColumns?: boolean,
    role?: string,
    timeline?: string,
    link?: string,
  ) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ onOpenModal }) => {
  return (
    <div className="project-list">
      {projects.map((project, idx) => (
        <>
          <ProjectItem
            key={project.id}
            title={project.title}
            info={project.info}
            role={project.role}
            timeline={project.timeline}
            tags={project.tags}
            withAlert={project.withAlert}
            onOpenModal={onOpenModal}
            description={project.description}
            images={project.images}
            externalLink={project.link}
            twoColumns={project.twoColumns}
          />
          {idx < projects.length - 1 && <div className="divider" />}
        </>
      ))}
    </div>
  );
};

export default ProjectList;
