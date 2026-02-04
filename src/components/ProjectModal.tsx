import React from "react";

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images?: string[];
  tags?: string[];
  bgColor?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  images = [],
  tags = [],
  bgColor = "#F3DE8A",
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-container" style={{ backgroundColor: bgColor }}>
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
        <div className="modal-tags">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-ghost">
              {tag}
            </div>
          ))}
        </div>
        <div className="divider" />
        <p>{description}</p>
        {images.length > 0 && (
          <div className="modal-images">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`${title} ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
