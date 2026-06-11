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

interface FormData {
  product: string;
  quantity: number;
  unit: string;
  date: string;
  reason: string;
  notes: string;
}

const units = ["Bags", "KG", "Tonnes", "Litres", "Packets", "Pieces"];
const products = ["Premium Urea Fertilizer 46% N", "Hybrid Tomato Seeds (Vyapar)"];

export const StockInForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    product: "",
    quantity: 0,
    unit: "",
    date: "",
    reason: "",
    notes: "",
  });

  const handleChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call here
  };

  const handleReset = () => {
    setFormData({
      product: "",
      quantity: 0,
      unit: "",
      date: "",
      reason: "",
      notes: "",
    });
  };

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
                  value={formData.product}
                  onChange={handleChange("product")}
                  label="Product"
                >
                  <MenuItem value="" disabled>
                    Select Product...
                  </MenuItem>
                  {products.map((product) => (
                    <MenuItem key={product} value={product}>
                      {product}
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
                placeholder="e.g., 100"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth required>
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
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
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
            </Grid>

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
            <Button variant="outlined" onClick={handleReset} type="button">
              Reset
            </Button>
            <Button variant="contained" type="submit">
              Save Entry
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};