import './project-card.styles.scss';

export const ProjectCard = (props) => {
   return (
     <div className='project-card-container'>
         <div className='project-card-text-container'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo, accusamus totam ex dolorem quos, laborum eveniet magni at possimus sapiente eligendi maxime perferendis provident! Quo itaque nemo quidem sed?
         </div>
         <div className="project-card-img-container">
            <span className="project-card-overlay"></span>
            <img
            src={require(`../../assets/imgs/${props.fileName}`)}
            alt={props.alt}
            className="project-img"
            />
         </div>
     </div>
   );
}