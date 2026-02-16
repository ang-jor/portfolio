import React from "react";

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string[];
  images?: string[];
  tags?: string[];
  withAlert?: boolean;
  twoColumns?: boolean;
  role?: string;
  timeline?: string;
  link?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  role,
  timeline,
  tags = [],
  link,
  withAlert = false,
  twoColumns = false,
  description = [],
  images = [],
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-container">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2>{title}</h2>
        <div className="info-row">
          <i className="fa-solid fa-pen-ruler"></i>
          <span>{role}</span>
        </div>
        <div className="info-row">
          <i className="fa-solid fa-calendar"></i>
          <span>{timeline}</span>
        </div>
        <div className="modal-tags">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-ghost">
              {tag}
            </div>
          ))}
        </div>
        {withAlert && (
          <div role="alert" className="alert alert-info alert-soft">
            <span>
              This is a conceptual redesign of a real product I worked on
              professionally, but due to NDA restrictions, visuals and flows
              have been recreated for portfolio purposes.
            </span>
          </div>
        )}
        <div className="divider" />
        {description.map((text, index) => (
          <section
            key={index}
            className={`modal-section${twoColumns ? " two-columns" : " single-column"}`}
          >
            <p>{text}</p>
            {images[index] && (
              <img src={images[index]} alt={`${title} section ${index + 1}`} />
            )}
          </section>
        ))}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            {link.includes("behance.net")
              ? "See more visuals on Behance"
              : "View Project"}
            <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
          </a>
        )}
      </div>
    </>
  );
};
