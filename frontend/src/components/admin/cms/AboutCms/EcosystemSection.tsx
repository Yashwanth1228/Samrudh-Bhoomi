import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    IconButton,
    Typography,
  } from "@mui/material";
  
  import UploadFileIcon from "@mui/icons-material/UploadFile";
  import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
  
  import toast from "react-hot-toast";
  
  import { EcosystemType } from "./types";
  
  interface UploadedImage {
    url: string;
    publicId: string;
  }
  
  interface Props {
    ecosystem: EcosystemType;
  
    setEcosystem: (value: EcosystemType) => void;
  
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
  
  export default function EcosystemSection({
    ecosystem,
    setEcosystem,
    uploadImages,
    deleteImage,
    imageUploading,
    imageDeleting,
  }: Props) {
    const handleTitle = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setEcosystem({
        ...ecosystem,
        title: e.target.value,
      });
    };
  
    const handleImage = async (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) => {
      const files = e.target.files;
  
      if (!files?.length) return;
  
      try {
        const uploaded = await uploadImages(
          [files[0]],
          "cms"
        );
  
        if (ecosystem.images[index].publicId) {
          await deleteImage({
            publicId:
              ecosystem.images[index].publicId,
          });
        }
  
        const images = [...ecosystem.images];
        images[index] = uploaded[0];
  
        setEcosystem({
          ...ecosystem,
          images,
        });
  
        toast.success("Image uploaded");
      } catch {
        toast.error("Upload failed");
      }
    };
  
    const removeImage = async (index: number) => {
      try {
        if (ecosystem.images[index].publicId) {
          await deleteImage({
            publicId:
              ecosystem.images[index].publicId,
          });
        }
  
        const images = [...ecosystem.images];
  
        images[index] = {
          url: "",
          publicId: "",
        };
  
        setEcosystem({
          ...ecosystem,
          images,
        });
  
        toast.success("Image removed");
      } catch {
        toast.error("Failed");
      }
    };
  
    return (
      <Card sx={{ mt: 3, borderRadius: 3 }}>
        <CardContent>
  
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
            }}
          >
            <PhotoLibraryOutlinedIcon color="primary" />
  
            <Typography
            // item
            sx={{
              variant:"h6",
              fontWeight:700,
          }}
            >
              Ecosystem Section
            </Typography>
          </Box>
  
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFileIcon />}
            disabled={
              imageUploading || imageDeleting
            }
            sx={{ mb: 3 }}
          >
            Upload Gallery Images
  
            <input
              hidden
              type="file"
              multiple
              accept="image/*"
              onChange={(e) =>
                handleImage(e, 0)
              }
            />
          </Button>
  
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Section Title
            </Typography>
  
            <input
              value={ecosystem.title}
              onChange={handleTitle}
              style={{
                width: "100%",
                padding: 12,
              }}
            />
          </Box>
  
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: 3,
            }}
          >
            {ecosystem.images.map(
              (img, index : any) => (
                <Card
                  key={index}
                  variant="outlined"
                >
                  <Box
                    sx={{
                      height: 180,
                      position: "relative",
                      bgcolor: "#f7f7f7",
                    }}
                  >
                    {(imageUploading ||
                      imageDeleting) && (
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          justifyContent:
                            "center",
                          alignItems:
                            "center",
                          bgcolor:
                            "rgba(255,255,255,.7)",
                        }}
                      >
                        <CircularProgress />
                      </Box>
                    )}
  
                    {img.url ? (
                      <img
                        src={img.url}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent:
                            "center",
                          alignItems:
                            "center",
                          color: "#999",
                        }}
                      >
                        No Image
                      </Box>
                    )}
                  </Box>
  
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      p: 1,
                    }}
                  >
                    <Button
                      component="label"
                      size="small"
                    >
                      Replace
  
                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImage(
                            e,
                            index
                          )
                        }
                      />
                    </Button>
  
                    <IconButton
                      color="error"
                      onClick={() =>
                        removeImage(index)
                      }
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </Card>
              )
            )}
          </Box>
  
        </CardContent>
      </Card>
    );
  }