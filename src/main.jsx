import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContextProv from "./context/ThemeContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProv>
    <App />
  </ThemeContextProv>
);
