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

    {/* Header */}

    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <AnalyticsIcon color="primary" />

        <Typography
        sx={{
          variant:"h6",
          fontWeight:700,
        }}
        >
          Statistics
        </Typography>
      </Box>

      <IconButton
        color="primary"
        onClick={addItem}
      >
        <AddCircleIcon />
      </IconButton>
    </Box>

    {/* Cards */}

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
      {statistics.items.map((item, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: 3,
            p: 3,
            bgcolor: "#FAFAFA",
            transition: ".25s",

            "&:hover": {
              boxShadow: 2,
              bgcolor: "#fff",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
            sx={{
              fontWeight:700,
            }}
            >
              Statistic {index + 1}
            </Typography>

            <IconButton
              color="error"
              size="small"
              onClick={() => removeItem(index)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>

          <TextField
            fullWidth
            label="Label"
            placeholder="Happy Farmers"
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
            fullWidth
            label="Value"
            placeholder="5000+"
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

    {statistics.items.length === 0 && (
      <Box
        sx={{
          py: 8,
          textAlign: "center",
          color: "text.secondary",
          border: "2px dashed #E5E7EB",
          borderRadius: 3,
          mt: 2,
        }}
      >
        <Typography sx={{ mb:2 }}>
          No statistics added yet
        </Typography>

        <IconButton
          color="primary"
          onClick={addItem}
        >
          <AddCircleIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    )}

  </CardContent>
</Card>
    );
  }