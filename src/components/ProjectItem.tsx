import React from "react";

export interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  tags,
}) => {
  return (
    <div className="project-item" onClick={() => {}}>
      <div className="project-item-content">
        <img src="src/assets/icons/arrow-right.svg" alt="" className="arrow" />
        <div className="project-item-details">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-item-tags">
            {tags.map((tag) => (
              <div key={tag} className="badge">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
