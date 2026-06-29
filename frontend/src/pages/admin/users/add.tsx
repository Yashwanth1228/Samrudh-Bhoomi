// src/pages/admin/users/add.tsx
import React, { useState, useRef, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  Alert,
  Snackbar,
  Link as MuiLink,
  Breadcrumbs,
} from "@mui/material";
import {
  Person as PersonIcon,
  Lock as LockIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Info as InfoIcon,
  PersonAdd as PersonAddIcon,
  CheckCircle as CheckCircleIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  AddAPhoto as AddAPhotoIcon,
  Edit as EditIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import {
  PageContainer,
  MainContent,
  ContentWrapper,
  PageHeader,
  BreadcrumbNav,
  PageTitle,
  PageSubtitle,
  FormGrid,
  MainFormColumn,
  SidebarColumn,
  FormCard,
  CardHeader,
  CardIconWrapper,
  CardTitle,
  TwoColumnGrid,
  StyledTextField,
  StyledSelect,
  FormLabelStyled,
  HelperText,
  ProfileCard,
  ProfileImageWrapper,
  ProfileImage,
  ProfileImagePlaceholder,
  EditIconButton,
  FileInput,
  UploadText,
  UploadSubtext,
  InfoCard,
  InfoIconWrapper,
  InfoCardTitle,
  InfoCardText,
  ActionButtons,
  SubmitButton,
  CancelButton,
  StyledBreadcrumbs,
  BreadcrumbLink,
} from "../../../styles/admin/AddUser.styles";

import { useRouter } from "next/router";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: string;
  status: string;
}

