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

export const MediaSection: React.FC<Props> = ({ data, updateData }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      updateData("productImage", file);
      updateData("imagePreview", previewUrl);
    }
  };

  const handleRemoveImage = () => {
    if (data.imagePreview) {
      URL.revokeObjectURL(data.imagePreview);
    }
    updateData("productImage", null);
    updateData("imagePreview", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <SectionHeader>
        <ImageIcon />
        <h3>Media</h3>
      </SectionHeader>

      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />

        {!data.imagePreview ? (
          <UploadArea onClick={handleUploadClick}>
            <UploadIconWrapper className="upload-icon">
              <UploadFileIcon sx={{ fontSize: 32 }} />
            </UploadIconWrapper>
            <Typography
  variant="body2"
  sx={{ fontWeight: 600 }}
>
              Click to upload product image
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
              PNG, JPG up to 10MB
            </Typography>
          </UploadArea>
        ) : (
          <Box>
            <Box
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "12px",
                overflow: "hidden",
                mb: 2,
              }}
            >
              <img
                src={data.imagePreview}
                alt="Product preview"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                p: 2,
                bgcolor: "action.hover",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "background.paper",
                    borderRadius: "8px",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <img
                    src={data.imagePreview}
                    alt="Thumbnail"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
  variant="caption"
  noWrap
  sx={{ fontWeight: 700 }}
>
                    {data.productImage?.name || "product-image.jpg"}
                  </Typography>
                  <Typography
  variant="caption"
  color="text.secondary"
  sx={{ display: "block" }}
>
                    {data.productImage ? (data.productImage.size / 1024 / 1024).toFixed(1) : "0"} MB
                  </Typography>
                </Box>
                <IconButton size="small" onClick={handleRemoveImage} sx={{ color: "error.main" }}>
                  <DeleteIcon sx={{ fontSize: "1rem" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};