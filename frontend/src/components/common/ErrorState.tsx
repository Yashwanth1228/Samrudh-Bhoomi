import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlined";
import {
  CenterBox,
} from "@/styles/common/Loading.styles";

import {
  ErrorCard,
  ErrorIcon,
  ErrorTitle,
  ErrorMessage,
  RetryButton,
} from "@/styles/common/Error.styles";

interface Props {
  title?: string;
  message?: string;
  onRetry?: () => void;
  loading?: boolean;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again later.",
  onRetry,
  loading = false,
}: Props) {
  return (
    <CenterBox>
      <ErrorCard>

        <ErrorIcon>
          <ErrorOutlineIcon sx={{ fontSize: 40 }} />
        </ErrorIcon>

        <ErrorTitle>{title}</ErrorTitle>

        <ErrorMessage>{message}</ErrorMessage>

        {onRetry && (
          <RetryButton
          onClick={onRetry}
          disabled={loading}
        >
          {loading ? "Retrying..." : "Retry"}
        </RetryButton>
        )}

      </ErrorCard>
    </CenterBox>
  );
}