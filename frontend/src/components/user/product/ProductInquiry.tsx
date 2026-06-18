import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import {
  InquirySection,
  InquiryTitle,
  InquiryForm,
  FormRow,
  FormField,
  StyledTextField,
  StyledTextarea,
  SubmitInquiryButton,
} from "../../../styles/user/product/ProductInquiry.styles";

const ProductInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry submitted:", formData);
    // Add your API call here
  };

  return (
    <InquirySection>
      <InquiryTitle variant="h6">Quick Bulk Inquiry</InquiryTitle>
      <InquiryForm onSubmit={handleSubmit}>
        <FormRow container spacing={2}>
          <Grid {...{ xs: 12, md: 6 }}>
            <FormField>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "#42493e",
                }}
              >
                Full Name *
              </Typography>
              <StyledTextField
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                required
              />
            </FormField>
          </Grid>
          <Grid {...{ xs: 12, md: 6 }}>
            <FormField>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "#42493e",
                }}
              >
                Phone Number *
              </Typography>
              <StyledTextField
                name="phone"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </FormField>
          </Grid>
        </FormRow>

        <FormField>
          <Typography
            variant="caption"
            sx={{
              fontFamily: "IBM Plex Sans",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#42493e",
            }}
          >
            Email Address
          </Typography>
          <StyledTextField
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
        </FormField>

        <FormField>
          <Typography
            variant="caption"
            sx={{
              fontFamily: "IBM Plex Sans",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#42493e",
            }}
          >
            Requirements / Message
          </Typography>
          <StyledTextarea
            name="message"
            placeholder="Please specify required quantity and delivery location..."
            value={formData.message}
            onChange={handleChange}
            minRows={3}
          />
        </FormField>

        <SubmitInquiryButton type="submit" endIcon={<ArrowForwardIcon />}>
          Submit Inquiry
        </SubmitInquiryButton>
      </InquiryForm>
    </InquirySection>
  );
};

export default ProductInquiry;
