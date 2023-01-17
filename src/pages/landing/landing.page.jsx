import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/features/theme/themeSlice';
import { Switch } from "antd";
import './landing.styles.scss';


const Landing = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);
  
  const handleThemeChange = (value) => {
    dispatch(setTheme(value === true ? "bw" : "cmyk"));
  }

   return (
     <div className={`landing-page-container ${theme}`}>
       <div className='theme-switch-container'>
          <Switch checkedChildren="b&w" unCheckedChildren="cmyk" checked={theme === 'bw'} onChange={handleThemeChange}/>
       </div>
       <div className={`landing-page-text-container`}>
         <h1 className={`landing-page-heading ${theme}`}>
           Cecilia Rossi Garc&iacute;a
         </h1>
       </div>
     </div>
   );
}

export default Landing;