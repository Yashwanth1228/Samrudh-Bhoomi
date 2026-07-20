import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Chip,
  Typography,
} from "@mui/material";

interface Props {
  inventories: any[];
}

export default function LowStockTable({
  inventories,
}: Props) {
  const lowStock = inventories.filter(
    (item) => item.status === "low-stock"
  );

  return (
    <>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          mb: 2,
        }}
      >
        Low Stock Products
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Current Qty</TableCell>
            <TableCell>Minimum Qty</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {lowStock.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                {item.productId?.name}
              </TableCell>

              <TableCell>
                {item.productId?.category}
              </TableCell>

              <TableCell>{item.quantity}</TableCell>

              <TableCell>{item.minStockLevel}</TableCell>

              <TableCell>
                <Chip
                  color="warning"
                  label="Low Stock"
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}

          {lowStock.length === 0 && (
            <TableRow>
              <TableCell
                align="center"
                colSpan={5}
              >
                No Low Stock Products
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}