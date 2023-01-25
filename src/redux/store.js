import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import languageReducer from "./features/language/languageSlice";
import navTitleReducer from "./features/nav-title/navTitleSlice";
import pageContentReducer from "./features/page-content/pageContentSlice";

export const store = configureStore({
   reducer: {
      theme: themeReducer,
      language: languageReducer,
      title: navTitleReducer,
      content: pageContentReducer
   }
});