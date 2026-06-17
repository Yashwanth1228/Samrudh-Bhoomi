import React from "react";
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

const MissionVisionSection: React.FC = () => {
  return (
    <MissionSection>
      <MissionGrid>
        <MissionCard>
          <MissionCardLeft />
          <MissionIconWrapper>
            <span className="material-symbols-outlined fill">flag</span>
          </MissionIconWrapper>
          <MissionTitle variant="h2">Our Mission</MissionTitle>
          <MissionText variant="body1">
            To deliver unparalleled quality in agricultural solutions, fostering
            deep-rooted customer trust through consistent performance,
            transparent practices, and a commitment to operational excellence in
            every acre we touch.
          </MissionText>
        </MissionCard>
        <VisionCard>
          <VisionIconWrapper>
            <span className="material-symbols-outlined fill">lightbulb</span>
          </VisionIconWrapper>
          <VisionTitle variant="h2">Our Vision</VisionTitle>
          <VisionText variant="body1">
            To be the vanguard of sustainable agricultural innovation,
            catalyzing growth across the industry while harmonizing high-yield
            farming with long-term ecological stewardship.
          </VisionText>
        </VisionCard>
      </MissionGrid>
    </MissionSection>
  );
};

export default MissionVisionSection;
