import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    Drawer,
    MenuItem,
    Paper,
    Select,
    Stack,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  
  import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
  import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
  import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
  import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
  import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
  import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
  import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
  
  interface Props {
    open: boolean;
    mode: "view" | "edit";
    inquiry: any;
    onClose: () => void;
    onSave: (status: string) => void;
  }
  
  export default function InquiryDrawer({
    open,
    mode,
    inquiry,
    onClose,
    onSave,
  }: Props) {
    const [status, setStatus] = useState("");
  
    useEffect(() => {
      if (inquiry) {
        setStatus(inquiry.status);
      }
    }, [inquiry]);
  
    if (!inquiry) return null;
  
    const getChipColor = () => {
      switch (status) {
        case "New":
          return "success";
        case "Contacted":
          return "warning";
        case "Completed":
          return "primary";
        case "Rejected":
          return "error";
        default:
          return "default";
      }
    };
  
    const InfoRow = ({
      icon,
      label,
      value,
    }: {
      icon: React.ReactNode;
      label: string;
      value: React.ReactNode;
    }) => (
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Box sx={{ color: "text.secondary", mt: 0.3 }}>{icon}</Box>
  
        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            {label}
          </Typography>
  
          <Typography variant="body1">{value}</Typography>
        </Box>
      </Stack>
    );
  
    return (
        <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: "100%",
                sm: 460,
              },
            },
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
  
          <Box
            sx={{
              p: 3,
              color: "white",
              background:
                "linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)",
            }}
          >
            <Stack sx={{direction:"row", spacing:2 ,alignItems:"center"}}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: "rgba(255,255,255,0.18)",
                }}
              >
                <PersonOutlinedIcon />
              </Avatar>
  
              <Box>
                <Typography variant="h5" sx={{fontWeight:700}}>
                  {inquiry.name}
                </Typography>
  
                <Typography sx={{ opacity: 0.9 }}>
                  {inquiry.inquiryId}
                </Typography>
              </Box>
            </Stack>
          </Box>
  
          {/* Content */}
  
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 3,
            }}
          >
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 700 }}
            >
              CUSTOMER INFORMATION
            </Typography>
  
            <Divider sx={{ mb: 3 }} />
  
            <InfoRow
              icon={<PhoneOutlinedIcon fontSize="small" />}
              label="Phone"
              value={inquiry.phone}
            />
  
            <InfoRow
              icon={<EmailOutlinedIcon fontSize="small" />}
              label="Email"
              value={inquiry.email}
            />
  
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 700, mt: 2 }}
            >
              INQUIRY DETAILS
            </Typography>
  
            <Divider sx={{ mb: 3 }} />
  
            <InfoRow
              icon={<LocalOfferOutlinedIcon fontSize="small" />}
              label="Interest"
              value={inquiry.interest}
            />
  
            <InfoRow
              icon={<BadgeOutlinedIcon fontSize="small" />}
              label="Inquiry ID"
              value={inquiry.inquiryId}
            />
  
            <InfoRow
              icon={<CalendarTodayOutlinedIcon fontSize="small" />}
              label="Created On"
              value={new Date(inquiry.createdAt).toLocaleDateString()}
            />
  
            <Typography
              variant="subtitle2"
              sx={{
                mb: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ChatBubbleOutlineOutlinedIcon fontSize="small" />
              Customer Message
            </Typography>
  
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                mb: 3,
                bgcolor: "#fafafa",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.7,
                }}
              >
                {inquiry.message || "No message provided."}
              </Typography>
            </Paper>
  
            <Typography
              variant="subtitle2"
              sx={{ mb: 1 }}
            >
              Status
            </Typography>
  
            {mode === "view" ? (
              <Chip
                label={status}
                color={getChipColor()}
              />
            ) : (
              <Select
                fullWidth
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="Contacted">Contacted</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
              </Select>
            )}
          </Box>
  
          {/* Footer */}
  
          <Box
            sx={{
              p: 2,
              borderTop: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            {mode === "view" ? (
              <Button
                fullWidth
                variant="contained"
                onClick={onClose}
              >
                Close
              </Button>
            ) : (
              <Stack direction="row" spacing={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={onClose}
                >
                  Cancel
                </Button>
  
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => onSave(status)}
                >
                  Save Changes
                </Button>
              </Stack>
            )}
          </Box>
        </Box>
      </Drawer>
    );
  }