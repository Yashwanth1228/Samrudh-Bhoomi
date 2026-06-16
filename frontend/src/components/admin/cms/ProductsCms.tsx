import { ProductSectionCard, ProductSectionContent, ProductSubTabButton, ProductSubTabs, PromoBanner, PromoBannerCard, StyledTextField } from '@/styles/admin/Cms.styles';
import { Box, Button, Chip, Typography } from '@mui/material';
import React, { useState } from 'react'

function ProductsCms() {
    const [productSubTab, setProductSubTab] = useState("listing");
    return (
        <ProductSectionCard>
  <ProductSubTabs>

    <ProductSubTabButton
      active={productSubTab === "listing"}
      onClick={() => setProductSubTab("listing")}
    >
      Listing Page
    </ProductSubTabButton>

    <ProductSubTabButton
      active={productSubTab === "detail"}
      onClick={() => setProductSubTab("detail")}
    >
      Detail Page Templates
    </ProductSubTabButton>

  </ProductSubTabs>

  <ProductSectionContent>

    {productSubTab === "listing" && (
      <>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 600,
            mb: 4,
          }}
        >
          Product Catalog Content
        </Typography>

        <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    gap: 4,
  }}
>
          {/* Left Side */}
          <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 3,
  }}
>

            <StyledTextField
              label="Page Title"
              defaultValue="Our Agricultural Innovations"
              fullWidth
            />

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#6b7280",
                }}
              >
                Category Filter Labels
              </Typography>

              <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    p: 2,
    border: "1px solid #e5e7eb",
    borderRadius: 2,
    bgcolor: "#f9fafb",
  }}
>
                <Chip
                  label="Nutrients"
                  color="primary"
                  onDelete={() => {}}
                />

                <Chip
                  label="Equipment"
                  color="primary"
                  onDelete={() => {}}
                />

                <Button variant="outlined">
                  + Add Category
                </Button>
              </Box>
            </Box>

          </Box>

          {/* Right Side */}
          <PromoBannerCard>

            <Typography
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              SIDEBAR PROMO BANNER
            </Typography>

            <PromoBanner>

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMjPBNJOfSw21rjjm91Q9WwSBJjuwv2_RyXJEjw3FT_36Y5Ai4hSUCvuxEqMZFCKywL6qKfQKmKgLaFWltFHudeEPfTtw2AYYNnWBlG_Ig6uiPkzrvhZrA15RkFEOt4iuHNn5zVdEtaOU1uQo0nNUvuD3Z5XVQBZaHgSV7bEUV4YYcSmbqaOUEtjifR6QJXErhLp_PHWgIrHStqpzkEk-lXgwXkSq1WSfCx_q2Fs680lJDGN6CaU_dAw7eGetpnVABl-rECI-CFlnf"
                alt=""
              />

              <Typography
                sx={{
                  position: "relative",
                  zIndex: 1,
                  fontWeight: 700,
                }}
              >
                Promotion Area
              </Typography>

            </PromoBanner>

            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 3 }}
            >
              Change Banner Content
            </Button>

          </PromoBannerCard>
        </Box>
      </>
    )}

    {productSubTab === "detail" && (
      <Typography
        sx={{
          color: "#6b7280",
          fontStyle: "italic",
        }}
      >
        Template editor for individual product detail pages. Drag and drop sections to reorder.
      </Typography>
    )}

  </ProductSectionContent>
</ProductSectionCard>
    )
}

export default ProductsCms
