import React, { useState } from "react";
import { Container, MenuItem } from "@mui/material";
import {
  Forum as ForumIcon,
  Call as CallIcon,
  Mail as MailIcon,
  Send as SendIcon,
  ExpandMore as ExpandMoreIcon,
  LocationOn as LocationOnIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  X as XIcon, // MUI uses X for Twitter
  LinkedIn as LinkedInIcon,
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

import { ContactSectionType } from "@/components/admin/cms/ContactCms/types";

interface Props {
  contactSection?: ContactSectionType;
}

const iconMap: Record<string, React.ReactNode> = {
  WhatsApp: <ForumIcon />,
  Phone: <CallIcon />,
  Email: <MailIcon />,
  LocationOn: <LocationOnIcon />,
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
  Twitter: <XIcon />,
  LinkedIn: <LinkedInIcon />,
};

export default function ContactFormSection({
  contactSection,
}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const [createInquiries] =
    useCreateInquiriesMutation();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await createInquiries(formData).unwrap();

      toast.success(
        "Inquiry submitted successfully!"
      );

      handleReset();
    } catch {
      toast.error(
        "Something went wrong. Please try again."
      );
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
          {/* Left */}

          <ContactInfoColumn>
            <ContactInfoTitle variant="h2">
              {contactSection?.title ||
                "Get in Touch"}
            </ContactInfoTitle>

            {contactSection?.description && (
              <ContactCardText
                variant="body1"
                sx={{ mb: 4 }}
              >
                {contactSection.description}
              </ContactCardText>
            )}

            <ContactInfoCards>
              {(contactSection?.contactCards?.length
                ? contactSection.contactCards
                : [
                    {
                      title: "WhatsApp Contact",
                      subtitle:
                        "Chat with our team",
                      icon: "WhatsApp",
                      value: "+91 9876543210",
                      link: "#",
                    },
                    {
                      title: "Call Now",
                      subtitle:
                        "Speak to an expert",
                      icon: "Phone",
                      value: "+91 9876543210",
                      link: "#",
                    },
                    {
                      title: "Send Email",
                      subtitle:
                        "Drop us a line",
                      icon: "Email",
                      value:
                        "info@samrudhbhoomi.com",
                      link: "#",
                    },
                  ]
              ).map((card, index) => (
                <ContactCard
                  key={index}
                  href={card.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ContactCardIcon>
                    {
                      iconMap[
                        card.icon as keyof typeof iconMap
                      ]
                    }
                  </ContactCardIcon>

                  <ContactCardContent>
                    <ContactCardTitle variant="h6">
                      {card.title}
                    </ContactCardTitle>

                    <ContactCardText variant="body2">
                      {card.subtitle}
                    </ContactCardText>

                    <ContactCardText
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: "#2d5a27",
                        mt: 0.5,
                      }}
                    >
                      {card.value}
                    </ContactCardText>
                  </ContactCardContent>
                </ContactCard>
              ))}
            </ContactInfoCards>
          </ContactInfoColumn>

          {/* Right */}

          <FormColumn>
            <FormCard>
              <FormTitle variant="h6">
                {contactSection?.title ||
                  "Send an Inquiry"}
              </FormTitle>

              <StyledForm
                onSubmit={handleSubmit}
              >
                <FormRow>
                  <FormField>
                    <label htmlFor="fullName">
                      Full Name *
                    </label>

                    <StyledTextField
                      id="fullName"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={
                        handleInputChange
                      }
                      required
                      fullWidth
                    />
                  </FormField>

                  <FormField>
                    <label htmlFor="phone">
                      Phone Number *
                    </label>

                    <StyledTextField
                      id="phone"
                      name="phone"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={
                        handleInputChange
                      }
                      required
                      fullWidth
                    />
                  </FormField>
                </FormRow>

                <FormField>
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <StyledTextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={
                      handleInputChange
                    }
                    fullWidth
                  />
                </FormField>

                <FormField>
                  <label htmlFor="interest">
                    Product Interest *
                  </label>

                  <StyledSelect
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={
                      handleSelectChange
                    }
                    displayEmpty
                    fullWidth
                    IconComponent={
                      ExpandMoreIcon
                    }
                  >
                    <MenuItem
                      value=""
                      disabled
                    >
                      Select a product
                    </MenuItem>

                    <MenuItem value="crop-nutrition">
                      Crop Nutrition
                    </MenuItem>

                    <MenuItem value="soil-health">
                      Soil Health
                    </MenuItem>

                    <MenuItem value="precision-ag">
                      Precision Agriculture
                    </MenuItem>

                    <MenuItem value="irrigation">
                      Irrigation
                    </MenuItem>

                    <MenuItem value="other">
                      Other
                    </MenuItem>
                  </StyledSelect>
                </FormField>

                <FormField>
                  <label htmlFor="message">
                    Your Message
                  </label>

                  <StyledTextarea
                    id="message"
                    name="message"
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={
                      handleInputChange
                    }
                    minRows={4}
                  />
                </FormField>

                <FormActions>
                  <SubmitButton
                    type="submit"
                    startIcon={
                      <SendIcon />
                    }
                  >
                    Submit Inquiry
                  </SubmitButton>

                  <ResetButton
                    type="reset"
                    onClick={handleReset}
                  >
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
}