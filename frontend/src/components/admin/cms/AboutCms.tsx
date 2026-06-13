import DescriptionIcon from "@mui/icons-material/Description";
import CollectionsIcon from "@mui/icons-material/Collections";
import UploadIcon from "@mui/icons-material/Upload";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import VerifiedIcon from "@mui/icons-material/Verified";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SpaIcon from "@mui/icons-material/Spa";
import { Box, Button, CardHeader, IconButton, Typography } from "@mui/material";
import { AttachmentChip, CertificateCard, CmsCard, GalleryImage, GalleryOverlay, StyledTextField } from "@/styles/admin/Cms.styles";


function AboutCms() {
    const images = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAF1O3ntXHDF_vdmUbgNWBCLzns2N8RpGFrLFEr6Q8GFea5cQhkmFO4Th5u93hMl5d3yweNz2gxUyfvPLwf2yllcIPDn57c0b7ap1MAg9UCpipIQpMQ4bO-0I94TIRV1SzAz7liwl6rpJALaYTE5nqCP9XZzxdjrCPPQbp8RVUJL5S5ZhqXRoCyVnBH2iW2sYakkZADWNImunK1N3qJwpQStCKJaeZJPYVMpqDhu2qF5vHQ4pT8qDlDhYmbZsYBYGcZ65HeUnlvggvh",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfVgKLUW-C_TDVjcqGB_0U56lEi7wuz43-Q&s",
        "data:image/jpeg;base64,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",
      ];
    return (
        <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "2fr 1fr",
    },
    gap: 3,
  }}
>
  {/* Left Side */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3,
    }}
  >
    {/* Company Narrative */}
    <CmsCard>
      <CardHeader>
        <DescriptionIcon color="primary" />

        <Typography variant="h6">
          Company Narrative
        </Typography>
      </CardHeader>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <StyledTextField
          label="Company Overview"
          multiline
          rows={6}
          defaultValue="Samrudh Bhoomi is a pioneer in sustainable agriculture..."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 3,
          }}
        >
          <StyledTextField
            label="Mission"
            multiline
            rows={4}
            defaultValue="To empower farmers with high-quality bio-inputs."
          />

          <StyledTextField
            label="Vision"
            multiline
            rows={4}
            defaultValue="To lead the global transition to organic farming."
          />
        </Box>

        <StyledTextField
          label="Company Story"
          multiline
          rows={8}
          defaultValue="Founded in 1998, we started as a small testing laboratory..."
        />
      </Box>
    </CmsCard>

    {/* Gallery Management */}
    <CmsCard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <CardHeader>
          <CollectionsIcon color="primary" />

          <Typography variant="h6">
            Gallery Management
          </Typography>
        </CardHeader>

        <Button
          variant="contained"
          startIcon={<UploadIcon />}
        >
          Upload Images
        </Button>
      </Box>


      <Box
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: 2,
  }}
>
  {images.map((image, index) => (
    <GalleryImage key={index}>
      <img src={image} alt={`gallery-${index}`} />

      <GalleryOverlay className="overlay">
        <IconButton>
          <OpenInFullIcon />
        </IconButton>

        <IconButton color="error">
          <DeleteIcon />
        </IconButton>

        <IconButton>
          <DragIndicatorIcon />
        </IconButton>
      </GalleryOverlay>
    </GalleryImage>
  ))}
</Box>
    </CmsCard>
  </Box>

  {/* Certificates */}
  <CmsCard>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 3,
      }}
    >
      <Typography
        variant="h6"
        color="primary"
      >
        Certificates
      </Typography>

      <Button>+ Add New</Button>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <CertificateCard>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <VerifiedIcon color="primary" />

          <Box>
            <IconButton>
              <EditIcon />
            </IconButton>

            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            mt: 2,
          }}
        >
          ISO 9001:2015
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Quality Management System certified for agricultural input production.
        </Typography>

        <AttachmentChip>
          <AttachFileIcon />
          iso_cert_2024.pdf
        </AttachmentChip>
      </CertificateCard>

      <CertificateCard>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SpaIcon color="primary" />

          <Box>
            <IconButton>
              <EditIcon />
            </IconButton>

            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            mt: 2,
          }}
        >
          Organic India Standard
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Certified for 100% organic bio-nutrients formulation.
        </Typography>

        <AttachmentChip>
          <AttachFileIcon />
          organic_india.pdf
        </AttachmentChip>
      </CertificateCard>
    </Box>
  </CmsCard>
</Box>
    )
}

export default AboutCms
