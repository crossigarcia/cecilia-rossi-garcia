import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/features/theme/themeSlice";
import { setLanguage } from "../../redux/features/language/languageSlice";
import { setContent } from "../../redux/features/page-content/pageContentSlice";
import { Switch } from "antd";
import { MenuButton } from "../../components/menu-button/menu-button.component";
import "./navigation.styles.scss";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.theme);
  const { language } = useSelector((state) => state.language);
  const { title } = useSelector((state) => state.title);
  const { content } = useSelector((state) => state.content);

  const handleMenuClick = (page) => {
    dispatch(setContent(page));
  };

  useEffect(() => {
    if (content !== "large-menu") {
      navigate(`/${content}`);
    } 
  }, [content, navigate]);

  const handleThemeChange = (value) => {
    dispatch(setTheme(value === true ? "bw" : "cmyk"));
  };

  const handleLanguageChange = (value) => {
    dispatch(setLanguage(value === true ? "esp" : "eng"));
  };

  return (
    <nav className={`nav-container ${theme}`}>
      {title && (
        <div className="nav-title-container">
          <h1 className={`nav-title-link ${theme}`} onClick={() => handleMenuClick("landing")}>
            Cecilia Rossi Garc&iacute;a
          </h1>
        </div>
      )}
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
      {title && (
        <>
          <MenuButton
            content={language === "eng" ? "ABOUT ME" : `SOBRE MI`}
            className={
              theme === "cmyk" ? `top cyan ${content}` : `top gray ${content}`
            }
            onClick={() => handleMenuClick("about")}
          />
          <MenuButton
            content={language === "eng" ? "PROJECTS" : `PROYECTOS`}
            className={
              theme === "cmyk"
                ? `middle magenta ${content}`
                : `middle dark-gray ${content}`
            }
            onClick={() => handleMenuClick("projects")}
          />
          <MenuButton
            content={language === "eng" ? "CONTACT" : `CONTACTO`}
            className={
              theme === "cmyk"
                ? `bottom yellow ${content}`
                : `bottom light-gray ${content}`
            }
            onClick={() => handleMenuClick("contact")}
          />
        </>
      )}
      <Outlet />
    </nav>
  );
};

export default Nav;
