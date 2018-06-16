import React from "react";
import { styled, Flex, Grid } from "reakit";
import { Link } from "react-router-dom";
import LibraryBooksIcon from "react-icons/lib/md/library-books";
import CodeIcon from "react-icons/lib/fa/code";
import GitHubIcon from "react-icons/lib/go/mark-github";
import ButtonPrimary from "../elements/ButtonPrimary";
import ButtonSecondary from "../elements/ButtonSecondary";
import Heading from "../elements/Heading";
import LogoSymbol from "../elements/LogoSymbol";
import ContentWrapper from "../elements/ContentWrapper";

const Wrapper = styled(ContentWrapper)`
  display: grid;
  grid-template:
    "logo text" 150px
    "buttons buttons" auto / 150px 1fr;
  grid-gap: 30px;
  max-width: 768px;
  padding: 120px;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    padding: 40px 16px;
    grid-gap: 16px;
    grid-template:
      "logo" 100px
      "text"
      "buttons";
  }
`;

const Headline = styled(Heading)`
  margin: 0;
  font-size: 44px;
  font-family: sans-serif;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;

const Buttons = styled(Grid)`
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-gap: 8px;
  @media (max-width: 768px) {
    grid-auto-flow: row;
  }
`;

const HomeBanner = props => (
  <Wrapper {...props}>
    <LogoSymbol maxHeight="100%" gridArea="logo" />
    <Headline gridArea="text">
      Toolkit for building interactive UIs with React
    </Headline>
    <Buttons gridArea="buttons">
      <ButtonPrimary as={Link} to="/guide">
        <LibraryBooksIcon />Get Started
      </ButtonPrimary>
      <ButtonSecondary as={Link} to="/components">
        <CodeIcon />Components
      </ButtonSecondary>
      <ButtonSecondary
        as="a"
        href="https://github.com/reakit/reakit"
        target="_blank"
      >
        <GitHubIcon />GitHub
      </ButtonSecondary>
    </Buttons>
  </Wrapper>
);

export default HomeBanner;
