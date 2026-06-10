import React from "react";

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  DashboardContainer,
  HeaderSection,
  StatsGrid,
  StatsGridSecondary,
  StatCard,
  ChartCard,
  TableCard,
  SectionTitle,
} from "@/styles/admin/Dashboard.styles";

const inventoryData = [
  { month: "Jan", stock: 400 },
  { month: "Feb", stock: 300 },
  { month: "Mar", stock: 500 },
  { month: "Apr", stock: 450 },
  { month: "May", stock: 650 },
  { month: "Jun", stock: 550 },
];

const lowStockProducts = [
  {
    name: "Organic Fertilizer",
    category: "Fertilizer",
    stock: 5,
    status: "Low",
  },
  {
    name: "Hybrid Seeds",
    category: "Seeds",
    stock: 3,
    status: "Low",
  },
  {
    name: "Pesticide X",
    category: "Pesticide",
    stock: 7,
    status: "Low",
  },
];

export default function Dashboard() {
  return (
    <DashboardContainer>
      {/* Header */}

      <HeaderSection>
        <div>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            Welcome Back, Admin
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",
            }}
          >
            Monitor your business performance.
          </Typography>
        </div>
      </HeaderSection>

      {/* First Row */}

      <StatsGrid>
        <StatCard>
          <Typography color="text.secondary">Total Products</Typography>

          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            240
          </Typography>
        </StatCard>

        <StatCard>
          <Typography color="text.secondary">Categories</Typography>

          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            18
          </Typography>
        </StatCard>

        <StatCard>
          <Typography color="text.secondary">Inventory</Typography>

          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            1,280
          </Typography>
        </StatCard>

        <StatCard>
          <Typography color="text.secondary">Today's Flow</Typography>

          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            124
          </Typography>
        </StatCard>
      </StatsGrid>

      {/* Second Row */}

      <StatsGridSecondary>
        <StatCard>
          <Typography color="text.secondary">Low Stock Items</Typography>

          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#d32f2f",
            }}
          >
            12
          </Typography>
        </StatCard>

        <StatCard>
          <Typography color="text.secondary">Employees</Typography>

          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            25
          </Typography>
        </StatCard>

        <StatCard>
          <Typography color="text.secondary">Contact Inquiries</Typography>

          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            48
          </Typography>
        </StatCard>
      </StatsGridSecondary>

      {/* Graph */}

      <ChartCard>
        <SectionTitle>Inventory Flow Overview</SectionTitle>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={inventoryData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="stock" fill="#2d5a27" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Table */}

      <TableCard>
        <SectionTitle>Low Stock Alerts</SectionTitle>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>

              <TableCell>Category</TableCell>

              <TableCell>Current Stock</TableCell>

              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {lowStockProducts.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.name}</TableCell>

                <TableCell>{product.category}</TableCell>

                <TableCell>{product.stock}</TableCell>

                <TableCell>{product.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableCard>
    </DashboardContainer>
  );
}
