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

interface HeroProps {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: {
      url: string;
    };
  };
}

export default function HeroSection({
  hero,
}: HeroProps) {
  return (
    <HeroSectionContainer
  backgroundImage={hero?.backgroundImage?.url}
>
      <HeroOverlay />
      <HeroContent maxWidth="xl">
        <HeroTitle variant="h1">
        {hero?.title || "Sustainable Solutions for Agricultural Excellence"}
        </HeroTitle>
        <HeroSubtitle variant="body1">
        {hero?.subtitle || "Empowering farmers with premium fertilizers, high-yield seeds, and organic growth solutions designed for the future of farming."}
        </HeroSubtitle>
        <HeroButtons>
          <PrimaryButton variant="contained">Explore Products</PrimaryButton>
          <SecondaryButton variant="outlined">Contact Us</SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroSectionContainer>
  );
};

