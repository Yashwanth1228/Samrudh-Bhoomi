import {
    Box,
    Card,
    CardContent,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  
  import AnalyticsIcon from "@mui/icons-material/Analytics";
  import DeleteIcon from "@mui/icons-material/Delete";
  import AddCircleIcon from "@mui/icons-material/AddCircle";
  
  import { StatisticsSectionType } from "./types";
  
  interface Props {
    statistics: StatisticsSectionType;
    setStatistics: (statistics: StatisticsSectionType) => void;
  }
  
  export default function StatisticsSection({
    statistics,
    setStatistics,
  }: Props) {
    const handleItemChange = (
      index: number,
      field: "label" | "value",
      value: string
    ) => {
      setStatistics({
        ...statistics,
        items: statistics.items.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ),
      });
    };
  
    const addItem = () => {
      setStatistics({
        ...statistics,
        items: [
          ...statistics.items,
          {
            label: "",
            value: "",
          },
        ],
      });
    };
  
    const removeItem = (index: number) => {
      setStatistics({
        ...statistics,
        items: statistics.items.filter((_, i) => i !== index),
      });
    };
  
    return (
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          height: "100%",
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
            <AnalyticsIcon color="primary" />
  
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              Statistics Section
            </Typography>
          </Box>
  
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              label="Statistics Title"
              fullWidth
              value={statistics.title}
              onChange={(e) =>
                setStatistics({
                  ...statistics,
                  title: e.target.value,
                })
              }
            />
  
            <TextField
              label="Statistics Subtitle"
              multiline
              rows={2}
              fullWidth
              value={statistics.subtitle}
              onChange={(e) =>
                setStatistics({
                  ...statistics,
                  subtitle: e.target.value,
                })
              }
            />
  
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Statistics Items
              </Typography>
  
              <IconButton color="primary" onClick={addItem}>
                <AddCircleIcon />
              </IconButton>
            </Box>
  
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: 2,
              }}
            >
              {statistics.items.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #E5E7EB",
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      Item {index + 1}
                    </Typography>
  
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => removeItem(index)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
  
                  <TextField
                    label="Label"
                    fullWidth
                    value={item.label}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "label",
                        e.target.value
                      )
                    }
                    sx={{ mb: 2 }}
                  />
  
                  <TextField
                    label="Value"
                    fullWidth
                    value={item.value}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "value",
                        e.target.value
                      )
                    }
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }