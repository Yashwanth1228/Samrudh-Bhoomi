import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  TabsSection,
  TabsContainer,
  StyledTabs,
  StyledTab,
  TabContent,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitText,
  SpecTable,
  SpecTableRow,
  SpecLabel,
  SpecValue,
  UsageList,
  UsageItem,
} from "../../../styles/user/product/ProductTabs.styles";
import {
  TrendingUp as TrendingUpIcon,
  Grass as GrassIcon,
  Science as ScienceIcon,
  Agriculture as AgricultureIcon,
} from "@mui/icons-material";

interface Benefit {
  icon: string;
  title: string;
  text: string;
}

interface Specification {
  label: string;
  value: string;
}

interface ProductTabsProps {
  benefits: Benefit[];
  specifications: Specification[];
  usage: string[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  benefits,
  specifications,
  usage,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabLabels = [
    "Description",
    "Benefits",
    "Specifications",
    "Usage Instructions",
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "trending_up":
        return <TrendingUpIcon />;
      case "grass":
        return <GrassIcon />;
      case "science":
        return <ScienceIcon />;
      case "eco":
        return <AgricultureIcon />;
      default:
        return <TrendingUpIcon />;
    }
  };

  return (
    <TabsSection>
      <TabsContainer>
        <StyledTabs value={activeTab} onChange={handleTabChange}>
          {tabLabels.map((label) => (
            <StyledTab key={label} label={label} />
          ))}
        </StyledTabs>

        {/* Description Tab */}
        <TabContent value={activeTab} index={0}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Inter", fontWeight: 500, mb: 2 }}
          >
            Complete Organic Nutrition
          </Typography>
          <Typography variant="body1" sx={{ color: "#42493e", mb: 2 }}>
            Our All-Natural Granular Fertilizer is a premium, balanced plant
            food designed to support vigorous growth and maximum yield in
            agricultural settings. Composed entirely of organic matter, it
            provides a steady, slow release of essential nutrients, ensuring
            that plants receive sustenance throughout their growing cycle rather
            than a sudden flush.
          </Typography>
          <Typography variant="body1" sx={{ color: "#42493e" }}>
            Beyond merely feeding the plant, this fertilizer actively improves
            soil health. It increases microbial activity, enhances soil
            aeration, and improves moisture retention capabilities. Regular use
            leads to darker, richer soil that is more resilient to environmental
            stresses.
          </Typography>
        </TabContent>

        {/* Benefits Tab */}
        <TabContent value={activeTab} index={1}>
          <BenefitsGrid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid key={index} {...{ xs: 12, sm: 6, lg: 3 }}>
                <BenefitCard>
                  <BenefitIcon>{getIcon(benefit.icon)}</BenefitIcon>
                  <BenefitTitle variant="h6">{benefit.title}</BenefitTitle>
                  <BenefitText variant="body2">{benefit.text}</BenefitText>
                </BenefitCard>
              </Grid>
            ))}
          </BenefitsGrid>
        </TabContent>

        {/* Specifications Tab */}
        <TabContent value={activeTab} index={2}>
          <SpecTable>
            {specifications.map((spec, index) => (
              <SpecTableRow key={index} even={index % 2 === 0}>
                <SpecLabel variant="body2">{spec.label}</SpecLabel>
                <SpecValue variant="body2">{spec.value}</SpecValue>
              </SpecTableRow>
            ))}
          </SpecTable>
        </TabContent>

        {/* Usage Tab */}
        <TabContent value={activeTab} index={3}>
          <UsageList>
            {usage.map((item, index) => (
              <UsageItem key={index} variant="body2">
                {item}
              </UsageItem>
            ))}
          </UsageList>
        </TabContent>
      </TabsContainer>
    </TabsSection>
  );
};

export default ProductTabs;
