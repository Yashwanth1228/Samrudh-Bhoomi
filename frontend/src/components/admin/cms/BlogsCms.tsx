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
import { Box, IconButton, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import toast from "react-hot-toast";
import { useGetCmsByPageQuery, useSaveCmsMutation, useUploadimageMutation } from "@/store/api/apiSlice";


function BlogsCms() {
    // const [blogSubTab, setBlogSubTab] = useState("listing");
    const [formData, setFormData] = useState({
      bannerTitle: "",
      bannerDescription: "",
      introduction: "",
      bannerImage: {
        url: "",
        publicId: "",
      },
    });

    const { data } = useGetCmsByPageQuery("blogs");
    const [uploadImage, { isLoading: imageUploading }] = useUploadimageMutation();

    const [saveCms, { isLoading }] = useSaveCmsMutation();

    useEffect(() => {
      if (data?.content) {
        setFormData({
          bannerTitle: data.content.bannerTitle || "",
          bannerDescription: data.content.bannerDescription || "",
          introduction: data.content.introduction || "",
          bannerImage: data.content.bannerImage || {
            url: "",
            publicId: "",
          },
        });
      }
    }, [data]);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
    
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSave = async () => {
      try {
        let res = await saveCms({
          page: "blogs",
          content: formData,
        }).unwrap();

        if (res.success) {
          toast.success("Blogs CMS saved successfully.");
        }

      } catch (error) {
        toast.error("Failed to save CMS.");
      }
    };


    interface UploadedImage {
      url: string;
      publicId: string;
    }
  
    const uploadImages = async (
      files: File[],
      folder: string,
    ): Promise<UploadedImage[]> => {
      const formData = new FormData();
  
      files.forEach((file) => {
        formData.append("files", file);
      });
  
      const res = await uploadImage({
        module: folder,
        type: "blog",
        data: formData,
      }).unwrap();
  
      return res.imageUrls;
    };

    const handleBannerImage = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const files = e.target.files;
    
      if (!files?.length) return;
    
      try {
        const uploaded = await uploadImages(
          [files[0]],
          "cms"
        );
    
        setFormData((prev) => ({
          ...prev,
          bannerImage: uploaded[0],
        }));
    
        toast.success("Image uploaded successfully");
      } catch {
        toast.error("Image upload failed");
      }
    };

    return (
      <BlogSectionCard>
      <ProductSectionContent>
    
        <Box
          sx={{
            background: "#fff",
            border: "1px solid #E5E7EB",
            borderRadius: 3,
            p: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 4,
            }}
          >
            Blog Listing Page
          </Typography>
    
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "380px 1fr",
              },
              gap: 4,
            }}
          >
            {/* LEFT SIDE */}
            <Box>
    
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Banner Image
              </Typography>
    
              <Box
                sx={{
                  border: "2px dashed #CBD5E1",
                  borderRadius: 3,
                  height: 230,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  bgcolor: "#FAFAFA",
                  mb: 2,
                }}
              >
                {formData.bannerImage.url ? (
                  <img
                    src={formData.bannerImage.url}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Typography color="text.secondary">
                    No Image Selected
                  </Typography>
                )}
              </Box>
    
              <Button
                fullWidth
                component="label"
                variant="outlined"
                disabled={imageUploading}
                sx={{
                  color: "#2d5a27",
                  borderColor: "#2d5a27",
                  mb: 4,
                }}
              >
                {imageUploading ? "Uploading..." : "Upload Banner"}
    
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleBannerImage}
                />
              </Button>
    
              <StyledTextField
                fullWidth
                label="Banner Title"
                name="bannerTitle"
                value={formData.bannerTitle}
                onChange={handleChange}
                sx={{ mb: 3 }}
              />
    
              <StyledTextField
                fullWidth
                multiline
                rows={4}
                label="Banner Description"
                name="bannerDescription"
                value={formData.bannerDescription}
                onChange={handleChange}
              />
    
            </Box>
    
            {/* RIGHT SIDE */}
            <Box>
    
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Introduction Content
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
                fullWidth
                multiline
                minRows={14}
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
              />
    
            </Box>
    
          </Box>
    
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 5,
              pt: 3,
              borderTop: "1px solid #E5E7EB",
            }}
          >
            <Button
              variant="contained"
              startIcon={<SaveOutlinedIcon />}
              onClick={handleSave}
              disabled={isLoading}
              sx={{
                bgcolor: "#2d5a27",
                px: 5,
                py: 1.3,
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#23451f",
                },
              }}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </Box>
    
        </Box>
    
      </ProductSectionContent>
    </BlogSectionCard>
    )
}

export default BlogsCms
