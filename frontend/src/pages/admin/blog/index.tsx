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
  Avatar,
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
  CenterBox,
  StatusCard,
  Spinner,
  StatusTitle,
  StatusText,
} from "../../../styles/admin/Blog.styles";
import { useDeleteBlogMutation, useGetBlogsQuery } from "@/store/api/apiSlice";
import { AuthorCard } from "@/styles/user/blog/BlogDetail/BlogDetailAuthor.styles";


// Types
interface BlogPost {
  _id: string;
  id?: string;

  title: string;
  slug: string;
  category: string;

  featuredImages: string[];

  excerpt: string;
  content: string;

  readTime: string;

  author: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };

  seo: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
  };

  status: "draft" | "published";

  featured?: boolean;

  publishedAt?: string;

  views: number;

  relatedPosts: string[];

  createdAt: string;
  updatedAt: string;
}

// Mock data
// const mockBlogs: BlogPost[] = [
//   {
//     id: "1",
//     image: "blog1",
//     title: "The Future of Sustainable Farming",
//     category: "Sustainable Farming",
//     status: "published",
//     date: "Oct 12, 2023",
//     createdAt: "jwsconwc"
//     featuredImages:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuC5zRFzTNjzpIW5sQeekip-qrDP0mw5k3GKtp3aG2yee-swF5_svf-Ssq1JIkQETf5upqeGHY68g7428UU_-JNhI7Ddsvoxj7HdTGpjeKgEmxObR8eu0Uc0rgH4hajnnU5w4RTFJq3B4IpAFCt6X42quTrrIkpQbX7NXmgT_MRQDH3XD0-7g_PAzehPRmEdAk3hczZm-loC8l6TmsGum7ridx5vdRs1V8Cb1lEyAg5ga7CmSoeUA3RDShNgxuuEhm7Nql1A7dD9KThz",
//   },
//   {
//     id: "2",
//     image: "blog2",
//     title: "New Organic Fertilizer Launch",
//     category: "Product Updates",
//     status: "published",
//     date: "Oct 05, 2023",
//     featuredImages:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCpM5GL6jI8lU_GMPmu16tEJGBV7M2oIsbAjSXmxm0iuYZYdzmfFCsihXYTWJiZfmCnXqqYLI6y4D6cGOWDdnUL-zNZ-ohzLDrapRvAvx7cUhN_PpcuL7HdnsLw46qMRWJOUggTpCQYpodXy0R3KSOZ-Q4hX16583o9PFqwKRTfXfoCA95EDTKx02_It0Dyx2giHPw1zHzteyaAZPDdXnynYtEIUy7O_fOrgHij2rEmV4sYdEV6AIwxkcGpCT6SSN2LO4-_hkd_u1-7",
//   },
//   {
//     id: "3",
//     image: "",
//     title: "Maximizing Crop Yield in Monsoon",
//     category: "Best Practices",
//     status: "draft",
//     date: "-",
//   },
// ];

const BlogPage: NextPage = () => {
  // const [blogs, setBlogs] = useState<BlogPost[]>(mockBlogs);
  // const [realblogs , setrealBlogs] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const { data : blogs, error, isLoading: blogloading} = useGetBlogsQuery();
  console.log(" the data from server", blogs);
  // setrealBlogs(data.data);
  // console.log("this is blog data",realblogs)

  const [deleteBlog] = useDeleteBlogMutation();

  // Form state
  const [formTitle, setFormTitle] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formStatus, setFormStatus] = useState(true);
  const [featuredstatus , setfeaturedstatus] = useState(false);
  const [formDescription, setFormDescription] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formMetaTitle, setFormMetaTitle] = useState("");
  const [formMetaDescription, setFormMetaDescription] = useState("");
  const [formMetaKeywords, setFormMetaKeywords] = useState("");
  const [formImage , setformImage] = useState<File | string | null>(null);

  const [formAuthorName, setFormAuthorName] = useState("");
const [formAuthorTitle, setFormAuthorTitle] = useState("");
const [formAuthorBio, setFormAuthorBio] = useState("");
const [formAuthorImage, setFormAuthorImage] = useState<File | string | null>(null);

