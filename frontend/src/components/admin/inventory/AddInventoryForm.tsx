import React, { useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { BasicInfoSection } from "./BasicInfoSection";
import { StockDetailsSection } from "./StockDetailsSection";
import { PricingSection } from "./PricingSection";
import { LocationSupplierSection } from "./LocationSupplierSection";
import { StatusDescriptionSection } from "./StatusDescriptionSection";
import { MediaSection } from "./MediaSection";
import { FormCard, StickyActionBar } from "@/styles/admin/AddInventory.styles";
import { useAddInventoryMutation } from "@/store/api/apiSlice";
import toast from "react-hot-toast";
import LoadingState from "@/components/common/LoadingState";

export interface InventoryFormData {
  // Basic Information
  productId: string;
  sku: string;
  category: string;
  brand: string;

  // Stock Details
  quantity: number;
  unit: string;
  minStockLevel: number;
  maxStockLevel: number;

  // Pricing
  purchasePrice: number;
  sellingPrice: number;

  // Location & Supplier
  warehouseLocation: string;
  supplierName: string;
  supplierContact: string;

  // Status & Description
  // status: "in-stock" | "low-stock" | "out-stock";
  description: string;

   // Product image from Product collection
  productImageUrl: string;

  // Media
  productImage: File | null;
  imagePreview: string | null;
}

export const AddInventoryForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<InventoryFormData>({
    productId: "",
    sku: "",
    category: "",
    brand: "",
    quantity: 0,
    unit: "kg",
    minStockLevel: 0,
    maxStockLevel: 0,
    purchasePrice: 0,
    sellingPrice: 0,
    warehouseLocation: "",
    supplierName: "",
    supplierContact: "",
    // status: "in-stock",
    description: "",
    productImageUrl: "",
    productImage: null,
    imagePreview: null,
  });

  const [addInventory, { isLoading }] = useAddInventoryMutation();

  const [lastAutosaved, setLastAutosaved] = useState<string>(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  });

  const updateFormData = (field: keyof InventoryFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Simulate autosave
    const now = new Date();
    setLastAutosaved(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      const response = await addInventory({
        productId: formData.productId,
        quantity: Number(formData.quantity),
        unit: formData.unit,
        minStockLevel: Number(formData.minStockLevel),
        maxStockLevel: Number(formData.maxStockLevel),
        warehouseLocation: formData.warehouseLocation,
        supplierName: formData.supplierName,
        supplierContact: formData.supplierContact,
        purchasePrice: Number(formData.purchasePrice),
        sellingPrice: Number(formData.sellingPrice),
        // status: formData.status,
        description:formData.description,
      }).unwrap();

      if(response.success) {
        toast.success(response.message || "Inventory added successfully");
        router.push("/admin/inventory");
      }

    } catch (error: any) {
      console.error(error);
  
      toast.error(
        error?.data?.message ||
        error?.message ||
        "Failed to add inventory."
      );
    }
  };

  const handleCancel = () => {
    router.push("/admin/inventory");
  };

  if (isLoading)
  return <LoadingState title="Adding Inventory..." message="Please wait while inventory is being created." />;

// if (error)
//   return (
//     <ErrorState
//   title="Failed to Load products"
//   message="Unable to fetch products."
//   loading={isFetching}
//   onRetry={refetch}
// />

  return (
    <form onSubmit={handleSubmit}>
      {/* Section 1: Basic Information */}
      <FormCard>
        <BasicInfoSection data={formData} updateData={updateFormData} />
      </FormCard>

      {/* Sections 2 & 3: Stock Details & Pricing (2 columns on large screens) */}
      <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 6 }}>
          <FormCard sx={{ mb: 0 }}>
            <StockDetailsSection data={formData} updateData={updateFormData} />
          </FormCard>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <FormCard sx={{ mb: 0 }}>
            <PricingSection data={formData} updateData={updateFormData} />
          </FormCard>
        </Grid>
      </Grid>

      {/* Section 4: Location & Supplier */}
      <FormCard>
        <LocationSupplierSection data={formData} updateData={updateFormData} />
      </FormCard>

      {/* Sections 5 & 6: Status & Description + Media (3 columns layout) */}
      <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 8 }}>
          <FormCard sx={{ mb: 0 }}>
            <StatusDescriptionSection data={formData} updateData={updateFormData} />
          </FormCard>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <FormCard sx={{ mb: 0, height: "100%" }}>
            <MediaSection data={formData} updateData={updateFormData} />
          </FormCard>
        </Grid>
      </Grid>

      {/* Sticky Action Bar */}
      <StickyActionBar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ScheduleIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
          <Typography variant="caption" color="text.secondary">
            Last autosaved at {lastAutosaved}
          </Typography>
        </Box>
        <Box className="action-buttons" sx={{ display: "flex", gap: 2 }}>
          <Box
            component="button"
            type="button"
            onClick={handleCancel}
            sx={{
              px: 4,
              py: 1.5,
              border: "1px solid",
              borderColor: "#134E29",
              borderRadius: "8px",
              backgroundColor: "transparent",
              color: "#134E29",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": {
                backgroundColor: "#134E29",
                transform: "scale(0.98)",
              },
            }}
          >
            Cancel
          </Box>
          <Box
            component="button"
            type="submit"
            sx={{
              px: 6,
              py: 1.5,
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#134E29",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 1,
              transition: "all 0.2s",
              "&:hover": {
                opacity: 0.9,
                transform: "scale(0.98)",
              },
            }}
          >
            <AddCircleIcon sx={{ fontSize: "1rem" }} />
            Add Inventory
          </Box>
        </Box>
      </StickyActionBar>
    </form>
  );
};