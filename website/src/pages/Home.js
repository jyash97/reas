import React from "react";
import { styled, Flex } from "reas";
import HomeHero from "../compounds/HomeHero";
import HomeExample from "../compounds/HomeExample";
import Credits from "../compounds/Credits";
import Topbar from "../compounds/Topbar";

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: sans-serif;
`;

const Home = () => (
  <Wrapper>
    <Topbar />
    <HomeHero />
    <HomeExample />
    <Credits />
  </Wrapper>
);

export default Home;
