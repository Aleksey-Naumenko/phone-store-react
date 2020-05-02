import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.scss";
import { ProductProvider } from "./context";

ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById("root")
);
