import { useState } from "react";
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
  FooterContainer,
  CancelButton,
  FooterActions,
  PreviewButton,
  DraftButton,
  SaveButton,
} from "@/styles/admin/Product.styles";
import { MenuItem } from "@mui/material";

import {
  SectionCard,
  SectionHeader,
  SectionTitle,
  FormGrid,
  FullWidthField,
  StyledTextField,
} from "@/styles/admin/Product.styles";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Box, Typography } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";

import { Button, IconButton } from "@mui/material";

import {
  BenefitContainer,
  BenefitItem,
  AddBenefitSection,
} from "@/styles/admin/Product.styles";
import {
  useCreateProductMutation,
  useUploadimageMutation,
} from "@/store/api/apiSlice";

// {
//   "name": "All Natural Granular Fertilizer",
//   "category": "Fertilizers",
//   "status": "active",
//   "price": 2450,
//   "originalPrice": 2800,
//   "taxRate": 18,
//   "shortDescription": "Premium organic fertilizer",
//   "description": "Suitable for all crops",
//   "images": [
//     "image1.jpg",
//     "image2.jpg"
//   ],
//   "features": [
//     "Organic",
//     "Eco Friendly"
//   ],
//   "specifications": [
//     {
//       "label": "Weight",          sample data to send to backend
//       "value": "50 KG"
//     }
//   ],
//   "usageInstructions": [
//     "Apply 250kg per acre"
//   ]
// }

