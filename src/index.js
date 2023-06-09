import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HashRouter basename="/">
          <App />
        </HashRouter>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


