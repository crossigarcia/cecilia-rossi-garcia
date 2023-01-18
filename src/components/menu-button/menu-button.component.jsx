// import { useSelector } from "react-redux";
import './menu-button.styles.scss';

export const MenuButton = (props) => {
   // const { theme } = useSelector((state) => state.theme);

   return (
     <button
       type="button"
       onClick={props.onClick}
       className={`menu-button ${props.className}`}
     >
       {props.content}
     </button>
   );
};
