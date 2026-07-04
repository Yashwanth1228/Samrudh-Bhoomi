import styled from "@emotion/styled";

export const ErrorCard = styled.div`
  padding: 40px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  text-align: center;
  max-width: 420px;
`;

export const ErrorIcon = styled.div`
  width: 72px;
  height: 72px;
  margin: auto;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #fee2e2;

  color: #dc2626;
`;

export const ErrorTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 12px;
  font-weight: 700;
`;

export const ErrorMessage = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
  line-height: 1.6;
`;

export const RetryButton = styled.button`
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  background: #154212;
  color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #0f3310;
  }
`;