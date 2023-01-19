import './project-card.styles.scss';

export const ProjectCard = (props) => {
   return (
     <div className="project-card-container">
      {/* <span className="project-card-overlay"></span> */}
      <img src={require(`../../assets/imgs/${props.fileName}`)} alt={props.alt}/>
     </div>
   );
}