import styled from "@emotion/styled";

//loading styling styles 

export const CenterBox = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusCard = styled.div`
  padding: 30px 40px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  min-width: 280px;
`;

export const StatusTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const StatusText = styled.p`
  color: #6b7280;
  font-size: 14px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 15px;
  border: 4px solid rgba(21,66,18,0.1);
  border-top: 4px solid #154212;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;