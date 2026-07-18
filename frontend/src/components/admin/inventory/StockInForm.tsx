import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useStockInMutation } from "@/store/api/apiSlice";
import toast from "react-hot-toast";
import LoadingState from "@/components/common/LoadingState";

interface FormData {
  inventoryId: string;
  quantity: number;
  reason: string;
  notes: string;
}

interface StockInFormProps {
  inventories: any[];
  refetchInventory: () => void;
}

// const units = ["Bags", "KG", "Tonnes", "Litres", "Packets", "Pieces"];
// const products = ["Premium Urea Fertilizer 46% N", "Hybrid Tomato Seeds (Vyapar)"];

export const StockInForm: React.FC<StockInFormProps> = ({
  inventories,
  refetchInventory,
}) => {
  const [formData, setFormData] = useState<FormData>({
    inventoryId: "",
    quantity: 0,
    reason: "",
    notes: "",
  });

  const [stockin, { isLoading }] = useStockInMutation();


  const handleChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      if (!formData.inventoryId) {
        toast.error("Please select a product.");
        return;
      }
      
      if (formData.quantity <= 0) {
        toast.error("Quantity should be greater than 0.");
        return;
      }

      const stockInData = await stockin({
        inventoryId: formData.inventoryId,
        quantity: Number(formData.quantity),
        reason: formData.reason,
        notes: formData.notes,
      }).unwrap();
  
      toast.success(stockInData.message || "Stock recorded successfully");
  
      handleReset();
  
      // Refresh Inventory Table
      // refetchInventory();
  
    } catch (error: any) {
      console.error(error);
  
      toast.error(
        error?.data?.message ||
        error?.message ||
        "Failed to record stock."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      inventoryId:"",
      quantity: 0,
      // unit: "",
      reason: "",
      notes: "",
    });
  };

  if (isLoading)
  return <LoadingState title="Loading products..." message="Please wait while we fetch your data." />;


  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 600,
          mx: "auto",
          p: { xs: 2, md: 4 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            pb: 1,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          Record Stock In
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth required>
  <InputLabel>Product</InputLabel>

  <Select
  value={formData.inventoryId}
  label="Product"
  onChange={handleChange("inventoryId")}
  disabled={isLoading}
>
    <MenuItem value="" disabled>
      Select Product
    </MenuItem>

    {inventories.map((inventory) => (
      <MenuItem
        key={inventory._id}
        value={inventory._id}
      >
        {inventory.productId?.name}
      </MenuItem>
    ))}
  </Select>
</FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
  fullWidth
  required
  label="Quantity"
  type="number"
  value={formData.quantity || ""}
  onChange={handleChange("quantity")}
  disabled={isLoading}
/>
            </Grid>

            {/* <Grid size={{ xs: 12, sm: 6 }}> */}
              {/* <FormControl fullWidth required>
                <InputLabel>Unit</InputLabel>
                <Select value={formData.unit} onChange={handleChange("unit")} label="Unit">
                  <MenuItem value="" disabled>
                    Select Unit...
                  </MenuItem>
                  {units.map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}
            {/* </Grid> */}

            {/* <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
  fullWidth
  required
  label="Date"
  type="date"
  value={formData.date}
  onChange={handleChange("date")}
  slotProps={{
    inputLabel: {
      shrink: true,
    },
  }}
/>
            </Grid> */}

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Reason / Source"
                value={formData.reason}
                onChange={handleChange("reason")}
                placeholder="e.g., Supplier Delivery"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Notes"
                multiline
                rows={3}
                value={formData.notes}
                onChange={handleChange("notes")}
                placeholder="Optional details..."
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "flex-end",
              mt: 4,
              pt: 3,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Button
  variant="outlined"
  onClick={handleReset}
  type="button"
  disabled={isLoading}
>
  Reset
</Button>
            <Button
  variant="contained"
  type="submit"
  disabled={isLoading}
>
  {isLoading ? "Saving..." : "Save Entry"}
</Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};