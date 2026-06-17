import React from "react";
import { Container } from "@mui/material";
import {
  StatsSectionContainer,
  StatsGrid,
  StatCard,
  StatIconWrapper,
  StatValue,
  StatLabel,
} from "../../../styles/user/home/StatsSection.styles";
import {
  Inventory2 as Inventory2Icon,
  Groups as GroupsIcon,
  Storefront as StorefrontIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";

const stats = [
  { icon: <Inventory2Icon />, value: "50+", label: "Premium Products" },
  { icon: <GroupsIcon />, value: "10,000+", label: "Happy Customers" },
  { icon: <StorefrontIcon />, value: "500+", label: "Authorized Dealers" },
  { icon: <VerifiedIcon />, value: "15+", label: "Years Experience" },
];

const StatsSection: React.FC = () => {
  return (
    <StatsSectionContainer>
      <Container maxWidth="xl">
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatIconWrapper>{stat.icon}</StatIconWrapper>
              <div>
                <StatValue variant="h3">{stat.value}</StatValue>
                <StatLabel variant="caption">{stat.label}</StatLabel>
              </div>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </StatsSectionContainer>
  );
};

export default StatsSection;
