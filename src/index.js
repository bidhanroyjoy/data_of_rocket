import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./Redux/Store";
let store = Store();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);