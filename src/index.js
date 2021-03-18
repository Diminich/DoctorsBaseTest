import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./reducer/reducer-store";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, rootElement);
