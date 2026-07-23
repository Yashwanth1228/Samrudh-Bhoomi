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
  
  export interface MissionVisionItem {
    title: string;
    description: string;
  }
  
  export interface MissionVisionType {
    mission: MissionVisionItem;
    vision: MissionVisionItem;
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
    galleryButton: {
      text: string;
      link: string;
    };
  }
  
  export interface AboutCmsType {
    hero: HeroType;
    about: AboutType;
    missionVision: MissionVisionType;
    journey: JourneyType;
    ecosystem: EcosystemType;
  }