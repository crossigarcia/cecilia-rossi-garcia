import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './landing.styles.scss';


const Landing = () => {
  const { theme } = useSelector((state) => state.theme);
  
   return (
     <div className={`landing-page-container ${theme}`}>
       <div className={`landing-page-text-container`}>
         <h1 className={`landing-page-heading ${theme}`}>
           Cecilia Rossi Garc&iacute;a
         </h1>
       </div>
     </div>
   );
}

export default Landing;