import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store } from './redux/store'
import { Provider } from 'react-redux'

import App from "./App";
import "./index.css";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);
