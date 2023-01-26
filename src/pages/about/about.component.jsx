import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../redux/features/nav-title/navTitleSlice";
import { setContent } from "../../redux/features/page-content/pageContentSlice";
import { aboutData } from "../../assets/constants/data";
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
       <div className={`skills-container ${theme}`}>
         <h2 className={`skills-main-header ${theme}`}>Skills</h2>
         <div className={`skills-card ${theme}`}>
           <h3 className={`skills-header ${theme}`}>Primary</h3>
           <ul className={`skills-list ${theme}`}>
             {aboutData.primary.map((skill, index) => (
               <li key={index}>{skill}</li>
             ))}
           </ul>
         </div>
         <div className={`skills-card ${theme}`}>
           <h3 className={`skills-header ${theme}`}>Secondary</h3>
           <ul className={`skills-list ${theme}`}>
             {aboutData.secondary.map((skill, index) => (
               <li key={index}>{skill}</li>
             ))}
           </ul>
         </div>
         <div className={`skills-card ${theme}`}>
           <h3 className={`skills-header ${theme}`}>Additional</h3>
           <ul className={`skills-list ${theme}`}>
             {aboutData.additional.map((skill, index) => (
               <li key={index}>{skill}</li>
             ))}
           </ul>
         </div>
       </div>
     </div>
   );
};
