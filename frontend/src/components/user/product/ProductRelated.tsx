import React from "react";
import { Box, Typography, Link, Card, CardContent } from "@mui/material";
import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import {
  RelatedSection,
  RelatedHeader,
  RelatedTitle,
  RelatedViewAll,
  RelatedGrid,
  RelatedCard,
  RelatedImageWrapper,
  RelatedImage,
  RelatedContent,
  RelatedCategory,
  RelatedName,
  RelatedPrice,
} from "../../../styles/user/product/ProductRelated.styles";

interface RelatedProduct {
  name: string;
  category: string;
  price: string;
  image: string;
}

interface ProductRelatedProps {
  products: RelatedProduct[];
}

const ProductRelated: React.FC<ProductRelatedProps> = ({ products }) => {
  return (
    <RelatedSection>
      <RelatedHeader>
        <RelatedTitle variant="h6">Related Products</RelatedTitle>
        <RelatedViewAll href="#">
          View All
          <ChevronRightIcon sx={{ fontSize: 16 }} />
        </RelatedViewAll>
      </RelatedHeader>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
          gap: 3,
        }}
      >
        {products.map((product, index) => (
          <RelatedCard key={index}>
            <RelatedImageWrapper>
              <RelatedImage src={product.image} alt={product.name} />
            </RelatedImageWrapper>
            <RelatedContent>
              <RelatedCategory variant="caption">
                {product.category}
              </RelatedCategory>
              <RelatedName variant="h6">{product.name}</RelatedName>
              <RelatedPrice variant="body1">{product.price}</RelatedPrice>
            </RelatedContent>
          </RelatedCard>
        ))}
      </Box>
    </RelatedSection>
  );
};

export default ProductRelated;
