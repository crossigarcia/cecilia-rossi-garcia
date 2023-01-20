import { useState, useEffect } from 'react';
import { projectCardData } from '../../assets/constants/data';
import { ProjectCard } from "../project-card/project-card.component";
import "./projects.styles.scss";

export const ProjectsContent = (props) => {
   const [openProject, setOpenProject] = useState(null);

   useEffect(() => {
      if (openProject) {
         const el = document.getElementById(openProject.id);
         el.parentNode.scrollTop = el.offsetTop - el.parentNode.offsetTop;
      }
   }, [openProject])

  return (
    <div className="projects-content-container">
      { projectCardData.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            project={project}
            setOpenProject={setOpenProject}
            className={(openProject && openProject.id === project.id) ? "open" : ""}
          />
        ))}
    </div>
  );
};
