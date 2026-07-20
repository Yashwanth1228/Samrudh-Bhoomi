import React from "react";
import { Typography } from "@mui/material";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  inquiries: any[];
}

const COLORS = [
  "#2E7D32", // New
  "#F9A825", // Contacted
  "#1976D2", // In Progress
  "#8E24AA", // Closed
  "#D32F2F", // Rejected
];

export default function InquiryStatusChart({ inquiries }: Props) {
  const statusCounts = inquiries.reduce((acc: any, inquiry: any) => {
    const status = inquiry.status || "New";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(statusCounts).map(([status, value]) => ({
    name: status,
    value,
  }));

  return (
    <>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          mb: 3,
        }}
      >
        Inquiry Status
      </Typography>

      {chartData.length === 0 ? (
        <Typography color="text.secondary" align="center">
          No inquiries available
        </Typography>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              innerRadius={55}
              paddingAngle={3}
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </>
  );
}