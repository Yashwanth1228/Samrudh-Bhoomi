import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";

import {
  HeroSection,
  HeroOverlay,
  HeroContent,
  BreadcrumbNav,
  BreadcrumbLink,
  PageTitle,
  PageSubtitle,
} from "../../../styles/user/products/ProductsHero.styles";

interface HeroType {
  bannerTitle: string;
  bannerDescription: string;
  bannerImage: {
    url: string;
    publicId: string;
  };
}

interface Props {
  hero?: HeroType;
}

export default function ProductsHero({
  hero,
}: Props) {
  const title =
    hero?.bannerTitle || "Our Products";

  const description =
    hero?.bannerDescription ||
    "Empowering farmers with high-quality, scientifically backed inputs for sustainable and maximized yield.";

  const bannerImage =
    hero?.bannerImage?.url ||
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDvBZAjGZ93pWC2HUTM9p7Yif7yjDzEqWogI-YM-HZoHWtRoBH8lQt-Y30hwD1oDOmeoqNfHYmuwqs4ahUGuXWtvwjKqehC6vEfiB3wG2jw98DhzJSNc8DXIiAZ-EaxuUA_JDlfMl7U8SCf20Vn_hshQRyaXGb8X6JEZ7NUVlaho25s4hXNV2_HaefEuSAnBi9RDgLMZ1A-1FDON4p6wRMIDZrP4OVMN3In3vnVEpNCb-Cd0VJOrMDiol7J8vmjpXV3NE1SA6sBAZLr";

  return (
    <HeroSection
      sx={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <HeroOverlay />

      <HeroContent maxWidth="xl">
        <BreadcrumbNav>
          <Breadcrumbs
            separator={
              <ChevronRightIcon
                sx={{ fontSize: 14 }}
              />
            }
          >
            <BreadcrumbLink href="/">
              Home
            </BreadcrumbLink>

            <Typography
              color="text.primary"
              sx={{
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Products
            </Typography>
          </Breadcrumbs>
        </BreadcrumbNav>

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