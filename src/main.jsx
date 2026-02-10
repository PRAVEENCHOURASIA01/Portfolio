/**
 * MAIN.JSX - Application Entry Point
 *
 * This is the entry file that renders the React app.
 * You typically don't need to edit this file unless you want to:
 * - Add global providers (like Context API, Redux, etc.)
 * - Configure strict mode
 * - Add error boundaries
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);