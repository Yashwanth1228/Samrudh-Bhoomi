import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import CancelIcon from "@mui/icons-material/Cancel";

import { SectionHeader, StatusRadioOption } from "@/styles/admin/AddInventory.styles";
import { InventoryFormData } from "./AddInventoryForm";

interface Props {
  data: InventoryFormData;
  updateData: (field: keyof InventoryFormData, value: any) => void;
}

const statusOptions = [
  {
    value: "in-stock",
    label: "In Stock",
    icon: CheckCircleIcon,
    color: "#4caf50",
  },
  {
    value: "low-stock",
    label: "Low Stock",
    icon: WarningIcon,
    color: "#ff9800",
  },
  {
    value: "out-stock",
    label: "Out Stock",
    icon: CancelIcon,
    color: "#f44336",
  },
];

export const StatusDescriptionSection: React.FC<Props> = ({ data, updateData }) => {
  return (
    <>
      <SectionHeader>
        <DescriptionIcon />
        <h3>Status & Description</h3>
      </SectionHeader>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            mb: 1,
            display: "block",
          }}
        >
          Status
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {statusOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = data.status === option.value;
            return (
              <StatusRadioOption
                key={option.value}
                selected={isSelected}
                statusColor={option.color}
                onClick={() => updateData("status", option.value as any)}
              >
                <Icon />
                <Typography variant="body2"  sx={{fontWeight:500}}>
                  {option.label}
                </Typography>
              </StatusRadioOption>
            );
          })}
        </Box>
      </Box>

      <TextField
        fullWidth
        label="Description"
        multiline
        rows={4}
        placeholder="Enter detailed product specifications, handling instructions, etc."
        value={data.description}
        onChange={(e) => updateData("description", e.target.value)}
        variant="outlined"
      />
    </>
  );
};