import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    MenuItem,
    Button,
    IconButton,
  } from "@mui/material";
  
  import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
  import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
  import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
  
  import { ContactSectionType } from "./types";
  
  interface Props {
    contactSection: ContactSectionType;
    setContactSection: (
      value: ContactSectionType
    ) => void;
  }
  
  const iconOptions = [
    "WhatsApp",
    "Phone",
    "Email",
    "LocationOn",
    "Facebook",
    "Instagram",
    "Twitter",
    "LinkedIn",
  ];
  
  export default function ContactSection({
    contactSection,
    setContactSection,
  }: Props) {
    const handleChange = (
      field: keyof ContactSectionType,
      value: string
    ) => {
      setContactSection({
        ...contactSection,
        [field]: value,
      });
    };
  
    const handleCardChange = (
      index: number,
      field: string,
      value: string
    ) => {
      const cards = [...contactSection.contactCards];
  
      cards[index] = {
        ...cards[index],
        [field]: value,
      };
  
      setContactSection({
        ...contactSection,
        contactCards: cards,
      });
    };
  
    const addCard = () => {
      setContactSection({
        ...contactSection,
        contactCards: [
          ...contactSection.contactCards,
          {
            title: "",
            subtitle: "",
            icon: "",
            value: "",
            link: "",
          },
        ],
      });
    };
  
    const removeCard = (index: number) => {
      const cards =
        contactSection.contactCards.filter(
          (_, i) => i !== index
        );
  
      setContactSection({
        ...contactSection,
        contactCards: cards,
      });
    };
  
    return (
      <Card
        sx={{
          mt: 3,
          borderRadius: 3,
        }}
      >
        <CardContent>
          {/* Header */}
  
          <Box
            sx={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ContactPhoneOutlinedIcon color="primary" />
  
              <Typography
               sx={{
                variant:"h6",
                fontWeight:700,
               }}
              >
                Contact Section
              </Typography>
            </Box>
  
            <Button
              variant="contained"
              startIcon={<AddOutlinedIcon />}
              onClick={addCard}
            >
              Add Card
            </Button>
          </Box>
  
          {/* Section Details */}
  
          <TextField
            fullWidth
            label="Section Title"
            value={contactSection.title}
            onChange={(e) =>
              handleChange(
                "title",
                e.target.value
              )
            }
            sx={{ mb: 3 }}
          />
  
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Description"
            value={
              contactSection.description
            }
            onChange={(e) =>
              handleChange(
                "description",
                e.target.value
              )
            }
            sx={{ mb: 4 }}
          />
  
          {/* Cards */}
  
          {contactSection.contactCards.map(
            (card, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  mb: 3,
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Typography
                     sx={{
                      fontWeight:700,
                      variant:"h6",
                     }}
                    >
                      Contact Card{" "}
                      {index + 1}
                    </Typography>
  
                    <IconButton
                      color="error"
                      onClick={() =>
                        removeCard(index)
                      }
                    >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </Box>
  
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        md: "1fr 1fr",
                      },
                      gap: 2,
                    }}
                  >
                    <TextField
                      fullWidth
                      label="Title"
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
                      fullWidth
                      label="Subtitle"
                      value={card.subtitle}
                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "subtitle",
                          e.target.value
                        )
                      }
                    />
  
                    <TextField
                      fullWidth
                      select
                      label="Icon"
                      value={card.icon}
                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "icon",
                          e.target.value
                        )
                      }
                    >
                      {iconOptions.map(
                        (icon) => (
                          <MenuItem
                            key={icon}
                            value={icon}
                          >
                            {icon}
                          </MenuItem>
                        )
                      )}
                    </TextField>
  
                    <TextField
                      fullWidth
                      label="Value"
                      value={card.value}
                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "value",
                          e.target.value
                        )
                      }
                    />
  
                    <TextField
                      fullWidth
                      label="Link"
                      value={card.link}
                      onChange={(e) =>
                        handleCardChange(
                          index,
                          "link",
                          e.target.value
                        )
                      }
                      sx={{
                        gridColumn: {
                          xs: "span 1",
                          md: "span 2",
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            )
          )}
        </CardContent>
      </Card>
    );
  }