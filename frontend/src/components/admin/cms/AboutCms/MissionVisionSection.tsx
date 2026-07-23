import {
    Box,
    Card,
    CardContent,
    TextField,
    Typography,
  } from "@mui/material";
  
  import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
  
  import { MissionVisionType } from "./types";
  
  interface Props {
    missionVision: MissionVisionType;
    setMissionVision: (
      value: MissionVisionType
    ) => void;
  }
  
  export default function MissionVisionSection({
    missionVision,
    setMissionVision,
  }: Props) {
    const handleChange = (
      section: "mission" | "vision",
      field: "title" | "description",
      value: string
    ) => {
      setMissionVision({
        ...missionVision,
        [section]: {
          ...missionVision[section],
          [field]: value,
        },
      });
    };
  
    return (
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
            }}
          >
            <FlagOutlinedIcon color="primary" />
  
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              Mission & Vision
            </Typography>
          </Box>
  
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {/* Mission */}
  
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Mission
              </Typography>
  
              <TextField
                fullWidth
                label="Mission Title"
                value={missionVision.mission.title}
                onChange={(e) =>
                  handleChange(
                    "mission",
                    "title",
                    e.target.value
                  )
                }
                sx={{ mb: 2 }}
              />
  
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Mission Description"
                value={
                  missionVision.mission.description
                }
                onChange={(e) =>
                  handleChange(
                    "mission",
                    "description",
                    e.target.value
                  )
                }
              />
            </Box>
  
            {/* Vision */}
  
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Vision
              </Typography>
  
              <TextField
                fullWidth
                label="Vision Title"
                value={missionVision.vision.title}
                onChange={(e) =>
                  handleChange(
                    "vision",
                    "title",
                    e.target.value
                  )
                }
                sx={{ mb: 2 }}
              />
  
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Vision Description"
                value={
                  missionVision.vision.description
                }
                onChange={(e) =>
                  handleChange(
                    "vision",
                    "description",
                    e.target.value
                  )
                }
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }