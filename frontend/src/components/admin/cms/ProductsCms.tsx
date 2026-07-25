import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

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

interface UploadedImage {
  url: string;
  publicId: string;
}

export default function ProductsCms() {
  const [formData, setFormData] = useState({
    bannerTitle: "",
    bannerDescription: "",
    bannerImage: {
      url: "",
      publicId: "",
    },
  });

  const { data } =
    useGetCmsByPageQuery("products");

  const [saveCms, { isLoading }] =
    useSaveCmsMutation();

  const [
    uploadImage,
    {
      isLoading: imageUploading,
    },
  ] = useUploadimageMutation();

  const [
    deleteImage,
    {
      isLoading: imageDeleting,
    },
  ] = useDeleteImageMutation();

  const imageLoading =
    imageUploading || imageDeleting;

  useEffect(() => {
    if (data?.content) {
      setFormData({
        bannerTitle:
          data.content.bannerTitle || "",
        bannerDescription:
          data.content.bannerDescription ||
          "",
        bannerImage:
          data.content.bannerImage || {
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

  const uploadImages = async (
    files: File[],
    folder: string
  ): Promise<UploadedImage[]> => {
    const fd = new FormData();

    files.forEach((file) =>
      fd.append("files", file)
    );

    const res =
      await uploadImage({
        module: folder,
        type: "product",
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
      const uploaded =
        await uploadImages(
          [files[0]],
          "cms"
        );

      if (
        formData.bannerImage.publicId
      ) {
        await deleteImage({
          publicId:
            formData.bannerImage.publicId,
        }).unwrap();
      }

      setFormData((prev) => ({
        ...prev,
        bannerImage: uploaded[0],
      }));

      toast.success(
        "Banner uploaded successfully"
      );
    } catch {
      toast.error(
        "Image upload failed"
      );
    }
  };

  const handleSave = async () => {
    try {
      const res = await saveCms({
        page: "products",
        content: formData,
      }).unwrap();

      if (res.success) {
        toast.success(
          "Products CMS saved successfully."
        );
      }
    } catch {
      toast.error(
        "Failed to save CMS."
      );
    }
  };

  return (
    <BlogSectionCard>
      <ProductSectionContent>
        <Box
          sx={{
            bgcolor: "#fff",
            border:
              "1px solid #E5E7EB",
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
            Product Listing Page
          </Typography>

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
              border:
                "2px dashed #CBD5E1",
              borderRadius: 3,
              overflow: "hidden",
              bgcolor: "#F8FAFC",
              display: "flex",
              justifyContent:
                "center",
              alignItems: "center",
            }}
          >
            {formData.bannerImage.url ? (
              <img
                src={
                  formData.bannerImage.url
                }
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

                <Typography>
                  No Banner Uploaded
                </Typography>
              </Box>
            )}

            {imageLoading && (
              <Box
                sx={{
                  position:
                    "absolute",
                  inset: 0,
                  bgcolor:
                    "rgba(255,255,255,.75)",
                  display: "flex",
                  flexDirection:
                    "column",
                  justifyContent:
                    "center",
                  alignItems:
                    "center",
                  gap: 2,
                }}
              >
                <CircularProgress />

                <Typography>
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
            startIcon={
              <UploadFileOutlinedIcon />
            }
            disabled={
              imageLoading
            }
            sx={{
              mt: 3,
              mb: 4,
            }}
          >
            {imageUploading
              ? "Uploading..."
              : "Upload Banner"}

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={
                handleBannerImage
              }
            />
          </Button>

          <StyledTextField
            fullWidth
            label="Banner Title"
            name="bannerTitle"
            value={
              formData.bannerTitle
            }
            onChange={
              handleChange
            }
            sx={{
              mb: 3,
            }}
          />

          <StyledTextField
            fullWidth
            multiline
            rows={5}
            label="Banner Description"
            name="bannerDescription"
            value={
              formData.bannerDescription
            }
            onChange={
              handleChange
            }
          />

          <Box
            sx={{
              display: "flex",
              justifyContent:
                "flex-end",
              mt: 5,
              pt: 3,
              borderTop:
                "1px solid #E5E7EB",
            }}
          >
            <Button
              variant="contained"
              startIcon={
                <SaveOutlinedIcon />
              }
              onClick={
                handleSave
              }
              disabled={
                isLoading
              }
              sx={{
                bgcolor:
                  "#2d5a27",
                px: 5,
                py: 1.3,
                fontWeight: 700,
                borderRadius: 2,
                "&:hover": {
                  bgcolor:
                    "#23451f",
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