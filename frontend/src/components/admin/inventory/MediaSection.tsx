import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";

import { SectionHeader, UploadArea, UploadIconWrapper } from "@/styles/admin/AddInventory.styles";
import { InventoryFormData } from "./AddInventoryForm";

interface Props {
  data: InventoryFormData;
  updateData: (field: keyof InventoryFormData, value: any) => void;
}

export const MediaSection: React.FC<Props> = ({ data }) => {
  return (
    <>
      <SectionHeader>
        <ImageIcon />
        <h3>Product Image</h3>
      </SectionHeader>

      <Box>
        {data.productImageUrl ? (
          <Box
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <img
              src={data.productImageUrl}
              alt="Product"
              style={{
                width: "100%",
                height: 250,
                objectFit: "cover",
              }}
            />
          </Box>
        ) : (
          <UploadArea>
            <Typography color="text.secondary">
              Select a product to preview its image
            </Typography>
          </UploadArea>
        )}
      </Box>
    </>
  );
};