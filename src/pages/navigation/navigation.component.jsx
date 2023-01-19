import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/features/theme/themeSlice";
import { setLanguage } from "../../redux/features/language/languageSlice";
import { Switch } from "antd";
import "./navigation.styles.scss";

const Nav = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { language } = useSelector((state) => state.language);
  const { title } = useSelector(state => state.title);

  const handleThemeChange = (value) => {
    dispatch(setTheme(value === true ? "bw" : "cmyk"));
  };

  const handleLanguageChange = (value) => {
    dispatch(setLanguage(value === true ? "esp" : "eng"));
  };

  return (
    <nav className={`nav-container ${theme}`}>
      {title && <div className="nav-title-container">
        <h1>
          <Link to="/" className={`nav-title-link ${theme}`}>
            Cecilia Rossi Garc&iacute;a
          </Link>
        </h1>
      </div>}
      <div className="switch-container">
        <Switch
          checkedChildren="espanol"
          unCheckedChildren="english"
          checked={language === "esp"}
          onChange={handleLanguageChange}
          className={`language-switch ${language}`}
        />
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
};

export default Nav;
