import React from "react";
import { Grid, TextField } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { SectionHeader } from "@/styles/admin/AddInventory.styles";
import { InventoryFormData } from "./AddInventoryForm";

interface Props {
  data: InventoryFormData;
  updateData: (field: keyof InventoryFormData, value: any) => void;
}

export const LocationSupplierSection: React.FC<Props> = ({ data, updateData }) => {
  return (
    <>
      <SectionHeader>
        <LocalShippingIcon />
        <h3>Location & Supplier</h3>
      </SectionHeader>

      <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 4 }}>
          <TextField
            fullWidth
            label="Warehouse Location"
            placeholder="e.g. Zone A, Rack 4"
            value={data.warehouseLocation}
            onChange={(e) => updateData("warehouseLocation", e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <TextField
            fullWidth
            label="Supplier Name"
            placeholder="e.g. Green Earth Ltd"
            value={data.supplierName}
            onChange={(e) => updateData("supplierName", e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <TextField
            fullWidth
            label="Supplier Contact"
            placeholder="+91 00000 00000"
            value={data.supplierContact}
            onChange={(e) => updateData("supplierContact", e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>
    </>
  );
};