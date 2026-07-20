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
import toast from "react-hot-toast";

import LoadingState from "@/components/common/LoadingState";
import { useStockOutMutation } from "@/store/api/apiSlice";

interface FormData {
  inventoryId: string;
  quantity: number;
  reason: string;
  notes: string;
}

interface StockOutFormProps {
  inventories: any[];
  refetchInventory: () => void;
}

export const StockOutForm: React.FC<StockOutFormProps> = ({
  inventories,
  refetchInventory,
}) => {
  const [formData, setFormData] = useState<FormData>({
    inventoryId: "",
    quantity: 0,
    reason: "",
    notes: "",
  });

  const [stockOut, { isLoading }] = useStockOutMutation();

  const selectedInventory = inventories.find(
    (item) => item._id === formData.inventoryId
  );

  const handleChange =
    (field: keyof FormData) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleReset = () => {
    setFormData({
      inventoryId: "",
      quantity: 0,
      reason: "",
      notes: "",
    });
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

      if (
        selectedInventory &&
        Number(formData.quantity) > selectedInventory.quantity
      ) {
        toast.error(
          `Only ${selectedInventory.quantity} items are available in stock.`
        );
        return;
      }

      const response = await stockOut({
        inventoryId: formData.inventoryId,
        quantity: Number(formData.quantity),
        reason: formData.reason,
        notes: formData.notes,
      }).unwrap();

      toast.success(response.message || "Stock out recorded successfully");

      handleReset();

      refetchInventory();
    } catch (error: any) {
      console.error(error);

      toast.error(
        error?.data?.message ||
          error?.message ||
          "Failed to record stock out."
      );
    }
  };

  if (isLoading) {
    return (
      <LoadingState
        title="Updating Inventory..."
        message="Please wait while stock is being updated."
      />
    );
  }

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
          Record Stock Out
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

            {selectedInventory && (
              <Grid size={{ xs: 12 }}>
                <Typography variant="body2" color="text.secondary">
                  Current Stock :{" "}
                  <strong>
                    {selectedInventory.quantity}{" "}
                    {selectedInventory.productId?.unit || ""}
                  </strong>
                </Typography>
              </Grid>
            )}

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Reason"
                value={formData.reason}
                onChange={handleChange("reason")}
                placeholder="e.g. Customer Order"
                disabled={isLoading}
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
                disabled={isLoading}
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
              disabled={isLoading}
            >
              Reset
            </Button>

            <Button
              variant="contained"
              color="error"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Record Stock Out"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};