import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  
  import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
  import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
  import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
  
  import { FooterLinksType } from "./types";
  
  interface Props {
    productLinks: FooterLinksType;
    setProductLinks: React.Dispatch<
      React.SetStateAction<FooterLinksType>
    >;
  }
  
  export default function ProductLinks({
    productLinks,
    setProductLinks,
  }: Props) {
    const handleTitle = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setProductLinks({
        ...productLinks,
        title: e.target.value,
      });
    };
  
    const handleLinkChange = (
      index: number,
      field: "label" | "url",
      value: string
    ) => {
      const links = [...productLinks.links];
  
      links[index] = {
        ...links[index],
        [field]: value,
      };
  
      setProductLinks({
        ...productLinks,
        links,
      });
    };
  
    const addLink = () => {
      setProductLinks({
        ...productLinks,
        links: [
          ...productLinks.links,
          {
            label: "",
            url: "",
          },
        ],
      });
    };
  
    const removeLink = (index: number) => {
      setProductLinks({
        ...productLinks,
        links: productLinks.links.filter(
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
                alignItems: "center",
                gap: 1,
              }}
            >
              <Inventory2OutlinedIcon color="primary" />
  
              <Typography
              sx={{
                variant:"h6",
                fontWeight:700,
              }}
              >
                Product Links
              </Typography>
            </Box>
  
            <Button
              variant="contained"
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={addLink}
            >
              Add Link
            </Button>
          </Box>
  
          <TextField
            fullWidth
            label="Section Title"
            value={productLinks.title}
            onChange={handleTitle}
            sx={{ mb: 4 }}
          />
  
          {productLinks.links.map((link, index) => (
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
                  Link {index + 1}
                </Typography>
  
                <IconButton
                  color="error"
                  onClick={() =>
                    removeLink(index)
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
                  label="Label"
                  value={link.label}
                  onChange={(e) =>
                    handleLinkChange(
                      index,
                      "label",
                      e.target.value
                    )
                  }
                />
  
                <TextField
                  label="URL"
                  value={link.url}
                  onChange={(e) =>
                    handleLinkChange(
                      index,
                      "url",
                      e.target.value
                    )
                  }
                />
              </Box>
            </Card>
          ))}
        </CardContent>
      </Card>
    );
  }