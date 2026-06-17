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

const faqs = [
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

const FAQSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <FAQSectionContainer>
      <Container maxWidth="md">
        <FAQTitle variant="h2">Frequently Asked Questions</FAQTitle>
        <FAQSubtitle variant="body1">
          Find answers to common queries about our products and services.
        </FAQSubtitle>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQSummary onClick={() => toggleFAQ(index)}>
                <Typography variant="h6">{faq.question}</Typography>
                <Box
                  component="span"
                  sx={{
                    transition: "transform 0.3s",
                    transform:
                      expandedFAQ === index ? "rotate(180deg)" : "rotate(0deg)",
                    fontFamily: "Material Symbols Outlined",
                  }}
                >
                  expand_more
                </Box>
              </FAQSummary>
              <FAQAnswer expanded={expandedFAQ === index ? "true" : "false"}>
                <Typography variant="body2">{faq.answer}</Typography>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQSectionContainer>
  );
};

export default FAQSection;
