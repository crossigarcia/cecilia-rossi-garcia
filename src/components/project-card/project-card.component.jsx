import { useSelector } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import "./project-card.styles.scss";

export const ProjectCard = ({ project, ...props }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div id={props.id} className={`project-card-container ${props.className} ${theme}`}>
      {props.className === 'open' && <button type="button" onClick={() => props.setOpenProject(null)} className="close-project"><RiCloseFill/></button>}
      <div className={`project-card-text-container ${theme} ${props.className}`}>
        <h2 className={`project-title`}>{project.title}</h2>
        <span className="project-date">{project.date}</span>
        <p className="project-details">{project.details}</p>
       {props.className !== "open" && <button type="button" name="more-project-info" onClick={() => props.setOpenProject(project)} className="more-info-btn">more info</button>}
      </div>
      {props.className === 'open' && (
         <div className="project-additionals">
            <span>Tech Stack: {project.techStack.join(", ")}</span>
            <span>Github: {project.github}</span>
            <span>Deployed: {project.deployed}</span>
         </div>
      )}
      <div className={`project-card-img-container ${props.className}`}>
        <span className={`project-card-overlay ${props.className} ${theme}`}></span>
        <img
          src={require(`../../assets/imgs/${project.fileName}`)}
          alt={project.alt}
          className="project-img"
        />
      </div>
    </div>
  );
};
