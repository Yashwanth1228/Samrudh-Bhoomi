import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { PaginationContainer, PageButton } from "@/styles/user/blog/BlogPagination.styles";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const BlogPagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <PaginationContainer>
      <IconButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "8px",
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
        {getPageNumbers().map((page, index) => (
          <PageButton
            key={index}
            active={page === currentPage}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={typeof page === "string"}
          >
            {page}
          </PageButton>
        ))}
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ display: { xs: "block", sm: "none" } }}>
        Page {currentPage} of {totalPages}
      </Typography>

      <IconButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "8px",
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </PaginationContainer>
  );
};