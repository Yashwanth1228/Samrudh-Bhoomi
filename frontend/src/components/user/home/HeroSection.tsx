import React from "react";
import {
  HeroSectionContainer,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
} from "../../../styles/user/home/HeroSection.styles";

const HeroSection: React.FC = () => {
  return (
    <HeroSectionContainer>
      <HeroOverlay />
      <HeroContent maxWidth="xl">
        <HeroTitle variant="h1">
          Sustainable Solutions for Agricultural Excellence
        </HeroTitle>
        <HeroSubtitle variant="body1">
          Empowering farmers with premium fertilizers, high-yield seeds, and
          organic growth solutions designed for the future of farming.
        </HeroSubtitle>
        <HeroButtons>
          <PrimaryButton variant="contained">Explore Products</PrimaryButton>
          <SecondaryButton variant="outlined">Contact Us</SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
