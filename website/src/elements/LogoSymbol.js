import React from "react";
import { Image } from "reas";
import symbol from "../../../logo/symbol.svg";

const LogoSymbol = props => (
  <Image src={symbol} alt="ReaKit" height={100} {...props} />
);

export default LogoSymbol;
