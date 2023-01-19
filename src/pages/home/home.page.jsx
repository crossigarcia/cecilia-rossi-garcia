import { useState, useEffect } from 'react';
import { MenuButton } from '../../components/menu-button/menu-button.component';
import { useSelector, useDispatch } from "react-redux";
import { setTitle } from '../../redux/features/nav-title/navTitleSlice';
import { ProjectsContent } from '../../components/projects/projects.component';
import './home.styles.scss';

const Home = () => {
   const dispatch = useDispatch();
   const { language } = useSelector((state) => state.language);
   const { theme } = useSelector(state => state.theme);
   const [content, setContent] = useState("large-menu");

   const handleMenuClick = (page) => {
      setContent(page);
   }

   useEffect(() => {
      dispatch(setTitle(true))
   }, [dispatch])

   return (
     <div className="home-page-container">
       <div className="home-content-container">
         <MenuButton
           content={language === "eng" ? "ABOUT ME" : `SOBRE MI`}
           className={theme === "cmyk" ? `top cyan ${content}` : `top gray ${content}`}
           onClick={() => handleMenuClick("about")}
         />
         <MenuButton
           content={language === "eng" ? "PROJECTS" : `PROYECTOS`}
           className={theme === "cmyk" ? `middle magenta ${content}` : `middle dark-gray ${content}`}
           onClick={() => handleMenuClick("projects")}
         />
         <MenuButton
           content={language === "eng" ? "CONTACT" : `CONTACTO`}
           className={theme === "cmyk" ? `bottom yellow ${content}` : `bottom light-gray ${content}`}
           onClick={() => handleMenuClick("contact")}
         />
         {content === "projects" && <ProjectsContent/>}
       </div>
     </div>
   );
}

export default Home;