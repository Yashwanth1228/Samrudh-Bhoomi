import React from "react";
import { Grid, TextField, MenuItem } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";

import { SectionHeader } from "@/styles/admin/AddInventory.styles";
import { InventoryFormData } from "./AddInventoryForm";

interface Props {
  data: InventoryFormData;
  updateData: (field: keyof InventoryFormData, value: any) => void;
}

const units = [
  { value: "kg", label: "Kg" },
  { value: "ton", label: "Ton" },
  { value: "bag", label: "Bag" },
  { value: "packet", label: "Packet" },
  { value: "litre", label: "Litre" },
  { value: "piece", label: "Piece" },
];

export const StockDetailsSection: React.FC<Props> = ({ data, updateData }) => {
  return (
    <>
      <SectionHeader>
        <InventoryIcon />
        <h3>Stock Details</h3>
      </SectionHeader>

      <Grid container spacing={3}>
      <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            required
            label="Quantity"
            type="number"
            placeholder="0.00"
            value={data.quantity || ""}
            onChange={(e) => updateData("quantity", parseFloat(e.target.value) || 0)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            select
            label="Unit"
            value={data.unit}
            onChange={(e) => updateData("unit", e.target.value)}
            variant="outlined"
            size="small"
          >
            {units.map((unit) => (
              <MenuItem key={unit.value} value={unit.value}>
                {unit.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            required
            label="Min Stock Level"
            type="number"
            placeholder="Threshold"
            value={data.minStockLevel || ""}
            onChange={(e) => updateData("minStockLevel", parseFloat(e.target.value) || 0)}
            variant="outlined"
            size="small"
          />
        </Grid>
       <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label="Max Stock Level"
            type="number"
            placeholder="Storage Cap"
            value={data.maxStockLevel || ""}
            onChange={(e) => updateData("maxStockLevel", parseFloat(e.target.value) || 0)}
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>   
    </>
  );
};