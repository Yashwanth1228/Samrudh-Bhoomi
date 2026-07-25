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

import { OfficeSectionType } from "@/components/admin/cms/ContactCms/types";

interface Props {
  officeSection?: OfficeSectionType;
}

export default function ContactMapSection({
  officeSection,
}: Props) {
  const title =
    officeSection?.title || "Visit Our Office";

  const address = officeSection?.address;

  const embedUrl =
    officeSection?.map?.embedUrl || "";

  const locationUrl =
    officeSection?.map?.locationUrl || "#";

  return (
    <MapSection>
      <Container maxWidth="xl">
        <MapContainer>

          {embedUrl ? (
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: 16,
                minHeight: 380,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <MapPlaceholder>
              <MapPlaceholderIcon>
                <MapIcon />
              </MapPlaceholderIcon>

              <MapPlaceholderText variant="body2">
                Map Integration
              </MapPlaceholderText>
            </MapPlaceholder>
          )}

          <OfficeInfo>
            <OfficeTitle variant="h6">
              {title}
            </OfficeTitle>

            <OfficeAddress variant="body1">
              {address?.line1 || "123 Agri-Tech Boulevard"}
              <br />

              {address?.line2 && (
                <>
                  {address.line2}
                  <br />
                </>
              )}

              {address?.city || "New Delhi"}
              {address?.city && address?.state
                ? ", "
                : ""}
              {address?.state || ""}
              <br />

              {address?.country || "India"}
              {address?.pincode
                ? ` - ${address.pincode}`
                : ""}
            </OfficeAddress>

            <DirectionsLink
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions

              <ArrowForwardIcon
                sx={{
                  fontSize: 16,
                  ml: 1,
                }}
              />
            </DirectionsLink>
          </OfficeInfo>

        </MapContainer>
      </Container>
    </MapSection>
  );
}