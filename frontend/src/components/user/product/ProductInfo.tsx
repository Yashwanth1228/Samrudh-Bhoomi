import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import {
  Send as SendIcon,
  PictureAsPdf as PictureAsPdfIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import {
  InfoContainer,
  CategoryChip,
  ProductName,
  ProductPrice,
  DiscountPrice,
  ProductDescription,
  Divider,
  ActionsContainer,
  SendInquiryButton,
  ActionButtonsGrid,
  WhatsAppButton,
  BrochureButton,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
} from "../../../styles/user/product/ProductInfo.styles";

interface ProductInfoProps {
  name: string;
  category: string;
  price: string;
  discountPrice?: string;
  description: string;
  features: string[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  category,
  price,
  discountPrice,
  description,
  features,
}) => {
  return (
    <InfoContainer>
      <CategoryChip label={category} />
      <ProductName variant="h4">{name}</ProductName>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <ProductPrice variant="h5">{price}</ProductPrice>
        <DiscountPrice variant="body1">{discountPrice}</DiscountPrice>
      </Box>
      <ProductDescription variant="body1">{description}</ProductDescription>
      <Divider />

      <ActionsContainer>
        <SendInquiryButton variant="contained" startIcon={<SendIcon />}>
          Send Inquiry
        </SendInquiryButton>
        <ActionButtonsGrid>
          <WhatsAppButton>
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.548 4.17 1.584 5.975L.044 24l6.155-1.551A11.97 11.97 0 0012.03 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22.015c-1.815 0-3.593-.483-5.15-1.396l-.37-.215-3.83.966 1.026-3.73-.235-.375a9.986 9.986 0 01-1.424-5.234c0-5.553 4.517-10.07 10.07-10.07 5.552 0 10.069 4.517 10.069 10.07s-4.517 10.07-10.069 10.07zm5.526-7.538c-.303-.151-1.793-.884-2.07-.986-.276-.101-.478-.151-.68.151-.201.303-.782.986-.959 1.188-.176.201-.353.226-.656.075-1.794-.888-3.08-1.921-4.148-3.737-.176-.303.18-.282.478-.881.076-.151.038-.282-.019-.433-.056-.151-.68-1.639-.933-2.244-.246-.59-.496-.51-.68-.52-.176-.01-.378-.01-.58-.01-.202 0-.53.076-.807.378-.277.303-1.06 1.035-1.06 2.525s1.085 2.929 1.236 3.131c.151.202 2.138 3.262 5.178 4.57.72.313 1.282.499 1.721.638.723.23 1.38.197 1.898.12.58-.087 1.793-.733 2.045-1.44.252-.707.252-1.313.176-1.44-.076-.126-.277-.202-.58-.353z" />
            </svg>
            WhatsApp
          </WhatsAppButton>
          <BrochureButton startIcon={<PictureAsPdfIcon />}>
            Brochure
          </BrochureButton>
        </ActionButtonsGrid>
      </ActionsContainer>

      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>
              <CheckCircleIcon />
            </FeatureIcon>
            <FeatureText variant="body2">{feature}</FeatureText>
          </FeatureItem>
        ))}
      </FeaturesList>
    </InfoContainer>
  );
};

export default ProductInfo;
