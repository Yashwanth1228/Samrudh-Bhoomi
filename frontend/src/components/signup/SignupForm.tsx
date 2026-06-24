import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Alert,
  LinearProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Agriculture as AgricultureIcon,
  Compost as CompostIcon,
  Grass as GrassIcon,
  Shield as ShieldIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import {
  SignupContainer,
  LeftSection,
  LeftContent,
  BrandTitle,
  BrandSubtitle,
  CommitmentTitle,
  CommitmentList,
  CommitmentItem,
  CommitmentIcon,
  CommitmentText,
  CommitmentLabel,
  RightSection,
  FormContainer,
  FormHeader,
  FormTitle,
  FormSubtitle,
  StyledForm,
  FormField,
  StyledTextField,
  PasswordStrengthBar,
  StrengthText,
  SubmitButton,
  SuccessAlert,
  SecondaryAction,
} from "../../styles/signup/SignupForm.styles";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validatePassword = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
    return strength;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, password: value }));
    validatePassword(value);
    if (formData.confirmPassword) {
      setPasswordMatch(value === formData.confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, confirmPassword: value }));
    setPasswordMatch(value === formData.password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }, 1800);
  };

  const getStrengthColor = () => {
    const colors = ["#ba1a1a", "#ffbf87", "#cca730", "#2d5a27"];
    return passwordStrength > 0 ? colors[passwordStrength - 1] : "transparent";
  };

  const getStrengthLabel = () => {
    const labels = ["Weak", "Fair", "Good", "Strong"];
    return passwordStrength > 0
      ? `Strength: ${labels[passwordStrength - 1]}`
      : "Password strength";
  };

  const getStrengthTextColor = () => {
    return passwordStrength === 4 ? "#154212" : "#42493e";
  };

  const commitmentItems = [
    {
      icon: <AgricultureIcon />,
      title: "Premium Agricultural Products",
      label: "Top-Tier Quality Control",
    },
    {
      icon: <CompostIcon />,
      title: "Quality Fertilizers",
      label: "Engineered for Yield",
    },
    {
      icon: <GrassIcon />,
      title: "Organic Solutions",
      label: "Environmentally Conscious",
    },
    {
      icon: <ShieldIcon />,
      title: "Seeds & Crop Protection",
      label: "Future-Proof Resilience",
    },
  ];

  return (
    <SignupContainer>
      {/* Left Section - Brand Visual */}
      <LeftSection>
        <LeftContent>
          <Box sx={{ mb: 12 }}>
            <BrandTitle variant="h4">Samrudh Bhoomi</BrandTitle>
            <BrandSubtitle variant="h6">
              Sustaining Earth, Empowering Farmers.
            </BrandSubtitle>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <CommitmentTitle variant="h5">Our Commitment</CommitmentTitle>
            <CommitmentList>
              {commitmentItems.map((item, index) => (
                <CommitmentItem key={index}>
                  <CommitmentIcon>{item.icon}</CommitmentIcon>
                  <CommitmentText>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <CommitmentLabel variant="caption">
                      {item.label}
                    </CommitmentLabel>
                  </CommitmentText>
                </CommitmentItem>
              ))}
            </CommitmentList>
          </Box>
        </LeftContent>
      </LeftSection>

      {/* Right Section - Signup Form */}
      <RightSection>
        <FormContainer>
          <FormHeader>
            <FormTitle variant="h4">Create Account</FormTitle>
            <FormSubtitle variant="body1">
              Create your account to access products, inquiries, brochure
              downloads, and future services.
            </FormSubtitle>
          </FormHeader>

          {isSuccess ? (
            <SuccessAlert icon={<CheckCircleIcon />} severity="success">
              Account created successfully! Redirecting...
            </SuccessAlert>
          ) : (
            <StyledForm onSubmit={handleSubmit}>
              <FormField>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "IBM Plex Sans",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "#42493e",
                  }}
                >
                  Full Name
                </Typography>
                <StyledTextField
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </FormField>

              <FormField>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "IBM Plex Sans",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "#42493e",
                  }}
                >
                  Email Address
                </Typography>
                <StyledTextField
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </FormField>

              <FormField>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "IBM Plex Sans",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "#42493e",
                  }}
                >
                  Password
                </Typography>
                <StyledTextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handlePasswordChange}
                  required
                  fullWidth
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
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
                <PasswordStrengthBar>
                  <Box
                    sx={{
                      height: "100%",
                      width: `${(passwordStrength / 4) * 100}%`,
                      backgroundColor: getStrengthColor(),
                      transition: "all 0.3s",
                      borderRadius: "9999px",
                    }}
                  />
                </PasswordStrengthBar>
                <StrengthText color={getStrengthTextColor()}>
                  {getStrengthLabel()}
                </StrengthText>
              </FormField>

              <FormField>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "IBM Plex Sans",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "#42493e",
                  }}
                >
                  Confirm Password
                </Typography>
                <StyledTextField
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat password"
                  value={formData.confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  fullWidth
                  error={!passwordMatch && !!formData.confirmPassword}
                  helperText={
                    !passwordMatch && formData.confirmPassword
                      ? "Passwords do not match"
                      : ""
                  }
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            edge="end"
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
              </FormField>

              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                    sx={{
                      color: "#c2c9bb",
                      "&.Mui-checked": { color: "#154212" },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: "#42493e" }}>
                    I agree to the{" "}
                    <Link href="#" sx={{ color: "#154212", fontWeight: 700 }}>
                      Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="#" sx={{ color: "#154212", fontWeight: 700 }}>
                      Privacy Policy
                    </Link>
                    .
                  </Typography>
                }
              />

              <SubmitButton type="submit" disabled={isSubmitting} fullWidth>
                {isSubmitting ? (
                  <>
                    <Box
                      sx={{
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTop: "2px solid #ffffff",
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
                        animation: "spin 0.8s linear infinite",
                        "@keyframes spin": {
                          "0%": { transform: "rotate(0deg)" },
                          "100%": { transform: "rotate(360deg)" },
                        },
                      }}
                    />
                    <span>Processing...</span>
                  </>
                ) : (
                  "Create Account"
                )}
              </SubmitButton>

              <SecondaryAction variant="body2">
                Already have an account?{" "}
                <Link href="/login" sx={{ color: "#154212", fontWeight: 700 }}>
                  Sign In
                </Link>
              </SecondaryAction>
            </StyledForm>
          )}
        </FormContainer>
      </RightSection>
    </SignupContainer>
  );
};

export default SignupForm;
