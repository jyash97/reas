import React from "react";
import { styled, Flex } from "reas";
import LogoSymbol from "../elements/LogoSymbol";

const Wrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #212121;
  color: white;
  padding: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Content = styled(Flex)`
  max-width: 1200px;
  width: 100%;
`;

const Topbar = props => (
  <Wrapper {...props}>
    <Content>
      <LogoSymbol />
    </Content>
  </Wrapper>
);

export default Topbar;
