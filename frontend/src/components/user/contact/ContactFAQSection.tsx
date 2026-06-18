import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  FAQSection,
  FAQContainer,
  FAQTitle,
  FAQList,
  FAQItem,
  FAQSummary,
  FAQSummaryText,
  FAQIcon,
  FAQAnswer,
} from "../../../styles/user/contact/ContactFAQSection.styles";

const faqs = [
  {
    question: "How can I place an inquiry?",
    answer:
      "You can place an inquiry by filling out the form on this page, calling our toll-free number, or sending us an email.",
  },
  {
    question: "How can I contact sales?",
    answer:
      "Our sales team can be reached directly at +91 98765 43210 or via the inquiry form.",
  },
  {
    question: "Do you provide product support?",
    answer:
      "Yes, we provide comprehensive product support. Please contact our support line or submit a request through the portal.",
  },
  {
    question: "How can I become a dealer?",
    answer:
      'To become a dealer, please contact our corporate office or select "Dealership Inquiry" in the contact form.',
  },
];

const ContactFAQSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <FAQSection>
      <Container maxWidth="md">
        <FAQTitle variant="h2">Frequently Asked Questions</FAQTitle>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQSummary onClick={() => toggleFAQ(index)}>
                <FAQSummaryText variant="h6">{faq.question}</FAQSummaryText>
                <FAQIcon expanded={expandedFAQ === index}>
                  <ExpandMoreIcon />
                </FAQIcon>
              </FAQSummary>
              <FAQAnswer expanded={expandedFAQ === index ? "true" : "false"}>
                <Typography variant="body1">{faq.answer}</Typography>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQSection>
  );
};

export default ContactFAQSection;
