import React from "react";
import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from "../../../styles/user/about/AboutHero.styles";

const AboutHero: React.FC = () => {
  return (
    <HeroSection>
      <HeroOverlay />
      <HeroContent maxWidth="xl">
        <HeroTitle variant="h1">About Us</HeroTitle>
        <HeroSubtitle variant="body1">
          Empowering agriculture through innovation and sustainable solutions.
        </HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default AboutHero;
