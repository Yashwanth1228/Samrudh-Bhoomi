import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import {
  FAQSectionContainer,
  FAQTitle,
  FAQSubtitle,
  FAQList,
  FAQItem,
  FAQSummary,
  FAQAnswer,
} from "../../../styles/user/home/FAQSection.styles";

interface FAQProps {
  faq?: {
    title: string;
    subtitle: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

const defaultFaqs = [
  {
    question: "Do you provide bulk ordering for large enterprises?",
    answer:
      "Yes, we offer specialized bulk pricing and dedicated account management for large agricultural enterprises and cooperatives. Please contact our sales team to discuss your specific requirements.",
  },
  {
    question: "Are your organic products certified?",
    answer:
      "Absolutely. All our organic fertilizers and pesticides carry relevant national and international certifications, ensuring they meet strict organic farming standards.",
  },
  {
    question: "Do you offer agronomic consultation?",
    answer:
      "We provide comprehensive agronomic support. Our team of experts can assist with soil testing analysis, crop planning, and customized input recommendations.",
  },
];

export default function FAQSection({
  faq,
}: FAQProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ((prev) => (prev === index ? null : index));
  };

  const questions =
    faq?.questions && faq.questions.length > 0
      ? faq.questions
      : defaultFaqs;

  return (
    <FAQSectionContainer>
      <Container maxWidth="md">
        <FAQTitle variant="h2">
          {faq?.title || "Frequently Asked Questions"}
        </FAQTitle>

        <FAQSubtitle variant="body1">
          {faq?.subtitle ||
            "Find answers to common queries about our products and services."}
        </FAQSubtitle>

        <FAQList>
          {questions.map((item, index) => (
            <FAQItem key={index}>
              <FAQSummary onClick={() => toggleFAQ(index)}>
                <Typography variant="h6">
                  {item.question}
                </Typography>

                <Box
                  component="span"
                  sx={{
                    transition: "transform 0.3s ease",
                    transform:
                      expandedFAQ === index
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    fontSize: 28,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  +
                </Box>
              </FAQSummary>

              <FAQAnswer
                expanded={expandedFAQ === index ? "true" : "false"}
              >
                <Typography variant="body2">
                  {item.answer}
                </Typography>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQSectionContainer>
  );
}