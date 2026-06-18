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

const ProductsHero: React.FC = () => {
  return (
    <HeroSection>
      <HeroOverlay />
      <HeroContent maxWidth="xl">
        <BreadcrumbNav>
          <Breadcrumbs separator={<ChevronRightIcon sx={{ fontSize: 14 }} />}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            <Typography
              color="text.primary"
              sx={{ fontSize: 12, fontWeight: 600 }}
            >
              Products
            </Typography>
          </Breadcrumbs>
        </BreadcrumbNav>
        <PageTitle variant="h1">Our Products</PageTitle>
        <PageSubtitle variant="body1">
          Empowering farmers with high-quality, scientifically backed inputs for
          sustainable and maximized yield.
        </PageSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default ProductsHero;
