import { Box, Typography } from "@mui/material";
import useAdminAuth from "@/hooks/useAdminAuth";

export default function DashboardPage() {
  const loading = useAdminAuth();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Admin Dashboard</Typography>

      <Typography>Welcome Admin 🎉</Typography>
    </Box>
  );
}
