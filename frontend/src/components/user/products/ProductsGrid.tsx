import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Pagination,
  PaginationItem,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  GridView as GridViewIcon,
  ViewList as ViewListIcon,
} from "@mui/icons-material";
import {
  GridSection,
  GridContainer,
  Toolbar,
  ToolbarLeft,
  ToolbarRight,
  ProductCount,
  SortWrapper,
  ProductGrid as StyledProductGrid,
  ProductCard,
  ProductImageWrapper,
  ProductImage,
  ProductBadge,
  ProductContent,
  ProductTitle,
  ProductDescription,
  ProductFooter,
  ProductPrice,
  DetailsButton,
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateText,
  EmptyStateButton,
} from "../../../styles/user/products/ProductsGrid.styles";
import { useRouter } from "next/router";

// Sample product data
const products = [
  {
    id: 1,
    name: "All-Natural Granular",
    description:
      "Organic fertilizer formulated to enrich soil health and robust root development.",
    price: "₹2,450.00",
    category: "Fertilizer",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtN6wUq66Ek_v6ONog7ZcXP7FKRFZdzWkqwvuK1jmuXQYsA078cdzHyOUV_dnejSjIcuWl1RVD0JfevGEAtZhWej-XjI6r3p71UHdOCV9tAlHdvuhqJNfnYDg5yvV8syfIO0L4X5Puso8Lzva2GCKUevYroPzLSI9-2x4Mi_35sHV5YmlyFaTqsi7X2cm-M7cG4n9t6GjaGUcjCASqyMF-IeAFnCQPEuOHMQFCP4bzGbWoADQNsiimrNfuX",
  },
  {
    id: 2,
    name: "Premium Wheat Seeds",
    description:
      "High-yield, disease-resistant hybrid wheat seeds optimized for diverse conditions.",
    price: "₹1,200.00",
    category: "Seeds",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLv9D0gm9WYf0zzLfxZz6o1jP1vJmk-EEd3Yw3n3ooFNY-sUfnIEW49TlVvSBsw1zBqnfE5fJ2gjSu9w7XLqojtKvZGQy0RSZXOmnIH86AEok8_4NxrjBY3puC3t9j5v2YFk17YXfV8Uq2Q8YPSwku6SD5Hsuq7js0t0o16swfmPBVC1QHZHWY1qBF0o7dFoXAIhFn3vOqSdHqvOjnqB6HpphsI9yM-yvSogGBodcHxygdvE638abv1GUAF2",
  },
  {
    id: 3,
    name: "Eco-Grow Protector",
    description:
      "A 100% organic foliar spray to enhance plant immunity without harmful chemicals.",
    price: "₹850.00",
    category: "Organic",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLt2mDd019pOiTY71nvHOayuYoUb8KAsa_St9y9QePfj8CLvT74mt5RRthlLaNqV8ESInDhOevk_1hw4GXhr5HGg-xo7JVm36eeOxK666VtoRaprNJa1jx6ShPHtQhWmMjlhJltgmAWuG4SdSzHz9sGlRLaE-pugib5xRvxcKmy3e_0SYjcYLwhIuaG0kTNa0oaqMYNx63AxMzSFWMnJsmo2kNAsTwbbc3zfSL2t3eQgVpQ-t4gjyKR5Ou1N",
  },
  {
    id: 4,
    name: "Agri-Tech Tractor X",
    description:
      "Autonomous ready tractor with precision mapping and integrated crop management.",
    price: "Custom",
    category: "Equipment",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsRSlZ2lFwdFob51DFp14UxTSNLZ5y8W88K7s03V3g_Fzroc5jFgZ9JE_p2EnkMJIOuNffzeNbYIjHHmlR-UUrnvPC5uJddgyuj_2EWntJdt2OPhIoiZI8qQGGS-lWT46cIq490n0COCW2ugoKJMW0sox9x4UJpaNh-TnC9FSY4zv2B5zPBX01ikq8QAa-B7uEhMzMB1Zjw0PEHNkFchUDFXCaxi4PgbtY4lp4T_keN_WGhjTWVAey0F6gp",
  },
  {
    id: 4,
    name: "Agri-Tech Tractor X",
    description:
      "Autonomous ready tractor with precision mapping and integrated crop management.",
    price: "Custom",
    category: "Equipment",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsRSlZ2lFwdFob51DFp14UxTSNLZ5y8W88K7s03V3g_Fzroc5jFgZ9JE_p2EnkMJIOuNffzeNbYIjHHmlR-UUrnvPC5uJddgyuj_2EWntJdt2OPhIoiZI8qQGGS-lWT46cIq490n0COCW2ugoKJMW0sox9x4UJpaNh-TnC9FSY4zv2B5zPBX01ikq8QAa-B7uEhMzMB1Zjw0PEHNkFchUDFXCaxi4PgbtY4lp4T_keN_WGhjTWVAey0F6gp",
  },
];

