import React from "react";
import { Box, Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { KPIGrid, KPIBox } from "@/styles/admin/Inventory.styles";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface KPIItemProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  valueColor?: string;
}

interface KPICardsProps {
  inventories: any[];
}

const KPIItem: React.FC<KPIItemProps> = ({
  title,
  value,
  icon,
  valueColor = "#1a1c19",
}) => (
  <KPIBox>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }}
  >
    <Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontWeight: 500 }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          fontSize: 34,
          fontWeight: 700,
          color: valueColor,
        }}
      >
        {value}
      </Typography>
    </Box>

    <Box
      sx={{
        width: 52,
        height: 52,
        borderRadius: "12px",
        backgroundColor: "#EEF7EF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </Box>
  </Box>
</KPIBox>
);

export const KPICards: React.FC<KPICardsProps> = ({ inventories }) => {
  // Total inventory records
  const totalInventoryItems = inventories.length;

  // Total available quantity
  const totalStockQuantity = inventories.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  // Today's date
  const today = new Date().toDateString();

  // Today's Stock In
  const todaysStockIn = inventories
    .filter(
      (item) => new Date(item.createdAt).toDateString() === today
    )
    .reduce((total, item) => total + (item.quantity || 0), 0);

  // Low Stock Count
  const lowStockCount = inventories.filter(
    (item) => item.status === "low-stock"
  ).length;

  return (
    <KPIGrid>

<KPIItem
  title="Inventory Items"
  value={totalInventoryItems}
  icon={<CategoryIcon sx={{ color: "#2d5a27", fontSize: 30 }} />}
/>

<KPIItem
  title="Current Stock"
  value={totalStockQuantity}
  icon={<InventoryIcon sx={{ color: "#1976d2", fontSize: 30 }} />}
/>

<KPIItem
  title="Today's Stock In"
  value={todaysStockIn}
  valueColor="#2e7d32"
  icon={<ArrowDownwardIcon sx={{ color: "#2e7d32", fontSize: 30 }} />}
/>

<KPIItem
  title="Low Stock Items"
  value={lowStockCount}
  valueColor="#d32f2f"
  icon={<WarningAmberIcon sx={{ color: "#d32f2f", fontSize: 30 }} />}
/>

</KPIGrid>
  );
};