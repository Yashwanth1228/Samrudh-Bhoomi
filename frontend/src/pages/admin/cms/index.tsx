import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Box, Button, Link, Typography } from "@mui/material";

import {
  CmsHeaderContainer,
  CmsHeaderContent,
  CmsTitle,
  CmsSubtitle,
  PublishButton,
} from "@/styles/admin/Cms.styles";

import {
    CmsTabsContainer,
    CmsTabButton,
  } from "@/styles/admin/Cms.styles";

import { useState } from "react";
import HomeCms from "../../../components/admin/cms/HomeCms";
import AboutCms from "@/components/admin/cms/AboutCms";
import ProductsCms from "@/components/admin/cms/ProductsCms";
import BlogsCms from "@/components/admin/cms/BlogsCms";
import ContactCms from "@/components/admin/cms/ContactCms";
import FooterCms from "@/components/admin/cms/FooterCms";
import SeoCms from "@/components/admin/cms/SeoCms";

import CloudDoneIcon from "@mui/icons-material/CloudDone";
import Footer from "@/components/admin/Footer";

const tabs = [
    "Home",
    "About Us",
    "Products",
    "Blogs",
    "Contact",
    "Footer",
    "SEO",
  ];
  

function index() {
    const [activeTab, setActiveTab] = useState("Home");
    return (
        <>
         <CmsHeaderContainer>
      <CmsHeaderContent>
        <div>
          <CmsTitle>
            CMS Management
          </CmsTitle>

          <CmsSubtitle>
            Manage all website content, page sections, media, footer content,
            and SEO settings for Samrudh Bhoomi&apos;s digital presence.
          </CmsSubtitle>
        </div>

        <PublishButton
          variant="contained"
          startIcon={<RocketLaunchOutlinedIcon />}
        >
          Publish Changes
        </PublishButton>
      </CmsHeaderContent>
    </CmsHeaderContainer>

    <CmsTabsContainer>
      {tabs.map((tab) => (
        <CmsTabButton
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </CmsTabButton>
      ))}
    </CmsTabsContainer>

    {activeTab === "Home" && <HomeCms />}
      {activeTab === "About Us" && <AboutCms />}
      {activeTab === "Products" && <ProductsCms />}
      {activeTab === "Blogs" && <BlogsCms />}
      {activeTab === "Contact" && <ContactCms />}
      {activeTab === "Footer" && <FooterCms />}
      {activeTab === "SEO" && <SeoCms />}

      {/* Fixed Footer Actions */}
  {/* <Box
    sx={{
      position: "fixed",
      bottom: 0,
      right: 0,
      width: "calc(100% - 280px)",
      height: 80,
      bgcolor: "#fff",
      borderTop: "1px solid #e5e7eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: 4,
      zIndex: 50,
      boxShadow: "0 -4px 10px rgba(0,0,0,0.03)",
    }}
  >
    Left
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "text.secondary",
      }}
    >
      <CloudDoneIcon
        sx={{
          color: "#2d5a27",
        }}
      />

      <Typography
        variant="caption"
        sx={{
          fontWeight: 500,
        }}
      >
        All changes autosaved at 14:45 PM
      </Typography>
    </Box>

    Right
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Button
        sx={{
          px: 3,
          color: "text.secondary",
          fontWeight: 700,
          "&:hover": {
            bgcolor: "#f3f4f6",
          },
        }}
      >
        Cancel
      </Button>

      <Button
        variant="outlined"
        sx={{
          px: 3,
          fontWeight: 700,
          borderWidth: 2,
          color: "#2d5a27",
          borderColor: "#2d5a27",
          "&:hover": {
            bgcolor: "#f0fdf4",
            borderWidth: 2,
          },
        }}
      >
        Save Changes
      </Button>

      <Button
        variant="contained"
        sx={{
          px: 4,
          py: 1.2,
          bgcolor: "#2d5a27",
          fontWeight: 700,
          "&:hover": {
            bgcolor: "#23451f",
          },
        }}
      >
        Publish Changes
      </Button>
    </Box>
  </Box> */}

  {/* Footer Copyright */}
  {/* <Box
    component="footer"
    sx={{
      ml: "280px",
      mt: "auto",
      py: 2,
      px: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      bgcolor: "#f9fafb",
      borderTop: "1px solid #e5e7eb",
    }}
  >
    <Typography
      variant="body2"
      color="text.secondary"
    >
      © 2024 AgriCorp Enterprise Systems
    </Typography>

    <Box
      sx={{
        display: "flex",
        gap: 4,
      }}
    >
      <Link
        href="#"
        underline="hover"
        sx={{
          color: "#2d5a27",
        }}
      >
        Privacy Policy
      </Link>

      <Link
        href="#"
        underline="hover"
        sx={{
          color: "#2d5a27",
        }}
      >
        Terms of Service
      </Link>

      <Link
        href="#"
        underline="hover"
        sx={{
          color: "#2d5a27",
        }}
      >
        Help Center
      </Link>
    </Box>
  </Box> */}

  <Footer/>

        </>
    )
}

export default index
