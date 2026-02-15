import React from "react";

export interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  externalLink?: string;
  modalDescription?: string;
  modalImages?: string[];
  onOpenModal?: (
    title: string,
    description: string,
    images?: string[],
    tags?: string[],
  ) => void;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  tags,
  externalLink,
  modalDescription,
  modalImages,
  onOpenModal,
}) => {
  return (
    <div className="project-item">
      <div className="project-item-content">
        <div className="project-item-details">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-item-tags">
            {tags.map((tag) => (
              <div key={tag} className="badge badge-ghost">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="project-item-actions">
          {modalDescription && (
            <button
              className="link"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal?.(title, modalDescription, modalImages, tags);
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
