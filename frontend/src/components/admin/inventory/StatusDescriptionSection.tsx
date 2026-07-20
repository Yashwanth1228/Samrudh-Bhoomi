import React from "react";
import { TextField } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

import { SectionHeader } from "@/styles/admin/AddInventory.styles";
import { InventoryFormData } from "./AddInventoryForm";

interface Props {
  data: InventoryFormData;
  updateData: (field: keyof InventoryFormData, value: any) => void;
}

export const StatusDescriptionSection: React.FC<Props> = ({
  data,
  updateData,
}) => {
  return (
    <>
      <SectionHeader>
        <DescriptionIcon />
        <h3>Description</h3>
      </SectionHeader>

      <TextField
        fullWidth
        label="Description"
        multiline
        rows={4}
        value={data.description}
        onChange={(e) =>
          updateData("description", e.target.value)
        }
      />
    </>
  );
};