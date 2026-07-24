import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  
  import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
  import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
  import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
  
  import { FooterLinksType } from "./types";
  
  interface Props {
    companyLinks: FooterLinksType;
    setCompanyLinks: React.Dispatch<
      React.SetStateAction<FooterLinksType>
    >;
  }
  
  export default function CompanyLinks({
    companyLinks,
    setCompanyLinks,
  }: Props) {
    const handleTitle = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setCompanyLinks({
        ...companyLinks,
        title: e.target.value,
      });
    };
  
    const handleLinkChange = (
      index: number,
      field: "label" | "url",
      value: string
    ) => {
      const links = [...companyLinks.links];
  
      links[index] = {
        ...links[index],
        [field]: value,
      };
  
      setCompanyLinks({
        ...companyLinks,
        links,
      });
    };
  
    const addLink = () => {
      setCompanyLinks({
        ...companyLinks,
        links: [
          ...companyLinks.links,
          {
            label: "",
            url: "",
          },
        ],
      });
    };
  
    const removeLink = (index: number) => {
      setCompanyLinks({
        ...companyLinks,
        links: companyLinks.links.filter(
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
              alignItems: "center",
              justifyContent: "space-between",
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
              <BusinessOutlinedIcon color="primary" />
  
              <Typography
              sx={{
                variant:"h6",
                fontWeight:700,
              }}
              >
                Company Links
              </Typography>
            </Box>
  
            <Button
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={addLink}
              variant="contained"
            >
              Add Link
            </Button>
          </Box>
  
          <TextField
            fullWidth
            label="Section Title"
            value={companyLinks.title}
            onChange={handleTitle}
            sx={{ mb: 4 }}
          />
  
          {companyLinks.links.map((link, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography sx={{fontWeight:700}}>
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