import React from "react";
import { ifProp } from "styled-tools";
import { styled, Hidden, Arrow, Perpendicular, keyframes } from "reakit";
import BoxCallContainer from "../containers/BoxCallContainer";

const animation = keyframes`
  0% { transform: translateY(0) }
  40% { transform: translateY(30px) }
  100% { transform: translateY(0) }
`;

const Text = styled(Hidden)`
  position: absolute;
  color: #999;
  animation: 2s infinite ${animation} ease-in-out;
  display: block !important;
  font-size: 14px;
  opacity: 1;
  transition: 200ms opacity ease-in-out;
  ${ifProp({ visible: false }, "opacity: 0")};
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const BoxCall = props => (
  <BoxCallContainer>
    {hidden => (
      <Text relative {...hidden} {...props}>
        open the box
        <Arrow
          as={Perpendicular}
          pos="bottom"
          color="transparent"
          border="1px solid #999999"
          borderTop="none"
        />
      </Text>
    )}
  </BoxCallContainer>
);

export default BoxCall;
