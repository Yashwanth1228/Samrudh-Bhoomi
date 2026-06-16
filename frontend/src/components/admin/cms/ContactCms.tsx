import {
    Box,
    Grid,
    Typography,
    Button,
    InputAdornment,
  } from "@mui/material";
  
  import CallIcon from "@mui/icons-material/Call";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import OpenInNewIcon from "@mui/icons-material/OpenInNew";
  import PhoneIcon from "@mui/icons-material/Phone";
  import ChatIcon from "@mui/icons-material/Chat";
  import MailOutlineIcon from "@mui/icons-material/MailOutlined";
  
  import {
    SectionCard,
    SectionHeader,
    SectionTitle,
    StyledTextField,
  } from "@/styles/admin/Cms.styles";
  
  export default function ContactCms() {
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
            {/* Contact Banner */}
            <SectionCard>
              <SectionHeader>
              <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
  }}
>
                  <CallIcon color="success" />
  
                  <SectionTitle>
                    Contact Banner
                  </SectionTitle>
                </Box>
              </SectionHeader>
  
              <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 3,
  }}
>
                <StyledTextField
                  fullWidth
                  label="Banner Title"
                  defaultValue="Get in Touch with Our Experts"
                />
  
                <StyledTextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Banner Description"
                  defaultValue="Whether you're a farmer seeking advice or a distributor looking to partner, we're here to help you grow."
                />
              </Box>
            </SectionCard>
  
            {/* Address */}
            <SectionCard>
              <SectionHeader>
              <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
  }}
>
                  <LocationOnIcon color="success" />
  
                  <SectionTitle>
                    Physical Address & Map
                  </SectionTitle>
                </Box>
              </SectionHeader>
  
             <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 3,
  }}
>
                <StyledTextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Office Address"
                  defaultValue="Plot No. 45-B, Industrial Area, Phase II, Nashik, Maharashtra - 422010, India"
                />
  
  <Box
  sx={{
    display: "flex",
    gap: 2,
    flexDirection: {
      xs: "column",
      md: "row",
    },
  }}
>
                  <StyledTextField
                    fullWidth
                    label="Google Maps URL"
                    defaultValue="https://maps.google.com/?q=Samrudh+Bhoomi+Nashik"
                  />
  
                  <Button
                    variant="outlined"
                    startIcon={<OpenInNewIcon />}
                  >
                    Verify
                  </Button>
                </Box>
              </Box>
            </SectionCard>
          </Box>
        </Grid>
  
        {/* Right Side */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <SectionCard>
            <SectionHeader>
              <SectionTitle>
                Support Channels
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
                fullWidth
                label="Phone Number"
                defaultValue="+91 253 1234 567"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
  
              <StyledTextField
                fullWidth
                label="WhatsApp Number"
                defaultValue="+91 98765 43210"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <ChatIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
  
              <StyledTextField
                fullWidth
                label="Email Address"
                defaultValue="support@samrudhbhoomi.com"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </SectionCard>
        </Grid>
      </Grid>
    );
  }