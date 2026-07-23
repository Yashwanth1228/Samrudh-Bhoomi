import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  
  import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
  import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlined";
  
  import { JourneyType } from "./types";
  
  interface Props {
    journey: JourneyType;
    setJourney: (value: JourneyType) => void;
  }
  
  export default function JourneySection({
    journey,
    setJourney,
  }: Props) {
    const handleSection = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >
    ) => {
      setJourney({
        ...journey,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleTimeline = (
      index: number,
      field: string,
      value: string
    ) => {
      const updated = [...journey.timeline];
  
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
  
      setJourney({
        ...journey,
        timeline: updated,
      });
    };
  
    const addTimeline = () => {
      setJourney({
        ...journey,
        timeline: [
          ...journey.timeline,
          {
            year: "",
            title: "",
            description: "",
          },
        ],
      });
    };
  
    const removeTimeline = (
      index: number
    ) => {
      setJourney({
        ...journey,
        timeline: journey.timeline.filter(
          (_, i) => i !== index
        ),
      });
    };
  
    return (
      <Card
        sx={{
          mt: 3,
          borderRadius: 3,
        }}
      >
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
              <TimelineOutlinedIcon color="primary" />
  
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                Journey Section
              </Typography>
            </Box>
  
            <Button
              startIcon={
                <AddCircleOutlineIcon />
              }
              onClick={addTimeline}
            >
              Add Timeline
            </Button>
          </Box>
  
          <TextField
            fullWidth
            label="Journey Title"
            name="title"
            value={journey.title}
            onChange={handleSection}
            sx={{ mb: 3 }}
          />
  
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Journey Subtitle"
            name="subtitle"
            value={journey.subtitle}
            onChange={handleSection}
            sx={{ mb: 4 }}
          />
  
          {journey.timeline.map(
            (item, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Timeline {index + 1}
                  </Typography>
  
                  <IconButton
                    color="error"
                    onClick={() =>
                      removeTimeline(index)
                    }
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
  
                <TextField
                  fullWidth
                  label="Year"
                  sx={{ mt: 2 }}
                  value={item.year}
                  onChange={(e) =>
                    handleTimeline(
                      index,
                      "year",
                      e.target.value
                    )
                  }
                />
  
                <TextField
                  fullWidth
                  label="Title"
                  sx={{ mt: 2 }}
                  value={item.title}
                  onChange={(e) =>
                    handleTimeline(
                      index,
                      "title",
                      e.target.value
                    )
                  }
                />
  
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  sx={{ mt: 2 }}
                  value={item.description}
                  onChange={(e) =>
                    handleTimeline(
                      index,
                      "description",
                      e.target.value
                    )
                  }
                />
              </Card>
            )
          )}
        </CardContent>
      </Card>
    );
  }