import React, { useState } from "react";
import { Box, Typography, Button, Tabs, Tab, Paper, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { InventoryTable } from "@/components/admin/inventory/InventoryTable";
import { StockInForm } from "@/components/admin/inventory/StockInForm";
import { KPICards } from "@/components/admin/inventory/KPICards";
import {
  PageHeader,
  ContentContainer,
  TabPanel,
} from "@/styles/admin/Inventory.styles";
import { AddButton } from "@/styles/admin/Product.styles";
import { useRouter } from "next/router";
import Footer from "@/components/admin/Footer";
import { useGetInventoriesQuery, useGetInventoryHistoryQuery } from "@/store/api/apiSlice";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";
import { StockOutForm } from "@/components/admin/inventory/StockOutForm";
import { StockHistory } from "@/components/admin/inventory/StockHistory";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`inventory-tabpanel-${index}`}
      aria-labelledby={`inventory-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `inventory-tab-${index}`,
    "aria-controls": `inventory-tabpanel-${index}`,
  };
}

export default function InventoryManagement() {
  const [tabValue, setTabValue] = useState(0);
  const router = useRouter();

  const {
    data: inventories = [],
    isLoading: inventoryloading,
    error,
    refetch,
    isFetching,
} = useGetInventoriesQuery();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  
  if (inventoryloading)
  return <LoadingState title="Loading inventory..." message="Please wait while we fetch your data." />;

if (error)
  return (
    <ErrorState
  title="Failed to Load inventory"
  message="Unable to fetch inventory."
  loading={isFetching}
  onRetry={refetch}
/>
  );

  return (
    <>
    <ContentContainer>
      <Container maxWidth={false} disableGutters sx={{ maxWidth: "1400px", mx: "auto" }}>
        {/* Page Header */}
        <PageHeader>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Inventory Management
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Manage stock levels, stock movements, and inventory transactions.
            </Typography>
          </Box>
          <AddButton startIcon={<AddIcon />}onClick={() => router.push("/admin/inventory/add")}>
            Add Inventory
          </AddButton>
        </PageHeader>

        {/* KPI Cards */}
        <KPICards inventories={inventories} />

        {/* Tabs Section */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "12px",
            border: "1px solid",
            borderColor: "divider",
            overflow: "hidden",
            mt: 4,
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="inventory tabs"
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                fontSize: "14px",
                minHeight: 56,
              },
              "& .Mui-selected": {
                color: "#6b7280",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#6b7280",
                height: 3,
              },
            }}
          >
            <Tab label="Current Stock" {...a11yProps(0)} />
            <Tab label="Stock In" {...a11yProps(1)} />
            <Tab label="Stock Out" {...a11yProps(2)} />
            <Tab label="Stock History" {...a11yProps(3)} />
          </Tabs>

          <CustomTabPanel value={tabValue} index={0}>
          <InventoryTable
    inventories={inventories}
    isLoading={inventoryloading}
    error={error}
    refetch={refetch}
  />
          </CustomTabPanel>

          <CustomTabPanel value={tabValue} index={1}>
          <StockInForm
    inventories={inventories}
    refetchInventory={refetch}
  />
          </CustomTabPanel>

          <CustomTabPanel value={tabValue} index={2}>
            <Box sx={{ p: 4, textAlign: "center" }}>
              <Typography color="text.secondary">
              <StockOutForm
    inventories={inventories}
    refetchInventory={refetch}
  />
              </Typography>
            </Box>
          </CustomTabPanel>

          <CustomTabPanel value={tabValue} index={3}>
            <Box sx={{ p: 4, textAlign: "center" }}>
            <CustomTabPanel value={tabValue} index={3}>
  <StockHistory />
</CustomTabPanel>
            </Box>
          </CustomTabPanel>
        </Paper>
      </Container>
      <Footer/>
    </ContentContainer>
    
    </>
  );
}