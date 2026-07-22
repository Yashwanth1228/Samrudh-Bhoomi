import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    MenuItem,
    TextField,
    Typography,
  } from "@mui/material";
  
  import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlined";
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
  import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
  
  import { WhyChooseUsSectionType } from "./types";
  
  interface Props {
    whyChooseUs: WhyChooseUsSectionType;
    setWhyChooseUs: (whyChooseUs: WhyChooseUsSectionType) => void;
  }
  
  const iconOptions = [
    "ScienceOutlined",
    "SupportAgentOutlined",
    "LocalShippingOutlined",
    "VerifiedOutlined",
    "SpaOutlined",
    "AgricultureOutlined",
  ];
  
  export default function WhyChooseUsSection({
    whyChooseUs,
    setWhyChooseUs,
  }: Props) {
    const handleTitle = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { name, value } = e.target;
  
      setWhyChooseUs({
        ...whyChooseUs,
        [name]: value,
      });
    };
  
    const handleCardChange = (
      index: number,
      field: "title" | "description" | "icon",
      value: string
    ) => {
      const updatedCards = whyChooseUs.cards.map((card, i) =>
        i === index
          ? {
              ...card,
              [field]: value,
            }
          : card
      );
  
      setWhyChooseUs({
        ...whyChooseUs,
        cards: updatedCards,
      });
    };
  
    const addCard = () => {
      setWhyChooseUs({
        ...whyChooseUs,
        cards: [
          ...whyChooseUs.cards,
          {
            title: "",
            description: "",
            icon: "ScienceOutlined",
          },
        ],
      });
    };
  
    const removeCard = (index: number) => {
      setWhyChooseUs({
        ...whyChooseUs,
        cards: whyChooseUs.cards.filter((_, i) => i !== index),
      });
    };
  
    return (
      <Card
        sx={{
          mt: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <WorkspacePremiumOutlinedIcon color="primary" />
  
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                Why Choose Us
              </Typography>
            </Box>
  
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              onClick={addCard}
            >
              Add Card
            </Button>
          </Box>
  
          <TextField
            fullWidth
            label="Section Title"
            name="title"
            value={whyChooseUs.title}
            onChange={handleTitle}
            sx={{ mb: 3 }}
          />
  
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Section Subtitle"
            name="subtitle"
            value={whyChooseUs.subtitle}
            onChange={handleTitle}
            sx={{ mb: 4 }}
          />
  
          {whyChooseUs.cards.map((card, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                mb: 3,
                p: 2,
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Card {index + 1}
                </Typography>
  
                <IconButton
                  color="error"
                  onClick={() => removeCard(index)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
  
              <TextField
                select
                fullWidth
                label="Icon"
                value={card.icon}
                onChange={(e) =>
                  handleCardChange(
                    index,
                    "icon",
                    e.target.value
                  )
                }
                sx={{ mb: 2 }}
              >
                {iconOptions.map((icon) => (
                  <MenuItem key={icon} value={icon}>
                    {icon}
                  </MenuItem>
                ))}
              </TextField>
  
              <TextField
                fullWidth
                label="Card Title"
                value={card.title}
                onChange={(e) =>
                  handleCardChange(
                    index,
                    "title",
                    e.target.value
                  )
                }
                sx={{ mb: 2 }}
              />
  
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Card Description"
                value={card.description}
                onChange={(e) =>
                  handleCardChange(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </Card>
          ))}
        </CardContent>
      </Card>
    );
  }