import React from "react";
import { Grid } from "@mui/material";

import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import DashboardKPIs from "@/components/admin/dashboard/DashboardKPIs";
import InventoryMovementChart from "@/components/admin/dashboard/InventoryMovementChart";
import CategoryPieChart from "@/components/admin/dashboard/CategoryPieChart";
import InquiryStatusChart from "@/components/admin/dashboard/InquiryStatusChart";
import RecentTransactionsTable from "@/components/admin/dashboard/RecentTransactionsTable";
import LowStockTable from "@/components/admin/dashboard/LowStockTable";

import Footer from "@/components/admin/Footer";

import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";

import {
  DashboardContainer,
  ChartCard,
  TableCard,
} from "@/styles/admin/Dashboard.styles";

import {
  useGetProductsQuery,
  useGetInventoriesQuery,
  useGetInventoryHistoryQuery,
  useGetInquiriesQuery,
  useGetBlogsQuery,
  useGetUsersQuery,
} from "@/store/api/apiSlice";

export default function Dashboard() {
  const { data: products = [], isLoading: productLoading } =
    useGetProductsQuery({ limit: 5, page: 1 });

  const { data: inventories = [], isLoading: inventoryLoading } =
    useGetInventoriesQuery();

  const { data: transactions = [], isLoading: transactionLoading } =
    useGetInventoryHistoryQuery();

  const { data: inquiries = [], isLoading: inquiryLoading } =
    useGetInquiriesQuery();

  const { data: blogs = [], isLoading: blogLoading } = useGetBlogsQuery();

  const { data: users = [], isLoading: userLoading } = useGetUsersQuery();

  if (
    productLoading ||
    inventoryLoading ||
    transactionLoading ||
    inquiryLoading ||
    blogLoading ||
    userLoading
  ) {
    return (
      <LoadingState
        title="Loading Dashboard..."
        message="Fetching latest analytics..."
      />
    );
  }

  return (
    <DashboardContainer>
      <DashboardHeader />

      <DashboardKPIs
        products={products}
        inventories={inventories}
        blogs={blogs}
        inquiries={inquiries}
        users={users}
        transactions={transactions}
      />

      <ChartCard>
        <InventoryMovementChart transactions={transactions} />
      </ChartCard>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard>
            <CategoryPieChart products={products.data || []} />
          </ChartCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ChartCard>
            <InquiryStatusChart inquiries={inquiries} />
          </ChartCard>
        </Grid>
      </Grid>

      <TableCard sx={{ mt: 4 }}>
        <RecentTransactionsTable transactions={transactions} />
      </TableCard>

      <TableCard sx={{ mt: 4 }}>
        <LowStockTable inventories={inventories} />
      </TableCard>

      <Footer />
    </DashboardContainer>
  );
}
