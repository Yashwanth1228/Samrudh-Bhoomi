import React from "react";
import { TextField } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";

import { SectionHeader, InputGroup } from "@/styles/admin/AddInventory.styles";
import { InventoryFormData } from "./AddInventoryForm";

interface Props {
  data: InventoryFormData;
  updateData: (field: keyof InventoryFormData, value: any) => void;
}

export const PricingSection: React.FC<Props> = ({ data, updateData }) => {
  return (
    <>
      <SectionHeader>
        <PaymentsIcon />
        <h3>Pricing</h3>
      </SectionHeader>

      <InputGroup sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="Purchase Price (₹)"
          type="number"
          placeholder="Cost per unit"
          value={data.purchasePrice || ""}
          onChange={(e) => updateData("purchasePrice", parseFloat(e.target.value) || 0)}
          variant="outlined"
          size="small"
        />
      </InputGroup>

      <InputGroup>
        <TextField
          fullWidth
          label="Selling Price (₹)"
          type="number"
          placeholder="Retail price"
          value={data.sellingPrice || ""}
          onChange={(e) => updateData("sellingPrice", parseFloat(e.target.value) || 0)}
          variant="outlined"
          size="small"
        />
      </InputGroup>
    </>
  );
};