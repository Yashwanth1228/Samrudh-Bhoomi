import React from "react";
import { Typography } from "@mui/material";
import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  PageTitle,
  PageSubtitle,
} from "../../../styles/user/contact/ContactHero.styles";
import { HeroType } from "@/components/admin/cms/ContactCms/types";
interface Props {
  hero?: HeroType;
}

export default function ContactHero({
  hero,
}: Props) {
  const title =
    hero?.title || "Contact Us";

  const description =
    hero?.description ||
    "Get in touch with our agricultural experts. We're here to support your farming operations with data-driven solutions and premium support.";

  const backgroundImage =
    hero?.image?.url ||
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCFLRcr0jEbSoS1SyMpEUGKKy_9-IPImPtP5o8mJVA-3T982pyn0JDbPTmRT6WUu2adGTvOkqI6-u4NjtcOZBoXcp3tQykBkkQqAzlF6ZzF1NJlTAmCcZG9rq9YoY_0sQ8xVWH2IBZgtwYMuI23fuh0CKl50UZ062Vm76b6d_oT7D8EwZhfzfnedvXjHY-Rx10wBO1yNhQ2hFVv5GXq5VWMPeEQgcI7zfMNkeKKaZZxyYrzeB_tcvghOnxUU5k45oFnItrjzsU-aTgZ";

  return (
    <HeroSection
      sx={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <HeroOverlay />

      <HeroContent maxWidth="xl">
        <PageTitle variant="h1">
          {title}
        </PageTitle>

        <PageSubtitle variant="body1">
          {description}
        </PageSubtitle>
      </HeroContent>
    </HeroSection>
  );
}