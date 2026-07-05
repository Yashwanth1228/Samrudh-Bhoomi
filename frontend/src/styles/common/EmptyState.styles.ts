import styled from "@emotion/styled";

export const CenterBox = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyCard = styled.div`
  background: #ffffff;
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 420px;
`;

export const EmptyIcon = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background: #f3f4f6;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #9ca3af;
`;

export const EmptyTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`;

export const EmptyText = styled.p`
  margin-top: 12px;
  color: #6b7280;
  line-height: 1.7;
  font-size: 15px;
`;