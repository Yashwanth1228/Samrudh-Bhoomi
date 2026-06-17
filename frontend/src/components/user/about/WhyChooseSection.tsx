import React from "react";
import {
  WhySection,
  WhyHeader,
  WhyTitle,
  WhySubtitle,
  WhyGrid,
  WhyCard,
  WhyCardIcon,
  WhyCardTitle,
  WhyCardText,
  WhyHighlight,
  WhyHighlightContent,
  WhyHighlightTitle,
  WhyHighlightText,
} from "../../../styles/user/about/WhyChooseSection.styles";

const whyData = [
  {
    icon: "verified",
    title: "Quality Products",
    text: "Rigorous testing and strict quality control protocols ensure that every batch meets exacting industry standards.",
    color: "primary",
  },
  {
    icon: "handshake",
    title: "Trusted Brand",
    text: "Built on a decade of reliable partnerships with agricultural enterprises.",
    color: "secondary",
  },
  {
    icon: "work_history",
    title: "Industry Experience",
    text: "Deep domain expertise guiding product formulation and strategy.",
    color: "tertiary",
  },
  {
    icon: "support_agent",
    title: "Customer Support",
    text: "Dedicated agronomic advice and responsive technical assistance.",
    color: "primary",
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <WhySection>
      <WhyHeader>
        <WhyTitle variant="h2">Why Choose Samrudh Bhoomi</WhyTitle>
        <WhySubtitle variant="body1">
          The operational advantages that set us apart.
        </WhySubtitle>
      </WhyHeader>
      <WhyGrid>
        {whyData.map((item, index) => (
          <WhyCard key={index}>
            <WhyCardIcon className={item.color}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </WhyCardIcon>
            <WhyCardTitle variant="h6">{item.title}</WhyCardTitle>
            <WhyCardText variant="body2">{item.text}</WhyCardText>
          </WhyCard>
        ))}
        <WhyHighlight>
          <WhyHighlightContent>
            <WhyHighlightTitle variant="h6">
              <span className="material-symbols-outlined">psychiatry</span>
              Sustainable Solutions
            </WhyHighlightTitle>
            <WhyHighlightText variant="body2">
              Forward-looking formulations designed to maintain soil health,
              reduce runoff, and promote long-term ecological balance without
              sacrificing yield.
            </WhyHighlightText>
          </WhyHighlightContent>
        </WhyHighlight>
      </WhyGrid>
    </WhySection>
  );
};

export default WhyChooseSection;
