import React from "react";
import { Box, Container, Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { AddInventoryForm } from "@/components/admin/inventory/AddInventoryForm";
import { PageContainer, PageHeader } from "@/styles/admin/AddInventory.styles";


// {
//   "productId": "686abc1234567890abcdef12",
//   "quantity": 500,
//   "minStockLevel": 50,
//   "maxStockLevel": 1000,
//   "warehouseLocation": "Bangalore Warehouse",
//   "supplierName": "ABC Agro Suppliers",
//   "supplierContact": "9876543210",
//   "purchasePrice": 1800,             data need to send to backend for adding inventory
//   "sellingPrice": 2450,
//   "status": "in-stock"
// }                  


export default function AddInventoryPage() {
  return (
    <PageContainer>
      {/* <Container maxWidth="1500px" disableGutters sx={{ px: { xs: 2, sm: 3 } }}> */}
      <Container maxWidth={false} disableGutters sx={{ maxWidth: "1400px", mx: "auto" }}>
        {/* Breadcrumb Navigation */}
        {/* <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{ mb: 2, textTransform: "uppercase", letterSpacing: "0.5px" }}
        >
          <Link
            href="/admin/inventory"
            color="inherit"
            sx={{
              textDecoration: "none",
              "&:hover": { color: "#134E29" },
            }}
          >
            Inventory
          </Link>
          <Typography
  sx={{
    color: "#134E29",
    fontWeight: 600,
  }}
>
            Add New Item
          </Typography>
        </Breadcrumbs> */}

        {/* Page Title */}
        <PageHeader>
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 800,
                color: "#134E29",
                mb: 1,
              }}
            >
              Add Inventory
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Configure details for a new inventory stock item.
            </Typography>
          </Box>
        </PageHeader>

        {/* Form Component */}
        <AddInventoryForm />
      </Container>
    </PageContainer>
  );
}