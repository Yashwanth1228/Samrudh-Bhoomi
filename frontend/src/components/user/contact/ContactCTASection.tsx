import React from "react";
import { Container } from "@mui/material";
import {
  CTASection,
  CTAContent,
  CTATitle,
  CTASubtitle,
  CTAButtons,
  CTAPrimaryButton,
  CTASecondaryButton,
} from "../../../styles/user/contact/ContactCTASection.styles";

const ContactCTASection: React.FC = () => {
  return (
    <CTASection>
      <CTAContent maxWidth="md">
        <CTATitle variant="h2">Need Help Choosing the Right Product?</CTATitle>
        <CTASubtitle variant="body1">
          Our experts are ready to assist you in finding the perfect solutions
          for your agricultural needs.
        </CTASubtitle>
        <CTAButtons>
          <CTAPrimaryButton variant="contained">
            Explore Products
          </CTAPrimaryButton>
          <CTASecondaryButton variant="outlined">
            Contact Support
          </CTASecondaryButton>
        </CTAButtons>
      </CTAContent>
    </CTASection>
  );
};

export default ContactCTASection;
