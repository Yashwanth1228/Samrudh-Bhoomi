import React from "react";

import { Typography } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";

import {
  SidebarContainer,
  LogoSection,
  MenuSection,
  LogoutSection,
  MenuItemWrapper,
} from "@/styles/admin/SideBar.styles";
import { useRouter } from "next/router";

const menus = [
  {
    label: "Dashboard",
    icon: <DashboardOutlinedIcon />,
  },
  {
    label: "Products",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    label: "Inventory",
    icon: <WarehouseOutlinedIcon />,
  },
  {
    label: "Users",
    icon: <PeopleOutlineOutlinedIcon />,
  },
  {
    label: "Contact",
    icon: <ContactPhoneOutlinedIcon />,
  },
  {
    label: "Blog",
    icon: <ArticleOutlinedIcon />,
  },
  {
    label: "CMS",
    icon: <ViewQuiltOutlinedIcon />,
  },
];

const handleLogout = () => {};

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <SidebarContainer>
      <div>
        <LogoSection>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#2d5a27",
            }}
          >
            Samrudh Bhoomi
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#6d7469",
            }}
          >
            Agri-Enterprise ERP
          </Typography>
        </LogoSection>

        <MenuSection>
          {menus.map((menu) => {
            const path = `/admin/${menu.label.toLowerCase()}`;

            return (
              <MenuItemWrapper
                key={menu.label}
                active={router.pathname === path}
                onClick={() => router.push(path)}
              >
                {menu.icon}

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight:
                      router.pathname === path ? 600 : 500,
                  }}
                >
                  {menu.label}
                </Typography>
              </MenuItemWrapper>
            );
          })}
        </MenuSection>
      </div>

      <LogoutSection>
        <MenuItemWrapper onClick={handleLogout}>
          <LogoutOutlinedIcon />

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Logout
          </Typography>
        </MenuItemWrapper>
      </LogoutSection>
    </SidebarContainer>
  );
}
