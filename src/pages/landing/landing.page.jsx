import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './landing.styles.scss';


const Landing = () => {
  const { theme } = useSelector((state) => state.theme);

   return (
     <div className={`landing-page-container ${theme}`}>
       <div className={`landing-page-text-container`}>
         <h1 className={`landing-page-heading ${theme}`}>
           <Link to="/home" className={`landing-page-link ${theme}`}>Cecilia Rossi Garc&iacute;a</Link>
         </h1>
         <div className="sub-heading-container">
           <span className={`sub-heading left ${theme}`}>frontend</span>
           <span className={`sub-heading ${theme}`}>ui/ux</span>
           <span className={`sub-heading right ${theme}`}>developer</span>
         </div>
       </div>
     </div>
   );
}

export default Landing;