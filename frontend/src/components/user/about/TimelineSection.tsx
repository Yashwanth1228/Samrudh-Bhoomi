import React from "react";
import { RocketLaunchOutlined } from "@mui/icons-material";

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

import { JourneyType } from "./aboutCms";

interface Props {
  journey?: JourneyType;
}

/* Default Data */
const defaultJourney: JourneyType = {
  title: "Our Journey",
  subtitle:
    "A decade of growth, driven by a commitment to the soil and those who till it.",
  timeline: [
    {
      year: "2010",
      title: "Company Establishment",
      description:
        "Founded with a core focus on delivering reliable, high-quality fertilizers to local farming communities.",
    },
    {
      year: "2015",
      title: "Product Expansion",
      description:
        "Introduced our comprehensive organic range, responding to the growing need for eco-conscious farming inputs.",
    },
    {
      year: "2020",
      title: "Market Growth & Technology",
      description:
        "Expanded reach significantly and integrated modern ERP tracking for complete supply chain transparency.",
    },
    {
      year: "Future",
      title: "Sustainable Innovation Leader",
      description:
        "Pioneering next-generation agricultural technology and sustainable farming solutions for global impact.",
    },
  ],
};

export default function TimelineSection({
  journey,
}: Props) {
  const section = journey ?? defaultJourney;

  const timeline =
    section.timeline.length > 0
      ? section.timeline
      : defaultJourney.timeline;

  return (
    <TimelineSectionContainer>
      <TimelineContainer>
        <TimelineHeader>
          <TimelineTitle variant="h2">
            {section.title || defaultJourney.title}
          </TimelineTitle>

          <TimelineSubtitle variant="body1">
            {section.subtitle ||
              defaultJourney.subtitle}
          </TimelineSubtitle>
        </TimelineHeader>

        <TimelineWrapper>
          <TimelineLine />

          {timeline.map((item, index) => {
            const side =
              index % 2 === 0
                ? "right"
                : "left";

            const isFuture =
              item.year.toLowerCase() ===
              "future";

            return (
              <TimelineItem
                key={index}
                side={side}
              >
                {/* Left Content */}
                <TimelineContent side={side}>
                  {side === "right" && (
                    <>
                      <TimelineYear variant="caption">
                        {item.year}
                      </TimelineYear>

                      <TimelineEventTitle variant="h6">
                        {item.title}
                      </TimelineEventTitle>

                      <TimelineEventDesc variant="body2">
                        {item.description}
                      </TimelineEventDesc>
                    </>
                  )}
                </TimelineContent>

                {/* Timeline Dot */}
                <TimelineDot
                  isFuture={isFuture}
                >
                  {isFuture ? (
                    <RocketLaunchOutlined
                      fontSize="small"
                    />
                  ) : (
                    <span>{item.year}</span>
                  )}
                </TimelineDot>

                {/* Right Content */}
                <TimelineContent side={side}>
                  {side === "left" && (
                    <>
                      <TimelineYear variant="caption">
                        {item.year}
                      </TimelineYear>

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
            );
          })}
        </TimelineWrapper>
      </TimelineContainer>
    </TimelineSectionContainer>
  );
}