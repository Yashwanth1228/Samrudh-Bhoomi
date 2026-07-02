// src/styles/admin/Blog.styles.ts
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  Select,
  Button,
  TableContainer,
  Table,
  IconButton,
  Chip,
  Paper,
  Drawer,
  Dialog,
  TextareaAutosize,
} from "@mui/material";

export const PageContainer = styled(Box)`
  min-height: 100vh;
  // background-color: #fafaf4;
`;

export const MainContent = styled(Box)`
  // margin-left: 280px;
  padding-top: 0;
  min-height: 100vh;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const ContentWrapper = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
  // padding: 24px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const PageHeader = styled(Box)`
  margin-bottom: 32px;
`;

export const PageTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #1a1c19;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const PageSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #42493e;
`;

export const KPIGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const KPICard = styled(Paper)`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #c2c9bb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &.published {
    border-left: 4px solid #2d5a27;
  }

  &.drafts {
    border-left: 4px solid #cca730;
  }

  &.featured {
    border-left: 4px solid #ffbf87;
  }
`;

export const KPICardLeft = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const KPILabel = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #42493e;
  margin-bottom: 16px;
`;

export const KPIValue = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #1a1c19;
`;

export const KPIValueLarge = styled(KPIValue)`
  font-size: 48px;
`;

export const CardIcon = styled(Box)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #154212;

  & .MuiSvgIcon-root {
    font-size: 32px;
  }
