import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/features/nav-title/navTitleSlice';
import { setContent } from '../../redux/features/page-content/pageContentSlice';
import { projectCardData } from '../../assets/constants/data';
import { ProjectCard } from "../../components/project-card/project-card.component";
import "./projects.styles.scss";

export const ProjectsContent = (props) => {
   const [openProject, setOpenProject] = useState(null);
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(setTitle(true));
     dispatch(setContent("projects"));
   }, [dispatch]);

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
