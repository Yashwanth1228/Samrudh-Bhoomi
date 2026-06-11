import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlined";
import {
    AddHeaderContainer,
    HeaderLeft,
    AddHeaderTitle,
    HeaderRight,
    Divider,
    HeaderIcon,
  } from "@/styles/admin/Product.styles";
  import {
    MenuItem,
  } from "@mui/material";

  import {
    SectionCard,
    SectionHeader,
    SectionTitle,
    FormGrid,
    FullWidthField,
    StyledTextField,
  } from "@/styles/admin/Product.styles";



function index() {
    return (
        <>
        <AddHeaderContainer>
        <HeaderLeft>
          <AddHeaderTitle>Add Product</AddHeaderTitle>
        </HeaderLeft>
  
        <HeaderRight>
          <HeaderIcon>
            <SearchIcon />
          </HeaderIcon>
  
          <Divider />
  
          <HeaderIcon>
            <NotificationsNoneIcon />
          </HeaderIcon>
  
          <HeaderIcon>
            <HelpOutlineIcon />
          </HeaderIcon>
        </HeaderRight>
      </AddHeaderContainer>

<SectionCard>
<SectionHeader>
  <SectionTitle>
    Basic Information
  </SectionTitle>
</SectionHeader>

<FormGrid>

  <FullWidthField>
    <StyledTextField
      label="Product Name"
      placeholder="Urea 46% Granular"
      fullWidth
    />
  </FullWidthField>

  <StyledTextField
    select
    label="Category"
    defaultValue=""
  >
    <MenuItem value="">
      Select Category
    </MenuItem>

    <MenuItem value="fertilizers">
      Fertilizers
    </MenuItem>

    <MenuItem value="organic">
      Organic Products
    </MenuItem>

    <MenuItem value="seeds">
      Seeds
    </MenuItem>

    <MenuItem value="pesticides">
      Pesticides
    </MenuItem>
  </StyledTextField>

  <StyledTextField
    select
    label="Status"
    defaultValue="draft"
  >
    <MenuItem value="draft">
      Draft
    </MenuItem>

    <MenuItem value="active">
      Active
    </MenuItem>

    <MenuItem value="inactive">
      Inactive
    </MenuItem>
  </StyledTextField>

  <StyledTextField
    label="Base Price (₹)"
    type="number"
  />

  <StyledTextField
    label="Tax Rate (%)"
    type="number"
  />

</FormGrid>
</SectionCard>
        </>
    )
}

export default index
