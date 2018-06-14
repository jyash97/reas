import React from "react";
import { styled, Flex } from "reas";
import Heading from "../elements/Heading";
import HomeBannerButtons from "./HomeBannerButtons";
import Logo from "../elements/Logo";

const Wrapper = styled(Flex)`
  position: relative;
  padding: 120px 80px 0px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 100px 20px 20px;
  }
`;

const Content = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
`;

const Text = styled(Heading)`
  text-align: center;
  margin: 75px 0 40px;
  font-size: 44px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const HomeBanner = props => (
  <Wrapper {...props}>
    <Content>
      <Logo />
      <Text>Toolkit for building interactive UI&apos;s with React</Text>
      <HomeBannerButtons />
    </Content>
  </Wrapper>
);

export default HomeBanner;