const authorImageInputRef = useRef<HTMLInputElement>(null);

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
      setFormDescription(blog.excerpt || "");
      setFormContent(blog.content || "");
      setFormMetaTitle(blog.seo?.metaTitle || "");
      setFormMetaDescription(blog.seo?.metaDescription || "");
      setFormMetaKeywords(blog.seo?.metaKeywords?.join(",") || "");
      setFormAuthorName(blog.author?.name || "");
      setFormAuthorTitle(blog.author?.title || "");
      setFormAuthorBio(blog.author?.bio || "");
      

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

  const handlePreview = (blog:BlogPost) => {
    setFormCategory(blog.category);
    setFormTitle(blog.title);
    setFormDescription(blog.excerpt);
    setFormContent(blog.content);
    setFormAuthorName(blog.author.name);
    setFormAuthorTitle(blog.author.title);
    setFormAuthorBio(blog.author.bio);
    setFormAuthorImage(blog.author.image);
    setformImage(blog.featuredImages[0] || null)

    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setFormCategory("");
    setFormTitle("");
    setFormDescription("");
    setFormContent("");
    setFormAuthorName("");
    setFormAuthorTitle("");
    setFormAuthorBio("");
    setFormAuthorImage("");
    setformImage("")
    setPreviewOpen(false);
  };

  const handleSave = () => {
    const formData = new FormData();

formData.append("title", formTitle);
formData.append("slug", formSlug);
formData.append("category", formCategory);
formData.append("excerpt", formDescription);
formData.append("content", formContent);

formData.append("authorName", formAuthorName);
formData.append("authorTitle", formAuthorTitle);
formData.append("authorBio", formAuthorBio);

if (formAuthorImage) {
  formData.append("authorImage", formAuthorImage);
}
    handleCloseDrawer();
    alert("Blog saved successfully!");
  };

  const handleEdit = (blog: BlogPost) => {
    handleOpenDrawer(true, blog);
  };

  const handleDelete = async (id: string) => {
    try {
      const deleteblog = await deleteBlog(id).unwrap();
      console.log("the deleted blog", deleteblog);
      if (deleteblog.success) {
        alert("Blog deleted successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAuthorImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
  
    if (file) {
      setFormAuthorImage(file);
    }
  };


  if (blogloading) {
    return (
      <CenterBox>
        <StatusCard>
          <Spinner />
          <StatusTitle>Loading blogs...</StatusTitle>
          <StatusText>Please wait while we fetch your data</StatusText>
        </StatusCard>
      </CenterBox>
    );
  }


  const filteredBlogs = blogs?.filter((blog:BlogPost) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || blog.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  console.log("the filtered blogs " , filteredBlogs);

  const paginatedBlogs = filteredBlogs?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const kpiData = {
    total: blogs?.length || 0,
  
    published:
      blogs?.filter(
        (blog: any) => blog.status === "published"
      ).length || 0,
  
    drafts:
      blogs?.filter(
        (blog: any) => blog.status === "draft"
      ).length || 0,
  
    featured:
      blogs?.filter(
        (blog: any) => blog.featured === true
      ).length || 0,
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
                  {paginatedBlogs?.map((blog:BlogPost) => (
                    <TableRow key={blog.id} hover>
                      <TableCell>
                        {blog.featuredImages ? (
                          <BlogImage src={blog.featuredImages[0]} alt={blog.title} />
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
                          {blog.createdAt}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <ActionButtons>
                          <ActionIconButton size="small" title="View">
                            <VisibilityIcon onClick={()=>{handlePreview(blog)}} />
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
                            onClick={() => handleDelete(blog._id || blog.id || "")}
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
                {/* <FormInput
                  value={formSlug}
                  // disabled
                /> */}
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
                    {/* <MenuItem value="Product Updates">Product Updates</MenuItem>
                    <MenuItem value="Best Practices">Best Practices</MenuItem> */}
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Farming Tips">Farming Tips</MenuItem>
                    <MenuItem value="Fertilizers">Fertilizers</MenuItem>
                    <MenuItem value="Organic Product">Organic Product</MenuItem>
                    <MenuItem value="Seeds">Seeds</MenuItem>
                    <MenuItem value="Pesticides">Pesticides</MenuItem>
                    <MenuItem value="Agriculture Technology">Agriculture Technology</MenuItem>
                    <MenuItem value="Company Updates">Company Updates</MenuItem>
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
                <FormLabel>Meta Description</FormLabel>
                <FormInput
                  fullWidth
                  value={formMetaDescription}
                  onChange={(e: any) => setFormMetaDescription(e.target.value)}
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

            <FormSection>
              <SectionTitle variant="overline">6. Featured  </SectionTitle>
              <PublishRow>
                <FormControlLabel
                  control={
                    <Switch
                      checked={featuredstatus}
                      onChange={(e) => setfeaturedstatus(e.target.checked)}
                    />
                  }
                  label={featuredstatus ? "featured Blog" : "Not featured Blog"}
                />
              </PublishRow>
            </FormSection>

            {/* Section 7: Author Information */}
<FormSection>
  <SectionTitle variant="overline">
    7. Author Information
  </SectionTitle>

  <FormField>
    <FormLabel>Author Name</FormLabel>
    <FormInput
      fullWidth
      placeholder="e.g. Dr. Arvind Sharma"
      value={formAuthorName}
      onChange={(e: any) => setFormAuthorName(e.target.value)}
    />
  </FormField>

  <FormField>
    <FormLabel>Author Title</FormLabel>
    <FormInput
      fullWidth
      placeholder="e.g. Senior Agricultural Scientist"
      value={formAuthorTitle}
      onChange={(e: any) => setFormAuthorTitle(e.target.value)}
    />
  </FormField>

  <FormField>
    <FormLabel>Author Bio</FormLabel>
    <StyledTextarea
      minRows={4}
      placeholder="Write a short author biography..."
      value={formAuthorBio}
      onChange={(e: any) => setFormAuthorBio(e.target.value)}
    />
  </FormField>

  <FormField>
    <FormLabel>Author Image</FormLabel>

    <ImageUploadArea
      onClick={() => authorImageInputRef.current?.click()}
    >
      <UploadIcon>
        <CloudUploadIcon />
      </UploadIcon>

      <UploadText variant="body1">
        <span>Upload author image</span> or drag and drop
      </UploadText>

      <UploadSubtext variant="caption">
        PNG, JPG, JPEG up to 5MB
      </UploadSubtext>

      <input
        ref={authorImageInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleAuthorImageChange}
      />
    </ImageUploadArea>
  </FormField>
</FormSection>
          </DrawerBody>

          <DrawerFooter>
            <PreviewButton onClick={()=>{handlePreview}}>Preview</PreviewButton>
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
            {/* <PreviewImagePlaceholder> */}
              {/* <ImageIcon /> */}
              {
              formImage ? (
                <img
                  src={formImage}
                  alt="Featured"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  // width={600}
                  // height={400}

                />
              ) : (
                <>
                <ImageIcon />
                <PreviewImagePlaceholder>
                  <Typography variant="body2" color="textSecondary">
                  Featured image preview will appear here.
                </Typography>
                </PreviewImagePlaceholder>
                </>
              )
              }
            {/* </PreviewImagePlaceholder> */}
            <PreviewContent>
              <Typography variant="body1" color="textSecondary">
                {formDescription || "This is a simulated preview of the blog content. The rich text editor content would render here, showcasing the typography,spacing, and layout as it would appear on the public-facing blog."}
              </Typography>
            </PreviewContent>
          </Box>

          <AuthorCard>
      <Avatar
        src={typeof formAuthorImage === "string" ? formAuthorImage : undefined}
        alt={formAuthorName || "Author name"}
        sx={{ width: 80, height: 80, border: "2px solid", borderColor: "background.paper", flexShrink: 0 }}
      />
      <Box>
        <Typography variant="caption" sx={{ fontWeight: 600, color: "primary.main", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          About the Author
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {formAuthorName || "Author Name"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {formAuthorBio || "This is a simulated preview of the author's biography. It provides a brief overview of the author's background, expertise, and contributions to the field."}
        </Typography>
      </Box>
    </AuthorCard>
        </ModalBody>
      </Dialog>
    </>
  );
};

export default BlogPage;