function index() {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const [uploadImage] = useUploadimageMutation();

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    status: "draft",

    price: "",
    originalPrice: "",
    taxRate: "",

    shortDescription: "",
    description: "",

    images: [] as string[],

    benefits: [] as string[],
    features: [] as string[],

    specifications: [] as {
      label: string;
      value: string;
    }[],

    usageInstructions: [] as string[],

    inventory: {
      sku: "",
      unit: "bags",
      openingStock: "",
      minThreshold: "",
    },

    seo: {
      metaTitle: "",
      metaDescription: "",
    },
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;

    if (!files) return;

    const uploadedUrls: string[] = [];
    const previewUrls: string[] = [];

    for (const file of Array.from(files)) {
      previewUrls.push(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await uploadImage({
          module: "products",
          type: "images",
          data: formData,
        }).unwrap();

        uploadedUrls.push(response.imageUrls[0].url);
      } catch (error) {
        console.error(error);
      }
    }

    setImagePreviews((prev) => [...prev, ...previewUrls]);

    setProductData((prev) => ({
      ...prev,
      images: [...prev.images, ...uploadedUrls],
    }));
  };
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
          <SectionTitle>Basic Information</SectionTitle>
        </SectionHeader>

        <FormGrid>
          <FullWidthField>
            <StyledTextField
              label="Product Name"
              placeholder="Urea 46% Granular"
              fullWidth
              value={productData.name}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  name: e.target.value,
                })
              }
            />
          </FullWidthField>

          <StyledTextField
            select
            label="Category"
            value={productData.category}
            onChange={(e) =>
              setProductData({
                ...productData,
                category: e.target.value,
              })
            }
          >
            <MenuItem value="">Select Category</MenuItem>

            <MenuItem value="Fertilizers">Fertilizers</MenuItem>

            <MenuItem value="Organic">Organic Products</MenuItem>

            <MenuItem value="Seeds">Seeds</MenuItem>

            <MenuItem value="Pesticides">Pesticides</MenuItem>
          </StyledTextField>

          <StyledTextField
            select
            label="Status"
            value={productData.status}
            onChange={(e) =>
              setProductData({
                ...productData,
                status: e.target.value,
              })
            }
          >
            <MenuItem value="draft">Draft</MenuItem>

            <MenuItem value="active">Active</MenuItem>

            <MenuItem value="inactive">Inactive</MenuItem>
          </StyledTextField>

          <StyledTextField
            label="Base Price (₹)"
            type="number"
            value={productData.price}
            onChange={(e) =>
              setProductData({
                ...productData,
                price: e.target.value,
              })
            }
          />

          <StyledTextField
            label="Original Price (₹)"
            type="number"
            value={productData.originalPrice}
            onChange={(e) =>
              setProductData({
                ...productData,
                originalPrice: e.target.value,
              })
            }
          />

          <StyledTextField
            label="Tax Rate (%)"
            type="number"
            value={productData.taxRate}
            onChange={(e) =>
              setProductData({
                ...productData,
                taxRate: e.target.value,
              })
            }
          />
        </FormGrid>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <SectionTitle>Product Overview</SectionTitle>
        </SectionHeader>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <StyledTextField
            label="Short Description"
            multiline
            rows={3}
            placeholder="Brief product description..."
            value={productData.shortDescription}
            onChange={(e) =>
              setProductData({
                ...productData,
                shortDescription: e.target.value,
              })
            }
          />

          <StyledTextField
            label="Detailed Description"
            multiline
            rows={6}
            placeholder="Complete product description..."
            value={productData.description}
            onChange={(e) =>
              setProductData({
                ...productData,
                description: e.target.value,
              })
            }
          />
        </Box>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <SectionTitle>Key Benefits</SectionTitle>
        </SectionHeader>

        <AddBenefitSection>
          <StyledTextField fullWidth placeholder="Enter benefit..." />

          <Button variant="contained" startIcon={<AddIcon />}>
            Add
          </Button>
        </AddBenefitSection>

        <BenefitContainer>
          <BenefitItem>
            <Typography>Enhances rapid vegetative growth</Typography>

            <IconButton color="error">
              <DeleteOutlineIcon />
            </IconButton>
          </BenefitItem>

          <BenefitItem>
            <Typography>Improves crop yield and quality</Typography>

            <IconButton color="error">
              <DeleteOutlineIcon />
            </IconButton>
          </BenefitItem>

          <BenefitItem>
            <Typography>Suitable for all soil types</Typography>

            <IconButton color="error">
              <DeleteOutlineIcon />
            </IconButton>
          </BenefitItem>
        </BenefitContainer>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <SectionTitle>Product Media</SectionTitle>
        </SectionHeader>

        <Box
          sx={{
            border: "2px dashed #d1d5db",
            borderRadius: "12px",
            p: 6,
            textAlign: "center",
            cursor: "pointer",
            background: "#fafafa",
          }}
        >
          <CloudUploadOutlinedIcon
            sx={{
              fontSize: 50,
              color: "#2d5a27",
            }}
          />

          <Typography
            sx={{
              mt: 2,
              fontWeight: 600,
            }}
          >
            Click to upload or drag and drop
          </Typography>

          <Typography variant="body2" color="text.secondary">
            PNG, JPG, JPEG, GIF
          </Typography>
        </Box>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <SectionTitle>Usage & Technical Instructions</SectionTitle>
        </SectionHeader>

        <StyledTextField
          multiline
          rows={6}
          placeholder="Dosage, application methods and safety precautions..."
        />
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <SectionTitle>Inventory Rules</SectionTitle>
        </SectionHeader>

        <FormGrid>
          <StyledTextField label="SKU" />

          <StyledTextField select label="Unit" defaultValue="bags">
            <MenuItem value="bags">Bags</MenuItem>

            <MenuItem value="kg">KG</MenuItem>

            <MenuItem value="tonnes">Tonnes</MenuItem>

            <MenuItem value="litres">Litres</MenuItem>
          </StyledTextField>

          <StyledTextField label="Min Threshold" type="number" />

          <StyledTextField label="Opening Stock" type="number" />
        </FormGrid>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SectionTitle>Specifications</SectionTitle>

            <Button startIcon={<AddIcon />}>Add Row</Button>
          </Box>
        </SectionHeader>

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <StyledTextField label="Key" defaultValue="Weight" />

          <StyledTextField label="Value" defaultValue="50 KG" />

          <IconButton color="error">
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <SectionTitle>Key Benefits</SectionTitle>
        </SectionHeader>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
          }}
        >
          <StyledTextField placeholder="Add benefit..." />

          <Button variant="contained" startIcon={<AddIcon />}>
            Add
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            border: "1px solid #e5e7eb",
            borderRadius: 2,
          }}
        >
          <Typography>Enhances rapid vegetative growth</Typography>

          <IconButton color="error">
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <SectionTitle>SEO & Meta</SectionTitle>
        </SectionHeader>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <StyledTextField label="URL Slug" />

          <StyledTextField label="Meta Title" />

          <StyledTextField label="Meta Description" multiline rows={4} />
        </Box>
      </SectionCard>

      <FooterContainer>
        <CancelButton>Cancel</CancelButton>

        <FooterActions>
          <PreviewButton>Preview Product</PreviewButton>

          <DraftButton variant="outlined">Save as Draft</DraftButton>

          <SaveButton variant="contained">Save Product</SaveButton>
        </FooterActions>
      </FooterContainer>
    </>
  );
}

export default index;
