import React from "react";
import { styled, Flex, List, Grid, Link } from "reakit";
import { prop } from "styled-tools";
import { NavLink as RRLink } from "react-router-dom";
import MenuIcon from "react-icons/lib/md/menu";
import OpenInNewIcon from "react-icons/lib/md/open-in-new";
import GitHubIcon from "react-icons/lib/go/mark-github";
import ContentWrapper from "../elements/ContentWrapper";
import ViewportContainer from "../containers/ViewportContainer";
import Logo from "../elements/Logo";
import ButtonTransparent from "../elements/ButtonTransparent";
import Icon from "../elements/Icon";

const Wrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  height: 60px;
  width: 100%;
  justify-content: center;
  background-color: white;
  z-index: 999;
`;

const Layout = styled(Grid)`
  align-items: center;
  grid-gap: 40px;
  width: 100%;
  grid-template: "logo nav . github" 60px / auto auto 1fr auto;
  @media (max-width: 768px) {
    grid-template: "menu logo github" 60px / 40px auto 40px;
    justify-content: space-between;
  }
`;

const LogoLink = styled(RRLink)`
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  align-items: center;
  text-decoration: none;
`;

const Nav = styled(List.as([Grid, "nav"]))`
  grid-auto-flow: column;
  grid-gap: 20px;
  font-size: 20px;
  padding-top: 6px;
`;

const NavLink = styled(RRLink)`
  display: block;
  line-height: 50px;
  border-bottom: 3px solid transparent;
  color: ${prop("theme.black")};
  text-decoration: none;
  &:hover {
    border-color: ${prop("theme.pink")};
  }
  &.active {
    border-color: ${prop("theme.pink3")};
  }
`;

const GitHubLink = styled(Link)`
  display: grid;
  grid-gap: 4px;
  align-items: center;
  grid-auto-flow: column;
  color: ${prop("theme.black")};
  font-size: 18px;
  justify-self: flex-end;
`;

const HorizontalNav = () => (
  <Nav>
    <li>
      <NavLink to="/guide">Guide</NavLink>
    </li>
    <li>
      <NavLink to="/components">Components</NavLink>
    </li>
  </Nav>
);

const Desktop = () => (
  <React.Fragment>
    <Grid.Item area="logo">
      <LogoLink to="/">
        <Logo height={26} />
      </LogoLink>
    </Grid.Item>
    <Grid.Item as={HorizontalNav} area="nav" />
    <Grid.Item
      as={GitHubLink}
      area="github"
      href="https://github.com/reakit/reakit"
      target="_blank"
    >
      GitHub<OpenInNewIcon />
    </Grid.Item>
  </React.Fragment>
);

const Mobile = () => (
  <React.Fragment>
    <Grid.Item as={ButtonTransparent} area="menu">
      <Icon as={MenuIcon} />
    </Grid.Item>
    <Grid.Item area="logo">
      <LogoLink to="/">
        <Logo height={26} />
      </LogoLink>
    </Grid.Item>
    <Grid.Item
      as={GitHubLink}
      area="github"
      href="https://github.com/reakit/reakit"
      target="_blank"
    >
      <Icon as={GitHubIcon} />
    </Grid.Item>
  </React.Fragment>
);

const Topbar = props => (
  <Wrapper {...props}>
    <ContentWrapper>
      <Layout>
        <ViewportContainer>
          {({ width }) => (width > 768 ? <Desktop /> : <Mobile />)}
        </ViewportContainer>
      </Layout>
    </ContentWrapper>
  </Wrapper>
);

export default Topbar;
