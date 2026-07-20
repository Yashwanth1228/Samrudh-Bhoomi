import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Typography,
} from "@mui/material";

interface Props {
  transactions: any[];
}

export default function RecentTransactionsTable({
  transactions,
}: Props) {
  return (
    <>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          mb: 2,
        }}
      >
        Recent Inventory Transactions
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Reason</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.slice(0, 6).map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                {item.productId?.name}
              </TableCell>

              <TableCell>
                <Chip
                  size="small"
                  color={
                    item.type === "stock-in"
                      ? "success"
                      : "error"
                  }
                  label={
                    item.type === "stock-in"
                      ? "Stock In"
                      : "Stock Out"
                  }
                />
              </TableCell>

              <TableCell>
                {item.quantity}
              </TableCell>

              <TableCell>
                {new Date(item.createdAt).toLocaleDateString()}
              </TableCell>

              <TableCell>
                {item.reason || "-"}
              </TableCell>
            </TableRow>
          ))}

          {transactions.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                align="center"
              >
                No Transactions Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}