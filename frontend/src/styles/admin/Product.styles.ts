import { styled } from "@mui/material/styles";
import { Box, Table, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TableRow } from "@mui/material";
import { TextField } from "@mui/material";


export const HeaderContainer = styled(Box)`
  margin-bottom: 32px;
`;

export const HeaderTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px; 
`;

export const HeaderSubtitle = styled(Typography)`
  font-size: 1rem;
  color: #6b7280;
`;

export const ToolbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  padding: 16px;
  margin-bottom: 24px;

  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
`;

export const FilterSection = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SearchWrapper = styled(Box)`
  position: relative;
`;

export const SearchInput = styled("input")`
  width: 260px;

  padding: 10px 16px 10px 40px;

  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  outline: none;

  transition: all 0.2s ease;

  &:focus {
    border: 2px solid #2d5a27;
  }
`;

export const SelectWrapper = styled(Box)`
  position: relative;
`;

export const FilterSelect = styled("select")`
  appearance: none;

  padding: 10px 40px 10px 16px;

  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  background: #fff;
  cursor: pointer;
  outline: none;

  transition: all 0.2s ease;

  &:focus {
    border: 2px solid #2d5a27;
  }
`;

export const AddButton = styled(Button)`
  background: #2d5a27;
  color: #fff;

  padding: 10px 20px;

  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #356c2f;
  }
`;

export const ProductTableContainer = styled(Box)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const StyledTableRow = styled(TableRow)`
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9f6;
  }
`;





export const AddHeaderContainer = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 40;

  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 32px;

  background: #ffffff;

  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
`;

export const HeaderLeft = styled(Box)`
  display: flex;
  align-items: center;
`;

export const AddHeaderTitle = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  color: #1f2937;
`;

export const HeaderRight = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Divider = styled(Box)`
  width: 1px;
  height: 24px;
  background: #d1d5db;
`;

export const HeaderIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #6b7280;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    color: #2d5a27;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const SectionCard = styled(Box)`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
`;

export const SectionHeader = styled(Box)`
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

export const FormGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FullWidthField = styled(Box)`
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const FooterContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 280px;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 32px;

  background: #ffffff;
  border-top: 1px solid #e5e7eb;

  z-index: 40;

  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.05);
`;

export const FooterActions = styled(Box)`
  display: flex;
  gap: 16px;
`;

export const CancelButton = styled(Button)`
  color: #6b7280;

  &:hover {
    color: #dc2626;
    background: transparent;
  }
`;

export const PreviewButton = styled(Button)`
  color: #2d5a27;

  &:hover {
    background: rgba(45, 90, 39, 0.08);
  }
`;

export const DraftButton = styled(Button)`
  border: 1px solid #2d5a27;
  color: #2d5a27;
  padding: 8px 24px;

  &:hover {
    background: rgba(45, 90, 39, 0.05);
  }
`;

export const SaveButton = styled(Button)`
  background: #d7ead2;
  color: #1b4332;
  padding: 8px 32px;
  font-weight: 700;

  &:hover {
    background: #c5dfbe;
  }
`;

export const BenefitContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BenefitItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;

  border: 1px solid #e5e7eb;
  border-radius: 10px;

  background: #fafafa;
`;

export const AddBenefitSection = styled(Box)`
  display: flex;
  gap: 16px;
`;

export const StyledTable = styled(Table)`
  min-width: 1000px;
  background-color: #ffffff;

  // & .MuiTableCell-head {
  //   // background-color: #eeeee9;
  //   font-family: "IBM Plex Sans", sans-serif;
  //   font-size: 12px;
  //   font-weight: 500;
  //   line-height: 16px;
  //   letter-spacing: 0.05em;
  //   text-transform: uppercase;
  //   color: #42493e;
  //   padding: 12px 16px;
  //   border-bottom: 1px solid #c2c9bb;
  // }

  & .MuiTableCell-head {
    font-family: "IBM Plex Sans", sans-serif;
    text-transform: uppercase;
    background-color: #eeeee9;

  }



  & .MuiTableCell-body {
    padding: 12px 16px;
    font-size: 14px;
    border-bottom: 1px solid rgba(194, 201, 187, 0.5);
  }

  & .MuiTableRow-root {
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(227, 227, 222, 0.5);
      // background-color: rgba(227, 227, 222, 0.3);
    }

    // &.striped {
    //   background-color: rgba(227, 227, 222, 0.5);
    //   // background-color: rgba(238, 238, 233, 0.3);
    // }
  }
`;