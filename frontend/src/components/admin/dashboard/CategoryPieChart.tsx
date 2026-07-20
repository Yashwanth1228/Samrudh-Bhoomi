import React, { useMemo } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  products: any[];
}

const COLORS = [
  "#2E7D32",
  "#43A047",
  "#66BB6A",
  "#81C784",
  "#A5D6A7",
  "#C8E6C9",
  "#1B5E20",
  "#388E3C",
];

export default function CategoryPieChart({
  products,
}: Props) {
  const chartData = useMemo(() => {
    const categoryMap: Record<string, number> = {};

    products.forEach((product) => {
      const category = product.category || "Others";
      categoryMap[category] = (categoryMap[category] || 0) + 1;
    });

    return Object.entries(categoryMap).map(([name, value]) => ({
      name,
      value,
    }));
  }, [products]);

  const totalProducts = products.length;

  return (
    <Box>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        Products by Category
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Total Products: {totalProducts}
      </Typography>

      {chartData.length === 0 ? (
        <Box
          sx={{
            height: 320,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="text.secondary">
            No products available
          </Typography>
        </Box>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={105}
              paddingAngle={3}
              label={({ name, percent }) =>
                `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`
              }
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [
                `${value} Products`,
                "Count",
              ]}
            />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{
                paddingTop: 10,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
}