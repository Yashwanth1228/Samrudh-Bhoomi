import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  IconButton,
  TablePagination,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { TableToolbar, StatusBadge, StyledTable } from "@/styles/admin/Inventory.styles";
import { useGetInventoriesQuery } from "@/store/api/apiSlice";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";

interface InventoryTableProps {
  inventories: any[];
  isLoading: boolean;
  error: any;
  refetch: () => void;
}

// const mockData: InventoryItem[] = [
//   {
//     id: 1,
//     name: "Premium Urea Fertilizer 46% N",
//     category: "Fertilizers",
//     quantity: 1250,
//     unit: "Bags (50kg)",
//     lastUpdated: "Oct 24, 2023",
//     status: "in-stock",
//   },
//   {
//     id: 2,
//     name: "Hybrid Tomato Seeds (Vyapar)",
//     category: "Seeds",
//     quantity: 45,
//     unit: "Packets (100g)",
//     lastUpdated: "Oct 23, 2023",
//     status: "low-stock",
//   },
//   {
//     id: 3,
//     name: "Organic Neem Oil Pesticide",
//     category: "Pesticides",
//     quantity: 0,
//     unit: "Litres",
//     lastUpdated: "Oct 20, 2023",
//     status: "out-of-stock",
//   },
//   {
//     id: 4,
//     name: "DAP Fertilizer 18-46-0",
//     category: "Fertilizers",
//     quantity: 4500,
//     unit: "Bags (50kg)",
//     lastUpdated: "Oct 24, 2023",
//     status: "in-stock",
//   },
// ];

const categories = ["All Categories", "Fertilizers", "Seeds", "Pesticides"];
const statuses = ["All Status", "In Stock", "Low Stock", "Out of Stock"];

export const InventoryTable: React.FC<InventoryTableProps> = ({
  inventories,
  // isLoading,
  // error,
  // refetch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

//   const {
//     data: inventories = [],
//     isLoading: inventoryloading,
//     error,
//     refetch,
//     isFetching,
// } = useGetInventoriesQuery();



  const getStatusValue = (status: string): "in-stock" | "low-stock" | "out-of-stock" => {
    const mapping: Record<string, "in-stock" | "low-stock" | "out-of-stock"> = {
      "in-stock": "in-stock",
      "low-stock": "low-stock",
      "out-of-stock": "out-of-stock",
    };
    return mapping[status] || "in-stock";
  };

  const filteredData = inventories.filter((item) => {
    const productName = item.productId?.name || "";
    const productCategory = item.productId?.category || "";
  
    const matchesSearch = productName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  
    const matchesCategory =
      category === "All Categories" ||
      productCategory === category;
  
    const matchesStatus =
      statusFilter === "All Status" ||
      (statusFilter === "In Stock" && item.status === "in-stock") ||
      (statusFilter === "Low Stock" && item.status === "low-stock") ||
      (statusFilter === "Out of Stock" &&
        item.status === "out-of-stock");
  
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      "in-stock": "In Stock",
      "low-stock": "Low Stock",
      "out-stock": "Out of Stock",
    };
  
    return labels[status] || status;
  };

//   if (inventoryloading)
//   return <LoadingState title="Loading products..." message="Please wait while we fetch your data." />;

// if (error)
//   return (
//     <ErrorState
//   title="Failed to Load products"
//   message="Unable to fetch products."
//   loading={isFetching}
//   onRetry={refetch}
// />
//   );

  return (
    <Box>
      <TableToolbar>
      <TextField
  className="search-field"
  size="small"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  slotProps={{
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon sx={{ color: "text.secondary" }} />
        </InputAdornment>
      ),
    },
  }}
  sx={{ width: { xs: "100%", sm: 300 } }}
/>
        <Box className="filter-group" sx={{ display: "flex", gap: 2 }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </TableToolbar>

      <TableContainer>
        <Table sx={{ minWidth: 800 }}>
          <StyledTable>
          <TableHead>
            {/* <TableRow sx={{ bgcolor: "action.hover" }}>
              <TableCell >Product Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 600, textAlign: "right" }}>Available Qty</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Unit</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Last Updated</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600, textAlign: "right" }}>Actions</TableCell>
            </TableRow> */}

            <TableRow >
              <TableCell >Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Available Qty</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell >Last Updated</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {paginatedData.map((item) => (
    <TableRow
      key={item._id}
      sx={{
        bgcolor: "background.paper",
        "&:hover": {
          bgcolor: "action.selected",
        },
      }}
    >
      <TableCell sx={{ fontWeight: 500 }}>
        {item.productId?.name || "Unknown Product"}
      </TableCell>

      <TableCell>
        {item.productId?.category || "-"}
      </TableCell>

      <TableCell sx={{ textAlign: "right", fontWeight: 500 }}>
        {item.quantity}
      </TableCell>

      <TableCell>
        {item.productId?.inventory?.unit || "-"}
      </TableCell>

      <TableCell>
        {new Date(item.updatedAt).toLocaleDateString()}
      </TableCell>

      <TableCell>
        <StatusBadge status={item.status}>
          {getStatusLabel(item.status)}
        </StatusBadge>
      </TableCell>

      <TableCell sx={{ textAlign: "right" }}>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  ))}
</TableBody>


          </StyledTable>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};