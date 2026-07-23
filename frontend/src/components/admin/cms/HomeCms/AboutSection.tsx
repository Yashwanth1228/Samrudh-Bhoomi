import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
  } from "@mui/material";
  
  import UploadFileIcon from "@mui/icons-material/UploadFile";
  import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
  
  import toast from "react-hot-toast";
  
  import { AboutSectionType } from "./types";
  import { CircularProgress } from "@mui/material";
  
  interface UploadedImage {
    url: string;
    publicId: string;
  }
  
  interface Props {
    about: AboutSectionType;
  
    setAbout: (about: AboutSectionType) => void;
  
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
  
  export default function AboutSection({
    about,
    setAbout,
    uploadImages,
    deleteImage,
    imageUploading,
    imageDeleting,
  }: Props) {
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
  
      setAbout({
        ...about,
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
    
        // Delete old image
        if (about.image.publicId) {
          await deleteImage({
            publicId: about.image.publicId,
          });
        }
    
        // Update state
        setAbout({
          ...about,
          image: uploaded[0],
        });
    
        toast.success("About image uploaded successfully");
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
          height: "100%",
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
            <InfoOutlinedIcon color="primary" />
  
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              About Section
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
              label="About Title"
              fullWidth
              name="title"
              value={about.title}
              onChange={handleChange}
            />
  
            <TextField
              label="About Description"
              multiline
              rows={5}
              fullWidth
              name="description"
              value={about.description}
              onChange={handleChange}
            />
              
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                About Image
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
    minHeight: 260,
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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

  {about.image.url ? (
    <img
      src={about.image.url}
      alt="About"
      style={{
        width: "100%",
        maxHeight: 260,
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
        No About Image
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
      >
        Upload an about section image to preview it here.
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