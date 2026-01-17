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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.107.424.107.639a1.012 1.012 0 0 1-.107.639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178A1.012 1.012 0 0 1 2.036 12.322Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
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
