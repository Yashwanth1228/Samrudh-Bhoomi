import React from "react";
import {
  TimelineSectionContainer,
  TimelineContainer,
  TimelineHeader,
  TimelineTitle,
  TimelineSubtitle,
  TimelineWrapper,
  TimelineLine,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineYear,
  TimelineEventTitle,
  TimelineEventDesc,
} from "../../../styles/user/about/TimelineSection.styles";

const timelineData = [
  {
    year: "2010",
    title: "Company Establishment",
    description:
      "Founded with a core focus on delivering reliable, high-quality fertilizers to local farming communities.",
    side: "right",
  },
  {
    year: "2015",
    title: "Product Expansion",
    description:
      "Introduced our comprehensive organic range, responding to the growing need for eco-conscious farming inputs.",
    side: "left",
  },
  {
    year: "2020",
    title: "Market Growth & Tech",
    description:
      "Expanded reach significantly and integrated modern ERP tracking for complete supply chain transparency.",
    side: "right",
  },
  {
    year: "Future",
    title: "Sustainable Innovation Leader",
    description:
      "Pioneering next-generation agricultural tech and highly targeted organic solutions for global impact.",
    side: "left",
    isFuture: true,
  },
];

const TimelineSection: React.FC = () => {
  return (
    <TimelineSectionContainer>
      <TimelineContainer>
        <TimelineHeader>
          <TimelineTitle variant="h2">Our Journey</TimelineTitle>
          <TimelineSubtitle variant="body1">
            A decade of growth, driven by a commitment to the soil and those who
            till it.
          </TimelineSubtitle>
        </TimelineHeader>
        <TimelineWrapper>
          <TimelineLine />
          {timelineData.map((item, index) => (
            <TimelineItem key={index} side={item.side}>
              <TimelineContent side={item.side}>
                {item.side === "right" && (
                  <>
                    <TimelineYear variant="caption">{item.year}</TimelineYear>
                    <TimelineEventTitle variant="h6">
                      {item.title}
                    </TimelineEventTitle>
                    <TimelineEventDesc variant="body2">
                      {item.description}
                    </TimelineEventDesc>
                  </>
                )}
              </TimelineContent>
              <TimelineDot isFuture={item.isFuture || false}>
                {item.isFuture ? (
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                ) : (
                  <span>{item.year}</span>
                )}
              </TimelineDot>
              <TimelineContent side={item.side}>
                {item.side === "left" && (
                  <>
                    <TimelineYear variant="caption">{item.year}</TimelineYear>
                    <TimelineEventTitle variant="h6">
                      {item.title}
                    </TimelineEventTitle>
                    <TimelineEventDesc variant="body2">
                      {item.description}
                    </TimelineEventDesc>
                  </>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </TimelineContainer>
    </TimelineSectionContainer>
  );
};

export default TimelineSection;
