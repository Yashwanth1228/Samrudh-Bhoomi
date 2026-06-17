import React from "react";
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

const OverviewSection: React.FC = () => {
  return (
    <OverviewSectionContainer>
      <OverviewGrid>
        <OverviewImageWrapper>
          <OverviewImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWYg0FG286yC9xdhhg5uRLrR9xW1nZ8rdU2KwOWZQxawIAl17sBDRMBz93aJsAzfVryouqjmFIoNrrgwA7HkvlFByYQwiNKzmg2bD8PzVtUZ7_H-1Od9WXiRntYJCAUestBRFWfdAvYMqSYxw7qlmtBKvZXo-EOj_lzzVhyOOIyehAysPewpuix08B9TgO1mUJ_hFw3lrT0LW5fP5ZwOONb2n8AfWYcLnYoKtSwiTU3zqbPtI_Lu8n4zv5FDcfarYpTwlW8JoCpDu3"
            alt="Close-up of healthy organic crops"
          />
          <ImageCaption>
            <span>Rooted in Quality</span>
          </ImageCaption>
        </OverviewImageWrapper>
        <OverviewContent>
          <OverviewTitle variant="h2">
            Cultivating the Future of Farming
          </OverviewTitle>
          <OverviewDivider />
          <OverviewText variant="body1">
            Samrudh Bhoomi Private Limited stands at the intersection of
            traditional agricultural wisdom and cutting-edge operational
            technology. We are dedicated to providing enterprise-grade solutions
            that enhance yield, protect soil health, and drive sustainable
            growth for farmers and agribusinesses alike.
          </OverviewText>
          <OverviewCardsGrid>
            <OverviewCard>
              <OverviewCardIcon>
                <span className="material-symbols-outlined">science</span>
              </OverviewCardIcon>
              <OverviewCardTitle variant="h6">
                Fertilizers &amp; Pesticides
              </OverviewCardTitle>
              <OverviewCardText variant="body2">
                Precision-formulated inputs designed for maximum efficacy and
                minimal environmental impact.
              </OverviewCardText>
            </OverviewCard>
            <OverviewCard>
              <OverviewCardIcon>
                <span className="material-symbols-outlined">eco</span>
              </OverviewCardIcon>
              <OverviewCardTitle variant="h6">
                Organic Products &amp; Seeds
              </OverviewCardTitle>
              <OverviewCardText variant="body2">
                High-yield, resilient seeds paired with holistic organic growth
                enhancers.
              </OverviewCardText>
            </OverviewCard>
          </OverviewCardsGrid>
        </OverviewContent>
      </OverviewGrid>
    </OverviewSectionContainer>
  );
};

export default OverviewSection;
