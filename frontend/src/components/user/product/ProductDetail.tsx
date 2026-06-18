import React from "react";
import { Box, Grid } from "@mui/material";
import { MainContainer } from "../../../styles/user/product/ProductDetail.styles";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductDocuments from "./ProductDocuments";
import ProductInquiry from "./ProductInquiry";
import ProductRelated from "./ProductRelated";

// Sample data - will be replaced with actual API data later
const productData = {
  id: 1,
  name: "All-Natural Granular Fertilizer",
  category: "Fertilizers",
  price: "₹2,450.00",
  discountPrice: "₹2,800.00",
  description:
    "Our flagship organic fertilizer, meticulously formulated to enrich soil health and promote robust root development. Certified organic and designed for maximum nutrient absorption. Ideal for large-scale agricultural use.",
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYg0FG286yC9xdhhg5uRLrR9xW1nZ8rdU2KwOWZQxawIAl17sBDRMBz93aJsAzfVryouqjmFIoNrrgwA7HkvlFByYQwiNKzmg2bD8PzVtUZ7_H-1Od9WXiRntYJCAUestBRFWfdAvYMqSYxw7qlmtBKvZXo-EOj_lzzVhyOOIyehAysPewpuix08B9TgO1mUJ_hFw3lrT0LW5fP5ZwOONb2n8AfWYcLnYoKtSwiTU3zqbPtI_Lu8n4zv5FDcfarYpTwlW8JoCpDu3",
    "https://lh3.googleusercontent.com/aida/AP1WRLv9D0gm9WYf0zzLfxZz6o1jP1vJmk-EEd3Yw3n3ooFNY-sUfnIEW49TlVvSBsw1zBqnfE5fJ2gjSu9w7XLqojtKvZGQy0RSZXOmnIH86AEok8_4NxrjBY3puC3t9j5v2YFk17YXfV8Uq2Q8YPSwku6SD5Hsuq7js0t0o16swfmPBVC1QHZHWY1qBF0o7dFoXAIhFn3vOqSdHqvOjnqB6HpphsI9yM-yvSogGBodcHxygdvE638abv1GUAF2",
    "https://lh3.googleusercontent.com/aida/AP1WRLt2mDd019pOiTY71nvHOayuYoUb8KAsa_St9y9QePfj8CLvT74mt5RRthlLaNqV8ESInDhOevk_1hw4GXhr5HGg-xo7JVm36eeOxK666VtoRaprNJa1jx6ShPHtQhWmMjlhJltgmAWuG4SdSzHz9sGlRLaE-pugib5xRvxcKmy3e_0SYjcYLwhIuaG0kTNa0oaqMYNx63AxMzSFWMnJsmo2kNAsTwbbc3zfSL2t3eQgVpQ-t4gjyKR5Ou1N",
    "https://lh3.googleusercontent.com/aida/AP1WRLsRSlZ2lFwdFob51DFp14UxTSNLZ5y8W88K7s03V3g_Fzroc5jFgZ9JE_p2EnkMJIOuNffzeNbYIjHHmlR-UUrnvPC5uJddgyuj_2EWntJdt2OPhIoiZI8qQGGS-lWT46cIq490n0COCW2ugoKJMW0sox9x4UJpaNh-TnC9FSY4zv2B5zPBX01ikq8QAa-B7uEhMzMB1Zjw0PEHNkFchUDFXCaxi4PgbtY4lp4T_keN_WGhjTWVAey0F6gp",
  ],
  features: [
    "100% Organic certified materials",
    "Slow-release formula for sustained growth",
    "Improves soil structure and water retention",
  ],
  benefits: [
    {
      icon: "trending_up",
      title: "Increased Yield",
      text: "Boosts overall crop production through balanced, sustained nutrient delivery.",
    },
    {
      icon: "grass",
      title: "Soil Fertility",
      text: "Enriches the soil microbiome and improves physical soil structure over time.",
    },
    {
      icon: "science",
      title: "Chemical Free",
      text: "100% natural formulation with no synthetic additives or harmful residues.",
    },
    {
      icon: "eco",
      title: "Eco-Friendly",
      text: "Safe for local water tables and beneficial insects in the farming ecosystem.",
    },
  ],
  specifications: [
    { label: "Product Type", value: "Granular Solid" },
    { label: "Category", value: "Organic Fertilizer" },
    { label: "Packaging", value: "50kg HDPE Bag" },
    { label: "NPK Ratio (Est.)", value: "4-3-3 (Organic Equivalent)" },
    { label: "Usage Method", value: "Basal Application / Top Dressing" },
    { label: "Manufacturer", value: "Samrudh Bhoomi Private Limited" },
  ],
  usage: [
    "Standard Dosage: Apply 200kg to 250kg per acre depending on soil baseline nutrient levels.",
    "Application Timing: Best applied during land preparation (basal dose) or slightly before the main growth phase.",
    "Method: Broadcast evenly across the field and incorporate into the top 2-3 inches of soil for best microbial action.",
    "Storage: Store in a cool, dry place away from direct sunlight. Ensure bags are sealed tightly after opening to prevent moisture absorption.",
    "Safety: While organic, use standard agricultural dust masks during broadcasting to avoid inhalation of particulate matter.",
  ],
  documents: [
    {
      name: "Product Brochure",
      size: "PDF • 2.4 MB",
      icon: "picture_as_pdf",
      color: "#ba1a1a",
    },
    {
      name: "Technical Data Sheet",
      size: "PDF • 1.1 MB",
      icon: "description",
      color: "#835425",
    },
    {
      name: "Organic Certification",
      size: "PDF • 0.8 MB",
      icon: "verified_user",
      color: "#cca730",
    },
  ],
  relatedProducts: [
    {
      name: "Premium Wheat Seeds",
      category: "Seeds",
      price: "₹1,200.00",
      image:
        "https://lh3.googleusercontent.com/aida/AP1WRLv9D0gm9WYf0zzLfxZz6o1jP1vJmk-EEd3Yw3n3ooFNY-sUfnIEW49TlVvSBsw1zBqnfE5fJ2gjSu9w7XLqojtKvZGQy0RSZXOmnIH86AEok8_4NxrjBY3puC3t9j5v2YFk17YXfV8Uq2Q8YPSwku6SD5Hsuq7js0t0o16swfmPBVC1QHZHWY1qBF0o7dFoXAIhFn3vOqSdHqvOjnqB6HpphsI9yM-yvSogGBodcHxygdvE638abv1GUAF2",
    },
    {
      name: "Eco-Grow Protector",
      category: "Crop Protection",
      price: "₹850.00",
      image:
        "https://lh3.googleusercontent.com/aida/AP1WRLt2mDd019pOiTY71nvHOayuYoUb8KAsa_St9y9QePfj8CLvT74mt5RRthlLaNqV8ESInDhOevk_1hw4GXhr5HGg-xo7JVm36eeOxK666VtoRaprNJa1jx6ShPHtQhWmMjlhJltgmAWuG4SdSzHz9sGlRLaE-pugib5xRvxcKmy3e_0SYjcYLwhIuaG0kTNa0oaqMYNx63AxMzSFWMnJsmo2kNAsTwbbc3zfSL2t3eQgVpQ-t4gjyKR5Ou1N",
    },
  ],
};

