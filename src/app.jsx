/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "@popperjs/core";
import "./assets/styles/app.scss";
import "react-toastify/dist/ReactToastify.css";
import Index from "./pages/Index";

ReactDOM.render(
  <>
    <Index />
    <ToastContainer autoClose={3000} />
  </>,
  document.querySelector("#root")
);
