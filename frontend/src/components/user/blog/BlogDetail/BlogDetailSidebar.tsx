import React from "react";
import { Box, IconButton, Typography, Divider } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import LinkIcon from "@mui/icons-material/Link";

import { SidebarWrapper } from "@/styles/user/blog/BlogDetail/BlogDetailSidebar.styles";

export const BlogDetailSidebar: React.FC = () => {
  const socialIcons = [
    { icon: <ShareIcon />, label: "Share" },
    { icon: <WorkIcon />, label: "LinkedIn" },
    { icon: <ChatIcon />, label: "WhatsApp" },
  ];

  return (
    <SidebarWrapper>
      <Typography
        variant="caption"
        sx={{
          fontWeight: 600,
          letterSpacing: "0.5px",
          color: "text.secondary",
          mb: 2,
          display: "block",
        }}
      >
        SHARE
      </Typography>

      {socialIcons.map((item, index) => (
        <IconButton
          key={index}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "50%",
            width: 40,
            height: 40,
            color: "text.secondary",
            "&:hover": {
              borderColor: "primary.main",
              color: "primary.main",
              bgcolor: "action.hover",
            },
          }}
        >
          {item.icon}
        </IconButton>
      ))}

      <Divider sx={{ width: 32, my: 2 }} />

      <IconButton
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "50%",
          width: 40,
          height: 40,
          color: "text.secondary",
          "&:hover": {
            borderColor: "primary.main",
            color: "primary.main",
            bgcolor: "action.hover",
          },
        }}
      >
        <LinkIcon />
      </IconButton>
    </SidebarWrapper>
  );
};