import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import {
  StatsGrid,
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

const IconBox = ({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) => (
  <Box
    sx={{
      width: 54,
      height: 54,
      borderRadius: "14px",
      backgroundColor: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {children}
  </Box>
);

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
      .reduce((sum, item) => sum + (item.quantity || 0), 0);

    const todayStockOut = transactions
      .filter(
        (item) =>
          item.type === "stock-out" &&
          new Date(item.createdAt).toDateString() === today
      )
      .reduce((sum, item) => sum + (item.quantity || 0), 0);

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

  const cards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      valueColor: "#111827",
      bg: "#E8F5E9",
      icon: (
        <Inventory2OutlinedIcon
          sx={{
            color: "#2E7D32",
            fontSize: 28,
          }}
        />
      ),
    },
    {
      title: "Inventory Items",
      value: stats.totalInventory,
      valueColor: "#111827",
      bg: "#E3F2FD",
      icon: (
        <WarehouseOutlinedIcon
          sx={{
            color: "#1565C0",
            fontSize: 28,
          }}
        />
      ),
    },
    {
      title: "Users",
      value: stats.totalUsers,
      valueColor: "#111827",
      bg: "#F3E5F5",
      icon: (
        <GroupOutlinedIcon
          sx={{
            color: "#8E24AA",
            fontSize: 28,
          }}
        />
      ),
    },
    {
      title: "New Inquiries",
      value: stats.totalInquiries,
      valueColor: "#111827",
      bg: "#FFF3E0",
      icon: (
        <ContactSupportOutlinedIcon
          sx={{
            color: "#EF6C00",
            fontSize: 28,
          }}
        />
      ),
    },
    {
      title: "Low Stock",
      value: stats.lowStock,
      valueColor: "#D32F2F",
      bg: "#FFEBEE",
      icon: (
        <WarningAmberOutlinedIcon
          sx={{
            color: "#D32F2F",
            fontSize: 28,
          }}
        />
      ),
    },
    {
      title: "Today's Stock In",
      value: stats.todayStockIn,
      valueColor: "#2E7D32",
      bg: "#E8F5E9",
      icon: (
        <SouthOutlinedIcon
          sx={{
            color: "#2E7D32",
            fontSize: 28,
          }}
        />
      ),
    },
    {
      title: "Today's Stock Out",
      value: stats.todayStockOut,
      valueColor: "#EF6C00",
      bg: "#FFF3E0",
      icon: (
        <NorthOutlinedIcon
          sx={{
            color: "#EF6C00",
            fontSize: 28,
          }}
        />
      ),
    },
    {
      title: "Published Blogs",
      value: stats.publishedBlogs,
      valueColor: "#111827",
      bg: "#EDE7F6",
      icon: (
        <ArticleOutlinedIcon
          sx={{
            color: "#5E35B1",
            fontSize: 28,
          }}
        />
      ),
    },
  ];

  return (
    <StatsGrid>
      {cards.map((card) => (
        <StatCard key={card.title}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: 34,
                  fontWeight: 700,
                  color: card.valueColor,
                }}
              >
                {card.value}
              </Typography>
            </Box>

            <IconBox bg={card.bg}>
              {card.icon}
            </IconBox>
          </Box>
        </StatCard>
      ))}
    </StatsGrid>
  );
}