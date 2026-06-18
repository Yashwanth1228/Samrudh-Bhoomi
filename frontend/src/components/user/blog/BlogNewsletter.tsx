import React, { useState } from "react";
import { Box, Typography, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

import { NewsletterContainer, NewsletterForm } from "@/styles/user/blog/BlogNewsletter.styles";

export const BlogNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Add API call here
      console.log("Subscribed with email:", email);
    }
  };

  return (
    <NewsletterContainer>
      <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 1,
          }}
        >
          <MailIcon sx={{ color: "primary.main" }} />
          Stay Updated with Agricultural Insights
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Join our community of forward-thinking farmers and industry professionals. Get the latest research, tips, and product updates delivered straight to your inbox.
        </Typography>
      </Box>

      <Box sx={{ width: { xs: "100%", md: "50%" }, maxWidth: { xs: "100%", md: "400px" } }}>
        {subscribed ? (
          <Box sx={{ p: 2, bgcolor: "success.light", borderRadius: "8px", color: "success.contrastText" }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              ✓ Successfully subscribed! Check your inbox for updates.
            </Typography>
          </Box>
        ) : (
          <NewsletterForm onSubmit={handleSubmit}>
            <TextField
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="small"
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  bgcolor: "background.paper",
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                px: 4,
                py: 1.5,
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </Button>
          </NewsletterForm>
        )}
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1.5, display: "block", textAlign: "center" }}>
          By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
        </Typography>
      </Box>
    </NewsletterContainer>
  );
};