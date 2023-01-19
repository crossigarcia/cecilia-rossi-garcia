import { useState } from 'react';
import { projectCardData } from '../../assets/constants/data';
import { ProjectCard } from "../project-card/project-card.component";
import "./projects.styles.scss";

export const ProjectsContent = (props) => {
   const [openProject, setOpenProject] = useState(0);
   
  return (
    <div className="projects-content-container">
      {projectCardData.map((project) => (
        <ProjectCard key={project.id} className={openProject === project.id ? 'open' : ''} project={project}/>
      ))}
    </div>
  );
};
