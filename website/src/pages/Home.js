import React from "react";
import { styled } from "reakit";
import Hero from "../compounds/Hero";
import HomeExample from "../compounds/HomeExample";
import Credits from "../compounds/Credits";
import CoreLayout from "../layouts/CoreLayout";

const StyledHero = styled(Hero)`
  margin-top: 60px;
`;

const Home = () => (
  <CoreLayout>
    <StyledHero />
    <HomeExample />
    <Credits />
  </CoreLayout>
);

export default Home;
