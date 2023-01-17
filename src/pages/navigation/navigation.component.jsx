import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/features/theme/themeSlice";
import { Switch } from "antd";
import './navigation.styles.scss';

const Nav = () => {
   const dispatch = useDispatch();
   const { theme } = useSelector((state) => state.theme);

   const handleThemeChange = (value) => {
     dispatch(setTheme(value === true ? "bw" : "cmyk"));
   };

   return (
     <nav className={`nav-container ${theme}`}>
       <div className="theme-switch-container">
         <Switch
           checkedChildren="b&w"
           unCheckedChildren="cmyk"
           checked={theme === "bw"}
           onChange={handleThemeChange}
           className={`theme-switch ${theme}`}
         />
       </div>
       <Outlet />
     </nav>
   );
}

export default Nav;