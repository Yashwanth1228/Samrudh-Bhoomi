import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
  } from "@mui/material";
  import UploadFileIcon from "@mui/icons-material/UploadFile";
  import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
  import toast from "react-hot-toast";
  
  import { HeroSectionType } from "./types";
  import { CircularProgress } from "@mui/material";
  
  interface UploadedImage {
    url: string;
    publicId: string;
  }
  
  interface Props {
    hero: HeroSectionType;
  
    setHero: (hero: HeroSectionType) => void;
  
    uploadImages: (
      files: File[],
      folder: string
    ) => Promise<UploadedImage[]>;
  
    deleteImage: (
      data: { publicId: string }
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
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
  
      if (name.startsWith("video.")) {
        const key = name.split(".")[1];
  
        setHero({
          ...hero,
          video: {
            ...hero.video,
            [key]: value,
          },
        });
  
        return;
      }
  
      setHero({
        ...hero,
        [name]: value,
      });
    };
  
    const handleImage = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const files = e.target.files;
    
      if (!files?.length) return;
    
      try {
        // Upload new image first
        const uploaded = await uploadImages(
          [files[0]],
          "cms"
        );
    
        // Delete previous image
        if (hero.backgroundImage.publicId) {
          await deleteImage({
            publicId: hero.backgroundImage.publicId,
          });
        }
    
        // Update state
        setHero({
          ...hero,
          backgroundImage: uploaded[0],
        });
    
        toast.success("Hero image uploaded successfully");
      } catch (error) {
        console.error(error);
        toast.error("Image upload failed");
      }
    };
  
    return (
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
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
              variant="h6"
              sx={{ fontWeight: 700 }}
            >
              Hero Section
            </Typography>
          </Box>
  
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
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
              label="Hero Subtitle"
              multiline
              rows={3}
              fullWidth
              name="subtitle"
              value={hero.subtitle}
              onChange={handleChange}
            />

            <TextField
              label="Video URL"
              fullWidth
              name="video.url"
              value={hero.video.url}
              onChange={handleChange}
            />
  
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Hero Background Image
              </Typography>
  
              <Button
  component="label"
  variant="outlined"
  startIcon={<UploadFileIcon />}
  disabled={imageUploading || imageDeleting}
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
    borderRadius: 2,
    overflow: "hidden",
    border: "1px solid #ddd",
    position: "relative",
    minHeight: 280,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "#f8fafc",
  }}
>
  {(imageUploading || imageDeleting) && (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        bgcolor: "rgba(255,255,255,0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        zIndex: 1,
      }}
    >
      <CircularProgress />

      <Typography
        variant="body2"
        color="text.secondary"
      >
        {imageUploading
          ? "Uploading image..."
          : "Deleting previous image..."}
      </Typography>
    </Box>
  )}

  {hero.backgroundImage.url ? (
    <img
      src={hero.backgroundImage.url}
      alt="Hero"
      style={{
        width: "100%",
        maxHeight: 280,
        objectFit: "cover",
        display: "block",
      }}
    />
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#94A3B8",
        gap: 1,
      }}
    >
      <UploadFileIcon
        sx={{
          fontSize: 56,
          color: "#CBD5E1",
        }}
      />

      <Typography
      sx={{
        variant:"body1",
        fontWeight:600,
      }}
      >
        No Hero Image
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
      >
        Upload a hero background image to preview it here.
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