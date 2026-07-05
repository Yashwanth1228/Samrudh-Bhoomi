import React, { useState } from "react";
import { Container, MenuItem, Typography } from "@mui/material";
import {
  Forum as ForumIcon,
  Call as CallIcon,
  Mail as MailIcon,
  Send as SendIcon,
  ExpandMore as ExpandMoreIcon,
  TonalitySharp,
} from "@mui/icons-material";
import {
  ContentSection,
  ContactGrid,
  ContactInfoColumn,
  ContactInfoTitle,
  ContactInfoCards,
  ContactCard,
  ContactCardIcon,
  ContactCardContent,
  ContactCardTitle,
  ContactCardText,
  FormColumn,
  FormCard,
  FormTitle,
  StyledForm,
  FormRow,
  FormField,
  StyledTextField,
  StyledSelect,
  StyledTextarea,
  FormActions,
  SubmitButton,
  ResetButton,
} from "../../../styles/user/contact/ContactFormSection.styles";
import { useCreateInquiriesMutation } from "@/store/api/apiSlice";
import toast from "react-hot-toast";

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const [createInquiries , {isSuccess}] = useCreateInquiriesMutation()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      await createInquiries(formData).unwrap();
  
      toast.success("Inquiry submitted successfully!", {
        icon: "✅",
        style: {
          borderRadius: "12px",
          background: "#fff",
          color: "#1f2937",
          border: "1px solid #e5e7eb",
          padding: "14px 18px",
        },
      });
  
      handleReset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        icon: "❌",
        style: {
          borderRadius: "12px",
        },
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
    });
  };

  return (
    <ContentSection>
      <Container maxWidth="xl">
        <ContactGrid>
          {/* Left Column - Contact Info */}
          <ContactInfoColumn>
            <ContactInfoTitle variant="h2">Get in Touch</ContactInfoTitle>
            <ContactInfoCards>
              <ContactCard href="#">
                <ContactCardIcon>
                  <ForumIcon />
                </ContactCardIcon>
                <ContactCardContent>
                  <ContactCardTitle variant="h6">
                    WhatsApp Contact
                  </ContactCardTitle>
                  <ContactCardText variant="body2">
                    Chat with our team
                  </ContactCardText>
                </ContactCardContent>
              </ContactCard>
              <ContactCard href="#">
                <ContactCardIcon>
                  <CallIcon />
                </ContactCardIcon>
                <ContactCardContent>
                  <ContactCardTitle variant="h6">Call Now</ContactCardTitle>
                  <ContactCardText variant="body2">
                    Speak to an expert
                  </ContactCardText>
                </ContactCardContent>
              </ContactCard>
              <ContactCard href="#">
                <ContactCardIcon>
                  <MailIcon />
                </ContactCardIcon>
                <ContactCardContent>
                  <ContactCardTitle variant="h6">Send Email</ContactCardTitle>
                  <ContactCardText variant="body2">
                    Drop us a line
                  </ContactCardText>
                </ContactCardContent>
              </ContactCard>
            </ContactInfoCards>
          </ContactInfoColumn>

          {/* Right Column - Form */}
          <FormColumn>
            <FormCard>
              <FormTitle variant="h6">Send an Inquiry</FormTitle>
              <StyledForm onSubmit={handleSubmit}>
                <FormRow>
                  <FormField>
                    <label htmlFor="fullName">Full Name *</label>
                    <StyledTextField
                      id="fullName"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      fullWidth
                    />
                  </FormField>
                  <FormField>
                    <label htmlFor="phone">Phone Number *</label>
                    <StyledTextField
                      id="phone"
                      name="phone"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      fullWidth
                    />
                  </FormField>
                </FormRow>

                <FormField>
                  <label htmlFor="email">Email Address</label>
                  <StyledTextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </FormField>

                <FormField>
                  <label htmlFor="product">Product Interest *</label>
                  <StyledSelect
                    id="product"
                    name="interest"
                    value={formData.interest}
                    onChange={handleSelectChange}
                    displayEmpty
                    fullWidth
                    IconComponent={ExpandMoreIcon}
                  >
                    <MenuItem value="" disabled>
                      Select a product category
                    </MenuItem>
                    <MenuItem value="crop-nutrition">
                      Crop Nutrition Solutions
                    </MenuItem>
                    <MenuItem value="soil-health">
                      Soil Health Management
                    </MenuItem>
                    <MenuItem value="precision-ag">
                      Precision Agriculture Tech
                    </MenuItem>
                    <MenuItem value="irrigation">
                      Smart Irrigation Systems
                    </MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </StyledSelect>
                </FormField>

                <FormField>
                  <label htmlFor="message">Your Message</label>
                  <StyledTextarea
                    id="message"
                    name="message"
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={handleInputChange}
                    minRows={4}
                  />
                </FormField>

                <FormActions>
                  <SubmitButton type="submit" startIcon={<SendIcon />}>
                    Submit Inquiry
                  </SubmitButton>
                  <ResetButton type="reset" onClick={handleReset}>
                    Reset Form
                  </ResetButton>
                </FormActions>
              </StyledForm>
            </FormCard>
          </FormColumn>
        </ContactGrid>
      </Container>
    </ContentSection>
  );
};

export default ContactFormSection;
