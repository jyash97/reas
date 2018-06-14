import React from "react";
import { Image } from "reas";
import icon from "../../../logo/icon.svg";

const LogoSymbol = props => (
  <Image src={icon} alt="ReaKit" height={24} {...props} />
);

export default LogoSymbol;
