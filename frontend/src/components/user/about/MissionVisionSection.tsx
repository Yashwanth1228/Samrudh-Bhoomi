import React from "react";
import {
  FlagOutlined,
  LightbulbOutlined,
} from "@mui/icons-material";

import {
  MissionSection,
  MissionGrid,
  MissionCard,
  MissionCardLeft,
  MissionIconWrapper,
  MissionTitle,
  MissionText,
  VisionCard,
  VisionIconWrapper,
  VisionTitle,
  VisionText,
} from "../../../styles/user/about/MissionVisionSection.styles";

import { MissionVisionType } from "./aboutCms";

interface Props {
  missionVision?: MissionVisionType;
}

/* Default Data */
const defaultMissionVision: MissionVisionType = {
  mission: {
    title: "Our Mission",
    description:
      "To deliver unparalleled quality in agricultural solutions, fostering deep-rooted customer trust through consistent performance, transparent practices, and a commitment to operational excellence in every acre we touch.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To be the vanguard of sustainable agricultural innovation, catalyzing growth across the industry while harmonizing high-yield farming with long-term ecological stewardship.",
  },
};

export default function MissionVisionSection({
  missionVision,
}: Props) {
  const section =
    missionVision ?? defaultMissionVision;

  return (
    <MissionSection>
      <MissionGrid>
        {/* Mission */}
        <MissionCard>
          <MissionCardLeft />

          <MissionIconWrapper>
            <FlagOutlined />
          </MissionIconWrapper>

          <MissionTitle variant="h2">
            {section.mission.title ||
              defaultMissionVision.mission.title}
          </MissionTitle>

          <MissionText variant="body1">
            {section.mission.description ||
              defaultMissionVision.mission.description}
          </MissionText>
        </MissionCard>

        {/* Vision */}
        <VisionCard>
          <VisionIconWrapper>
            <LightbulbOutlined />
          </VisionIconWrapper>

          <VisionTitle variant="h2">
            {section.vision.title ||
              defaultMissionVision.vision.title}
          </VisionTitle>

          <VisionText variant="body1">
            {section.vision.description ||
              defaultMissionVision.vision.description}
          </VisionText>
        </VisionCard>
      </MissionGrid>
    </MissionSection>
  );
}