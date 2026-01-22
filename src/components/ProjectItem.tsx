import React, { useState } from "react";
import { ProjectModal } from "./ProjectModal";

export interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  externalLink?: string;
  modalDescription?: string;
  modalImages?: string[];
  modalBgColor?: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  tags,
  externalLink,
  modalDescription,
  modalImages,
  modalBgColor,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="project-item">
        <div className="project-item-content">
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
          <div className="project-item-actions">
            {modalDescription && (
              <button
                className="link"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                aria-label="View project details"
              >
                <i className="fa-solid fa-eye fa-lg"></i>
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
                <i className="fa-solid fa-link fa-lg"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={modalDescription || ""}
        images={modalImages}
        bgColor={modalBgColor}
      />
    </>
  );
};