interface ProductDetailProps {
  id: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ id }) => {
  return (
    <MainContainer maxWidth="xl">
      {/* Product Overview Section - Side by Side using flexbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mb: 4,
        }}
      >
        <Box sx={{ flex: "0 0 58.333%", maxWidth: "58.333%" }}>
          <ProductGallery images={productData.images} />
        </Box>
        <Box sx={{ flex: "0 0 41.667%", maxWidth: "41.667%" }}>
          <ProductInfo
            name={productData.name}
            category={productData.category}
            price={productData.price}
            discountPrice={productData.discountPrice}
            description={productData.description}
            features={productData.features}
          />
        </Box>
      </Box>

      {/* Tabs Section */}
      <ProductTabs
        benefits={productData.benefits}
        specifications={productData.specifications}
        usage={productData.usage}
      />

      {/* Documents and Inquiry - Side by Side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mt: 4,
        }}
      >
        <Box sx={{ flex: "0 0 50%", maxWidth: "50%" }}>
          <ProductDocuments documents={productData.documents} />
        </Box>
        <Box sx={{ flex: "0 0 50%", maxWidth: "50%" }}>
          <ProductInquiry />
        </Box>
      </Box>

      {/* Related Products */}
      <ProductRelated products={productData.relatedProducts} />
    </MainContainer>
  );
};

export default ProductDetail;
