import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  FilterSection,
  FilterContainer,
  SearchContainer,
  SearchInput,
  SearchIconWrapper,
  CategoryPills,
  CategoryButton,
  SecondaryFilters,
  FilterSelect,
  SelectWrapper,
  SelectIcon,
} from "../../../styles/user/products/ProductsFilter.styles";

const categories = [
  "All",
  "Fertilizers",
  "Organic",
  "Seeds",
  "Pesticides",
  "Agri-Equipment",
];

const ProductsFilter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FilterSection>
      <FilterContainer>
        {/* Search and Main Filters */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <SearchContainer>
            <SearchIconWrapper>
              <span className="material-symbols-outlined">search</span>
            </SearchIconWrapper>
            <SearchInput
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>

          <CategoryPills>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryPills>
        </Box>

        {/* Secondary Filters */}
        <SecondaryFilters>
          <SelectWrapper>
            <FilterSelect>
              <option>Category</option>
              <option>Soil Enhancers</option>
              <option>Crop Protection</option>
              <option>Machinery</option>
            </FilterSelect>
            <SelectIcon>
              <span className="material-symbols-outlined">expand_more</span>
            </SelectIcon>
          </SelectWrapper>

          <SelectWrapper>
            <FilterSelect>
              <option>Product Type</option>
              <option>Granular</option>
              <option>Liquid</option>
              <option>Powder</option>
            </FilterSelect>
            <SelectIcon>
              <span className="material-symbols-outlined">expand_more</span>
            </SelectIcon>
          </SelectWrapper>

          <SelectWrapper>
            <FilterSelect>
              <option>Availability Status</option>
              <option>In Stock</option>
              <option>Pre-order</option>
            </FilterSelect>
            <SelectIcon>
              <span className="material-symbols-outlined">expand_more</span>
            </SelectIcon>
          </SelectWrapper>
        </SecondaryFilters>
      </FilterContainer>
    </FilterSection>
  );
};

export default ProductsFilter;
