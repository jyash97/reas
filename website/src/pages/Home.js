import React from "react";
import { styled } from "reakit";
import Hero from "../components/Hero";
import HomeExample from "../components/HomeExample";
import Credits from "../components/Credits";
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
