import React from "react";
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

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYg0FG286yC9xdhhg5uRLrR9xW1nZ8rdU2KwOWZQxawIAl17sBDRMBz93aJsAzfVryouqjmFIoNrrgwA7HkvlFByYQwiNKzmg2bD8PzVtUZ7_H-1Od9WXiRntYJCAUestBRFWfdAvYMqSYxw7qlmtBKvZXo-EOj_lzzVhyOOIyehAysPewpuix08B9TgO1mUJ_hFw3lrT0LW5fP5ZwOONb2n8AfWYcLnYoKtSwiTU3zqbPtI_Lu8n4zv5FDcfarYpTwlW8JoCpDu3",
    alt: "Organic Granular Fertilizer bag",
    size: "large",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYg0FG286yC9xdhhg5uRLrR9xW1nZ8rdU2KwOWZQxawIAl17sBDRMBz93aJsAzfVryouqjmFIoNrrgwA7HkvlFByYQwiNKzmg2bD8PzVtUZ7_H-1Od9WXiRntYJCAUestBRFWfdAvYMqSYxw7qlmtBKvZXo-EOj_lzzVhyOOIyehAysPewpuix08B9TgO1mUJ_hFw3lrT0LW5fP5ZwOONb2n8AfWYcLnYoKtSwiTU3zqbPtI_Lu8n4zv5FDcfarYpTwlW8JoCpDu3",
    alt: "Eco-Grow organic plant protector spray",
    size: "small",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYg0FG286yC9xdhhg5uRLrR9xW1nZ8rdU2KwOWZQxawIAl17sBDRMBz93aJsAzfVryouqjmFIoNrrgwA7HkvlFByYQwiNKzmg2bD8PzVtUZ7_H-1Od9WXiRntYJCAUestBRFWfdAvYMqSYxw7qlmtBKvZXo-EOj_lzzVhyOOIyehAysPewpuix08B9TgO1mUJ_hFw3lrT0LW5fP5ZwOONb2n8AfWYcLnYoKtSwiTU3zqbPtI_Lu8n4zv5FDcfarYpTwlW8JoCpDu3",
    alt: "Close-up of crops",
    size: "small",
  },
];

const GallerySection: React.FC = () => {
  return (
    <GallerySectionContainer>
      <GalleryTitle variant="h2">Our Ecosystem in Action</GalleryTitle>
      <GalleryGrid>
        {galleryImages.map((image, index) => (
          <GalleryImageWrapper key={index} className={image.size}>
            <GalleryImage src={image.src} alt={image.alt} />
          </GalleryImageWrapper>
        ))}
        <GalleryPlaceholder>
          <GalleryPlaceholderIcon>
            <span className="material-symbols-outlined">photo_library</span>
          </GalleryPlaceholderIcon>
          <GalleryPlaceholderText variant="overline">
            View Full Gallery
          </GalleryPlaceholderText>
        </GalleryPlaceholder>
      </GalleryGrid>
    </GallerySectionContainer>
  );
};

export default GallerySection;
