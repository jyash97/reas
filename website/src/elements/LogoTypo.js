import React from "react";
import { Image } from "reas";
import typo from "../../../logo/typo.svg";

const LogoTypo = props => (
  <Image src={typo} alt="ReaKit" height={100} {...props} />
);

export default LogoTypo;