`;

export const ActionBar = styled(Box)`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #c2c9bb;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ActionBarLeft = styled(Box)`
  display: flex;
  gap: 16px;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ActionBarRight = styled(Box)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchField = styled(TextField)`
  width: 300px;

  & .MuiOutlinedInput-root {
    background-color: #f4f4ee;
    border-radius: 8px;

    &:hover fieldset {
      border-color: #154212;
    }

    &.Mui-focused fieldset {
      border-color: #2d5a27;
      border-width: 2px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSelect = styled(Select)`
  min-width: 180px;
  background-color: #f4f4ee;
  border-radius: 8px;

  & .MuiOutlinedInput-notchedOutline {
    border-color: #c2c9bb;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #154212;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #2d5a27;
    border-width: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CreateButton = styled(Button)`
  background-color: #2d5a27;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 8px 24px;
  border-radius: 8px;

  &:hover {
    background-color: #23501e;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableWrapper = styled(TableContainer)`
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  overflow-x: auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  & .MuiPaper-root {
    box-shadow: none;
    border: none;
  }
`;

export const StyledTable = styled(Table)`
  min-width: 900px;
  background-color: #ffffff;

  // & .MuiTableCell-head {
  //   background-color: #eeeee9;
  //   font-family: "IBM Plex Sans", sans-serif;
  //   font-size: 12px;
  //   font-weight: 500;
  //   line-height: 16px;
  //   letter-spacing: 0.05em;
  //   text-transform: uppercase;
  //   color: #42493e;
  //   padding: 16px;
  //   border-bottom: 1px solid #c2c9bb;
  // }

  & .MuiTableCell-head {
    font-family: "IBM Plex Sans", sans-serif;
    text-transform: uppercase;
    background-color: #eeeee9;

  }

  & .MuiTableCell-body {
    padding: 16px;
    border-bottom: 1px solid #c2c9bb;
  }

  & .MuiTableRow-root:hover {
    background-color: #f4f4ee;
  }
`;

export const BlogImage = styled("img")`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid #c2c9bb;
  background-color: #e3e3de;
`;

export const BlogImagePlaceholder = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: #e3e3de;
  border: 1px dashed #c2c9bb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #72796e;

  & .MuiSvgIcon-root {
    font-size: 24px;
  }
`;

export const BlogTitle = styled(Typography)`
  font-weight: 500;
  color: #1a1c19;
`;

export const BlogCategory = styled(Typography)`
  color: #42493e;
`;

export const StatusChipPublished = styled(Chip)`
  background-color: #bcf0ae;
  color: #002201;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  height: 24px;
`;

export const StatusChipDraft = styled(Chip)`
  background-color: #e3e3de;
  color: #1a1c19;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  height: 24px;
`;

export const ActionButtons = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const ActionIconButton = styled(IconButton)`
  padding: 8px;
  color: #72796e;

  &:hover {
    background-color: #eeeee9;
    color: #154212;
  }

  & .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

export const PaginationContainer = styled(Box)`
  padding: 16px;
  border-top: 1px solid #c2c9bb;
  background-color: #fafaf4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaginationInfo = styled(Typography)`
  font-size: 14px;
  color: #42493e;
`;

export const PaginationControls = styled(Box)`
  display: flex;
  gap: 4px;
`;

export const PaginationButton = styled(Button)`
  min-width: 32px;
  height: 32px;
  padding: 0;
  font-size: 14px;
  border: 1px solid #c2c9bb;
  border-radius: 4px;
  color: #1a1c19;

  &:hover {
    background-color: #eeeee9;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const PaginationActiveButton = styled(Button)`
  min-width: 32px;
  height: 32px;
  padding: 0;
  background-color: #2d5a27;
  color: #ffffff;
  border-radius: 4px;

  &:hover {
    background-color: #23501e;
  }
`;

export const DrawerContainer = styled(Box)`
  width: 600px;
  max-width: 90vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafaf4;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DrawerHeader = styled(Box)`
  padding: 24px;
  border-bottom: 1px solid #c2c9bb;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DrawerTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #1a1c19;
`;

export const DrawerSubtitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #42493e;
  margin-top: 4px;
`;

export const DrawerCloseButton = styled(IconButton)`
  padding: 8px;
  color: #42493e;

  &:hover {
    background-color: #eeeee9;
  }
`;

export const DrawerBody = styled(Box)`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  background-color: #fafaf4;
`;

export const FormSection = styled(Box)`
  margin-bottom: 32px;
`;

export const SectionTitle = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #154212;
  border-bottom: 1px solid #c2c9bb;
  padding-bottom: 8px;
  margin-bottom: 16px;
  display: block;
`;

export const FormField = styled(Box)`
  margin-bottom: 16px;
`;

export const FormLabel = styled(Typography)`
  display: block;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #1a1c19;
  margin-bottom: 8px;
`;

export const FormInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: #fafaf4;
    border-radius: 6px;

    &:hover fieldset {
      border-color: #154212;
    }

    &.Mui-focused fieldset {
      border-color: #2d5a27;
      border-width: 2px;
    }
  }
`;

export const FormRow = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 12px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  border: 1px solid #c2c9bb;
  border-radius: 6px;
  background-color: #fafaf4;

  &:focus {
    outline: none;
    border-color: #2d5a27;
    border-width: 2px;
  }
`;

export const ToolbarContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background-color: #f4f4ee;
  border: 1px solid #c2c9bb;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
`;

export const ToolbarButton = styled(IconButton)`
  padding: 6px;
  color: #42493e;

  &:hover {
    background-color: #e3e3de;
  }
`;

export const DividerLine = styled(Box)`
  width: 1px;
  height: 20px;
  background-color: #c2c9bb;
  margin: 0 4px;
`;

export const ImageUploadArea = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  border: 1px dashed #c2c9bb;
  border-radius: 8px;
  background-color: #fafaf4;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f4f4ee;
    border-color: #154212;
  }
`;

export const UploadIcon = styled(Box)`
  color: #72796e;
  margin-bottom: 16px;

  & .MuiSvgIcon-root {
    font-size: 48px;
  }
`;

export const UploadText = styled(Typography)`
  color: #42493e;
  margin-bottom: 8px;

  & span {
    color: #154212;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const UploadSubtext = styled(Typography)`
  color: #72796e;
`;

export const PublishRow = styled(Box)`
  margin-top: 8px;
`;

export const DrawerFooter = styled(Box)`
  padding: 16px 24px;
  border-top: 1px solid #c2c9bb;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PreviewButton = styled(Button)`
  color: #154212;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const FooterButtons = styled(Box)`
  display: flex;
  gap: 12px;
`;

export const CancelButton = styled(Button)`
  padding: 8px 24px;
  border: 1px solid #c2c9bb;
  border-radius: 8px;
  color: #1a1c19;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const SaveButton = styled(Button)`
  padding: 8px 24px;
  background-color: #2d5a27;
  color: #ffffff;
  border-radius: 8px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &:hover {
    background-color: #23501e;
  }
`;

export const ModalContainer = styled(Dialog)``;

export const ModalContent = styled(Box)`
  background-color: #fafaf4;
  border-radius: 12px;
  width: 100%;
  max-width: 896px;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
`;

export const ModalHeader = styled(Box)`
  padding: 16px 24px;
  border-bottom: 1px solid #c2c9bb;
  background-color: #ffffff;
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #154212;

  & span {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ModalCloseButton = styled(IconButton)`
  color: #42493e;

  &:hover {
    background-color: #f4f4ee;
  }
`;

export const ModalBody = styled(Box)`
  padding: 32px;
  overflow-y: auto;
  flex: 1;
  background-color: #ffffff;
  border-radius: 0 0 12px 12px;
`;

export const PreviewCategory = styled(Typography)`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #154212;
  display: block;
  margin-bottom: 16px;
`;

export const PreviewTitle = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #1a1c19;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const PreviewImagePlaceholder = styled(Box)`
  width: 100%;
  height: 256px;
  background-color: #e3e3de;
  border-radius: 8px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #72796e;
  border: 1px solid #c2c9bb;

  & .MuiSvgIcon-root {
    font-size: 48px;
  }
`;

export const PreviewContent = styled(Box)`
  & p {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #42493e;
    margin-bottom: 16px;
  }
`;

//loading styling styles 

export const CenterBox = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusCard = styled.div`
  padding: 30px 40px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  min-width: 280px;
`;

export const StatusTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const StatusText = styled.p`
  color: #6b7280;
  font-size: 14px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 15px;
  border: 4px solid rgba(21,66,18,0.1);
  border-top: 4px solid #154212;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
