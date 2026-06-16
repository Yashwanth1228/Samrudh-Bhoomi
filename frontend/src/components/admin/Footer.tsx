import Link from "next/link";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        py: 2,
        mt: "auto",
        bgcolor: "#f8f9f5",
        borderTop: "1px solid #e5e7eb",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          color: "#6b7280",
        }}
      >
        © 2024 AgriCorp Enterprise Systems
      </Typography>

      {/* Footer Links */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="#"
          style={{
            color: "#2d5a27",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Privacy Policy
        </Link>

        <Link
          href="#"
          style={{
            color: "#2d5a27",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Terms of Service
        </Link>

        <Link
          href="#"
          style={{
            color: "#2d5a27",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Help Center
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;