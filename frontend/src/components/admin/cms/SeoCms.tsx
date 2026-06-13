import {
    Box,
    Typography,
    Grid,
  } from "@mui/material";
  
  import CheckCircleIcon from "@mui/icons-material/CheckCircle";
  import WarningAmberIcon from "@mui/icons-material/WarningAmber";
  
  import {
    SectionCard,
    SectionTitle,
    StyledTextField,
  } from "@/styles/admin/Cms.styles";
  
  function SeoCms() {
    return (
      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <SectionCard>
            <SectionTitle sx={{ mb: 4 }}>
              Global Meta Tags
            </SectionTitle>
  
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 4,
  }}
>
              <Box>
                <Typography
  sx={{
    mb: 1,
    fontWeight: 600,
  }}
>
                  SITE TITLE
                </Typography>
  
                <StyledTextField
                  fullWidth
                  defaultValue="Samrudh Bhoomi | Precision Organic Agriculture"
                />
  
                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  Recommended: 50-60 characters
                </Typography>
              </Box>
  
              <Box>
              <Typography
  sx={{
    mb: 1,
    fontWeight: 600,
  }}
>
                  META DESCRIPTION
                </Typography>
  
                <StyledTextField
                  fullWidth
                  multiline
                  rows={4}
                  defaultValue="Empowering Indian farmers with data-driven precision tools and organic nutrients to maximize yield while preserving the earth's natural balance for sustainable growth."
                />
  
                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  Recommended: 150-160 characters
                </Typography>
              </Box>
  
              <Box>
              <Typography
  sx={{
    mb: 1,
    fontWeight: 600,
  }}
>
                  KEYWORDS (COMMA SEPARATED)
                </Typography>
  
                <StyledTextField
                  fullWidth
                  defaultValue="organic farming, bio nutrients, indian agriculture, precision farming, yield growth"
                />
              </Box>
            </Box>
          </SectionCard>
        </Grid>
  
        {/* Right Side */}
        <Grid size={{ xs: 12, lg: 6 }}>
          {/* SEO Preview */}
          <SectionCard sx={{ mb: 3 }}>
            <SectionTitle sx={{ mb: 3 }}>
              Live SEO Preview
            </SectionTitle>
  
            <Box
              sx={{
                p: 3,
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                maxWidth: 500,
                mx: "auto",
                bgcolor: "#fff",
              }}
            >
              <Box
              sx={{
                display:"flex",
                alignItems:"center",
                gap:1,
                mb:1
            }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    bgcolor: "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                  }}
                >
                  SB
                </Box>
  
                <Typography variant="body2">
                  https://www.samrudhbhoomi.com
                </Typography>
              </Box>
  
              <Typography
                sx={{
                  color: "#1a0dab",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                Samrudh Bhoomi | Precision Organic Agriculture
              </Typography>
  
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: "#4d5156",
                }}
              >
                Empowering Indian farmers with data-driven precision tools and
                organic nutrients to maximize yield while preserving the earth's
                natural balance for sustainable growth.
              </Typography>
            </Box>
  
            <Typography
            sx={{
              align:"center",
              variant:"caption",
              color:"text.secondary",
              mt:2,
              display:"block",
            }}
            >
              Estimated appearance on Google Search
            </Typography>
          </SectionCard>
  
          {/* SEO Score */}
          <SectionCard>
          <Typography
  sx={{
    fontWeight: 700,
    mb: 3,
  }}
>
              SEO HEALTH SCORE
            </Typography>
  
            <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 4,
  }}
>
              {/* Circle Score */}
              <Box
                sx={{
                  position: "relative",
                  width: 100,
                  height: 100,
                }}
              >
                <svg width="100" height="100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e3e3de"
                    strokeWidth="8"
                    fill="none"
                  />
  
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#2d5a27"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset="37.6"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
  
                <Typography
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontWeight: 700,
                    fontSize: "24px",
                    color: "#2d5a27",
                  }}
                >
                  85%
                </Typography>
              </Box>
  
              {/* Score Details */}
              <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
  }}
>
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
  }}
>
                  <CheckCircleIcon
                    sx={{
                      color: "#2d5a27",
                      fontSize: 18,
                    }}
                  />
  
                  <Typography variant="body2">
                    Title length is optimal
                  </Typography>
                </Box>
  
                <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
  }}
>
                  <WarningAmberIcon
                    sx={{
                      color: "#f59e0b",
                      fontSize: 18,
                    }}
                  />
  
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Missing Alt tags for 4 images
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SectionCard>
        </Grid>
      </Grid>
    );
  }
  
  export default SeoCms;