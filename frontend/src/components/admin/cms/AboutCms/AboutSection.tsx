import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  
  import UploadFileIcon from "@mui/icons-material/UploadFile";
  import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
  import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
  
  import toast from "react-hot-toast";
  
  import { AboutType } from "./types";
  
  interface UploadedImage {
    url: string;
    publicId: string;
  }
  
  interface Props {
    about: AboutType;
  
    setAbout: (
      about: AboutType
    ) => void;
  
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
  
  export default function AboutSection({
    about,
    setAbout,
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
      setAbout({
        ...about,
        [e.target.name]: e.target.value,
      });
    };

    const iconOptions = [
      { label: "Science", value: "ScienceOutlined" },
      { label: "Eco", value: "EcoOutlined" },
      { label: "Agriculture", value: "AgricultureOutlined" },
      { label: "Spa", value: "SpaOutlined" },
      { label: "Forest", value: "ForestOutlined" },
      { label: "Verified", value: "VerifiedOutlined" },
      { label: "Local Shipping", value: "LocalShippingOutlined" },
      { label: "Workspace Premium", value: "WorkspacePremiumOutlined" },
      { label: "Inventory", value: "Inventory2Outlined" },
      { label: "Water Drop", value: "WaterDropOutlined" },
      { label: "Energy", value: "BoltOutlined" },
      { label: "Support", value: "SupportAgentOutlined" },
    ];
  
    const handleCardChange = (
      index: number,
      field: string,
      value: string
    ) => {
      const cards = [...about.cards];
  
      cards[index] = {
        ...cards[index],
        [field]: value,
      };
  
      setAbout({
        ...about,
        cards,
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
  
        if (about.image.publicId) {
          await deleteImage({
            publicId:
              about.image.publicId,
          });
        }
  
        setAbout({
          ...about,
          image: uploaded[0],
        });
  
        toast.success(
          "About image uploaded successfully"
        );
      } catch {
        toast.error("Upload failed");
      }
    };
  
    return (
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Box
          sx={{
            display:"flex",
            alignItems:"center",
            gap:1,
            mb:3,
          }}
          >
            <InfoOutlinedIcon color="primary" />
  
            <Typography
            sx={{
              variant:"h6",
              fontWeight:700,
            }}
            >
              About Section
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
              label="Title"
              name="title"
              value={about.title}
              onChange={handleChange}
              fullWidth
            />
  
            <TextField
              label="Description"
              name="description"
              multiline
              rows={5}
              value={about.description}
              onChange={handleChange}
              fullWidth
            />
  
            <Box>
              <Typography
              sx={{
                mb:1,
                fontWeight:600,
              }}
              >
                About Image
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
                  minHeight: 260,
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
                      zIndex: 2,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
  
                {about.image.url ? (
                  <img
                    src={about.image.url}
                    alt=""
                    style={{
                      width: "100%",
                      height: 260,
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 260,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#94A3B8",
                    }}
                  >
                    <ImageOutlinedIcon
                      sx={{ fontSize: 60 }}
                    />
  
                    <Typography>
                      No About Image Uploaded
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
  
            <Typography
            sx={{
              variant:"h6",
              fontWeight:700,
            }}
            >
              About Cards
            </Typography>
  
            <Grid container spacing={3}>
              {about.cards.map(
                (card, index) => (
                  <Grid
                  sx={{
                    // item
                    xs:12,
                    md:6,
                    key:index,
                  }}
                  >
                    <Card
                      variant="outlined"
                      sx={{ p: 2 }}
                    >
                      <TextField
                        label="Title"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={card.title}
                        onChange={(e) =>
                          handleCardChange(
                            index,
                            "title",
                            e.target.value
                          )
                        }
                      />
  
                      <TextField
                        label="Description"
                        fullWidth
                        multiline
                        rows={3}
                        sx={{ mb: 2 }}
                        value={
                          card.description
                        }
                        onChange={(e) =>
                          handleCardChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
  
  <FormControl fullWidth>
  <InputLabel>Icon</InputLabel>

  <Select
    value={card.icon}
    label="Icon"
    onChange={(e) =>
      handleCardChange(
        index,
        "icon",
        e.target.value
      )
    }
  >
    {iconOptions.map((icon) => (
      <MenuItem
        key={icon.value}
        value={icon.value}
      >
        {icon.label}
      </MenuItem>
    ))}
  </Select>
</FormControl>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    );
  }