import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTitle } from "../../redux/features/nav-title/navTitleSlice";
import "./landing.styles.scss";

const Landing = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(setTitle(false));
  }, [dispatch]);

  return (
    <div className={`landing-page-container ${theme}`}>
      <div className={`landing-page-text-container`}>
        <h1 className={`landing-page-heading ${theme}`}>
          <Link to="/home" className={`landing-page-link ${theme}`}>
            Cecilia Rossi Garc&iacute;a
          </Link>
        </h1>
        <div className="sub-heading-container">
          <span className={`sub-heading left ${theme}`}>frontend</span>
          <span className={`sub-heading ${theme}`}>ui/ux</span>
          <span className={`sub-heading right ${theme}`}>developer</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
