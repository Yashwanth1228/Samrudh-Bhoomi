// types/aboutCms.ts

export interface ImageType {
    url: string;
    publicId: string;
  }
  
  export interface HeroType {
    title: string;
    description: string;
    image: ImageType;
  }
  
  export interface AboutCardType {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface AboutType {
    title: string;
    description: string;
    image: ImageType;
    cards: AboutCardType[];
  }
  
  export interface MissionVisionType {
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
  }
  
  export interface JourneyItem {
    year: string;
    title: string;
    description: string;
  }
  
  export interface JourneyType {
    title: string;
    subtitle: string;
    timeline: JourneyItem[];
  }
  
  export interface EcosystemType {
    title: string;
    images: ImageType[];
  }
  
  export interface AboutCmsType {
    hero: HeroType;
    about: AboutType;
    missionVision: MissionVisionType;
    journey: JourneyType;
    ecosystem: EcosystemType;
  }