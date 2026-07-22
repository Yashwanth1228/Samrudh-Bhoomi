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

interface StatisticsProps {
  statistics?: {
    items: {
      label: string;
      value: string;
    }[];
  };
}

/* Default statistics */
const defaultStats = [
  {
    label: "Premium Products",
    value: "50+",
  },
  {
    label: "Happy Customers",
    value: "10,000+",
  },
  {
    label: "Authorized Dealers",
    value: "500+",
  },
  {
    label: "Years Experience",
    value: "15+",
  },
];

/* Icons */
const icons = [
  <Inventory2Icon key="inventory" />,
  <GroupsIcon key="groups" />,
  <StorefrontIcon key="store" />,
  <VerifiedIcon key="verified" />,
];

export default function StatsSection({
  statistics,
}: StatisticsProps) {
  // Use CMS data if available, otherwise use default data
  const stats =
    statistics?.items && statistics.items.length > 0
      ? statistics.items
      : defaultStats;

  return (
    <StatsSectionContainer>
      <Container maxWidth="xl">
        <StatsGrid>
          {stats.map((item, index) => (
            <StatCard key={index}>
              <StatIconWrapper>
                {icons[index % icons.length]}
              </StatIconWrapper>

              <div>
                <StatValue variant="h3">
                  {item.value}
                </StatValue>

                <StatLabel variant="caption">
                  {item.label}
                </StatLabel>
              </div>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </StatsSectionContainer>
  );
}