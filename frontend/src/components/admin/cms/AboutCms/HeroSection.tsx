import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    TextField,
    Typography,
  } from "@mui/material";
  
  import UploadFileIcon from "@mui/icons-material/UploadFile";
  import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
  import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
  
  import toast from "react-hot-toast";
  
  import { HeroType } from "./types";
  
  interface UploadedImage {
    url: string;
    publicId: string;
  }
  
  interface Props {
    hero: HeroType;
  
    setHero: (hero: HeroType) => void;
  
    uploadImages: (
      files: File[],
      folder: string
    ) => Promise<UploadedImage[]>;
  
    deleteImage: (
      data: {
        publicId: string;
      }
    ) => Promise<any>;
  
    imageUploading: boolean;
  
    imageDeleting: boolean;
  }
  
  export default function HeroSection({
    hero,
    setHero,
    uploadImages,
    deleteImage,
    imageUploading,
    imageDeleting,
  }: Props) {
    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >
    ) => {
      setHero({
        ...hero,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleImage = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const files = e.target.files;
  
      if (!files?.length) return;
  
      try {
        const uploaded = await uploadImages(
          [files[0]],
          "cms"
        );
  
        if (hero.image.publicId) {
          await deleteImage({
            publicId: hero.image.publicId,
          });
        }
  
        setHero({
          ...hero,
          image: uploaded[0],
        });
  
        toast.success("Hero image uploaded successfully");
      } catch {
        toast.error("Image upload failed");
      }
    };
  
    return (
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
            }}
          >
            <ViewCarouselIcon color="primary" />
  
            <Typography
             sx={{
              variant:"h6",
              fontWeight:700,
             }}
            >
              Hero Section
            </Typography>
          </Box>
  
          <Box
           sx={{
            display:"flex",
            flexDirection:"column",
            gap:3,
           }}
          >
            <TextField
              label="Hero Title"
              fullWidth
              name="title"
              value={hero.title}
              onChange={handleChange}
            />
  
            <TextField
              label="Hero Description"
              multiline
              rows={5}
              fullWidth
              name="description"
              value={hero.description}
              onChange={handleChange}
            />
  
            <Box>
              <Typography
               sx={{
                fontWeight:600,
                mb:1,
               }}
              >
                Hero Image
              </Typography>
  
              <Button
                component="label"
                variant="outlined"
                startIcon={<UploadFileIcon />}
                disabled={
                  imageUploading ||
                  imageDeleting
                }
              >
                {imageUploading
                  ? "Uploading..."
                  : imageDeleting
                  ? "Deleting..."
                  : "Upload Image"}
  
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />
              </Button>
  
              <Box
                sx={{
                  mt: 2,
                  minHeight: 280,
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                  bgcolor: "#fafafa",
                }}
              >
                {(imageUploading ||
                  imageDeleting) && (
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor:
                        "rgba(255,255,255,.7)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 5,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
  
                {hero.image.url ? (
                  <img
                    src={hero.image.url}
                    alt=""
                    style={{
                      width: "100%",
                      height: 280,
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 280,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#94A3B8",
                      gap: 1,
                    }}
                  >
                    <ImageOutlinedIcon
                      sx={{ fontSize: 60 }}
                    />
  
                    <Typography>
                      No Hero Image Uploaded
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }