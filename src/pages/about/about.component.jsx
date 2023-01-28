import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../redux/features/nav-title/navTitleSlice";
import { setContent } from "../../redux/features/page-content/pageContentSlice";
import { aboutData } from "../../assets/constants/data";
import "./about.styles.scss";

export const AboutContent = () => {
   const dispatch = useDispatch();
   const { theme } = useSelector(state => state.theme);
   const [openSkills, setOpenSkills] = useState({ primary: true, secondary: false, additional: false });

   useEffect(() => {
     dispatch(setTitle(true));
     dispatch(setContent("about"));
   }, [dispatch]);

   const handleClick = (name) => {
      setOpenSkills({...openSkills, [name]: !openSkills[name] });
   }
   

   return (
     <div className="about-content-container">
       <div className={`about-main-container ${theme}`}>
         <p className={`about-main-text ${theme}`}>{aboutData.main}</p>
       </div>
       <div className={`skills-container ${theme}`}>
         {openSkills["primary"] && (
           <div className={`skill-list ${openSkills["primary"] ? "open" : ""}`}>
             {aboutData.primary.map((skill, index) => (
               <span className={`skill ${theme}`} key={index}>
                 {skill}
               </span>
             ))}
           </div>
         )}
         <span
           role="button"
           aria-label="button to open or close primary skills tab"
           onClick={() => handleClick("primary")}
           className={`skill-btn ${theme} ${openSkills["primary"] ? "open" : ""}`}
         >
           Primary
         </span>
       </div>
       <div className={`skills-container ${theme}`}>
         {openSkills["secondary"] && (
           <div className="skill-list">
             {aboutData.secondary.map((skill, index) => (
               <span className={`skill ${theme}`} key={index}>
                 {skill}
               </span>
             ))}
           </div>
         )}
         <span
           role="button"
           aria-label="button to open or close secondary skills tab"
           onClick={() => handleClick("secondary")}
           className={`skill-btn ${theme}`}
         >
           Secondary
         </span>
       </div>
       <div className={`skills-container ${theme}`}>
         {openSkills["additional"] && (
           <div className="skill-list">
             {aboutData.additional.map((skill, index) => (
               <span className={`skill ${theme}`} key={index}>
                 {skill}
               </span>
             ))}
           </div>
         )}
         <span
           role="button"
           aria-label="button to open or close additional skills tab"
           onClick={() => handleClick("additional")}
           className={`skill-btn ${theme}`}
         >
           Additional
         </span>
       </div>
     </div>
   );
};
