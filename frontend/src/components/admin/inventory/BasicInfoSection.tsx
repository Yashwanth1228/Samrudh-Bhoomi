import React from "react";
import { Grid, TextField, MenuItem, InputLabel, Select, FormControl } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import { SectionHeader, InputGroup } from "@/styles/admin/AddInventory.styles";
import { InventoryFormData } from "./AddInventoryForm";
import { useGetProductsQuery } from "@/store/api/apiSlice";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";

interface Props {
  data: InventoryFormData;
  updateData: (field: keyof InventoryFormData, value: any) => void;
}

const categories = [
  { value: "fertilizer", label: "Fertilizer" },
  { value: "seeds", label: "Seeds" },
  { value: "pesticides", label: "Pesticides" },
  { value: "equipment", label: "Equipment" },
];

export const BasicInfoSection: React.FC<Props> = ({ data, updateData }) => {
  const { data:products , error, isLoading: productloading,refetch , isFetching} = useGetProductsQuery();
  console.log("products data " , products);

  if (productloading)
  return <LoadingState title="Loading products..." message="Please wait while we fetch your data." />;

if (error)
  return (
    <ErrorState
  title="Failed to Load products"
  message="Unable to fetch products."
  loading={isFetching}
  onRetry={refetch}
/>
  );
  
  return (
    <>
      <SectionHeader>
        <InfoIcon />
        <h3>Basic Information</h3>
      </SectionHeader>

      <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 6 }}>
      <FormControl fullWidth>
    <InputLabel>Select Product</InputLabel>

    <Select
  value={data.productId}
  label="Select Product"
  onChange={(e) => {
    const selectedProduct = products.find(
      (product: any) => product._id === e.target.value
    );

    if (!selectedProduct) return;

    updateData("productId", selectedProduct._id);
    updateData("category", selectedProduct.category);

    // Optional
    updateData("sku", selectedProduct.inventory?.sku || "");
    // updateData("sellingPrice", selectedProduct.price || 0);

    // If your Product schema has these fields
    updateData("brand", selectedProduct.brand || "");
    updateData("unit", selectedProduct.inventory?.unit || "");
    updateData(
      "productImageUrl",
      selectedProduct.images?.[0] || ""
    );
  }}
>
  {products.map((product: any) => (
    <MenuItem key={product._id} value={product._id}>
      {product.name}
    </MenuItem>
  ))}
</Select>
</FormControl>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <TextField
            fullWidth
            required
            label="SKU / Inventory Code"
            placeholder="e.g. SKU-FER-001"
            value={data.sku}
            onChange={(e) => updateData("sku", e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
        <TextField
  fullWidth
  label="Category"
  value={data.category}
  size="small"
  slotProps={{
    input:{
      readOnly: true,
    }
  }}
/>

        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <TextField
            fullWidth
            label="Brand"
            placeholder="e.g. Samrudh Agri-Tech"
            value={data.brand}
            onChange={(e) => updateData("brand", e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>
    </>
  );
};