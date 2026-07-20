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
  Snackbar,
  Alert,
  Backdrop,
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
  ErrorOutlined as ErrorOutlineIcon,
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
  ImagePreviewGrid,
  PreviewCard,
  RemoveButton,
  AddMoreCard,
} from "../../../styles/admin/Blog.styles";
import { useCreateBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation, useUploadimageMutation } from "@/store/api/apiSlice";
import { AuthorCard } from "@/styles/user/blog/BlogDetail/BlogDetailAuthor.styles";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";
import toast from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";


// Types
interface CloudinaryImage {
  url: string;
  publicId: string;
}

interface BlogPost {
  _id: string;
  id: string;

  title: string;
  slug: string;
  category: string;

  featuredImages: CloudinaryImage[];

  excerpt: string;
  content: string;

  author: {
    name: string;
    title: string;
    bio: string;
    image: CloudinaryImage;
  };

  seo: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
  };

  featured?: boolean;
  status: "draft" | "published";

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

  const { data : blogs, error, isLoading: blogloading ,isFetching,refetch} = useGetBlogsQuery();
  console.log(" the data from server", blogs);
  // setrealBlogs(data.data);
  // console.log("this is blog data",realblogs)

  const [deleteBlog] = useDeleteBlogMutation();
  const [uploadImage] = useUploadimageMutation();
  const [createBlog] = useCreateBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();

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

const [featuredImages, setFeaturedImages] = useState<File[]>([]);
const [authorImage, setAuthorImage] = useState<File | null>(null);

const [showSuccess, setShowSuccess] = useState(false);

const authorImageInputRef = useRef<HTMLInputElement>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // const [featuredImages, setFeaturedImages] = useState<File[]>([]);
const [featuredPreview, setFeaturedPreview] = useState<string[]>([]);

const [isSaving, setIsSaving] = useState(false);

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const handleFeaturedImages = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (!e.target.files) return;

  const files = Array.from(e.target.files);

  setFeaturedImages(files);

  const previews = files.map((file) =>
    URL.createObjectURL(file)
  );

  setFeaturedPreview(previews);
};

  const handleAuthorImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
) => {
    if (!e.target.files?.length) return;

    setAuthorImage(e.target.files[0]);
};

interface UploadedImage {
  url: string;
  publicId: string;
}

interface UploadedImage {
  url: string;
  publicId: string;
}

