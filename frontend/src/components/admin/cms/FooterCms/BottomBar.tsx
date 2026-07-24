import {
    Card,
    CardContent,
    TextField,
    Typography,
    Box,
  } from "@mui/material";
  
  import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
  
  import { BottomBarType } from "./types";
  
  interface Props {
    bottomBar: BottomBarType;
    setBottomBar: React.Dispatch<
      React.SetStateAction<BottomBarType>
    >;
  }
  
  export default function BottomBar({
    bottomBar,
    setBottomBar,
  }: Props) {
    const handleChange = (
      field: keyof BottomBarType,
      value: string
    ) => {
      setBottomBar({
        ...bottomBar,
        [field]: value,
      });
    };
  
    return (
      <Card sx={{ mt: 3, borderRadius: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              mb: 3,
            }}
          >
            <HorizontalRuleOutlinedIcon color="primary" />
  
            <Typography
            sx={{
              variant:"h6",
              fontWeight:700,
            }}
            >
              Footer Bottom Bar
            </Typography>
          </Box>
  
          <TextField
            fullWidth
            label="Left Text"
            sx={{ mb: 3 }}
            value={bottomBar.leftText}
            onChange={(e) =>
              handleChange(
                "leftText",
                e.target.value
              )
            }
          />
  
          <TextField
            fullWidth
            label="Right Text"
            value={bottomBar.rightText}
            onChange={(e) =>
              handleChange(
                "rightText",
                e.target.value
              )
            }
          />
        </CardContent>
      </Card>
    );
  }