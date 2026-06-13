import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import {
  BlogSectionCard,
  BlogGrid,
  LeftSection,
  EditorCard,
  EditorToolbar,
  ProductSubTabs,
  ProductSubTabButton,
  ProductSectionContent,
  StyledTextField,
} from "@/styles/admin/Cms.styles";
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";

function BlogsCms() {
    const [blogSubTab, setBlogSubTab] = useState("listing");
    return (
        <BlogSectionCard>
  <ProductSubTabs>

    <ProductSubTabButton
      active={blogSubTab === "listing"}
      onClick={() => setBlogSubTab("listing")}
    >
      Blog Listing Page
    </ProductSubTabButton>

    <ProductSubTabButton
      active={blogSubTab === "detail"}
      onClick={() => setBlogSubTab("detail")}
    >
      Blog Detail Page
    </ProductSubTabButton>

  </ProductSubTabs>

  <ProductSectionContent>

    {/* BLOG LISTING */}
    {blogSubTab === "listing" && (
      <BlogGrid>

        <LeftSection>

          <StyledTextField
            label="Banner Title"
            defaultValue="Knowledge Hub: Insights for Modern Farmers"
            fullWidth
          />

          <StyledTextField
            label="Banner Description"
            multiline
            rows={3}
            defaultValue="Discover latest techniques, success stories, and research in organic farming and agricultural technology."
            fullWidth
          />

        </LeftSection>

        <EditorCard>

          <Typography
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "#6b7280",
            }}
          >
            INTRODUCTION CONTENT
          </Typography>

          <EditorToolbar>

            <IconButton>
              <FormatBoldIcon />
            </IconButton>

            <IconButton>
              <FormatListBulletedIcon />
            </IconButton>

          </EditorToolbar>

          <StyledTextField
            multiline
            rows={5}
            fullWidth
            defaultValue="Welcome to our digital archive. Here we share over two decades of agricultural expertise to help you maximize your yields sustainably..."
          />

        </EditorCard>

      </BlogGrid>
    )}

    {/* BLOG DETAIL */}
    {blogSubTab === "detail" && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 4,
          }}
        >

          <StyledTextField
            label="Related Blogs Section Title"
            defaultValue="More from Samrudh Bhoomi"
          />

          <StyledTextField
            label="CTA Section Title"
            defaultValue="Join Our Farming Community"
          />

        </Box>

        <StyledTextField
          label="CTA Description"
          multiline
          rows={3}
          defaultValue="Subscribe to our newsletter for bi-weekly farming tips, product updates, and exclusive dealer offers directly in your inbox."
        />

      </Box>
    )}

  </ProductSectionContent>
</BlogSectionCard>
    )
}

export default BlogsCms
