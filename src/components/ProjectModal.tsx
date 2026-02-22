import React, { useEffect } from "react";
import {
  IconCalendarWeekFilled,
  IconExternalLink,
  IconInfoCircleFilled,
  IconUserFilled,
  IconX,
} from "@tabler/icons-react";

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
  bgColor?: string;
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
  bgColor,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

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
          <IconX size={24} />
        </button>
        <h2>{title}</h2>
        <div className="info-row">
          <IconUserFilled size={20} />
          <span>{role}</span>
        </div>
        <div className="info-row">
          <IconCalendarWeekFilled size={20} />
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
          <div role="alert" className="alert alert-soft">
            <IconInfoCircleFilled size={24} />
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
          <a href={link} target="_blank" className="external-link">
            {link.includes("behance.net")
              ? "See more visuals on Behance"
              : "See live project"}
            <IconExternalLink />
          </a>
        )}
      </div>
    </>
  );
};
