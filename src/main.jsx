import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { appstyle, css } from "./constants/data.js";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

root.className = appstyle;

const head = document.querySelector("head");
const style = document.createElement("style");
style.innerHTML = css;
head.appendChild(style);
