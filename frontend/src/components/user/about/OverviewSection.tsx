import React from "react";
import {
  AgricultureOutlined,
  ScienceOutlined,
  Co2Outlined,
  VerifiedOutlined,
  LocalShippingOutlined,
  SpaOutlined,
} from "@mui/icons-material";

import {
  OverviewSectionContainer,
  OverviewGrid,
  OverviewImageWrapper,
  OverviewImage,
  ImageCaption,
  OverviewContent,
  OverviewTitle,
  OverviewDivider,
  OverviewText,
  OverviewCardsGrid,
  OverviewCard,
  OverviewCardIcon,
  OverviewCardTitle,
  OverviewCardText,
} from "../../../styles/user/about/OverviewSection.styles";

import { AboutType } from "./aboutCms";

interface Props {
  about?: AboutType;
}

/* Default data */
const defaultAbout: AboutType = {
  title: "Cultivating the Future of Farming",
  description:
    "Samrudh Bhoomi Private Limited stands at the intersection of traditional agricultural wisdom and cutting-edge operational technology. We are dedicated to providing enterprise-grade solutions that enhance yield, protect soil health, and drive sustainable growth for farmers and agribusinesses alike.",
  image: {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYg0FG286yC9xdhhg5uRLrR9xW1nZ8rdU2KwOWZQxawIAl17sBDRMBz93aJsAzfVryouqjmFIoNrrgwA7HkvlFByYQwiNKzmg2bD8PzVtUZ7_H-1Od9WXiRntYJCAUestBRFWfdAvYMqSYxw7qlmtBKvZXo-EOj_lzzVhyOOIyehAysPewpuix08B9TgO1mUJ_hFw3lrT0LW5fP5ZwOONb2n8AfWYcLnYoKtSwiTU3zqbPtI_Lu8n4zv5FDcfarYpTwlW8JoCpDu3",
    publicId: "",
  },
  cards: [
    {
      title: "Fertilizers & Pesticides",
      description:
        "Precision-formulated inputs designed for maximum efficacy and minimal environmental impact.",
      icon: "ScienceOutlined",
    },
    {
      title: "Organic Products & Seeds",
      description:
        "High-yield, resilient seeds paired with holistic organic growth enhancers.",
      icon: "EcoOutlined",
    },
  ],
};

/* Icon mapping */
const iconMap: Record<string, React.ReactNode> = {
  AgricultureOutlined: <AgricultureOutlined />,
  ScienceOutlined: <ScienceOutlined />,
  Co2Outlined: <Co2Outlined />,
  VerifiedOutlined: <VerifiedOutlined />,
  LocalShippingOutlined: <LocalShippingOutlined />,
  SpaOutlined: <SpaOutlined />,
};

export default function OverviewSection({
  about,
}: Props) {
  const section = about ?? defaultAbout;

  const cards =
    section.cards.length > 0
      ? section.cards
      : defaultAbout.cards;

  return (
    <OverviewSectionContainer>
      <OverviewGrid>
        <OverviewImageWrapper>
          <OverviewImage
            src={
              section.image.url ||
              defaultAbout.image.url
            }
            alt={section.title}
          />

          <ImageCaption>
            <span>Rooted in Quality</span>
          </ImageCaption>
        </OverviewImageWrapper>

        <OverviewContent>
          <OverviewTitle variant="h2">
            {section.title ||
              defaultAbout.title}
          </OverviewTitle>

          <OverviewDivider />

          <OverviewText variant="body1">
            {section.description ||
              defaultAbout.description}
          </OverviewText>

          <OverviewCardsGrid>
            {cards.map((card, index) => (
              <OverviewCard key={index}>
                <OverviewCardIcon>
                  {iconMap[card.icon] ??
                    <AgricultureOutlined />}
                </OverviewCardIcon>

                <OverviewCardTitle variant="h6">
                  {card.title}
                </OverviewCardTitle>

                <OverviewCardText variant="body2">
                  {card.description}
                </OverviewCardText>
              </OverviewCard>
            ))}
          </OverviewCardsGrid>
        </OverviewContent>
      </OverviewGrid>
    </OverviewSectionContainer>
  );
}