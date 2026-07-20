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
  InputAdornment,
  MenuItem,
  FormControl,
  Select,
  TablePagination,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import {
  StyledTable,
  TableToolbar,
  StatusBadge,
} from "@/styles/admin/Inventory.styles";
import { useGetInventoryHistoryQuery } from "@/store/api/apiSlice";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";

interface StockHistoryProps {
  history: any[];
}

export const StockHistory: React.FC = () => {

    const {
        data: history = [],
        isLoading: historyLoading,
        error: historyError,
        refetch: refetchHistory,
        isFetching
      } = useGetInventoryHistoryQuery();

  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredHistory = history.filter((item) => {
    const matchesSearch =
      item.productId?.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) || false;

    const matchesType =
      typeFilter === "All" || item.type === typeFilter;

    return matchesSearch && matchesType;
  });

  const paginatedData = filteredHistory.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (
    event: unknown,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  if (historyLoading)
  return <LoadingState title="Loading inventory stock history..." message="Please wait while we fetch your data." />;

if (historyError)
  return (
    <ErrorState
  title="Failed to Load inventory stock "
  message="Unable to fetch inventory transactions."
  loading={isFetching}
  onRetry={refetchHistory}
/>
  )

  return (
    <Box>
      <TableToolbar>
        <TextField
          size="small"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <Select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <MenuItem value="All">All Transactions</MenuItem>
            <MenuItem value="stock-in">Stock In</MenuItem>
            <MenuItem value="stock-out">Stock Out</MenuItem>
          </Select>
        </FormControl>
      </TableToolbar>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Transaction</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedData.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    {new Date(item.createdAt).toLocaleString()}
                  </TableCell>

                  <TableCell>
                    {item.productId?.name}
                  </TableCell>

                  <TableCell>
                    {item.productId?.category}
                  </TableCell>

                  <TableCell>
                    <StatusBadge
                      status={
                        item.type === "stock-in"
                          ? "in-stock"
                          : "out-of-stock"
                      }
                    >
                      {item.type === "stock-in"
                        ? "Stock In"
                        : "Stock Out"}
                    </StatusBadge>
                  </TableCell>

                  <TableCell>{item.quantity}</TableCell>

                  <TableCell>{item.reason || "-"}</TableCell>

                  <TableCell>{item.notes || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredHistory.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Box>
  );
};