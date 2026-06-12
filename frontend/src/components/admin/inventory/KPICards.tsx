import React from "react";
import { Box, Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { KPIGrid, KPIBox, KPIBigBox } from "@/styles/admin/Inventory.styles";

interface KPIItemProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  valueSuffix?: string;
  trend?: "up" | "down";
}

const KPIItem: React.FC<KPIItemProps> = ({ title, value, icon, valueSuffix, trend }) => (
  <KPIBox>
    {icon && <Box className="kpi-icon">{icon}</Box>}
    <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: "block" }}>
      {title}
    </Typography>
    <Typography variant="h4" sx={{ fontWeight: 600 }}>
      {value}
      {valueSuffix && (
        <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
          {valueSuffix}
        </Typography>
      )}
    </Typography>
  </KPIBox>
);

const KPIBigItem: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({
  title,
  value,
  icon,
}) => (
  <KPIBigBox>
    <Box className="gradient-bg" />
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: "block" }}>
          {title}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          {value}
        </Typography>
      </Box>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "rgba(129,199,132,1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
    </Box>
  </KPIBigBox>
);

const TrendKPI: React.FC<{ title: string; value: string | number; trend: "up" | "down" }> = ({
  title,
  value,
  trend,
}) => {
  const Icon = trend === "up" ? ArrowUpwardIcon : ArrowDownwardIcon;
  const iconColor = trend === "up" ? "error.main" : "success.main";

  return (
    <KPIBox>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ mb: 1, display: "flex", alignItems: "center", gap: 0.5 }}
      >
        <Icon sx={{ fontSize: 16, color: iconColor }} />
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
    </KPIBox>
  );
};

export const KPICards: React.FC = () => {
  return (
    <KPIGrid>
      <KPIItem title="Total Inventory Items" value="45" icon={<CategoryIcon />} />
      <KPIBigItem title="Current Stock Quantity" value="45,920" icon={<InventoryIcon />} />
      <TrendKPI title="Today's Stock In" value="1,250" trend="down" />
      <TrendKPI title="Today's Stock Out" value="840" trend="up" />
    </KPIGrid>
  );
};