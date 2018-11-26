import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";

import AppRouter from "./components/Router";
import * as serviceWorker from "./serviceWorker";
const templateApp = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(templateApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
