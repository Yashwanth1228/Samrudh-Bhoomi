import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";
import {
  PictureAsPdf as PictureAsPdfIcon,
  Description as DescriptionIcon,
  VerifiedUser as VerifiedUserIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import {
  DocumentsSection,
  DocumentsTitle,
  DocumentsCard,
  DocumentItem,
  DocumentIcon,
  DocumentInfo,
  DocumentName,
  DocumentSize,
  DocumentDownload,
  Divider,
} from "../../../styles/user/product/ProductDocuments.styles";
import { Folder as FolderIcon } from "@mui/icons-material";

interface Document {
  name: string;
  size: string;
  icon: string;
  color: string;
}

interface ProductDocumentsProps {
  documents: Document[];
}

const ProductDocuments: React.FC<ProductDocumentsProps> = ({ documents }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "picture_as_pdf":
        return <PictureAsPdfIcon />;
      case "description":
        return <DescriptionIcon />;
      case "verified_user":
        return <VerifiedUserIcon />;
      default:
        return <DescriptionIcon />;
    }
  };

  return (
    <DocumentsSection>
      <DocumentsTitle variant="h6">
        <FolderIcon sx={{ color: "#2d5a27", mr: 1 }} />
        Product Documents
      </DocumentsTitle>
      <DocumentsCard>
        {documents.map((doc, index) => (
          <React.Fragment key={index}>
            <DocumentItem href="#">
              <DocumentIcon color={doc.color}>{getIcon(doc.icon)}</DocumentIcon>
              <DocumentInfo>
                <DocumentName variant="body1">{doc.name}</DocumentName>
                <DocumentSize variant="body2">{doc.size}</DocumentSize>
              </DocumentInfo>
              <DocumentDownload>
                <DownloadIcon />
              </DocumentDownload>
            </DocumentItem>
            {index < documents.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </DocumentsCard>
    </DocumentsSection>
  );
};

export default ProductDocuments;
