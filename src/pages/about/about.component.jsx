import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/features/nav-title/navTitleSlice";
import { setContent } from "../../redux/features/page-content/pageContentSlice";
import "./about.styles.scss";

export const AboutContent = () => {
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(setTitle(true));
     dispatch(setContent("about"));
   }, [dispatch]);

   return (
      <div className="about-content-container">
         <div className="about-main-text-container">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem
         explicabo, exercitationem, fuga perferendis voluptatum inventore vitae
         tenetur quaerat alias veritatis! Nihil ipsum iure natus veniam aut.
         Tempore, rerum voluptatibus.
         </div>
      </div>
   );
};
