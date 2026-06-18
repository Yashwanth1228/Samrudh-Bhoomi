import React from "react";
import { Box, TextField, InputAdornment, Select, MenuItem, FormControl, Chip, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FiltersContainer, CategoryFilters, FilterChip } from "@/styles/user/blog/BlogFilters.styles";

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  sortBy: string;
  onSortChange: (value: string) => void;
  totalPosts: number;
}

export const BlogFilters: React.FC<Props> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  sortBy,
  onSortChange,
  totalPosts,
}) => {
  return (
    <FiltersContainer>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, width: "100%" }}>
        <TextField
          placeholder="Search articles, topics, or keywords..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          size="small"
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              bgcolor: "background.paper",
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" , color:"text.secondary" }}>
            Showing {totalPosts} Articles
          </Typography>

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              IconComponent={ExpandMoreIcon}
              sx={{
                bgcolor: "background.paper",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "divider",
                },
              }}
            >
              <MenuItem value="Latest">Latest</MenuItem>
              <MenuItem value="Most Popular">Most Popular</MenuItem>
              <MenuItem value="Oldest">Oldest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <CategoryFilters>
        {categories.map((category) => (
          <FilterChip
            key={category}
            label={category}
            selected={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </CategoryFilters>
    </FiltersContainer>
  );
};