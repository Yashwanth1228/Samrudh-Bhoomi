import React from "react";
import { Container } from "@mui/material";
import {
  WhySectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  WhyGrid,
  WhyCard,
  WhyIconWrapper,
  WhyTitle,
  WhyText,
} from "../../../styles/user/home/WhySection.styles";
import {
  Science as ScienceIcon,
  SupportAgent as SupportAgentIcon,
  LocalShipping as LocalShippingIcon,
} from "@mui/icons-material";

const whyData = [
  {
    icon: <ScienceIcon sx={{ fontSize: 32 }} />,
    title: "Scientific Approach",
    text: "Our products are developed through rigorous R&D, ensuring they meet the specific agronomic needs of modern farming environments.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
    title: "Expert Support",
    text: "Access a team of dedicated agronomists ready to provide personalized consultation and troubleshooting for your farm.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 32 }} />,
    title: "Reliable Supply Chain",
    text: "With a robust distribution network, we ensure timely delivery of essential inputs exactly when you need them.",
  },
];

const WhySection: React.FC = () => {
  return (
    <WhySectionContainer>
      <Container maxWidth="xl">
        <SectionHeader>
          <SectionTitle variant="h2">Why Choose Samrudh Bhoomi?</SectionTitle>
          <SectionSubtitle variant="body1">
            We bring enterprise-grade solutions and uncompromising quality to
            every acre you farm.
          </SectionSubtitle>
        </SectionHeader>
        <WhyGrid>
          {whyData.map((item, index) => (
            <WhyCard key={index}>
              <WhyIconWrapper>{item.icon}</WhyIconWrapper>
              <WhyTitle variant="h6">{item.title}</WhyTitle>
              <WhyText variant="body2">{item.text}</WhyText>
            </WhyCard>
          ))}
        </WhyGrid>
      </Container>
    </WhySectionContainer>
  );
};

export default WhySection;
