import React from "react";
import { styled, Grid, Inline } from "reakit";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import LibraryBooksIcon from "react-icons/lib/md/library-books";
import CodeIcon from "react-icons/lib/go/code";
import GitHubIcon from "react-icons/lib/go/mark-github";
import ButtonPrimary from "../elements/ButtonPrimary";
import ButtonSecondary from "../elements/ButtonSecondary";
import Heading from "../elements/Heading";
import LogoSymbol from "../elements/LogoSymbol";
import ContentWrapper from "../elements/ContentWrapper";
import ButtonRounded from "../elements/ButtonRounded";
import Icon from "../elements/Icon";
import ButtonGray from "../elements/ButtonGray";

const Wrapper = styled(ContentWrapper)`
  display: grid;
  grid-template:
    "logo text" 150px
    "buttons buttons" auto / 150px 1fr;
  grid-gap: 50px 30px;
  max-width: 768px;
  padding: 100px;
  place-items: center;
  align-content: baseline;

  @media (max-width: 768px) {
    padding: 40px 20px;
    grid-gap: 30px;
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

const Word = styled(Inline)`
  font-weight: 500;
`;

const words = [
  "interactive",
  "composable",
  "accessible",
  "styleable",
  "responsive",
  "minimalist"
];

const Text = () => (
  <Typing speed={100}>
    {words.map(word => (
      <Word key={word}>
        {word}
        <Typing.Delay ms={2000} />
        <Typing.Backspace speed={20} count={word.length - 1} />
        <Typing.Backspace speed={100} count={1} />
      </Word>
    ))}
  </Typing>
);

const Hero = props => (
  <Wrapper {...props}>
    <LogoSymbol height="100%" gridArea="logo" />
    <Headline gridArea="text">
      Toolkit for building <Text /> UIs with React
    </Headline>
    <Buttons gridArea="buttons">
      <ButtonPrimary as={[ButtonRounded, Link]} to="/guide">
        <LibraryBooksIcon />Get Started
      </ButtonPrimary>
      <ButtonSecondary as={[ButtonRounded, Link]} to="/components">
        <CodeIcon />Components
      </ButtonSecondary>
      <ButtonGray
        as={[ButtonRounded, "a"]}
        href="https://github.com/reakit/reakit"
        target="_blank"
        paddingLeft={10}
      >
        <Icon as={GitHubIcon} />GitHub
      </ButtonGray>
    </Buttons>
  </Wrapper>
);

export default Hero;
