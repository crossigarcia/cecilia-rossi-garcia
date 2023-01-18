import { MenuButton } from '../../components/menu-button/menu-button.component';
import { useSelector } from "react-redux";
import './home.styles.scss';

const Home = () => {
   const { language } = useSelector((state) => state.language);

   const handleMenuClick = (page) => {
      console.log(page)
   }

   return (
     <div className="home-page-container">
       <div className="home-menu-container">
         <MenuButton
           content={language === "eng" ? "ABOUT ME" : `SOBRE MI`}
           className="cyan"
           onClick={() => handleMenuClick("about")}
         />
         <MenuButton
           content={language === "eng" ? "PROJECTS" : `PROYECTOS`}
           className="magenta"
           onClick={() => handleMenuClick("projects")}
         />
         <MenuButton
           content={language === "eng" ? "CONTACT" : `CONTACTO`}
           className="yellow"
           onClick={() => handleMenuClick("contact")}
         />
       </div>
     </div>
   );
}

export default Home;