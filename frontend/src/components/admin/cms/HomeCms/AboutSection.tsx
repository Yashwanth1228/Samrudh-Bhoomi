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
  
    imageUploading: boolean;
  }
  
  export default function AboutSection({
    about,
    setAbout,
    uploadImages,
    imageUploading,
  }: Props) {
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
  
      if (name.startsWith("button.")) {
        const key = name.split(".")[1];
  
        setAbout({
          ...about,
          button: {
            ...about.button,
            [key]: value,
          },
        });
  
        return;
      }
  
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
        const uploaded = await uploadImages([files[0]], "cms");
  
        setAbout({
          ...about,
          image: uploaded[0],
        });
  
        toast.success("About image uploaded");
      } catch {
        toast.error("Upload failed");
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
  
            <TextField
              label="Button Text"
              fullWidth
              name="button.text"
              value={about.button.text}
              onChange={handleChange}
            />
  
            <TextField
              label="Button Link"
              fullWidth
              name="button.link"
              value={about.button.link}
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
  
              {about.image.url && (
                <Box
                  sx={{
                    mt: 2,
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid #ddd",
                  }}
                >
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
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }