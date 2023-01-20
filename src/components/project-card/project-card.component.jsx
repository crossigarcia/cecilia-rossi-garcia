import { useSelector } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import "./project-card.styles.scss";

export const ProjectCard = ({ project, ...props }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div id={props.id} className={`project-card-container ${props.className} ${theme}`}>
      {props.className === 'open' && <button type="button" onClick={() => props.setOpenProject(null)} className={`close-project ${theme}`}><RiCloseFill/></button>}
      <div className={`project-card-text-container ${theme} ${props.className}`}>
        <h2 className={`project-title`}>{project.title}</h2>
        <span className={`project-date ${theme}`}>{project.date}</span>
        <p className="project-details">{project.details}</p>
       {props.className !== "open" && <button type="button" name="more-project-info" onClick={() => props.setOpenProject(project)} className={`more-info-btn ${theme}`}>more info</button>}
      </div>
      {props.className === 'open' && (
         <div className="project-additionals">
            <span className={`add-text ${theme}`}><span style={{fontWeight: "800", marginRight: "20px", width: "100px", display: "inline-block"}}>Tech Stack:</span> 
               {project.techStack.join(", ")}
            </span>
            {project.resp && <span className={`add-text ${theme}`}><span style={{fontWeight: "800", marginRight: "20px", width: "150px", display: "inline-block"}}>Responsabilities:</span> 
               {project.resp}
            </span>}
            {!project.resp && (<><span className={`add-text ${theme}`}><span style={{fontWeight: "800", marginRight: "20px", width: "100px", display: "inline-block"}}>Github:</span> 
               <a href={project.github} target="_blank" rel="noreferrer" className={`link ${theme}`}>{project.github}</a>
            </span>
            <span className={`add-text ${theme}`}><span style={{fontWeight: "800", marginRight: "20px", width: "100px", display: "inline-block"}}>Deployed:</span> 
               {project.deployed ? <a href={project.deployed} target="_blank" rel="noreferrer" className={`link ${theme}`}>{project.deployed}</a> : "[Migrating from Heroku to new platform]"}
            </span></>)}
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
