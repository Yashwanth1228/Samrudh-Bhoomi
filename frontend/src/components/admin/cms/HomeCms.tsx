import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
  } from "@mui/material";
  
  import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
  import AnalyticsIcon from "@mui/icons-material/Analytics";
  import UploadFileIcon from "@mui/icons-material/UploadFile";
//   import EcoIcon from "@mui/icons-material/Eco";
import SpaIcon from "@mui/icons-material/Spa";
  import AddCircleIcon from "@mui/icons-material/AddCircle";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  
  import {
    CmsCard,
    CardHeader,
    UploadBox,
    StatBox,
    FeatureBox,
    FeatureIconBox,
  } from "@/styles/admin/Cms.styles";
  
  export default function HomeCms() {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        {/* Hero Section */}
        <CmsCard>
          <CardHeader>
            <ViewCarouselIcon color="primary" />
            <Typography variant="h6">
              Hero Section
            </Typography>
          </CardHeader>
  
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
              defaultValue="Sustainable Farming for a Greener Tomorrow"
            />
  
            <TextField
              fullWidth
              label="Hero Subtitle"
              defaultValue="Premium Agricultural Solutions"
            />
  
            <TextField
              multiline
              rows={3}
              fullWidth
              label="Description"
              defaultValue="Empowering farmers with data-driven precision tools and organic nutrients to maximize yield while preserving the earth's natural balance."
            />
  
            <Box>
              <Typography
                variant="body2"
                sx={{ mb: 2 }}
              >
                Background Image
              </Typography>
  
              <UploadBox>
                <UploadFileIcon sx={{ fontSize: 50 }} />
  
                <Typography>
                  Click to change background image
                </Typography>
              </UploadBox>
            </Box>
          </Box>
        </CmsCard>
  
        {/* Statistics */}
        <CmsCard>
          <CardHeader>
            <AnalyticsIcon color="primary" />
  
            <Typography variant="h6">
              Global Statistics
            </Typography>
          </CardHeader>
  
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            <StatBox>
              <Typography variant="body2">
                PRODUCTS
              </Typography>
  
              <TextField
                variant="standard"
                defaultValue="150+"
              />
            </StatBox>
  
            <StatBox>
              <Typography variant="body2">
                CUSTOMERS
              </Typography>
  
              <TextField
                variant="standard"
                defaultValue="12,000+"
              />
            </StatBox>
  
            <StatBox>
              <Typography variant="body2">
                DEALERS
              </Typography>
  
              <TextField
                variant="standard"
                defaultValue="450"
              />
            </StatBox>
  
            <StatBox>
              <Typography variant="body2">
                EXPERIENCE
              </Typography>
  
              <TextField
                variant="standard"
                defaultValue="25 Yrs"
              />
            </StatBox>
          </Box>
  
          <Box
  sx={{
    mt: 5,
  }}
>
<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
  }}
>

              <Typography
                sx={{
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                WHY CHOOSE US
              </Typography>
  
              <Button startIcon={<AddCircleIcon />}>
                Add Feature
              </Button>
            </Box>
  
            <FeatureBox>
              <FeatureIconBox>
                {/* <EcoIcon /> */}
                <SpaIcon/>
              </FeatureIconBox>
  
              <Box
  sx={{
    flex: 1,
  }}
>
              <Typography
  sx={{
    fontWeight: 700,
  }}
>
                  Organic Excellence
                </Typography>
  
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  100% natural compounds for soil health.
                </Typography>
              </Box>
  
              <Box>
                <IconButton>
                  <EditIcon />
                </IconButton>
  
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </FeatureBox>
          </Box>
        </CmsCard>
      </Box>


    );
  }