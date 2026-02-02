import React from "react";
import "./Timeline.css";

export interface TimelineItemData {
  company: string;
  role: string;
  description: string;
}

export interface TimelineProps {
  items: TimelineItemData[];
}

const TimelineItem: React.FC<TimelineItemData> = ({
  company,
  role,
  description,
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3 className="timeline-company">{company}</h3>
        <p className="timeline-role">{role}</p>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          company={item.company}
          role={item.role}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Timeline;
