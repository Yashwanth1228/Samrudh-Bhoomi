import React from "react";
import { Container, Box } from "@mui/material";
import {
  AboutSectionContainer,
  AboutGrid,
  AboutImageWrapper,
  AboutImage,
  AboutContent,
  AboutBadge,
  AboutTitle,
  AboutText,
  AboutButton,
} from "../../../styles/user/home/AboutSection.styles";
import { Grass as GrassIcon } from "@mui/icons-material";

interface AboutProps {
  about?: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
}

export default function AboutSection({
  about,
}: AboutProps) {
  return (
    <AboutSectionContainer>
      <Container maxWidth="xl">
        <AboutGrid>
          {/* Left Image */}
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <AboutImageWrapper>
              <AboutImage
                src={
                  about?.image?.url ||
                  "/about-image.jpg"
                }
                alt={about?.title || "About Samrudh Bhoomi"}
              />
            </AboutImageWrapper>
          </Box>

          {/* Right Content */}
          <Box sx={{ order: { xs: 1, md: 2 } }}>
            <AboutContent>
              <AboutBadge>
                <GrassIcon sx={{ fontSize: 16 }} />
                About Samrudh Bhoomi
              </AboutBadge>

              <AboutTitle variant="h2">
                {about?.title ||
                  "Rooted in Quality, Growing with Trust"}
              </AboutTitle>

              <AboutText variant="body1">
                {about?.description ||
                  "Since our inception, Samrudh Bhoomi Private Limited has been at the forefront of agricultural innovation. We believe in providing solutions that not only increase yield but preserve the integrity of the soil for generations to come."}
              </AboutText>

              <AboutButton variant="outlined">
                Learn More About Us
              </AboutButton>
            </AboutContent>
          </Box>
        </AboutGrid>
      </Container>
    </AboutSectionContainer>
  );
}