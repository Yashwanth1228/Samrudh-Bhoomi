import React from "react";
import { Container, CardContent } from "@mui/material";
import {
  ProductsSectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ProductsGrid,
  ProductCard,
  ProductImageWrapper,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductLink,
} from "../../../styles/user/home/ProductsSection.styles";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

const products = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYg0FG286yC9xdhhg5uRLrR9xW1nZ8rdU2KwOWZQxawIAl17sBDRMBz93aJsAzfVryouqjmFIoNrrgwA7HkvlFByYQwiNKzmg2bD8PzVtUZ7_H-1Od9WXiRntYJCAUestBRFWfdAvYMqSYxw7qlmtBKvZXo-EOj_lzzVhyOOIyehAysPewpuix08B9TgO1mUJ_hFw3lrT0LW5fP5ZwOONb2n8AfWYcLnYoKtSwiTU3zqbPtI_Lu8n4zv5FDcfarYpTwlW8JoCpDu3",
    title: "Fertilizers",
    description:
      "Premium organic and synthetic fertilizers formulated for optimal soil health and nutrient delivery.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDld63Wq3IrKLiL4jvSKmoA6L-_6_44aAsTl-H9fPVe7FLp7t8jBesGbQuR7pMv0PrHSQFe6HXzoOCLDW2tHD12JMmmHQmPF-l3Vhs-sCSGQthE2FRl2BZF0TP8wcHD8WBo2SajLOsOPD4MwCeXOHMYeDPmKcTMV1ZIss_YTVGsxYRIZ57OPPN47LpO2p6eYiWaH20V86Zw3BBw1QFxtE8V3wbVDQKPFUYlRRPhCzF26XGIm2l7dg9pXUIYnMZcPdgu6Gcm1bh4kKrN",
    title: "Seeds",
    description:
      "High-yield, disease-resistant seeds selected for local climates and maximum productivity.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWUtwQXMtAalFl9MWfW-ggYAVRavUGZ6SPHknED6KPs-2w9WeCrSJC0jt78uGugHTQrdlhmTRgStkokVl12LomhICeOCAu9E_nr7Ltdjg6izJiSBEz54tYxcmDWZAfjviUO7NUx8w1rT2fgqZaC-sCU9GrZwJlIinJU01FodvmnvGR9Md4nPWeUztaOAr2t3P3UgBnnbz75PBdNAD7ouEFDvipID7VtWjVUKQXbv1TSMMoXoRqpSs4vd5RHVDDu2hG83LQDKtk5p2X",
    title: "Pesticides",
    description:
      "Eco-friendly crop protection solutions that effectively manage pests while minimizing environmental impact.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDASLBEAWtx6pYqodWBTl223A_7MEjfR6F9dfGEH17h2s9_kjxQgk9dg8DwDxA3gBu8I6PPIhR30MOEjDODQkO1zU6OEVHIv354sLZAOzwiH6iEDqqbtpTvyJlMjKeOG4nZhNZpL2CWIBThLgTDPFDfXPoceM-p1MA8QDDv8kAzkAi-SPIW5uVH7zTh_b81btDCUr3nKqAPJwwDPPgPNRU7n4gN-Jv30-k4KqNACEx57u_kypDMs7VbIQln_eRiUv2-DBh0p6yJWpMk",
    title: "Equipment",
    description:
      "Modern, efficient farming tools and machinery to streamline your agricultural operations.",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <ProductsSectionContainer>
      <Container maxWidth="xl">
        <SectionHeader>
          <SectionTitle variant="h2">Our Products &amp; Solutions</SectionTitle>
          <SectionSubtitle variant="body1">
            Comprehensive agricultural inputs designed to maximize your yield
            and ensure sustainable farming practices.
          </SectionSubtitle>
        </SectionHeader>
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <ProductImageWrapper>
                <ProductImage src={product.image} alt={product.title} />
                <ProductTitle variant="h6">{product.title}</ProductTitle>
              </ProductImageWrapper>
              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <ProductDescription variant="body2">
                  {product.description}
                </ProductDescription>
                <ProductLink href="#">
                  Explore Range
                  <ArrowForwardIcon sx={{ fontSize: 16, ml: 0.5 }} />
                </ProductLink>
              </CardContent>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </ProductsSectionContainer>
  );
};

export default ProductsSection;
