import { Box, Typography, Button } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  BlogSectionCard,
  ProductSectionContent,
  StyledTextField,
} from "@/styles/admin/Cms.styles";

import {
  useDeleteImageMutation,
  useGetCmsByPageQuery,
  useSaveCmsMutation,
  useUploadimageMutation,
} from "@/store/api/apiSlice";

import CircularProgress from "@mui/material/CircularProgress";

function BlogsCms() {
  const [formData, setFormData] = useState({
    bannerTitle: "",
    bannerDescription: "",
    bannerImage: {
      url: "",
      publicId: "",
    },
  });

  const { data } = useGetCmsByPageQuery("blogs");

  const [saveCms, { isLoading }] = useSaveCmsMutation();

  const [uploadImage, { isLoading: imageUploading }] =
    useUploadimageMutation();

    const [deleteImage, { isLoading: imageDeleting }] =
    useDeleteImageMutation();

    const imageLoading = imageUploading || imageDeleting;

  useEffect(() => {
    if (data?.content) {
      setFormData({
        bannerTitle: data.content.bannerTitle || "",
        bannerDescription:
          data.content.bannerDescription || "",
        bannerImage: data.content.bannerImage || {
          url: "",
          publicId: "",
        },
      });
    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  interface UploadedImage {
    url: string;
    publicId: string;
  }

  const uploadImages = async (
    files: File[],
    folder: string
  ): Promise<UploadedImage[]> => {
    const fd = new FormData();

    files.forEach((file) => fd.append("files", file));

    const res = await uploadImage({
      module: folder,
      type: "blog",
      data: fd,
    }).unwrap();

    return res.imageUrls;
  };

  const handleBannerImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
  
    if (!files?.length) return;
  
    try {
      // Upload first
      const uploaded = await uploadImages(
        [files[0]],
        "cms"
      );
  
      // Delete old image only after upload succeeds
      if (formData.bannerImage.publicId) {
        let res = await deleteImage({
          publicId: formData.bannerImage.publicId,
        }).unwrap();
        console.log("the delete upload response" , res)
      }

  
      // Update state
      setFormData((prev) => ({
        ...prev,
        bannerImage: uploaded[0],
      }));
  
      toast.success("Banner uploaded successfully");
    } catch {
      toast.error("Image upload failed");
    }
  };

  const handleSave = async () => {
    try {
      const res = await saveCms({
        page: "blogs",
        content: formData,
      }).unwrap();

      if (res.success) {
        toast.success("Blogs CMS saved successfully.");
      }
    } catch {
      toast.error("Failed to save CMS.");
    }
  };

  return (
    <BlogSectionCard>
      <ProductSectionContent>
        <Box
          sx={{
            bgcolor: "#fff",
            border: "1px solid #E5E7EB",
            borderRadius: 3,
            p: 4,
            maxWidth: 900,
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 4,
            }}
          >
            Blog Listing Page
          </Typography>

          {/* Banner Preview */}

          <Typography
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            Banner Image
          </Typography>

          <Box
  sx={{
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 7",
    border: "2px dashed #CBD5E1",
    borderRadius: 3,
    overflow: "hidden",
    bgcolor: "#F8FAFC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {formData.bannerImage.url ? (
    <img
      src={formData.bannerImage.url}
      alt="Banner"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  ) : (
    <Box
      sx={{
        textAlign: "center",
        color: "#94A3B8",
      }}
    >
      <ImageOutlinedIcon
        sx={{
          fontSize: 60,
          mb: 1,
        }}
      />

      <Typography>No Banner Uploaded</Typography>
    </Box>
  )}

  {imageLoading && (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        bgcolor: "rgba(255,255,255,0.75)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        zIndex: 10,
      }}
    >
      <CircularProgress
        size={45}
        sx={{
          color: "#2d5a27",
        }}
      />

      <Typography
        sx={{
          fontWeight: 600,
          color: "#2d5a27",
        }}
      >
        {imageDeleting
          ? "Removing previous image..."
          : "Uploading image..."}
      </Typography>
    </Box>
  )}
</Box>

          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFileOutlinedIcon />}
            disabled={imageLoading}
            sx={{
              mt: 3,
              mb: 4,
              borderColor: "#2d5a27",
              color: "#2d5a27",
            }}
          >
            {imageUploading
              ? "Uploading..."
              : "Upload Banner"}

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleBannerImage}
            />
          </Button>

          {/* Title */}

          <StyledTextField
            fullWidth
            label="Banner Title"
            name="bannerTitle"
            value={formData.bannerTitle}
            onChange={handleChange}
            sx={{
              mb: 3,
            }}
          />

          {/* Description */}

          <StyledTextField
            fullWidth
            multiline
            rows={5}
            label="Banner Description"
            name="bannerDescription"
            value={formData.bannerDescription}
            onChange={handleChange}
          />

          {/* Save */}

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
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#23451f",
                },
              }}
            >
              {isLoading
                ? "Saving..."
                : "Save Changes"}
            </Button>
          </Box>
        </Box>
      </ProductSectionContent>
    </BlogSectionCard>
  );
}

export default BlogsCms;