const AddUserPage: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "user",
    status: "active",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null); // Preview
  const [avatarUrl, setAvatarUrl] = useState<string>(""); // Cloudinary URL
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const handleSelectChange = (name: string) => (event: any) => {
    setFormData((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Preview image immediately
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfileImage(e.target?.result as string);
    };

    reader.readAsDataURL(file);

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/upload/image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log("Uploaded URL:", data.imageUrl);

        // Save Cloudinary URL
        setAvatarUrl(data.imageUrl);
        console.log("Cloudinary URL:", data.imageUrl);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!isEditMode) {
      // ADD USER → Password is mandatory
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    } else {
      // EDIT USER → Validate only if password is entered
      if (formData.password) {
        if (formData.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        }

        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Stop if validation fails
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const url = isEditMode
        ? `http://localhost:5000/api/auth/users/${id}`
        : "http://localhost:5000/api/auth/register";

      const method = isEditMode ? "PUT" : "POST";

      console.log("Avatar being sent:", avatarUrl);

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          isActive: formData.status === "active",
          phone: formData.phone,
          avatar: avatarUrl,
        }),
      });

      console.log("Avatar being sent:", avatarUrl);

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);

        setTimeout(() => {
          router.push("/admin/users");
        }, 1200);
      } else {
        setLoading(false);
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    router.push("/admin/users");
    console.log("Cancel clicked");
  };

  const router = useRouter();
  const { id } = router.query;
  const isEditMode = Boolean(id);

  console.log("id:", id);
  console.log("isEditMode:", isEditMode);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/users/${id}`,
        );

        const data = await response.json();

        if (data.success) {
          const user = data.data;

          setFormData((prev) => ({
            ...prev,
            fullName: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            role: user.role || "user",
            status: user.isActive ? "active" : "inactive",

            // Don't prefill passwords
            password: "",
            confirmPassword: "",
          }));
          setProfileImage(user.avatar || null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <Head>
        <title>Add New User | AgriCorp ERP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageContainer>
        <MainContent>
          <ContentWrapper>
            <PageHeader>
              <BreadcrumbNav>
                <StyledBreadcrumbs
                  separator={<ChevronRightIcon sx={{ fontSize: 14 }} />}
                >
                  <BreadcrumbLink href="/admin/users">Users</BreadcrumbLink>
                  <Typography
                    color="text.primary"
                    sx={{ fontSize: 12, fontWeight: 600 }}
                  >
                    Add New User
                  </Typography>
                </StyledBreadcrumbs>
              </BreadcrumbNav>
              <PageTitle variant="h2">
                {isEditMode ? "Edit User" : "Add New User"}
              </PageTitle>
              <PageSubtitle variant="body1">
                {isEditMode
                  ? "Update user information"
                  : "Create a new user account for the system"}
              </PageSubtitle>
            </PageHeader>

            <form onSubmit={handleSubmit}>
              <FormGrid>
                <MainFormColumn>
                  {/* Basic Information Card */}
                  <FormCard>
                    <CardHeader>
                      <CardIconWrapper>
                        <PersonIcon sx={{ fontSize: 18 }} />
                      </CardIconWrapper>
                      <CardTitle variant="h3">Basic Information</CardTitle>
                    </CardHeader>
                    <TwoColumnGrid>
                      <Box sx={{ gridColumn: { xs: "span 2", md: "span 2" } }}>
                        <FormLabelStyled htmlFor="fullName">
                          Full Name <span style={{ color: "#ba1a1a" }}>*</span>
                        </FormLabelStyled>
                        <StyledTextField
                          id="fullName"
                          name="fullName"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          error={!!errors.fullName}
                          fullWidth
                        />
                        {errors.fullName && (
                          <HelperText error>{errors.fullName}</HelperText>
                        )}
                      </Box>
                      <Box>
                        <FormLabelStyled htmlFor="email">
                          Email Address{" "}
                          <span style={{ color: "#ba1a1a" }}>*</span>
                        </FormLabelStyled>
                        <StyledTextField
                          id="email"
                          name="email"
                          type="email"
                          placeholder="rahul.sharma@agricorp.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          error={!!errors.email}
                          fullWidth
                        />
                        {errors.email && (
                          <HelperText error>{errors.email}</HelperText>
                        )}
                      </Box>
                      <Box>
                        <FormLabelStyled htmlFor="phone">
                          Phone Number{" "}
                          <span style={{ color: "#ba1a1a" }}>*</span>
                        </FormLabelStyled>
                        <StyledTextField
                          id="phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          error={!!errors.phone}
                          fullWidth
                        />
                        {errors.phone && (
                          <HelperText error>{errors.phone}</HelperText>
                        )}
                      </Box>
                    </TwoColumnGrid>
                  </FormCard>

                  {/* Security Card */}
                  <FormCard>
                    <CardHeader>
                      <CardIconWrapper>
                        <LockIcon sx={{ fontSize: 18 }} />
                      </CardIconWrapper>
                      <CardTitle variant="h3">Security</CardTitle>
                    </CardHeader>
                    <TwoColumnGrid>
                      <Box>
                        <FormLabelStyled htmlFor="password">
                          Password <span style={{ color: "#ba1a1a" }}>*</span>
                        </FormLabelStyled>
                        <StyledTextField
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleInputChange}
                          error={!!errors.password}
                          fullWidth
                          slotProps={{
                            input: {
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                    edge="end"
                                    sx={{ color: "#72796e" }}
                                  >
                                    {showPassword ? (
                                      <VisibilityOffIcon />
                                    ) : (
                                      <VisibilityIcon />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            },
                          }}
                        />
                        {errors.password && (
                          <HelperText error>{errors.password}</HelperText>
                        )}
                      </Box>
                      <Box>
                        <FormLabelStyled htmlFor="confirmPassword">
                          Confirm Password{" "}
                          <span style={{ color: "#ba1a1a" }}>*</span>
                        </FormLabelStyled>
                        <StyledTextField
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          error={!!errors.confirmPassword}
                          fullWidth
                          slotProps={{
                            input: {
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowConfirmPassword(
                                        !showConfirmPassword,
                                      )
                                    }
                                    edge="end"
                                    sx={{ color: "#72796e" }}
                                  >
                                    {showConfirmPassword ? (
                                      <VisibilityOffIcon />
                                    ) : (
                                      <VisibilityIcon />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            },
                          }}
                        />
                        {errors.confirmPassword && (
                          <HelperText error>
                            {errors.confirmPassword}
                          </HelperText>
                        )}
                      </Box>
                    </TwoColumnGrid>
                  </FormCard>

                  {/* Access Control Card */}
                  <FormCard>
                    <CardHeader>
                      <CardIconWrapper>
                        <AdminPanelSettingsIcon sx={{ fontSize: 18 }} />
                      </CardIconWrapper>
                      <CardTitle variant="h3">Access Control</CardTitle>
                    </CardHeader>
                    <TwoColumnGrid>
                      <Box>
                        <FormLabelStyled htmlFor="role">Role</FormLabelStyled>
                        <StyledSelect
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleSelectChange("role")}
                          fullWidth
                        >
                          <MenuItem value="user">User</MenuItem>
                          <MenuItem value="admin">Admin</MenuItem>
                          <MenuItem value="manager">
                            Operations Manager
                          </MenuItem>
                          <MenuItem value="viewer">Read Only</MenuItem>
                        </StyledSelect>
                      </Box>
                      <Box>
                        <FormLabelStyled htmlFor="status">
                          Status
                        </FormLabelStyled>
                        <StyledSelect
                          id="status"
                          name="status"
                          value={formData.status}
                          onChange={handleSelectChange("status")}
                          fullWidth
                        >
                          <MenuItem value="active">Active</MenuItem>
                          <MenuItem value="inactive">Inactive</MenuItem>
                        </StyledSelect>
                      </Box>
                    </TwoColumnGrid>
                  </FormCard>
                </MainFormColumn>

                <SidebarColumn>
                  {/* Profile Picture Card */}
                  <ProfileCard>
                    <CardTitle
                      sx={{ textAlign: "center", width: "100%", mb: 3 }}
                    >
                      Profile Picture
                    </CardTitle>
                    <ProfileImageWrapper>
                      <ProfileImage
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {profileImage ? (
                          <img src={profileImage} alt="Profile preview" />
                        ) : (
                          <ProfileImagePlaceholder>
                            <AddAPhotoIcon
                              sx={{ fontSize: 48, color: "#72796e" }}
                            />
                          </ProfileImagePlaceholder>
                        )}
                      </ProfileImage>
                      <EditIconButton
                        size="small"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <EditIcon sx={{ fontSize: 18 }} />
                      </EditIconButton>
                    </ProfileImageWrapper>
                    <FileInput
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <UploadText variant="body1">Upload Avatar</UploadText>
                    <UploadSubtext variant="caption">
                      PNG, JPG up to 5MB
                    </UploadSubtext>
                  </ProfileCard>

                  {/* Important Note Card */}
                  <InfoCard>
                    <InfoIconWrapper>
                      <InfoIcon sx={{ fontSize: 20, color: "#154212" }} />
                    </InfoIconWrapper>
                    <Box>
                      <InfoCardTitle variant="body1">
                        Important Note
                      </InfoCardTitle>
                      <InfoCardText variant="caption">
                        The new user will receive an email invitation to
                        activate their account and complete their profile
                        details.
                      </InfoCardText>
                    </Box>
                  </InfoCard>

                  {/* Action Buttons */}
                  <ActionButtons>
                    <SubmitButton
                      type="submit"
                      fullWidth
                      startIcon={<PersonAddIcon />}
                      disabled={loading}
                    >
                      {loading
                        ? isEditMode
                          ? "Updating..."
                          : "Creating..."
                        : isEditMode
                          ? "Update User"
                          : "Create User"}
                    </SubmitButton>
                    <CancelButton fullWidth onClick={handleCancel}>
                      Cancel
                    </CancelButton>
                  </ActionButtons>
                </SidebarColumn>
              </FormGrid>
            </form>
          </ContentWrapper>
        </MainContent>
      </PageContainer>

      {/* Success Toast */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          icon={<CheckCircleIcon />}
          sx={{
            backgroundColor: "#2d5a27",
            color: "#ffffff",
            "& .MuiAlert-icon": {
              color: "#ffffff",
            },
          }}
        >
          <strong>{isEditMode ? "User Updated" : "User Created"}</strong>

          <br />

          {isEditMode
            ? "User updated successfully."
            : "The user account has been successfully created."}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddUserPage;
