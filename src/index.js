import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
