import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    MenuItem,
    TextField,
    Typography,
  } from "@mui/material";
  
  import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
  import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
  import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
  
  import { SocialLinksType } from "./types";
  
  interface Props {
    socialLinks: SocialLinksType;
    setSocialLinks: React.Dispatch<
      React.SetStateAction<SocialLinksType>
    >;
  }
  
  const iconOptions = [
    "Facebook",
    "Instagram",
    "LinkedIn",
    "YouTube",
    "Twitter",
  ];
  
  export default function SocialLinks({
    socialLinks,
    setSocialLinks,
  }: Props) {
    const handleTitle = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setSocialLinks({
        ...socialLinks,
        title: e.target.value,
      });
    };
  
    const handleItemChange = (
      index: number,
      field: string,
      value: string
    ) => {
      const items = [...socialLinks.items];
  
      items[index] = {
        ...items[index],
        [field]: value,
      };
  
      setSocialLinks({
        ...socialLinks,
        items,
      });
    };
  
    const addItem = () => {
      setSocialLinks({
        ...socialLinks,
        items: [
          ...socialLinks.items,
          {
            platform: "",
            icon: "",
            url: "",
          },
        ],
      });
    };
  
    const removeItem = (index: number) => {
      setSocialLinks({
        ...socialLinks,
        items: socialLinks.items.filter(
          (_, i) => i !== index
        ),
      });
    };
  
    return (
      <Card sx={{ mt: 3, borderRadius: 3 }}>
        <CardContent>
  
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <ShareOutlinedIcon color="primary" />
  
              <Typography sx={{ variant:"h6", fontWeight:700}}>
                Social Links
              </Typography>
            </Box>
  
            <Button
              variant="contained"
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={addItem}
            >
              Add Social Link
            </Button>
          </Box>
  
          <TextField
            fullWidth
            label="Section Title"
            value={socialLinks.title}
            onChange={handleTitle}
            sx={{ mb: 4 }}
          />
  
          {socialLinks.items.map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                p: 3,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography sx={{ fontWeight:700 }}>
                  Social Link {index + 1}
                </Typography>
  
                <IconButton
                  color="error"
                  onClick={() =>
                    removeItem(index)
                  }
                >
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Box>
  
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "1fr 1fr",
                  },
                  gap: 2,
                }}
              >
                <TextField
                  label="Platform"
                  value={item.platform}
                  onChange={(e) =>
                    handleItemChange(
                      index,
                      "platform",
                      e.target.value
                    )
                  }
                />
  
                <TextField
                  select
                  label="Icon"
                  value={item.icon}
                  onChange={(e) =>
                    handleItemChange(
                      index,
                      "icon",
                      e.target.value
                    )
                  }
                >
                  {iconOptions.map((icon) => (
                    <MenuItem
                      key={icon}
                      value={icon}
                    >
                      {icon}
                    </MenuItem>
                  ))}
                </TextField>
  
                <TextField
                  label="URL"
                  value={item.url}
                  onChange={(e) =>
                    handleItemChange(
                      index,
                      "url",
                      e.target.value
                    )
                  }
                  sx={{
                    gridColumn: {
                      xs: "span 1",
                      md: "span 2",
                    },
                  }}
                />
              </Box>
            </Card>
          ))}
        </CardContent>
      </Card>
    );
  }