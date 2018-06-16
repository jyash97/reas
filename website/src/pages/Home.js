import React from "react";
import { styled, Grid } from "reakit";
import { prop } from "styled-tools";
import Hero from "../compounds/Hero";
import HomeExample from "../compounds/HomeExample";
import Credits from "../compounds/Credits";
import Header from "../compounds/Header";

const Layout = styled(Grid)`
  background-color: white;
  color: ${prop("theme.black")};
  justify-items: center;
  min-height: 100vh;
  width: 100%;
  font-family: sans-serif;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
`;

const StyledHero = styled(Hero)`
  margin-top: 60px;
`;

const Home = () => (
  <Layout>
    <StyledHeader />
    <StyledHero />
    <HomeExample />
    <Credits />
  </Layout>
);

export default Home;