const uploadImages = async (
  files: File[],
  folder: string
): Promise<UploadedImage[]> => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  const [module, type] = folder.split("/");

  const res = await uploadImage({
    module,
    type,
    data: formData,
  }).unwrap();

  return res.imageUrls;
};

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleStatusFilterChange = (event: any) => {
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
      setfeaturedstatus(blog.featured || false);
      
      

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
    setFormMetaDescription("");
    setFormAuthorName("");
    setFormAuthorTitle("");
    setFormAuthorBio("");
    setFormAuthorImage("");
    setFeaturedImages([]);
    setFeaturedPreview([]);
    setAuthorImage(null);

  };

  const handlePreview = (blog:BlogPost) => {
    setFormCategory(blog.category);
    setFormTitle(blog.title);
    setFormDescription(blog.excerpt);
    setFormContent(blog.content);
    setFormAuthorName(blog.author.name);
    setFormAuthorTitle(blog.author.title);
    setFormAuthorBio(blog.author.bio);
    setFormAuthorImage(blog.author.image?.url || "");
    setformImage(blog.featuredImages[0]?.url || "")

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

  const handleSave = async () => {
    try {
      setIsSaving(true);
  
      // Use existing images in edit mode, otherwise start empty
      let featuredImageUrls =
  isEdit && selectedBlog
    ? selectedBlog.featuredImages
    : [];

let authorImageUrl =
  isEdit && selectedBlog
    ? selectedBlog.author.image
    : {
        url: "",
        publicId: "",
      };
  
      // Upload featured images
      if (featuredImages.length > 0) {
        featuredImageUrls = await uploadImages(
          featuredImages,
          "blogs/featured"
        );
      }
  
      // Upload author image
      if (authorImage instanceof File) {
        const uploaded = await uploadImages(
          [authorImage],
          "blogs/authors"
        );
      
        authorImageUrl = uploaded[0];
      }
  
      const payload = {
        title: formTitle,
        slug: formSlug,
        category: formCategory,
        featuredImages: featuredImageUrls,
        excerpt: formDescription,
        content: formContent,
  
        author: {
          name: formAuthorName,
          title: formAuthorTitle,
          bio: formAuthorBio,
          image: authorImageUrl,
        },
  
        seo: {
          metaTitle: formMetaTitle,
          metaDescription: formMetaDescription,
          metaKeywords: formMetaKeywords
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean),
        },
  
        featured: featuredstatus,
        status: formStatus ? "published" : "draft",
      };
  
      if (isEdit && selectedBlog) {
        await updateBlog({
          id: selectedBlog._id,
          ...payload,
        }).unwrap();
      } else {
        await createBlog(payload).unwrap();
      }
  
      setShowSuccess(true);
      handleCloseDrawer();
    } catch (err: any) {
      console.error(err);
    
      toast.error(
        err?.data?.message || "Something went wrong",
        {
          icon: "❌",
          style: {
            borderRadius: "12px",
            background: "#fff",
            color: "#1f2937",
            border: "1px solid #e5e7eb",
            padding: "14px 18px",
          },
        }
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (blog: BlogPost) => {
    handleOpenDrawer(true, blog);
  };

  const handleDelete = async (id: string) => {
    try {
      const deleteblog = await deleteBlog(id).unwrap();
      console.log("the deleted blog", deleteblog);
      if (deleteblog.success) {
        toast.success("Blog deleted successfully!", {
          icon: "✅",
          style: {
            borderRadius: "12px",
            background: "#fff",
            color: "#1f2937",
            border: "1px solid #e5e7eb",
            padding: "14px 18px",
          },
        });
      }
    } catch (err: any) {
      console.error(err);
    
      toast.error(
        err?.data?.message || "Something went wrong",
        {
          icon: "❌",
          style: {
            borderRadius: "12px",
            background: "#fff",
            color: "#1f2937",
            border: "1px solid #e5e7eb",
            padding: "14px 18px",
          },
        }
      );
    }
  };

  // if (blogloading) {
  //   return (
  //     <LoadingState
  //       title="Loading Blogs..."
  //       message="Please wait while we fetch your data."
  //     />
  //   );
  // }


  if (blogloading)
  return <LoadingState title="Loading Blogs..." message="Please wait while we fetch your data." />;

if (error)
  return (
    <ErrorState
  title="Failed to Load Blogs"
  message="Unable to fetch blogs."
  loading={isFetching}
  onRetry={refetch}
/>
  );

// if (!blogs.length)
//   return (
//     <EmptyState
//       title="No blogs Found"
//       message="Create your first blog to get started."
//     />
//   );


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
                  onChange={(event) => handleStatusFilterChange(event)}
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
                          <BlogImage src={blog.featuredImages[0]?.url} alt={blog.title} />
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
                          {formatDate(blog.createdAt)}
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
                    {/* <MenuItem value="Sustainable Farming">
                      Sustainable Farming
                    </MenuItem> */}
                    {/* <MenuItem value="Product Updates">Product Updates</MenuItem>
                    <MenuItem value="Best Practices">Best Practices</MenuItem> */}
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Farming Tips">Farming Tips</MenuItem>
                    <MenuItem value="Fertilizers">Fertilizers</MenuItem>
                    <MenuItem value="Organic Product">Organic Products</MenuItem>
                    <MenuItem value="Seeds">Seeds</MenuItem>
                    <MenuItem value="Pesticides">Pesticides</MenuItem>
                    <MenuItem value="Agriculture Technology">Agriculture Technology</MenuItem>
                    {/* <MenuItem value="Company Updates">Company Updates</MenuItem> */}
                  </StyledSelect>
                </FormField>
              </FormRow>
            </FormSection>

            {/* Section 2: Media */}
            <FormSection>
              <SectionTitle variant="overline">2. Media</SectionTitle>
              <FormField>
  <FormLabel>Featured Images</FormLabel>

  {featuredPreview.length === 0 ? (
    <ImageUploadArea
      onClick={() => fileInputRef.current?.click()}
    >
      <UploadIcon>
        <CloudUploadIcon />
      </UploadIcon>

      <UploadText variant="body1">
        <span>Upload files</span> or drag & drop
      </UploadText>

      <UploadSubtext variant="caption">
        PNG, JPG up to 10MB
      </UploadSubtext>
    </ImageUploadArea>
  ) : (
    <ImagePreviewGrid>

      {featuredPreview.map((image, index) => (
        <PreviewCard key={index}>

          <img src={image} alt="" />

          <RemoveButton
            onClick={(e) => {
              e.stopPropagation();

              setFeaturedImages((prev) =>
                prev.filter((_, i) => i !== index)
              );

              setFeaturedPreview((prev) =>
                prev.filter((_, i) => i !== index)
              );
            }}
          >
            ✕
          </RemoveButton>

        </PreviewCard>
      ))}

      <AddMoreCard
        onClick={() => fileInputRef.current?.click()}
      >
        <CloudUploadIcon />
        <span>Add More</span>
      </AddMoreCard>

    </ImagePreviewGrid>
  )}  

  <input
    ref={fileInputRef}
    type="file"
    hidden
    multiple
    accept="image/*"
    onChange={handleFeaturedImages}
  />
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
    sx={{
      p: 2,
      cursor: "pointer",
    }}
  >
    {authorImage ? (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <Avatar
          src={
            authorImage instanceof File
              ? URL.createObjectURL(authorImage)
              : (authorImage as string)
          }
          sx={{
            width: 72,
            height: 72,
          }}
        />

        <Box sx={{ flex: 1 }}>
          <Typography sx={{fontWeight:600}}>
            {authorImage instanceof File
              ? authorImage.name
              : "Current Author Image"}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Click to replace image
          </Typography>
        </Box>

        <Chip
          label="Selected"
          color="success"
          size="small"
        />
      </Box>
    ) : (
      <>
        <UploadIcon>
          <CloudUploadIcon />
        </UploadIcon>

        <UploadText variant="body1">
          <span>Upload author image</span> or drag & drop
        </UploadText>

        <UploadSubtext variant="caption">
          PNG, JPG, JPEG up to 5MB
        </UploadSubtext>
      </>
    )}

    <input
      ref={authorImageInputRef}
      type="file"
      accept="image/*"
      hidden
      onChange={handleAuthorImageChange}
    />
  </ImageUploadArea>
</FormField>
</FormSection>
          </DrawerBody>

          <DrawerFooter>
            {/* <PreviewButton onClick={()=>{handlePreview}}>Preview</PreviewButton> */}
            {/* <FooterButtons> */}
              <CancelButton onClick={handleCloseDrawer}>Cancel</CancelButton>
              <SaveButton 
              variant="contained"
              onClick={handleSave}
              disabled={isSaving} startIcon={<SaveIcon />}>
                 {isSaving ? "Saving..." : isEdit ? "Update Blog" : "Save Blog"}
              </SaveButton>
            {/* </FooterButtons> */}
          </DrawerFooter>
        </DrawerContainer>

        <Backdrop
  open={isSaving}
  sx={{
    position: "absolute",
    inset: 0,
    zIndex: (theme) => theme.zIndex.drawer + 1,
    color: "#fff",
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.65)",
    backdropFilter: "blur(4px)",
  }}
>
  <CircularProgress
    size={48}
    sx={{ color: "#154212" }}
  />

  <Typography
    sx={{
      mt: 2,
      color: "#154212",
      fontWeight: 600,
    }}
  >
    {isEdit ? "Updating blog..." : "Creating blog..."}
  </Typography>
</Backdrop>
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


      {/* Success Toast */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          icon={<CheckCircleIcon />}
          sx={{
            backgroundColor: "#2d5a27",
            color: "#ffffff",
            "& .MuiAlert-icon": {
              color: "#ffffff",
            },
          }}
        >
          <strong>{isEdit ? "Blog Updated" : "Blog Created"}</strong>

          <br />

          {isEdit
            ? "Blog updated successfully."
            : "The Blog has been successfully created."}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BlogPage;
