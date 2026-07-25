import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    TextField,
    Typography,
  } from "@mui/material";
  
  import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
  import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
  import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
  
  import { CompanyType } from "./types";
  
  interface Props {
    company: CompanyType;
    setCompany: React.Dispatch<
      React.SetStateAction<CompanyType>
    >;
  
    imageLoading: boolean;
    imageUploading: boolean;
  
    handleLogoUpload: (
      e: React.ChangeEvent<HTMLInputElement>
    ) => void;
  }
  
  export default function CompanySection({
    company,
    setCompany,
    imageLoading,
    imageUploading,
    handleLogoUpload,
  }: Props) {
    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = e.target;
  
      setCompany((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    return (
      <Card
        sx={{
          borderRadius: 3,
          mt: 3,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 4,
            }}
          >
            <BusinessOutlinedIcon color="primary" />
  
            <Typography
            sx={{
              variant:"h6",
              fontWeight:700,
            }}
            >
              Company Section
            </Typography>
          </Box>
  
          {/* Logo */}
  
          <Typography
            sx={{
              mb: 2,
              fontWeight: 600,
            }}
          >
            Company Logo
          </Typography>
  
          <Box
            sx={{
              position: "relative",
              width: 180,
              height: 180,
              borderRadius: 2,
              border: "2px dashed #CBD5E1",
              bgcolor: "#F8FAFC",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            {company.logo.url ? (
              <img
                src={company.logo.url}
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <Box sx={{ textAlign:"center" }}>
                <ImageOutlinedIcon
                  sx={{
                    fontSize: 60,
                    color: "#94A3B8",
                  }}
                />
  
                <Typography
                  sx={{
                    color: "#94A3B8",
                  }}
                >
                  No Logo
                </Typography>
              </Box>
            )}
  
            {imageLoading && (
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(255,255,255,.75)",
                  display: "flex",
                  justifyContent: "center",
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
            disabled={imageLoading}
            sx={{
              mb: 4,
            }}
          >
            {imageUploading
              ? "Uploading..."
              : "Upload Logo"}
  
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
            />
          </Button>
  
          <TextField
            fullWidth
            name="copyright"
            label="Copyright Text"
            value={company.copyright}
            onChange={handleChange}
            sx={{
              mb: 3,
            }}
          />
  
          <TextField
            fullWidth
            multiline
            rows={4}
            name="description"
            label="Company Description"
            value={company.description}
            onChange={handleChange}
          />
        </CardContent>
      </Card>
    );
  }