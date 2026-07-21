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
  
    imageUploading: boolean;
  }
  
  export default function HeroSection({
    hero,
    setHero,
    uploadImages,
    imageUploading,
  }: Props) {
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
  
      if (name.startsWith("button.")) {
        const key = name.split(".")[1];
  
        setHero({
          ...hero,
          button: {
            ...hero.button,
            [key]: value,
          },
        });
  
        return;
      }
  
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
        const uploaded = await uploadImages(
          [files[0]],
          "cms"
        );
  
        setHero({
          ...hero,
          backgroundImage: uploaded[0],
        });
  
        toast.success("Hero image uploaded");
      } catch {
        toast.error("Upload failed");
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
              label="Button Text"
              fullWidth
              name="button.text"
              value={hero.button.text}
              onChange={handleChange}
            />
  
            <TextField
              label="Button Link"
              fullWidth
              name="button.link"
              value={hero.button.link}
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
                disabled={imageUploading}
              >
                {imageUploading ? "Uploading..." : "Upload Image"}
  
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />
              </Button>
  
              {hero.backgroundImage.url && (
                <Box
                  sx={{
                    mt: 2,
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid #ddd",
                  }}
                >
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
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }