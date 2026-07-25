import React from "react";
import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from "../../../styles/user/about/AboutHero.styles";
import { HeroType } from "./aboutCms";

interface Props {
  hero?: HeroType;
}

export default function AboutHero({ hero }: Props) {
  return (
    <HeroSection
      sx={{
        backgroundImage: `url(${
          hero?.image?.url ||
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCFLRcr0jEbSoS1SyMpEUGKKy_9-IPImPtP5o8mJVA-3T982pyn0JDbPTmRT6WUu2adGTvOkqI6-u4NjtcOZBoXcp3tQykBkkQqAzlF6ZzF1NJlTAmCcZG9rq9YoY_0sQ8xVWH2IBZgtwYMuI23fuh0CKl50UZ062Vm76b6d_oT7D8EwZhfzfnedvXjHY-Rx10wBO1yNhQ2hFVv5GXq5VWMPeEQgcI7zfMNkeKKaZZxyYrzeB_tcvghOnxUU5k45oFnItrjzsU-aTgZ"
        })`,
      }}
    >
      <HeroOverlay />

      <HeroContent maxWidth="xl">
        <HeroTitle variant="h1">
          {hero?.title || "About Us"}
        </HeroTitle>

        <HeroSubtitle variant="body1">
          {hero?.description ||
            "Empowering agriculture through innovation and sustainable solutions."}
        </HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
}