import React from "react";
import { Typography } from "@mui/material";

import { HeaderSection } from "@/styles/admin/Dashboard.styles";

export default function DashboardHeader() {
  return (
    <HeaderSection>
      <div>
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          Welcome Back, Admin
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mt: 1,
          }}
        >
          Monitor your business performance and inventory activity.
        </Typography>
      </div>
    </HeaderSection>
  );
}