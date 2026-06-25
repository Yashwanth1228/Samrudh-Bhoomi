"use client";

import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "error",
    message: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAlert({
      show: false,
      type: "error",
      message: "",
    });

    try {
      setLoading(true);
      const url = `${process.env.NEXT_PUBLIC_API_URL}`;

      const response = await fetch(url + "/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log("LOGIN RESPONSE:", data);

      if (!data.success) {
        setAlert({
          show: true,
          type: "error",
          message: data.message,
        });

        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.data.token);

      localStorage.setItem("user", JSON.stringify(data.data.user));

      setAlert({
        show: true,
        type: "success",
        message: "Authentication successful! Redirecting...",
      });

      setTimeout(() => {
        if (data.data.user.role === "admin") {
          router.push("/admin/dashboard");
        } else {
          console.log("USER ROLE:", data.data.user.role);
          router.push("/");
        }
      }, 1000);
    } catch (error) {
      setAlert({
        show: true,
        type: "error",
        message: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 520,
      }}
    >
      {/* Heading */}

      <Box
        sx={{
          mb: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#1a1c19",
            mb: 1,
          }}
        >
          Admin Login
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#5f655c",
            lineHeight: 1.6,
          }}
        >
          Welcome back. Please enter your administrator credentials to continue.
        </Typography>
      </Box>

      {/* Form */}

      <Paper
        elevation={0}
        sx={{
          background: "transparent",
        }}
      >
        <Box component="form" onSubmit={handleLogin}>
          {/* Email */}

          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                mb: 1,
                color: "#42493e",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Email Address
            </Typography>

            <TextField
              fullWidth
              placeholder="admin@samrudhbhoomi.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          {/* Password */}

          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                mb: 1,
                color: "#42493e",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Password
            </Typography>

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
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
          </Box>

          {/* Remember + Forgot */}

          {/* Button */}

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            variant="contained"
            sx={{
              height: 56,
              borderRadius: "12px",
              backgroundColor: "#2d5a27",
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              mb: 3,

              "&:hover": {
                backgroundColor: "#154212",
              },
            }}
          >
            {loading ? "Signing In..." : "Login"}
          </Button>

          {/* Alert */}

          {alert.show && (
            <Alert
              severity={alert.type}
              sx={{
                mb: 3,
              }}
            >
              {alert.message}
            </Alert>
          )}
        </Box>
      </Paper>
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#42493e" }}>
          Don't have an account?{" "}
          <Link href="/register" passHref>
            <Typography
              component="span"
              sx={{
                color: "#154212",
                fontWeight: 700,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Create Account
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
