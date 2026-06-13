import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";

export const CmsHeaderContainer = styled(Box)`
  margin-bottom: 32px;
`;

export const CmsHeaderContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CmsTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 700;
  color: #2d5a27;
  margin-bottom: 8px;
`;

export const CmsSubtitle = styled(Typography)`
  font-size: 16px;
  color: #6b7280;
  max-width: 700px;
  line-height: 1.7;
`;

export const PublishButton = styled(Button)`
  background: #2d5a27;
  color: white;
  padding: 10px 24px;
  border-radius: 10px;
  font-weight: 700;
  text-transform: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);

  &:hover {
    background: #3d6d37;
  }
`;

export const CmsTabsContainer = styled(Box)`
  display: flex;
  gap: 32px;

  overflow-x: auto;
  white-space: nowrap;

  margin-bottom: 32px;

  border-bottom: 1px solid #d1d5db;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CmsTabButton = styled(Button)<{
  active?: boolean;
}>`
  padding: 0 4px 12px;

  border-radius: 0;

  text-transform: none;
  font-size: 15px;
  font-weight: 500;

  color: ${(props) => (props.active ? "#2d5a27" : "#6b7280")};

  border-bottom: ${(props) =>
    props.active ? "3px solid #2d5a27" : "3px solid transparent"};

  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: #2d5a27;
  }
`;

export const CmsCard = styled(Paper)`
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
`;

export const CardHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
`;

export const UploadBox = styled(Box)`
  height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border: 2px dashed #d1d5db;
  border-radius: 12px;

  cursor: pointer;

  background: #fafafa;

  transition: 0.3s;

  &:hover {
    background: #f3f4f6;
  }
`;

export const StatBox = styled(Box)`
  padding: 16px;

  border-radius: 12px;

  border: 1px solid #e5e7eb;

  background: #fafaf7;
`;

export const FeatureBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;

  border-radius: 12px;

  border: 1px solid #e5e7eb;

  background: #fafafa;
`;

export const FeatureIconBox = styled(Box)`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  background: #dcefd6;

  color: #2d5a27;
`;

export const GalleryImage = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    aspectRatio: "1",
    overflow: "hidden",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
  
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.3s ease",
    },
  
    "&:hover img": {
      transform: "scale(1.05)",
    },
  
    "&:hover .overlay": {
      opacity: 1,
    },
  }));
  
  export const GalleryOverlay = styled(Box)({
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  
    opacity: 0,
    transition: "opacity 0.3s ease",
  
    "& .MuiIconButton-root": {
      backgroundColor: "rgba(255,255,255,0.9)",
      color: "#374151",
  
      "&:hover": {
        backgroundColor: "#fff",
      },
    },
  });
  
export const CertificateCard = styled(Box)`
  padding: 20px;
  background: #fafaf7;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`;

export const AttachmentChip = styled(Box)`
  margin-top: 16px;

  width: fit-content;

  display: flex;
  align-items: center;
  gap: 6px;

  padding: 6px 10px;

  background: #dff0d8;
  color: #2d5a27;

  border-radius: 8px;

  font-size: 12px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  .MuiOutlinedInput-root {
    border-radius: 12px;
    background: #ffffff;

    &:hover fieldset {
      border-color: #2d5a27;
    }

    &.Mui-focused fieldset {
      border-color: #2d5a27;
      border-width: 2px;
    }
  }

  .MuiInputLabel-root.Mui-focused {
    color: #2d5a27;
  }
`;

export const ProductSectionCard = styled(Box)`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
`;

export const ProductSubTabs = styled(Box)`
  display: flex;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
`;

export const ProductSubTabButton = styled(Button)<{
    active?: boolean;
  }>`
    padding: 16px 32px !important;
    border-radius: 0 !important;
    text-transform: none !important;
    font-size: 15px !important;
    font-weight: ${(props) => (props.active ? 700 : 500)} !important;
  
    color: ${(props) =>
      props.active ? "#2d5a27" : "#6b7280"} !important;
  
    border-bottom: ${(props) =>
      props.active
        ? "2px solid #2d5a27"
        : "2px solid transparent"} !important;
  `;

  export const ProductSectionContent = styled(Box)`
  padding: 32px;
`;

export const PromoBannerCard = styled(Box)`
  padding: 24px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
`;

export const PromoBanner = styled(Box)`
  position: relative;
  overflow: hidden;

  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  background: #d8e8d3;
  color: #2d5a27;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }
`;

export const BlogSectionCard = styled(Box)`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
`;

export const BlogGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;


export const EditorCard = styled(Box)`
  background: #f9fafb;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
`;

export const EditorToolbar = styled(Box)`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-bottom: none;
  background: #f3f4f6;
  border-radius: 12px 12px 0 0;
`;


export const SectionCard = styled(Box)`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const SectionHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const SectionTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  color: #2d5a27;
`;






