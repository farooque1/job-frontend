import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  );
}

export default App;
