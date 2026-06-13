import {
    Box,
    Grid,
    Typography,
    Button,
  } from "@mui/material";
  
  import {
    SectionCard,
    SectionHeader,
    SectionTitle,
    StyledTextField,
  } from "@/styles/admin/Cms.styles";
  
  function FooterCms() {
    return (
      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* General Footer Settings */}
            <SectionCard>
              <SectionHeader>
                <SectionTitle>
                  General Footer Settings
                </SectionTitle>
              </SectionHeader>
  
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <StyledTextField
                  multiline
                  rows={4}
                  label="Footer Description"
                  defaultValue="Samrudh Bhoomi is dedicated to revolutionizing Indian agriculture through high-performance organic inputs and precision farming technology. Join our network of over 12,000 successful farmers."
                />
  
                <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StyledTextField
                      fullWidth
                      label="Copyright Text"
                      defaultValue="© 2024 AgriCorp Enterprise Systems"
                    />
                  </Grid>
  
                  <Grid size={{ xs: 12, md: 6 }}>
                    <StyledTextField
                      fullWidth
                      label="Version Display"
                      defaultValue="v4.2.1-Stable"
                    />
                  </Grid>
                </Grid>
              </Box>
            </SectionCard>
  
            {/* Social Media Links */}
            <SectionCard>
              <SectionHeader>
                <SectionTitle>
                  Social Media Links
                </SectionTitle>
  
                <Button>
                  + Add Platform
                </Button>
              </SectionHeader>
  
              <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      border: "1px solid #e5e7eb",
                      borderRadius: 2,
                      bgcolor: "#f9fafb",
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 1,
                        bgcolor: "#111827",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      F
                    </Box>
  
                    <StyledTextField
                      fullWidth
                      defaultValue="facebook.com/samrudhbhoomi"
                    />
                  </Box>
                </Grid>
  
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      border: "1px solid #e5e7eb",
                      borderRadius: 2,
                      bgcolor: "#f9fafb",
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 1,
                        background:
                          "linear-gradient(45deg,#fb923c,#9333ea)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "12px",
                      }}
                    >
                      IG
                    </Box>
  
                    <StyledTextField
                      fullWidth
                      defaultValue="instagram.com/samrudh_agri"
                    />
                  </Box>
                </Grid>
              </Grid>
            </SectionCard>
          </Box>
        </Grid>
  
        {/* Right Side */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <SectionCard
            sx={{
              height: "100%",
            }}
          >
            <SectionHeader>
              <SectionTitle>
                Quick Links Manager
              </SectionTitle>
            </SectionHeader>
  
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderLeft: "4px solid #2d5a27",
                  borderRadius: "0 10px 10px 0",
                  bgcolor: "#f9fafb",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>
                  About Our Farm
                </Typography>
  
                <Typography
                  sx={{
                    cursor: "grab",
                  }}
                >
                  ⋮⋮
                </Typography>
              </Box>
  
              <Box
                sx={{
                  p: 2,
                  borderLeft: "4px solid #2d5a27",
                  borderRadius: "0 10px 10px 0",
                  bgcolor: "#f9fafb",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>
                  Become a Dealer
                </Typography>
  
                <Typography
                  sx={{
                    cursor: "grab",
                  }}
                >
                  ⋮⋮
                </Typography>
              </Box>
            </Box>
  
            <Button
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                border: "1px dashed #d1d5db",
                color: "#6b7280",
              }}
            >
              + Add New Link
            </Button>
          </SectionCard>
        </Grid>
      </Grid>
    );
  }
  
  export default FooterCms;