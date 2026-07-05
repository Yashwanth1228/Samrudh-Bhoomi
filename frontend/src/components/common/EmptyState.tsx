import React from "react";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import Button from "@mui/material/Button";

import {
  CenterBox,
  EmptyCard,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
} from "@/styles/common/EmptyState.styles";

interface EmptyStateProps {
  title?: string;
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "Nothing Here",
  message = "There is no data to display.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <CenterBox>
      <EmptyCard>
        <EmptyIcon>
          <InboxOutlinedIcon sx={{ fontSize: 60 }} />
        </EmptyIcon>

        <EmptyTitle>{title}</EmptyTitle>

        <EmptyText>{message}</EmptyText>

        {buttonText && (
          <Button
            variant="contained"
            color="success"
            onClick={onButtonClick}
            sx={{
              mt: 3,
              px: 3,
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            {buttonText}
          </Button>
        )}
      </EmptyCard>
    </CenterBox>
  );
};

export default EmptyState;