import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // CSS globale (puoi aggiungere reset o stili base)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
