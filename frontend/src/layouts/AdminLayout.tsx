import React from "react";
import { Box } from "@mui/material";

import Sidebar from "@/components/admin/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 280,
          flexShrink: 0,
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <Sidebar />
      </Box>
      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          ml: "280px",
          p: 3,
          height: "100vh",
          overflowY: "auto",
          backgroundColor: "#f5f7f9",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
