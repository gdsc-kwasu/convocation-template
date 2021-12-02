/** @format */

import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const Loader = () => {
  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #000000;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 75vh;
  `;
  return <BeatLoader css={override} size={12} color={"#000000"} />;
};

export default Loader;
