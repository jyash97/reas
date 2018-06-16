import React from "react";
import { Link } from "react-router-dom";
import LibraryBooksIcon from "react-icons/lib/md/library-books";
import CodeIcon from "react-icons/lib/fa/code";
import GitHubIcon from "react-icons/lib/go/mark-github";
import { styled, Grid } from "reakit";
import ButtonPrimary from "../elements/ButtonPrimary";
import ButtonSecondary from "../elements/ButtonSecondary";

const Wrapper = styled(Grid)`
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-gap: 8px;
  @media (max-width: 768px) {
    grid-auto-flow: row;
  }
`;

const HomeButtons = props => (
  <Wrapper {...props}>
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
  </Wrapper>
);

export default HomeButtons;
