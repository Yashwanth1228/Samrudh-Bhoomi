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
} from "../../../styles/user/contact/ContactHero.styles";

const ContactHero: React.FC = () => {
  return (
    <HeroSection>
      <HeroOverlay />
      <HeroContent maxWidth="xl">
        {/* <BreadcrumbNav>
          <Breadcrumbs separator={<ChevronRightIcon sx={{ fontSize: 14 }} />}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            <Typography
              color="text.primary"
              sx={{ fontSize: 12, fontWeight: 600 }}
            >
              Contact Us
            </Typography>
          </Breadcrumbs>
        </BreadcrumbNav> */}
        <PageTitle variant="h1">Contact Us</PageTitle>
        <PageSubtitle variant="body1">
          Get in touch with our agricultural experts. We're here to support your
          farming operations with data-driven solutions and premium support.
        </PageSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default ContactHero;
