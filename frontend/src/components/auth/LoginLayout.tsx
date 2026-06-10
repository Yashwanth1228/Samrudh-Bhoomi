import React from "react";
import { Box } from "@mui/material";
import BrandPanel from "./BrandPanel";
import LoginForm from "./LoginForm";

export default function LoginLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        minHeight: "100vh",
      }}
    >
      <BrandPanel />

      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
            lg: "45%",
          },
          backgroundColor: "#fafaf4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
