import React from "react";

export interface ProjectItemProps {
  title: string;
  info: string;
  role?: string;
  timeline?: string;
  tags: string[];
  withAlert?: boolean;
  twoColumns?: boolean;
  externalLink?: string;
  description?: string[];
  images?: string[];
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

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  info,
  role,
  timeline,
  tags,
  withAlert,
  twoColumns,
  externalLink,
  description,
  images,
  onOpenModal,
}) => {
  return (
    <div className="project-item">
      <div className="project-item-content">
        <div className="project-item-details">
          <h3>{title}</h3>
          <p>{info}</p>
          <div className="project-item-tags">
            {tags.slice(0, 3).map((tag) => (
              <div key={tag} className="badge badge-ghost">
                {tag}
              </div>
            ))}
            {tags.length > 3 && <div className="badge badge-ghost">...</div>}
          </div>
        </div>
        <div className="project-item-actions">
          {description && (
            <button
              className="link"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal?.(
                  title,
                  description,
                  images,
                  tags,
                  withAlert,
                  twoColumns,
                  role,
                  timeline,
                  externalLink,
                );
              }}
              aria-label="View project details"
            >
              <i className="fa-solid fa-expand fa-lg"></i>
            </button>
          )}
          {externalLink && (
            <a
              className="link"
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit external link"
            >
              <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
