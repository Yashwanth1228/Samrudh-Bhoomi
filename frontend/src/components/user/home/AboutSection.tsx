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

const AboutSection: React.FC = () => {
  return (
    <AboutSectionContainer>
      <Container maxWidth="xl">
        <AboutGrid>
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <AboutImageWrapper>
              <AboutImage
                src="about-image.jpg"
                alt="Close up of soil and small plant"
              />
            </AboutImageWrapper>
          </Box>
          <Box sx={{ order: { xs: 1, md: 2 } }}>
            <AboutContent>
              <AboutBadge>
                <GrassIcon sx={{ fontSize: 16 }} />
                About Samrudh Bhoomi
              </AboutBadge>
              <AboutTitle variant="h2">
                Rooted in Quality, Growing with Trust
              </AboutTitle>
              <AboutText variant="body1">
                Since our inception, Samrudh Bhoomi Private Limited has been at
                the forefront of agricultural innovation. We believe in
                providing solutions that not only increase yield but preserve
                the integrity of the soil for generations to come.
              </AboutText>
              <AboutText variant="body1">
                Our commitment to sustainable practices, rigorous quality
                control, and premium inputs has made us a trusted partner for
                thousands of farmers, agribusinesses, and agricultural
                enterprises across the region.
              </AboutText>
              <AboutButton variant="outlined">Learn More About Us</AboutButton>
            </AboutContent>
          </Box>
        </AboutGrid>
      </Container>
    </AboutSectionContainer>
  );
};

export default AboutSection;
