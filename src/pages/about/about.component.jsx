import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../redux/features/nav-title/navTitleSlice";
import { setContent } from "../../redux/features/page-content/pageContentSlice";
import { aboutData } from "../../assets/constants/data";
import { SkillsList } from "../../components/skills-list/skills-list.component";
import "./about.styles.scss";

export const AboutContent = () => {
   const dispatch = useDispatch();
   const { theme } = useSelector(state => state.theme);

   useEffect(() => {
     dispatch(setTitle(true));
     dispatch(setContent("about"));
   }, [dispatch]);

   return (
     <div className="about-content-container">
       <div className={`about-main-container ${theme}`}>
         <p className={`about-main-text ${theme}`}>{aboutData.main}</p>
       </div>
       <div className={`skills-container`}>
         <span
           className={`skills-label ${
             theme === "cmyk" ? `magenta` : `dark-gray`
           }`}
         >
           Skills
         </span>
         <span
           className={`skills-label ${
             theme === "cmyk" ? `yellow` : `light-gray`
           }`}
         >
           Skills
         </span>
         <span className={`skills-label ${theme === "cmyk" ? `cyan` : `gray`}`}>
           Skills
         </span>
         <div className="large-pills-container">
           <SkillsList
             list={aboutData.primary}
             title="Primary"
             className={theme === "cmyk" ? `cyan` : `gray`}
           />
           <SkillsList
             list={aboutData.secondary}
             title="Secondary"
             className={theme === "cmyk" ? `magenta` : `dark-gray`}
           />
           <SkillsList
             list={aboutData.additional}
             title="Additional"
             className={theme === "cmyk" ? `yellow` : `light-gray`}
           />
         </div>
       </div>
     </div>
   );
};
