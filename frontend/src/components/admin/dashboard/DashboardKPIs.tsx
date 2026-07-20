import React, { useMemo } from "react";
import { Typography } from "@mui/material";

import {
  StatsGrid,
//   StatsGridSecondary,
  StatCard,
} from "@/styles/admin/Dashboard.styles";

interface Props {
  products: any[];
  inventories: any[];
  users: any[];
  blogs: any[];
  inquiries: any[];
  transactions: any[];
}

export default function DashboardKPIs({
  products,
  inventories,
  users,
  blogs,
  inquiries,
  transactions,
}: Props) {

  const stats = useMemo(() => {

    const today = new Date().toDateString();

    const todayStockIn = transactions
      .filter(
        (item) =>
          item.type === "stock-in" &&
          new Date(item.createdAt).toDateString() === today
      )
      .reduce((sum, item) => sum + item.quantity, 0);

    const todayStockOut = transactions
      .filter(
        (item) =>
          item.type === "stock-out" &&
          new Date(item.createdAt).toDateString() === today
      )
      .reduce((sum, item) => sum + item.quantity, 0);

    return {

      totalProducts: products.length,

      totalInventory: inventories.length,

      totalUsers: users.length,

      totalInquiries: inquiries.filter(
        (item) => item.status === "new"
      ).length,

      lowStock: inventories.filter(
        (item) => item.status === "low-stock"
      ).length,

      publishedBlogs: blogs.filter(
        (blog) => blog.status === "published"
      ).length,

      todayStockIn,

      todayStockOut,
    };

  }, [
    products,
    inventories,
    users,
    blogs,
    inquiries,
    transactions,
  ]);

  return (
    <StatsGrid>
  
      <StatCard>
        <Typography color="text.secondary">
          Total Products
        </Typography>
  
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          {stats.totalProducts}
        </Typography>
      </StatCard>
  
      <StatCard>
        <Typography color="text.secondary">
          Inventory Items
        </Typography>
  
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          {stats.totalInventory}
        </Typography>
      </StatCard>
  
      <StatCard>
        <Typography color="text.secondary">
          Users
        </Typography>
  
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          {stats.totalUsers}
        </Typography>
      </StatCard>
  
      <StatCard>
        <Typography color="text.secondary">
          New Inquiries
        </Typography>
  
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          {stats.totalInquiries}
        </Typography>
      </StatCard>
  
      <StatCard>
        <Typography color="text.secondary">
          Low Stock
        </Typography>
  
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
            color: "#d32f2f",
          }}
        >
          {stats.lowStock}
        </Typography>
      </StatCard>
  
      <StatCard>
        <Typography color="text.secondary">
          Today's Stock In
        </Typography>
  
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
            color: "#2e7d32",
          }}
        >
          {stats.todayStockIn}
        </Typography>
      </StatCard>
  
      <StatCard>
        <Typography color="text.secondary">
          Today's Stock Out
        </Typography>
  
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
            color: "#ef6c00",
          }}
        >
          {stats.todayStockOut}
        </Typography>
      </StatCard>
  
      <StatCard>
        <Typography color="text.secondary">
          Published Blogs
        </Typography>
  
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          {stats.publishedBlogs}
        </Typography>
      </StatCard>
  
    </StatsGrid>
  );
}