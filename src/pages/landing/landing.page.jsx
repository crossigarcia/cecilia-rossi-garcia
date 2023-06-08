import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTitle } from "../../redux/features/nav-title/navTitleSlice";
import { setContent } from "../../redux/features/page-content/pageContentSlice";
import "./landing.styles.scss";

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(setTitle(false));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(setContent("large-menu"));
    navigate("/home");
  }

  return (
    <div className={`landing-page-container ${theme}`}>
      <div className={`landing-page-text-container`}>
        <h1 className={`landing-page-heading ${theme}`}>
          <span className={`landing-page-link ${theme}`} onClick={handleClick}>
            Cecilia Rossi Garc&iacute;a
          </span>
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
