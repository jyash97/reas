import React from "react";
import { Hidden } from "reakit";

const BoxCallContainer = props => (
  <Hidden.Container initialState={{ visible: true }} context="box" {...props} />
);

export default BoxCallContainer;
