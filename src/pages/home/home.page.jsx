import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setTitle } from '../../redux/features/nav-title/navTitleSlice';
import { setContent } from '../../redux/features/page-content/pageContentSlice';
import './home.styles.scss';

const Home = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(setTitle(true));
      dispatch(setContent("large-menu"));
   }, [dispatch])

   return (
     <div className="home-page-container">
     </div>
   );
}

export default Home;