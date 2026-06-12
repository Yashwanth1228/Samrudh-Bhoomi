// src/pages/admin/blog.tsx
import React, { useState, useRef, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Drawer,
  Chip,
  Switch,
  FormControlLabel,
  TextareaAutosize,
  SelectChangeEvent,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
  Save as SaveIcon,
  Image as ImageIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  FormatListBulleted as FormatListBulletedIcon,
  FormatListNumbered as FormatListNumberedIcon,
  Link as LinkIcon,
  Article as ArticleIcon,
  CheckCircle as CheckCircleIcon,
  EditDocument as EditDocumentIcon,
  Star as StarIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";
import {
  PageContainer,
  MainContent,
  ContentWrapper,
  PageHeader,
  PageTitle,
  PageSubtitle,
  KPIGrid,
  KPICard,
  KPICardLeft,
  KPILabel,
  KPIValue,
  KPIValueLarge,
  CardIcon,
  ActionBar,
  ActionBarLeft,
  ActionBarRight,
  SearchField,
  StyledSelect,
  CreateButton,
  TableWrapper,
  StyledTable,
  BlogImage,
  BlogImagePlaceholder,
  BlogTitle,
  BlogCategory,
  StatusChipPublished,
  StatusChipDraft,
  ActionButtons,
  ActionIconButton,
  PaginationContainer,
  PaginationInfo,
  PaginationControls,
  PaginationButton,
  PaginationActiveButton,
  DrawerContainer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerCloseButton,
  DrawerBody,
  FormSection,
  SectionTitle,
  FormField,
  FormLabel,
  FormInput,
  FormRow,
  StyledTextarea,
  ToolbarContainer,
  ToolbarButton,
  DividerLine,
  ImageUploadArea,
  UploadIcon,
  UploadText,
  UploadSubtext,
  PublishRow,
  DrawerFooter,
  PreviewButton,
  FooterButtons,
  CancelButton,
  SaveButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  PreviewCategory,
  PreviewTitle,
  PreviewImagePlaceholder,
  PreviewContent,
} from "../../../styles/admin/Blog.styles";

// Types
interface BlogPost {
  id: string;
  image: string;
  title: string;
  category: string;
  status: "published" | "draft";
  date: string;
  imageUrl?: string;
}

// Mock data
const mockBlogs: BlogPost[] = [
  {
    id: "1",
    image: "blog1",
    title: "The Future of Sustainable Farming",
    category: "Sustainable Farming",
    status: "published",
    date: "Oct 12, 2023",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5zRFzTNjzpIW5sQeekip-qrDP0mw5k3GKtp3aG2yee-swF5_svf-Ssq1JIkQETf5upqeGHY68g7428UU_-JNhI7Ddsvoxj7HdTGpjeKgEmxObR8eu0Uc0rgH4hajnnU5w4RTFJq3B4IpAFCt6X42quTrrIkpQbX7NXmgT_MRQDH3XD0-7g_PAzehPRmEdAk3hczZm-loC8l6TmsGum7ridx5vdRs1V8Cb1lEyAg5ga7CmSoeUA3RDShNgxuuEhm7Nql1A7dD9KThz",
  },
  {
    id: "2",
    image: "blog2",
    title: "New Organic Fertilizer Launch",
    category: "Product Updates",
    status: "published",
    date: "Oct 05, 2023",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpM5GL6jI8lU_GMPmu16tEJGBV7M2oIsbAjSXmxm0iuYZYdzmfFCsihXYTWJiZfmCnXqqYLI6y4D6cGOWDdnUL-zNZ-ohzLDrapRvAvx7cUhN_PpcuL7HdnsLw46qMRWJOUggTpCQYpodXy0R3KSOZ-Q4hX16583o9PFqwKRTfXfoCA95EDTKx02_It0Dyx2giHPw1zHzteyaAZPDdXnynYtEIUy7O_fOrgHij2rEmV4sYdEV6AIwxkcGpCT6SSN2LO4-_hkd_u1-7",
  },
  {
    id: "3",
    image: "",
    title: "Maximizing Crop Yield in Monsoon",
    category: "Best Practices",
    status: "draft",
    date: "-",
  },
];

const BlogPage: NextPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>(mockBlogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Form state
  const [formTitle, setFormTitle] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formStatus, setFormStatus] = useState(true);
  const [formDescription, setFormDescription] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formMetaTitle, setFormMetaTitle] = useState("");
  const [formMetaKeywords, setFormMetaKeywords] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleStatusFilterChange = (event: SelectChangeEvent) => {
    setStatusFilter(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormTitle(title);
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setFormSlug(slug);
  };

  const handleOpenDrawer = (edit: boolean = false, blog?: BlogPost) => {
    setIsEdit(edit);
    if (edit && blog) {
      setSelectedBlog(blog);
      setFormTitle(blog.title);
      setFormCategory(blog.category);
      setFormStatus(blog.status === "published");
      handleTitleChange({ target: { value: blog.title } } as any);
    } else {
      resetForm();
    }
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormTitle("");
    setFormSlug("");
    setFormCategory("");
    setFormStatus(true);
    setFormDescription("");
    setFormContent("");
    setFormMetaTitle("");
    setFormMetaKeywords("");
    setSelectedBlog(null);
  };

  const handlePreview = () => {
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };

  const handleSave = () => {
    handleCloseDrawer();
    alert("Blog saved successfully!");
  };

  const handleEdit = (blog: BlogPost) => {
    handleOpenDrawer(true, blog);
  };

  const handleDelete = (blog: BlogPost) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((b) => b.id !== blog.id));
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || blog.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const paginatedBlogs = filteredBlogs.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const kpiData = {
    total: 24,
    published: 18,
    drafts: 6,
    featured: 3,
  };

  return (
    <>
      <Head>
        <title>Blog Management - Samrudh Bhoomi ERP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageContainer>
        <MainContent>
          <ContentWrapper>
            <PageHeader>
              <PageTitle variant="h1">Blog Management</PageTitle>
              <PageSubtitle variant="body1">
                Create, edit, publish, and manage blog articles.
              </PageSubtitle>
            </PageHeader>

            <KPIGrid>
              <KPICard>
                <KPICardLeft>
                  <KPILabel variant="overline">Total Blogs</KPILabel>
                  <KPIValue variant="h2">{kpiData.total}</KPIValue>
                </KPICardLeft>
                <CardIcon>
                  <ArticleIcon />
                </CardIcon>
              </KPICard>

              <KPICard className="published">
                <KPICardLeft>
                  <KPILabel variant="overline">Published</KPILabel>
                  <KPIValue variant="h2">{kpiData.published}</KPIValue>
                </KPICardLeft>
                <CardIcon>
                  <CheckCircleIcon />
                </CardIcon>
              </KPICard>

              <KPICard className="drafts">
                <KPICardLeft>
                  <KPILabel variant="overline">Drafts</KPILabel>
                  <KPIValue variant="h2">{kpiData.drafts}</KPIValue>
                </KPICardLeft>
                <CardIcon>
                  <EditDocumentIcon />
                </CardIcon>
              </KPICard>

              <KPICard className="featured">
                <KPICardLeft>
                  <KPILabel variant="overline">Featured</KPILabel>
                  <KPIValue variant="h2">{kpiData.featured}</KPIValue>
                </KPICardLeft>
                <CardIcon>
                  <StarIcon />
                </CardIcon>
              </KPICard>
            </KPIGrid>

            <ActionBar>
              <ActionBarLeft>
                <SearchField
                  placeholder="Search blogs by title..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <StyledSelect
                  value={statusFilter}
                  onChange={() => handleStatusFilterChange}
                  displayEmpty
                >
                  <MenuItem value="all">All Status</MenuItem>
                  <MenuItem value="published">Published</MenuItem>
                  <MenuItem value="draft">Draft</MenuItem>
                </StyledSelect>
              </ActionBarLeft>
              <ActionBarRight>
                <CreateButton
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => handleOpenDrawer(false)}
                >
                  Create Blog
                </CreateButton>
              </ActionBarRight>
            </ActionBar>

            <TableWrapper>
              <StyledTable>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Blog Title</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Published Date</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedBlogs.map((blog) => (
                    <TableRow key={blog.id} hover>
                      <TableCell>
                        {blog.imageUrl ? (
                          <BlogImage src={blog.imageUrl} alt={blog.title} />
                        ) : (
                          <BlogImagePlaceholder>
                            <ImageIcon />
                          </BlogImagePlaceholder>
                        )}
                      </TableCell>
                      <TableCell>
                        <BlogTitle variant="body2">{blog.title}</BlogTitle>
                      </TableCell>
                      <TableCell>
                        <BlogCategory variant="body2">
                          {blog.category}
                        </BlogCategory>
                      </TableCell>
                      <TableCell>
                        {blog.status === "published" ? (
                          <StatusChipPublished label="Published" />
                        ) : (
                          <StatusChipDraft label="Draft" />
                        )}
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="textSecondary">
                          {blog.date}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <ActionButtons>
                          <ActionIconButton size="small" title="View">
                            <VisibilityIcon />
                          </ActionIconButton>
                          <ActionIconButton
                            size="small"
                            title="Edit"
                            onClick={() => handleEdit(blog)}
                          >
                            <EditIcon />
                          </ActionIconButton>
                          <ActionIconButton
                            size="small"
                            title="Delete"
                            onClick={() => handleDelete(blog)}
                          >
                            <DeleteIcon />
                          </ActionIconButton>
                        </ActionButtons>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredBlogs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableWrapper>
          </ContentWrapper>
        </MainContent>
      </PageContainer>

      {/* Create/Edit Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <DrawerContainer>
          <DrawerHeader>
            <Box>
              <DrawerTitle variant="h6">
                {isEdit ? "Edit Blog" : "Create New Blog"}
              </DrawerTitle>
              <DrawerSubtitle variant="body2">
                Fill in the details below to{" "}
                {isEdit ? "update" : "publish a new"} article.
              </DrawerSubtitle>
            </Box>
            <DrawerCloseButton onClick={handleCloseDrawer}>
              <CloseIcon />
            </DrawerCloseButton>
          </DrawerHeader>

          <DrawerBody>
            {/* Section 1: Basic Information */}
            <FormSection>
              <SectionTitle variant="overline">
                1. Basic Information
              </SectionTitle>
              <FormField>
                <FormLabel>Blog Title *</FormLabel>
                <FormInput
                  fullWidth
                  placeholder="e.g. The Future of Sustainable Farming"
                  value={formTitle}
                  onChange={handleTitleChange}
                />
              </FormField>
              <FormRow>
                <FormField>
                  <FormLabel>URL Slug</FormLabel>
                  <FormInput
                    fullWidth
                    placeholder="auto-generated-slug"
                    value={formSlug}
                    disabled
                  />
                </FormField>
                <FormField>
                  <FormLabel>Category *</FormLabel>
                  <StyledSelect
                    fullWidth
                    value={formCategory}
                    onChange={(e: any) => setFormCategory(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select category
                    </MenuItem>
                    <MenuItem value="Sustainable Farming">
                      Sustainable Farming
                    </MenuItem>
                    <MenuItem value="Product Updates">Product Updates</MenuItem>
                    <MenuItem value="Best Practices">Best Practices</MenuItem>
                  </StyledSelect>
                </FormField>
              </FormRow>
            </FormSection>

            {/* Section 2: Media */}
            <FormSection>
              <SectionTitle variant="overline">2. Media</SectionTitle>
              <FormField>
                <FormLabel>Featured Image</FormLabel>
                <ImageUploadArea onClick={() => fileInputRef.current?.click()}>
                  <UploadIcon>
                    <CloudUploadIcon />
                  </UploadIcon>
                  <UploadText variant="body1">
                    <span>Upload a file</span> or drag and drop
                  </UploadText>
                  <UploadSubtext variant="caption">
                    PNG, JPG, GIF up to 10MB
                  </UploadSubtext>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </ImageUploadArea>
              </FormField>
            </FormSection>

            {/* Section 3: Content */}
            <FormSection>
              <SectionTitle variant="overline">3. Content</SectionTitle>
              <FormField>
                <FormLabel>Short Description (Excerpt)</FormLabel>
                <StyledTextarea
                  minRows={2}
                  placeholder="Brief summary for blog listings..."
                  value={formDescription}
                  onChange={(e: any) => setFormDescription(e.target.value)}
                />
              </FormField>
              <FormField>
                <FormLabel>Article Body</FormLabel>
                <ToolbarContainer>
                  <ToolbarButton>
                    <FormatBoldIcon sx={{ fontSize: 18 }} />
                  </ToolbarButton>
                  <ToolbarButton>
                    <FormatItalicIcon sx={{ fontSize: 18 }} />
                  </ToolbarButton>
                  <ToolbarButton>
                    <FormatUnderlinedIcon sx={{ fontSize: 18 }} />
                  </ToolbarButton>
                  <DividerLine />
                  <ToolbarButton>
                    <FormatListBulletedIcon sx={{ fontSize: 18 }} />
                  </ToolbarButton>
                  <ToolbarButton>
                    <FormatListNumberedIcon sx={{ fontSize: 18 }} />
                  </ToolbarButton>
                  <DividerLine />
                  <ToolbarButton>
                    <LinkIcon sx={{ fontSize: 18 }} />
                  </ToolbarButton>
                  <ToolbarButton>
                    <ImageIcon sx={{ fontSize: 18 }} />
                  </ToolbarButton>
                </ToolbarContainer>
                <StyledTextarea
                  minRows={8}
                  placeholder="Write your article content here..."
                  value={formContent}
                  onChange={(e: any) => setFormContent(e.target.value)}
                />
              </FormField>
            </FormSection>

            {/* Section 4: SEO Settings */}
            <FormSection>
              <SectionTitle variant="overline">4. SEO Settings</SectionTitle>
              <FormField>
                <FormLabel>Meta Title</FormLabel>
                <FormInput
                  fullWidth
                  value={formMetaTitle}
                  onChange={(e: any) => setFormMetaTitle(e.target.value)}
                />
              </FormField>
              <FormField>
                <FormLabel>Meta Keywords</FormLabel>
                <FormInput
                  fullWidth
                  placeholder="farming, agriculture, yield (comma separated)"
                  value={formMetaKeywords}
                  onChange={(e: any) => setFormMetaKeywords(e.target.value)}
                />
              </FormField>
            </FormSection>

            {/* Section 5: Publish Settings */}
            <FormSection>
              <SectionTitle variant="overline">5. Publish Status</SectionTitle>
              <PublishRow>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formStatus}
                      onChange={(e) => setFormStatus(e.target.checked)}
                    />
                  }
                  label={formStatus ? "Published" : "Draft"}
                />
              </PublishRow>
            </FormSection>
          </DrawerBody>

          <DrawerFooter>
            <PreviewButton onClick={handlePreview}>Preview</PreviewButton>
            <FooterButtons>
              <CancelButton onClick={handleCloseDrawer}>Cancel</CancelButton>
              <SaveButton onClick={handleSave} startIcon={<SaveIcon />}>
                Save Blog
              </SaveButton>
            </FooterButtons>
          </DrawerFooter>
        </DrawerContainer>
      </Drawer>

      {/* Preview Modal */}
      <Dialog
        open={previewOpen}
        onClose={handleClosePreview}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "12px",
              maxHeight: "90vh",
            },
          },
        }}
      >
        <ModalHeader>
          <ModalTitle>
            <VisibilityIcon sx={{ fontSize: 20 }} />
            <span>Preview</span>
          </ModalTitle>
          <ModalCloseButton onClick={handleClosePreview}>
            <CloseIcon />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Box sx={{ maxWidth: "672px", margin: "0 auto" }}>
            <PreviewCategory variant="overline">
              {formCategory || "Category"}
            </PreviewCategory>
            <PreviewTitle variant="h1">
              {formTitle || "Blog Title Preview"}
            </PreviewTitle>
            <PreviewImagePlaceholder>
              <ImageIcon />
            </PreviewImagePlaceholder>
            <PreviewContent>
              <Typography variant="body1" color="textSecondary">
                This is a simulated preview of the blog content. The rich text
                editor content would render here, showcasing the typography,
                spacing, and layout as it would appear on the public-facing
                blog.
              </Typography>
            </PreviewContent>
          </Box>
        </ModalBody>
      </Dialog>
    </>
  );
};

export default BlogPage;
