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

import { TableToolbar, StatusBadge } from "@/styles/admin/Inventory.styles";

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  lastUpdated: string;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const mockData: InventoryItem[] = [
  {
    id: 1,
    name: "Premium Urea Fertilizer 46% N",
    category: "Fertilizers",
    quantity: 1250,
    unit: "Bags (50kg)",
    lastUpdated: "Oct 24, 2023",
    status: "in-stock",
  },
  {
    id: 2,
    name: "Hybrid Tomato Seeds (Vyapar)",
    category: "Seeds",
    quantity: 45,
    unit: "Packets (100g)",
    lastUpdated: "Oct 23, 2023",
    status: "low-stock",
  },
  {
    id: 3,
    name: "Organic Neem Oil Pesticide",
    category: "Pesticides",
    quantity: 0,
    unit: "Litres",
    lastUpdated: "Oct 20, 2023",
    status: "out-of-stock",
  },
  {
    id: 4,
    name: "DAP Fertilizer 18-46-0",
    category: "Fertilizers",
    quantity: 4500,
    unit: "Bags (50kg)",
    lastUpdated: "Oct 24, 2023",
    status: "in-stock",
  },
];

const categories = ["All Categories", "Fertilizers", "Seeds", "Pesticides"];
const statuses = ["All Status", "In Stock", "Low Stock", "Out of Stock"];

export const InventoryTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getStatusValue = (status: string): "in-stock" | "low-stock" | "out-of-stock" => {
    const mapping: Record<string, "in-stock" | "low-stock" | "out-of-stock"> = {
      "in-stock": "in-stock",
      "low-stock": "low-stock",
      "out-of-stock": "out-of-stock",
    };
    return mapping[status] || "in-stock";
  };

  const filteredData = mockData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All Categories" || item.category === category;
    const matchesStatus =
      statusFilter === "All Status" ||
      (statusFilter === "In Stock" && item.status === "in-stock") ||
      (statusFilter === "Low Stock" && item.status === "low-stock") ||
      (statusFilter === "Out of Stock" && item.status === "out-of-stock");

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
    const labels = {
      "in-stock": "In Stock",
      "low-stock": "Low Stock",
      "out-of-stock": "Out of Stock",
    };
    return labels[status as keyof typeof labels];
  };

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
          <TableHead>
            <TableRow sx={{ bgcolor: "action.hover" }}>
              <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 600, textAlign: "right" }}>Available Qty</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Unit</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Last Updated</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600, textAlign: "right" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{
                  bgcolor: index % 2 === 0 ? "background.paper" : "action.hover",
                  "&:hover": {
                    bgcolor: "action.selected",
                  },
                }}
              >
                <TableCell sx={{ fontWeight: 500 }}>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell sx={{ textAlign: "right", fontWeight: 500 }}>{item.quantity}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.lastUpdated}</TableCell>
                <TableCell>
                  <StatusBadge status={item.status}>{getStatusLabel(item.status)}</StatusBadge>
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
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