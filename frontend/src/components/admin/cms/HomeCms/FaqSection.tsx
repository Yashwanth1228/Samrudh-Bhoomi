import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  
  import HelpOutlineIcon from "@mui/icons-material/HelpOutlined";
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
  import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlined";
  
  import { FAQSectionType } from "./types";
  
  interface Props {
    faq: FAQSectionType;
    setFaq: (faq: FAQSectionType) => void;
  }
  
  export default function FaqSection({
    faq,
    setFaq,
  }: Props) {
    const handleSection = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { name, value } = e.target;
  
      setFaq({
        ...faq,
        [name]: value,
      });
    };
  
    const handleQuestion = (
      index: number,
      field: "question" | "answer",
      value: string
    ) => {
      const updatedQuestions = faq.questions.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item
      );
  
      setFaq({
        ...faq,
        questions: updatedQuestions,
      });
    };
  
    const addQuestion = () => {
      setFaq({
        ...faq,
        questions: [
          ...faq.questions,
          {
            question: "",
            answer: "",
          },
        ],
      });
    };
  
    const removeQuestion = (index: number) => {
      setFaq({
        ...faq,
        questions: faq.questions.filter((_, i) => i !== index),
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
              <HelpOutlineIcon color="primary" />
  
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                FAQ Section
              </Typography>
            </Box>
  
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              onClick={addQuestion}
            >
              Add FAQ
            </Button>
          </Box>
  
          <TextField
            fullWidth
            label="Section Title"
            name="title"
            value={faq.title}
            onChange={handleSection}
            sx={{ mb: 3 }}
          />
  
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Section Subtitle"
            name="subtitle"
            value={faq.subtitle}
            onChange={handleSection}
            sx={{ mb: 4 }}
          />
  
          {faq.questions.map((item, index) => (
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
                  FAQ {index + 1}
                </Typography>
  
                <IconButton
                  color="error"
                  onClick={() => removeQuestion(index)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
  
              <TextField
                fullWidth
                label="Question"
                value={item.question}
                onChange={(e) =>
                  handleQuestion(
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
                rows={3}
                label="Answer"
                value={item.answer}
                onChange={(e) =>
                  handleQuestion(
                    index,
                    "answer",
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