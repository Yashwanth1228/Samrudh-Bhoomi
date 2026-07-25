import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  
  import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
  import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
  import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
  
  import { FAQSectionType } from "./types";
  
  interface Props {
    faqSection: FAQSectionType;
    setFaqSection: (
      value: FAQSectionType
    ) => void;
  }
  
  export default function FAQSection({
    faqSection,
    setFaqSection,
  }: Props) {
    const handleChange = (
      field: keyof FAQSectionType,
      value: string
    ) => {
      setFaqSection({
        ...faqSection,
        [field]: value,
      });
    };
  
    const handleItemChange = (
      index: number,
      field: string,
      value: string
    ) => {
      const items = [...faqSection.items];
  
      items[index] = {
        ...items[index],
        [field]: value,
      };
  
      setFaqSection({
        ...faqSection,
        items,
      });
    };
  
    const addFaq = () => {
      setFaqSection({
        ...faqSection,
        items: [
          ...faqSection.items,
          {
            question: "",
            answer: "",
          },
        ],
      });
    };
  
    const removeFaq = (
      index: number
    ) => {
      setFaqSection({
        ...faqSection,
        items: faqSection.items.filter(
          (_, i) => i !== index
        ),
      });
    };
  
    return (
      <Card sx={{ mt: 3, borderRadius: 3 }}>
        <CardContent>
  
          <Box
           sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            mb:3,
           }}
          >
            <Box
             sx={{
              display:"flex",
              alignItems:"center",
              gap:1,
             }}
            >
              <QuizOutlinedIcon color="primary" />
  
              <Typography
               sx={{
                variant:"h6",
                fontWeight:700,
               }}
              >
                FAQ Section
              </Typography>
            </Box>
  
            <Button
              variant="contained"
              startIcon={
                <AddOutlinedIcon />
              }
              onClick={addFaq}
            >
              Add FAQ
            </Button>
          </Box>
  
          <TextField
            fullWidth
            label="Section Title"
            value={faqSection.title}
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
              faqSection.description
            }
            onChange={(e) =>
              handleChange(
                "description",
                e.target.value
              )
            }
            sx={{ mb: 4 }}
          />
  
          {faqSection.items.map(
            (faq, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 3,
                  mb: 3,
                }}
              >
                <Box
                sx={{
                  display:"flex",
                  justifyContent:"space-between",
                  mb:2
                }}
                >
                  <Typography
                  sx={{
                    fontWeight:700,
                  }}
                  >
                    FAQ {index + 1}
                  </Typography>
  
                  <IconButton
                    color="error"
                    onClick={() =>
                      removeFaq(index)
                    }
                  >
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
  
                <TextField
                  fullWidth
                  label="Question"
                  value={faq.question}
                  onChange={(e) =>
                    handleItemChange(
                      index,
                      "question",
                      e.target.value
                    )
                  }
                  sx={{ mb: 2 }}
                />
  
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Answer"
                  value={faq.answer}
                  onChange={(e) =>
                    handleItemChange(
                      index,
                      "answer",
                      e.target.value
                    )
                  }
                />
              </Card>
            )
          )}
  
        </CardContent>
      </Card>
    );
  }