import React from "react";
import { Typography, Grid, Stack, Box } from "@mui/material";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import DatasetIcon from "@mui/icons-material/Dataset";
import ArticleIcon from "@mui/icons-material/Article";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const backgroundImage =
  "https://i.pinimg.com/736x/ce/1f/23/ce1f236d3e0185729e033b9564088ff7.jpg";

const logoImage =
  "https://lh3.googleusercontent.com/aida/AP1WRLuLkKNuo3_ZP02zqNrwPJdLBgncYOFKNrIDgREy0tjvTPiDZoYbXyUhrqLHMN-rLCs068zedMqoklowM547R7GhjHpsENNTlo_zyf5LcHPNTVGSMHyHpBcFhxiYh_0gU5wfw0UHkAAIv54JhAG7nEDGNfAZP6bIC0wn5DCnJVM86azzZXu7_VU2tPhlY9ljGbL5BXMw1qjeEAnqrO5GOwUkwbuJZzBPxe7jc5NAPRuhu2mrpOOI_-OIUeP5";

const features = [
  {
    title: "Inventory Management",
    icon: <Inventory2Icon />,
  },
  {
    title: "Product Catalog",
    icon: <DatasetIcon />,
  },
  {
    title: "CMS Management",
    icon: <ArticleIcon />,
  },
  {
    title: "User Administration",
    icon: <GroupAddIcon />,
  },
];

export default function BrandPanel() {
  return (
    <Box
      sx={{
        position: "relative",
        width: {
          xs: "100%",
          md: "50%",
          lg: "55%",
        },
        minHeight: {
          xs: 400,
          md: "100vh",
        },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Glass Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(26,28,25,0.4)",
          backdropFilter: "blur(8px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: {
            xs: 3,
            md: 6,
          },
        }}
      >
        {/* Top Brand */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Samrudh Bhoomi
            </Typography>

            <Typography
              sx={{
                color: "#bcf0ae",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 500,
              }}
            >
              Agri-Enterprise ERP
            </Typography>
          </Box>
        </Box>

        {/* Center Content */}
        <Box
          sx={{
            maxWidth: 700,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: {
                xs: "36px",
                md: "48px",
              },
              lineHeight: 1.15,
              mb: 4,
            }}
          >
            Advanced Enterprise Resource Planning for{" "}
            <Box
              component="span"
              sx={{
                color: "#bcf0ae",
              }}
            >
              Sustainable Agriculture.
            </Box>
          </Typography>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            {features.map((feature) => (
              <Grid key={feature.title} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "#bcf0ae",
                      display: "flex",
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Footer */}
        <Typography
          sx={{
            color: "#cfcfcf",
            fontSize: 12,
          }}
        >
          © 2024 Samrudh Bhoomi Private Limited. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
