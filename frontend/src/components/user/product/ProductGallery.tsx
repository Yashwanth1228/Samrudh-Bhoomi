import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { ZoomIn as ZoomInIcon } from "@mui/icons-material";
import {
  GalleryContainer,
  MainImageWrapper,
  MainImage,
  ZoomButton,
  ThumbnailsContainer,
  ThumbnailButton,
  ThumbnailImage,
} from "../../../styles/user/product/ProductGallery.styles";

interface ProductGalleryProps {
  images: {
    url: string;
    publicId: string;
  }[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <GalleryContainer>
      <MainImageWrapper>
        <MainImage src={images[selectedImage]?.url} alt="Product" />
        {/* <ZoomButton>
          <ZoomInIcon />
        </ZoomButton> */}
      </MainImageWrapper>
      <ThumbnailsContainer>
        {images.map((image, index) => (
          <ThumbnailButton
            key={index}
            active={selectedImage === index}
            onClick={() => setSelectedImage(index)}
          >
            <ThumbnailImage
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
            />{" "}
          </ThumbnailButton>
        ))}
      </ThumbnailsContainer>
    </GalleryContainer>
  );
};

export default ProductGallery;
