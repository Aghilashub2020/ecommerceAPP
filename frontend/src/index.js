<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
=======
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
>>>>>>> bc7f08d8624838d70646318ae4be1f7fa02761c2
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
=======
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
>>>>>>> bc7f08d8624838d70646318ae4be1f7fa02761c2
);

serviceWorker.unregister();