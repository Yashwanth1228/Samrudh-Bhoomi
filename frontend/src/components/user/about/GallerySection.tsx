import React, { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";

import {
  GallerySectionContainer,
  GalleryTitle,
  GalleryGrid,
  GalleryImageWrapper,
  GalleryImage,
  GalleryPlaceholder,
  GalleryPlaceholderIcon,
  GalleryPlaceholderText,
} from "../../../styles/user/about/GallerySection.styles";

import { EcosystemType } from "./aboutCms";

interface Props {
  ecosystem?: EcosystemType;
}

const defaultImages = [
  {
    url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
  },
  {
    url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
];

export default function GallerySection({
  ecosystem,
}: Props) {
  const [open, setOpen] = useState(false);

  const images = useMemo(() => {
    if (
      ecosystem?.images &&
      ecosystem.images.length > 0
    ) {
      return ecosystem.images;
    }

    return defaultImages.map((img) => ({
      url: img.url,
      publicId: "",
    }));
  }, [ecosystem]);

  const previewImages = images.slice(0, 3);

  return (
    <>
      <GallerySectionContainer>
        <GalleryTitle variant="h2">
          {ecosystem?.title ||
            "Our Ecosystem in Action"}
        </GalleryTitle>

        <GalleryGrid>
          {previewImages.map(
            (image, index) => (
              <GalleryImageWrapper
                key={index}
                className={
                  index === 0
                    ? "large"
                    : "small"
                }
              >
                <GalleryImage
                  src={image.url}
                  alt={`Gallery ${index + 1}`}
                />
              </GalleryImageWrapper>
            )
          )}

          {images.length > 3 && (
            <GalleryPlaceholder
              onClick={() => setOpen(true)}
              sx={{
                cursor: "pointer",
              }}
            >
              <GalleryPlaceholderIcon>
                <PhotoLibraryOutlinedIcon
                  fontSize="large"
                />
              </GalleryPlaceholderIcon>

              <GalleryPlaceholderText variant="overline">
                View All ({images.length})
              </GalleryPlaceholderText>
            </GalleryPlaceholder>
          )}
        </GalleryGrid>
      </GallerySectionContainer>

      {/* Gallery Dialog */}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            px: 3,
            py: 2,
            borderBottom:
              "1px solid #e5e5e5",
          }}
        >
          <Typography
          sx={{
            variant:"h6",
            fontWeight:700,
          }}
          >
            Our Gallery
          </Typography>

          <IconButton
            onClick={() =>
              setOpen(false)
            }
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill,minmax(250px,1fr))",
              gap: 2,
            }}
          >
            {images.map(
              (image, index) => (
                <Box
                  key={index}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 3,
                  }}
                >
                  <img
                    src={image.url}
                    alt={`Gallery ${index}`}
                    style={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              )
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}