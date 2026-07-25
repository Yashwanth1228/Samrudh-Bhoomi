import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    TextField,
    Typography,
  } from "@mui/material";
  
  import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
  import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
  import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
  
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
  
    deleteImage: (data: {
      publicId: string;
    }) => Promise<any>;
  
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
    const imageLoading =
      imageUploading || imageDeleting;
  
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
  
        toast.success("Hero image uploaded");
      } catch {
        toast.error("Upload failed");
      }
    };
  
    return (
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
  
          <Box
          sx={{
            display:"flex",
            alignItems:"center",
            gap:1,
            mb:3,
          }}
          >
            <PhotoOutlinedIcon color="primary" />
  
            <Typography
            sx={{
              variant:"h6",
              fontWeight:700,
            }}
            >
              Hero Section
            </Typography>
          </Box>
  
          <Typography
          sx={{
            fontWeight:600,
            mb:2,
          }}
          >
            Hero Image
          </Typography>
  
          <Box
            sx={{
              position: "relative",
              aspectRatio: "16/7",
              border: "2px dashed #CBD5E1",
              borderRadius: 3,
              overflow: "hidden",
              bgcolor: "#F8FAFC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {hero.image.url ? (
              <img
                src={hero.image.url}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Box sx={{ textAlign:"center" ,}}>
                <ImageOutlinedIcon
                  sx={{
                    fontSize: 60,
                    color: "#94A3B8",
                  }}
                />
  
                <Typography>
                  No Image Uploaded
                </Typography>
              </Box>
            )}
  
            {imageLoading && (
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor:
                    "rgba(255,255,255,.75)",
                  display: "flex",
                  justifyContent:
                    "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </Box>
  
          <Button
            component="label"
            variant="outlined"
            startIcon={
              <UploadFileOutlinedIcon />
            }
            sx={{ mt: 3, mb: 4 }}
          >
            Upload Hero Image
  
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
          </Button>

<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 3,
  }}
>
  <TextField
    fullWidth
    label="Hero Title"
    name="title"
    value={hero.title}
    onChange={handleChange}
    placeholder="Enter hero title"
  />

  <TextField
    fullWidth
    multiline
    rows={5}
    label="Hero Description"
    name="description"
    value={hero.description}
    onChange={handleChange}
    placeholder="Enter hero description"
  />
</Box>
  
        </CardContent>
      </Card>
    );
  }