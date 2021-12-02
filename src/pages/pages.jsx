/** @format */

import React from "react";
import loadable from "@loadable/component";
import Loader from "../components/Loader";

/**
 * loadable component is used to lazy load (code split) each component
 * App components are loaded from this file
 */
export const Home = loadable(() => import("./Home"), { fallback: <Loader /> });
