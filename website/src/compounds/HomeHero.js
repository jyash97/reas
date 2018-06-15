import React from "react";
import { styled, Flex, Grid } from "reas";
import Heading from "../elements/Heading";
import LogoSymbol from "../elements/LogoSymbol";
import ContentWrapper from "../elements/ContentWrapper";

const Wrapper = styled(Flex)`
  position: relative;
  padding: 120px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Headline = styled(Heading)`
  margin: 0;
  font-size: 44px;
  font-family: sans-serif;
  color: #333;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const HomeBanner = props => (
  <Wrapper {...props}>
    <ContentWrapper maxWidth={600}>
      <Grid column gap={20}>
        <LogoSymbol height={150} />
        <Headline>Toolkit for building interactive UIs with React</Headline>
      </Grid>
    </ContentWrapper>
  </Wrapper>
);

export default HomeBanner;
