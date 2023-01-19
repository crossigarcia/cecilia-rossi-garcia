import { ProjectCard } from "../project-card/project-card.component";
import "./projects.styles.scss";

export const ProjectsContent = (props) => {
  return (
    <div className="projects-content-container">
      <ProjectCard fileName="karaok.gif" alt="GIF of the-kara-ok-corral website being used"/>
    </div>
  );
};