const ProductsGrid: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: "grid" | "list" | null,
  ) => {
    if (newView !== null) {
      setViewMode(newView);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };

  const router = useRouter();

  return (
    <GridSection>
      <GridContainer>
        <Toolbar>
          <ToolbarLeft>
            <ProductCount variant="body2">
              Showing <span className="count">48</span> Products
            </ProductCount>
          </ToolbarLeft>
          <ToolbarRight>
            <SortWrapper>
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: 12,
                  color: "#72796e",
                }}
              >
                Sort by:
              </Typography>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value={sortBy}
                  onChange={handleSortChange}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiSelect-select": {
                      padding: "4px 8px",
                      fontWeight: 500,
                    },
                  }}
                >
                  <MenuItem value="newest">Newest</MenuItem>
                  <MenuItem value="popular">Popular</MenuItem>
                  <MenuItem value="price-low">Price (Low to High)</MenuItem>
                  <MenuItem value="price-high">Price (High to Low)</MenuItem>
                </Select>
              </FormControl>
            </SortWrapper>
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={handleViewChange}
              sx={{
                border: "1px solid #c2c9bb",
                borderRadius: "8px",
                overflow: "hidden",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <ToggleButton
                value="grid"
                sx={{ padding: "8px", borderRadius: 0 }}
              >
                <GridViewIcon sx={{ fontSize: 20 }} />
              </ToggleButton>
              <ToggleButton
                value="list"
                sx={{ padding: "8px", borderRadius: 0 }}
              >
                <ViewListIcon sx={{ fontSize: 20 }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </ToolbarRight>
        </Toolbar>

        <StyledProductGrid viewMode={viewMode}>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImageWrapper>
                <ProductImage src={product.image} alt={product.name} />
                <ProductBadge>{product.category}</ProductBadge>
              </ProductImageWrapper>
              <ProductContent>
                <ProductTitle variant="h6">{product.name}</ProductTitle>
                <ProductDescription variant="body2">
                  {product.description}
                </ProductDescription>
                <ProductFooter>
                  <ProductPrice variant="h6">{product.price}</ProductPrice>
                  <DetailsButton onClick={() => router.push(`/products/1`)}>
                    Details
                  </DetailsButton>
                </ProductFooter>
              </ProductContent>
            </ProductCard>
          ))}
        </StyledProductGrid>

        {/* MUI Pagination */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={12}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                fontFamily: "IBM Plex Sans",
                fontSize: "12px",
                fontWeight: 500,
              },
              "& .Mui-selected": {
                backgroundColor: "#2d5a27 !important",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#154212 !important",
                },
              },
            }}
          />
        </Box>

        {/* Empty State (hidden by default) */}
        <EmptyState style={{ display: "none" }}>
          <EmptyStateIcon>
            <span className="material-symbols-outlined">search_off</span>
          </EmptyStateIcon>
          <EmptyStateTitle variant="h6">No Products Found</EmptyStateTitle>
          <EmptyStateText variant="body2">
            We couldn't find any products matching your current filters. Try
            adjusting your search or clearing filters.
          </EmptyStateText>
          <EmptyStateButton>Clear Filters</EmptyStateButton>
        </EmptyState>
      </GridContainer>
    </GridSection>
  );
};

export default ProductsGrid;
