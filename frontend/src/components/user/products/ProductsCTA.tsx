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
} from "../../../styles/user/products/ProductsCTA.styles";

const ProductsCTA: React.FC = () => {
  return (
    <CTASection>
      <CTAContent maxWidth="md">
        <CTATitle variant="h2">Need Bulk Quantities?</CTATitle>
        <CTASubtitle variant="body1">
          Connect with our sales team for enterprise pricing, custom
          formulations, or detailed technical specifications. We are ready to
          support your operational needs.
        </CTASubtitle>
        <CTAButtons>
          <CTAPrimaryButton
            variant="contained"
            startIcon={<span className="material-symbols-outlined">mail</span>}
          >
            Contact Sales Team
          </CTAPrimaryButton>
          <CTASecondaryButton
            variant="outlined"
            startIcon={<span className="material-symbols-outlined">chat</span>}
          >
            WhatsApp Inquiry
          </CTASecondaryButton>
        </CTAButtons>
      </CTAContent>
    </CTASection>
  );
};

export default ProductsCTA;
