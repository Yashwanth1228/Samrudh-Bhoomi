import React from "react";
import { Grid, TextField, MenuItem } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import { SectionHeader, InputGroup } from "@/styles/admin/AddInventory.styles";
import { InventoryFormData } from "./AddInventoryForm";

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
  return (
    <>
      <SectionHeader>
        <InfoIcon />
        <h3>Basic Information</h3>
      </SectionHeader>

      <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 6 }}>
          <TextField
            fullWidth
            required
            label="Product Name"
            placeholder="e.g. Organic Urea Fertilizer"
            value={data.productName}
            onChange={(e) => updateData("productName", e.target.value)}
            variant="outlined"
            size="small"
          />
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
            select
            label="Category"
            value={data.category}
            onChange={(e) => updateData("category", e.target.value)}
            variant="outlined"
            size="small"
          >
            <MenuItem value="">Select Category</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.label}
              </MenuItem>
            ))}
          </TextField>
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