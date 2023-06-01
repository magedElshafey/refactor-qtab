import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// aos
import "aos/dist/aos.css";
// redux
import { Provider } from "react-redux";
import store from "./Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
