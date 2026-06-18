import React from "react";
import { Container } from "@mui/material";
import {
  MapSection,
  MapContainer,
  MapPlaceholder,
  MapPlaceholderIcon,
  MapPlaceholderText,
  OfficeInfo,
  OfficeTitle,
  OfficeAddress,
  DirectionsLink,
} from "../../../styles/user/contact/ContactMapSection.styles";
import {
  Map as MapIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

const ContactMapSection: React.FC = () => {
  return (
    <MapSection>
      <Container maxWidth="xl">
        <MapContainer>
          <MapPlaceholder>
            <MapPlaceholderIcon>
              <MapIcon />
            </MapPlaceholderIcon>
            <MapPlaceholderText variant="body2">
              Map Integration
            </MapPlaceholderText>
          </MapPlaceholder>
          <OfficeInfo>
            <OfficeTitle variant="h6">Visit Our Office</OfficeTitle>
            <OfficeAddress variant="body1">
              123 Agri-Tech Boulevard,
              <br />
              Innovation District,
              <br />
              New Delhi, 110001, India
            </OfficeAddress>
            <DirectionsLink href="#">
              Get Directions
              <ArrowForwardIcon sx={{ fontSize: 16, ml: 1 }} />
            </DirectionsLink>
          </OfficeInfo>
        </MapContainer>
      </Container>
    </MapSection>
  );
};

export default ContactMapSection;
