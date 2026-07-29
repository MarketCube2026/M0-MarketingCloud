import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const isGitHubPages = import.meta.env.MODE === "github-pages";
const Router = isGitHubPages ? HashRouter : BrowserRouter;
const routerProps = isGitHubPages ? {} : { basename: import.meta.env.BASE_URL };

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router {...routerProps}>
      <App />
    </Router>
  </StrictMode>
);
