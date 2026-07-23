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
  "Organic Products",
  "Seeds",
  "Pesticides",
];

interface ProductsFilterProps {
  filters: {
    page: number;
    limit: number;
    search: string;
    category: string;
    status: string;
    alphabetical: string;
    price: string;
  };

  onChange: React.Dispatch<
    React.SetStateAction<{
      page: number;
      limit: number;
      search: string;
      category: string;
      status: string;
      alphabetical: string;
      price: string;
    }>
  >;
}

const ProductsFilter: React.FC<ProductsFilterProps> = ({
  filters,
  onChange,
}) => {
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
              value={filters.search}
              onChange={(e) =>
                onChange((prev) => ({
                  ...prev,
                  page: 1,
                  search: e.target.value,
                }))
              }
            />
          </SearchContainer>

          <CategoryPills>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                active={
                  filters.category === (category === "All" ? "" : category)
                }
                onClick={() =>
                  onChange((prev) => ({
                    ...prev,
                    page: 1,
                    category: category === "All" ? "" : category,
                  }))
                }
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryPills>
        </Box>

        {/* Secondary Filters */}
        <SecondaryFilters>
          <SelectWrapper>
            <FilterSelect
              value={filters.status}
              onChange={(e) =>
                onChange((prev) => ({
                  ...prev,
                  page: 1,
                  status: e.target.value,
                }))
              }
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </FilterSelect>
            <SelectIcon>
              <span className="material-symbols-outlined">expand_more</span>
            </SelectIcon>
          </SelectWrapper>

          <SelectWrapper>
            <FilterSelect
              value={filters.alphabetical}
              onChange={(e) =>
                onChange((prev) => ({
                  ...prev,
                  page: 1,
                  alphabetical: e.target.value,
                }))
              }
            >
              <option value="">Alphabetical</option>
              <option value="asc">A → Z</option>
              <option value="desc">Z → A</option>
            </FilterSelect>
            <SelectIcon>
              <span className="material-symbols-outlined">expand_more</span>
            </SelectIcon>
          </SelectWrapper>

          <SelectWrapper>
            <FilterSelect
              value={filters.price}
              onChange={(e) =>
                onChange((prev) => ({
                  ...prev,
                  page: 1,
                  price: e.target.value,
                }))
              }
            >
              <option value="">Price</option>
              <option value="low">Low → High</option>
              <option value="high">High → Low</option>
            </FilterSelect>
            <SelectIcon>
              <span className="material-symbols-outlined">expand_more</span>
            </SelectIcon>
          </SelectWrapper>
          <SelectWrapper>
            <FilterSelect
              value={filters.status}
              onChange={(e) =>
                onChange((prev) => ({
                  ...prev,
                  page: 1,
                  status: e.target.value,
                }))
              }
            >
              <option value="">Availability</option>
              <option value="active">Available</option>
              <option value="inactive">Unavailable</option>
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
