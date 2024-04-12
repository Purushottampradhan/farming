
import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.scss";
import "./index.scss";
import App from "./App";
import i18n from "./i18n";

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
