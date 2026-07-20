import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import {
  ChartCard,
  SectionTitle,
} from "@/styles/admin/Dashboard.styles";

interface Props {
  transactions: any[];
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function InventoryMovementChart({
  transactions,
}: Props) {

  const chartData = useMemo(() => {

    const result = months.map((month) => ({
      month,
      stockIn: 0,
      stockOut: 0,
    }));

    transactions.forEach((item) => {

      const date = new Date(item.createdAt);

      const index = date.getMonth();

      if (item.type === "stock-in") {
        result[index].stockIn += item.quantity;
      }

      if (item.type === "stock-out") {
        result[index].stockOut += item.quantity;
      }

    });

    return result;

  }, [transactions]);

  return (
    <ChartCard>

      <SectionTitle>
        Inventory Movement
      </SectionTitle>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="stockIn"
            fill="#4caf50"
            radius={[6, 6, 0, 0]}
          />

          <Bar
            dataKey="stockOut"
            fill="#f44336"
            radius={[6, 6, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </ChartCard>
  );
}