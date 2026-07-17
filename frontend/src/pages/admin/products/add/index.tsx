import { useState, useRef } from "react";
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
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const [featureInput, setFeatureInput] = useState("");

  const [usageInput, setUsageInput] = useState("");

  const [specificationLabel, setSpecificationLabel] = useState("");
  const [specificationValue, setSpecificationValue] = useState("");

  const [uploadImage] = useUploadimageMutation();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const [benefitInput, setBenefitInput] = useState("");

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

    benefits: [] as {
      icon: string;
      title: string;
      text: string;
    }[],
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) return;

    const fileArray = Array.from(files);

    setSelectedFiles((prev) => [...prev, ...fileArray]);

    const previews = fileArray.map((file) => URL.createObjectURL(file));

    setImagePreviews((prev) => [...prev, ...previews]);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const removeImage = (index: number) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);

    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const addBenefit = () => {
    if (!benefitInput.trim()) return;

    setProductData((prev) => ({
      ...prev,
      benefits: [
        ...prev.benefits,
        {
          icon: "",
          title: benefitInput,
          text: benefitInput,
        },
      ],
    }));

    setBenefitInput("");
  };

  const removeBenefit = (index: number) => {
    setProductData((prev) => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index),
    }));
  };

  const addUsageInstruction = () => {
    if (!usageInput.trim()) return;

    setProductData({
      ...productData,
      usageInstructions: [...productData.usageInstructions, usageInput],
    });

    setUsageInput("");
  };

  const removeUsageInstruction = (index: number) => {
    const updated = [...productData.usageInstructions];

    updated.splice(index, 1);

    setProductData({
      ...productData,
      usageInstructions: updated,
    });
  };

  const addFeature = () => {
    if (!featureInput.trim()) return;

    setProductData((prev) => ({
      ...prev,
      features: [...prev.features, featureInput],
    }));

    setFeatureInput("");
  };

  const removeFeature = (index: number) => {
    setProductData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const addSpecification = () => {
    if (!specificationLabel.trim() || !specificationValue.trim()) return;

    setProductData((prev) => ({
      ...prev,
      specifications: [
        ...prev.specifications,
        {
          label: specificationLabel,
          value: specificationValue,
        },
      ],
    }));

    setSpecificationLabel("");
    setSpecificationValue("");
  };

  const removeSpecification = (index: number) => {
    setProductData((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index),
    }));
  };

  const handleSaveProduct = async () => {
    try {
      let uploadedImages: string[] = [];

      if (selectedFiles.length > 0) {
        const formData = new FormData();

        selectedFiles.forEach((file) => {
          formData.append("images", file);
        });

        const uploadResponse = await uploadImage({
          module: "products",
          type: "images",
          data: formData,
        }).unwrap();

        uploadedImages = uploadResponse.imageUrls.map(
          (image: any) => image.url,
        );
      }

      await createProduct({
        ...productData,
        images: uploadedImages,

        price: Number(productData.price),
        originalPrice: Number(productData.originalPrice),
        taxRate: Number(productData.taxRate),
      }).unwrap();

      alert("Product created successfully!");

      router.push("/admin/products");
    } catch (error) {
      console.error(error);
      alert("Failed to create product");
    }
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

            <MenuItem value="Organic Products">Organic Products</MenuItem>

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
          <StyledTextField
            fullWidth
            placeholder="Enter benefit..."
            value={benefitInput}
            onChange={(e) => setBenefitInput(e.target.value)}
          />

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={addBenefit}
          >
            Add
          </Button>
        </AddBenefitSection>

        <BenefitContainer>
          {productData.benefits.map((benefit, index) => (
            <BenefitItem key={index}>
              <Typography>{benefit.title}</Typography>

              <IconButton color="error" onClick={() => removeBenefit(index)}>
                <DeleteOutlineIcon />
              </IconButton>
            </BenefitItem>
          ))}
        </BenefitContainer>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <SectionTitle>Product Media</SectionTitle>
        </SectionHeader>

        <Box
          onClick={() => fileInputRef.current?.click()}
          sx={{
            border: "2px dashed #d1d5db",
            borderRadius: "12px",
            p: 6,
            textAlign: "center",
            cursor: "pointer",
            background: "#fafafa",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 3,
            }}
          >
            {imagePreviews.map((image, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={image}
                  alt=""
                  style={{
                    width: 120,
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />

                <IconButton
                  color="error"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    background: "#fff",
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent Box click
                    removeImage(index);
                  }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
          <input
            ref={fileInputRef}
            hidden
            multiple
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
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

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
          }}
        >
          <StyledTextField
            fullWidth
            placeholder="Enter usage instruction..."
            value={usageInput}
            onChange={(e) => setUsageInput(e.target.value)}
          />

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={addUsageInstruction}
          >
            Add
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {productData.usageInstructions.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                border: "1px solid #e5e7eb",
                borderRadius: 2,
              }}
            >
              <Typography>{item}</Typography>

              <IconButton
                color="error"
                onClick={() => removeUsageInstruction(index)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
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
              alignItems: "center",
              width: "100%",
            }}
          >
            <SectionTitle>Specifications</SectionTitle>

            <Button
              startIcon={<AddIcon />}
              onClick={addSpecification}
              variant="contained"
            >
              Add Row
            </Button>
          </Box>
        </SectionHeader>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
          }}
        >
          <StyledTextField
            label="Key"
            value={specificationLabel}
            onChange={(e) => setSpecificationLabel(e.target.value)}
            fullWidth
          />

          <StyledTextField
            label="Value"
            value={specificationValue}
            onChange={(e) => setSpecificationValue(e.target.value)}
            fullWidth
          />
        </Box>

        {productData.specifications.map((spec, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              mb: 2,
            }}
          >
            <StyledTextField value={spec.label} fullWidth disabled />

            <StyledTextField value={spec.value} fullWidth disabled />

            <IconButton
              color="error"
              onClick={() => removeSpecification(index)}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        ))}
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

          <SaveButton
            variant="contained"
            onClick={handleSaveProduct}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Product"}
          </SaveButton>
        </FooterActions>
      </FooterContainer>
    </>
  );
}

export default index;
