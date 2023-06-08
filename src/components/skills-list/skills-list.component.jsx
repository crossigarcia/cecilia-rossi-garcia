import './skills-list.styles.scss';

export const SkillsList = ({ list, title, ...props}) => {
   return (
     <div className={`skill-list-container ${props.className}`}>
       <h3 className="skill-header">{title}</h3>
       <div className={`list-items-container ${props.className}`}>
         {list.map((item) => (
           <span className={`list-item ${props.className}`} key={item}>
             {item}
           </span>
         ))}
       </div>
     </div>
   );
}