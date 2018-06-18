import React from "react";
import { as, styled, Grid, Paragraph, Link } from "reakit";
import ContentWrapper from "../elements/ContentWrapper";
import Heading from "../elements/Heading";

const Wrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled(Grid)`
  text-align: center;
`;

const Title = styled(as("h3")(Heading))``;

const HomeFeatures = props => (
  <Wrapper {...props}>
    <Feature>
      <Title>Composable</Title>
      <Paragraph>ddd</Paragraph>
    </Feature>
    <Feature>
      <Title>Accessible</Title>
      <Paragraph>
        Accessibility is one of the main goals of ReaKit. All components are
        WAI-ARIA compliant by default.
      </Paragraph>
    </Feature>
    <Feature>
      <Title>Reliable</Title>
      <Paragraph>
        All components follow the{" "}
        <Link href="https://github.com/diegohaz/singel" target="_blank">
          Single Element Pattern
        </Link>. They follow specific rules which make them resemble native HTML
        elements.
      </Paragraph>
    </Feature>
  </Wrapper>
);

export default HomeFeatures;
