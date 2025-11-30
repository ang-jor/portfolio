import React from "react";
import { ProjectItem } from "./ProjectItem";

const ProjectList: React.FC = () => {
  return (
    <div className="project-list">
      <ProjectItem
        title="Lorem ipsum"
        description="The site you are currently viewing"
        tags={["React", "TypeScript"]}
      />
      <ProjectItem
        title="Lorem ipsum"
        description="The site you are currently viewing"
        tags={["HTML", "CSS"]}
      />
      <ProjectItem
        title="Lorem ipsum"
        description="The site you are currently viewing"
        tags={["JavaScript", "API"]}
      />
    </div>
  );
};

export default ProjectList;
