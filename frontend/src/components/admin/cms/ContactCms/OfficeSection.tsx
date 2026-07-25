import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
  } from "@mui/material";
  
  import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
  
  import { OfficeSectionType } from "./types";
  
  interface Props {
    officeSection: OfficeSectionType;
  
    setOfficeSection: (
      value: OfficeSectionType
    ) => void;
  }
  
  export default function OfficeSection({
    officeSection,
    setOfficeSection,
  }: Props) {
    const handleChange = (
      field: keyof OfficeSectionType,
      value: any
    ) => {
      setOfficeSection({
        ...officeSection,
        [field]: value,
      });
    };
  
    return (
      <Card sx={{ mt: 3, borderRadius: 3 }}>
        <CardContent>
  
          <Box
          sx={{
            display:"flex",
            alignItems:"center",
            gap:1,
            mb:3,
          }}
          >
            <LocationOnOutlinedIcon color="primary" />
  
            <Typography
            sx={{
              variant:"h6",
              fontWeight:700,
            }}
            >
              Office Section
            </Typography>
          </Box>
  
          <TextField
            fullWidth
            label="Section Title"
            value={officeSection.title}
            onChange={(e) =>
              handleChange(
                "title",
                e.target.value
              )
            }
            sx={{ mb: 3 }}
          />
  
          <Typography
          sx={{
            fontWeight:700,
            mb:2,
          }}
          >
            Address
          </Typography>
  
          <Box
          sx={{
            display:"grid",
            gridTemplateColumns:{
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap:2,
        }}
          >
            <TextField
              label="Address Line 1"
              value={
                officeSection.address.line1
              }
              onChange={(e) =>
                setOfficeSection({
                  ...officeSection,
                  address: {
                    ...officeSection.address,
                    line1:
                      e.target.value,
                  },
                })
              }
            />
  
            <TextField
              label="Address Line 2"
              value={
                officeSection.address.line2
              }
              onChange={(e) =>
                setOfficeSection({
                  ...officeSection,
                  address: {
                    ...officeSection.address,
                    line2:
                      e.target.value,
                  },
                })
              }
            />
  
            <TextField
              label="City"
              value={
                officeSection.address.city
              }
              onChange={(e) =>
                setOfficeSection({
                  ...officeSection,
                  address: {
                    ...officeSection.address,
                    city: e.target.value,
                  },
                })
              }
            />
  
            <TextField
              label="State"
              value={
                officeSection.address.state
              }
              onChange={(e) =>
                setOfficeSection({
                  ...officeSection,
                  address: {
                    ...officeSection.address,
                    state:
                      e.target.value,
                  },
                })
              }
            />
  
            <TextField
              label="Country"
              value={
                officeSection.address.country
              }
              onChange={(e) =>
                setOfficeSection({
                  ...officeSection,
                  address: {
                    ...officeSection.address,
                    country:
                      e.target.value,
                  },
                })
              }
            />
  
            <TextField
              label="Pincode"
              value={
                officeSection.address
                  .pincode
              }
              onChange={(e) =>
                setOfficeSection({
                  ...officeSection,
                  address: {
                    ...officeSection.address,
                    pincode:
                      e.target.value,
                  },
                })
              }
            />
          </Box>
  
          <Typography
          sx={{
            fontWeight:700,
            mt:4,
            mb:2,
          }}
          >
            Google Map
          </Typography>
  
          <TextField
            fullWidth
            label="Embed URL"
            value={
              officeSection.map.embedUrl
            }
            onChange={(e) =>
              setOfficeSection({
                ...officeSection,
                map: {
                  ...officeSection.map,
                  embedUrl:
                    e.target.value,
                },
              })
            }
            sx={{ mb: 2 }}
          />
  
          <TextField
            fullWidth
            label="Google Map Link"
            value={
              officeSection.map
                .locationUrl
            }
            onChange={(e) =>
              setOfficeSection({
                ...officeSection,
                map: {
                  ...officeSection.map,
                  locationUrl:
                    e.target.value,
                },
              })
            }
            sx={{ mb: 4 }}
          />

        </CardContent>
      </Card>
    );
  }