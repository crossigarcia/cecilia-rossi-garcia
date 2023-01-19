import { useSelector } from "react-redux";
import "./project-card.styles.scss";

export const ProjectCard = ({ project, ...props }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`project-card-container ${project.className} ${theme}`}>
      <div className={`project-card-text-container ${theme}`}>
        <h2 className={`project-title`}>{project.title}<span className="project-date">{project.date}</span></h2>
        <p className="project-details">{project.details}</p>
      </div>
      <div className="project-card-img-container">
        <span className={`project-card-overlay ${theme}`}></span>
        <img
          src={require(`../../assets/imgs/${project.fileName}`)}
          alt={project.alt}
          className="project-img"
        />
      </div>
    </div>
  );
};
