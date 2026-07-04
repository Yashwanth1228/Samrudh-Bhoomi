import {
    CenterBox,
    StatusCard,
    Spinner,
    StatusTitle,
    StatusText,
  } from "@/styles/common/Loading.styles";
  
  interface Props {
    title?: string;
    message?: string;
  }
  
  export default function LoadingState({
    title = "Loading...",
    message = "Please wait while we fetch your data.",
  }: Props) {
    return (
      <CenterBox>
        <StatusCard>
          <Spinner />
          <StatusTitle>{title}</StatusTitle>
          <StatusText>{message}</StatusText>
        </StatusCard>
      </CenterBox>
    );
  }