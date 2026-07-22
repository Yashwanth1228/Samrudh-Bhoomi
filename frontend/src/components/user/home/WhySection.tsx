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
  ScienceOutlined,
  SupportAgentOutlined,
  LocalShippingOutlined,
  VerifiedOutlined,
  SpaOutlined,
  AgricultureOutlined,
} from "@mui/icons-material";

interface WhyProps {
  whyChooseUs?: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

/* Default cards */
const defaultCards = [
  {
    icon: "ScienceOutlined",
    title: "Scientific Approach",
    description:
      "Our products are developed through rigorous R&D, ensuring they meet the specific agronomic needs of modern farming environments.",
  },
  {
    icon: "SupportAgentOutlined",
    title: "Expert Support",
    description:
      "Access a team of dedicated agronomists ready to provide personalized consultation and troubleshooting for your farm.",
  },
  {
    icon: "LocalShippingOutlined",
    title: "Reliable Supply Chain",
    description:
      "With a robust distribution network, we ensure timely delivery of essential inputs exactly when you need them.",
  },
];

/* Icon Mapping */
const iconMap: Record<string, React.ReactNode> = {
  ScienceOutlined: <ScienceOutlined sx={{ fontSize: 32 }} />,
  SupportAgentOutlined: <SupportAgentOutlined sx={{ fontSize: 32 }} />,
  LocalShippingOutlined: <LocalShippingOutlined sx={{ fontSize: 32 }} />,
  VerifiedOutlined: <VerifiedOutlined sx={{ fontSize: 32 }} />,
  SpaOutlined: <SpaOutlined sx={{ fontSize: 32 }} />,
  AgricultureOutlined: <AgricultureOutlined sx={{ fontSize: 32 }} />,
};

export default function WhySection({
  whyChooseUs,
}: WhyProps) {
  const cards =
    whyChooseUs?.cards && whyChooseUs.cards.length > 0
      ? whyChooseUs.cards
      : defaultCards;

  return (
    <WhySectionContainer>
      <Container maxWidth="xl">
        <SectionHeader>
          <SectionTitle variant="h2">
            {whyChooseUs?.title || "Why Choose Samrudh Bhoomi?"}
          </SectionTitle>

          <SectionSubtitle variant="body1">
            {whyChooseUs?.subtitle ||
              "We bring enterprise-grade solutions and uncompromising quality to every acre you farm."}
          </SectionSubtitle>
        </SectionHeader>

        <WhyGrid>
          {cards.map((card, index) => (
            <WhyCard key={index}>
              <WhyIconWrapper>
                {iconMap[card.icon] || (
                  <ScienceOutlined sx={{ fontSize: 32 }} />
                )}
              </WhyIconWrapper>

              <WhyTitle variant="h6">
                {card.title}
              </WhyTitle>

              <WhyText variant="body2">
                {card.description}
              </WhyText>
            </WhyCard>
          ))}
        </WhyGrid>
      </Container>
    </WhySectionContainer>
  );
}