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

import { FAQSectionType } from "@/components/admin/cms/ContactCms/types";

interface Props {
  faqSection?: FAQSectionType;
}

const defaultFaqs = [
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

export default function ContactFAQSection({
  faqSection,
}: Props) {
  const [expandedFAQ, setExpandedFAQ] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ((prev) =>
      prev === index ? null : index
    );
  };

  const title =
    faqSection?.title ||
    "Frequently Asked Questions";

  const description =
    faqSection?.description ||
    "Find answers to the most common questions.";

  const faqs =
    faqSection?.items &&
    faqSection.items.length > 0
      ? faqSection.items
      : defaultFaqs;

  return (
    <FAQSection>
      <Container maxWidth="md">
        <FAQContainer>
          <FAQTitle variant="h2">
            {title}
          </FAQTitle>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#6B7280",
              mb: 5,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            {description}
          </Typography>

          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQSummary
                  onClick={() =>
                    toggleFAQ(index)
                  }
                >
                  <FAQSummaryText variant="h6">
                    {faq.question}
                  </FAQSummaryText>

                  <FAQIcon
                    expanded={
                      expandedFAQ === index
                    }
                  >
                    <ExpandMoreIcon />
                  </FAQIcon>
                </FAQSummary>

                <FAQAnswer
                  expanded={
                    expandedFAQ === index
                      ? "true"
                      : "false"
                  }
                >
                  <Typography variant="body1">
                    {faq.answer}
                  </Typography>
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </FAQContainer>
      </Container>
    </FAQSection>
  );
}