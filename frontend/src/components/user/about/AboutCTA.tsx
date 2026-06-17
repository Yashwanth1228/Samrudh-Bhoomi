import React from "react";
import {
  CTASection,
  CTAContent,
  CTATitle,
  CTASubtitle,
  CTAButtons,
  CTAPrimaryButton,
  CTASecondaryButton,
} from "../../../styles/user/about/AboutCTA.styles";

const AboutCTA: React.FC = () => {
  return (
    <CTASection>
      <CTAContent maxWidth="md">
        <CTATitle variant="h2">Ready to Optimize Your Yield?</CTATitle>
        <CTASubtitle variant="body1">
          Partner with Samrudh Bhoomi for enterprise-grade agricultural
          solutions that drive sustainability and operational success.
        </CTASubtitle>
        <CTAButtons>
          <CTAPrimaryButton variant="contained">Contact Us</CTAPrimaryButton>
          <CTASecondaryButton variant="outlined">
            Explore Products
          </CTASecondaryButton>
        </CTAButtons>
      </CTAContent>
    </CTASection>
  );
};

export default AboutCTA;
