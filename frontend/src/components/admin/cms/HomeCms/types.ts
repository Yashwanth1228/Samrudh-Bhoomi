import React from "react";

export interface ImageType {
  url: string;
  publicId: string;
}

export interface HeroSectionType {
  title: string;
  subtitle: string;
  video: {
    url: string;
  };
  backgroundImage: ImageType;
}

export interface AboutSectionType {
  title: string;
  description: string;
  image: ImageType;
}

export interface StatisticItem {
  label: string;
  value: string;
}

export interface StatisticsSectionType {
  items: StatisticItem[];
}

export interface WhyChooseCard {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsSectionType {
  title: string;
  subtitle: string;
  cards: WhyChooseCard[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionType {
  title: string;
  subtitle: string;
  questions: FAQItem[];
}

export interface HomeCmsData {
  hero: HeroSectionType;
  about: AboutSectionType;
  statistics: StatisticsSectionType;
  whyChooseUs: WhyChooseUsSectionType;
  faq: FAQSectionType;
}

export interface UploadImage {
  url: string;
  publicId: string;
}

/* ---------- Component Props ---------- */

export interface HeroSectionProps {
  hero: HeroSectionType;
  setHero: (hero: HeroSectionType) => void;
  uploadImages: (
    files: File[],
    folder: string
  ) => Promise<UploadImage[]>;
  imageUploading: boolean;
}

export interface AboutSectionProps {
  about: AboutSectionType;
  setAbout: (about: AboutSectionType) => void;
  uploadImages: (
    files: File[],
    folder: string
  ) => Promise<UploadImage[]>;
  imageUploading: boolean;
}

export interface StatisticsSectionProps {
  statistics: StatisticsSectionType;
  setStatistics: (
    statistics: StatisticsSectionType
  ) => void;
}

export interface WhyChooseUsSectionProps {
  whyChooseUs: WhyChooseUsSectionType;
  setWhyChooseUs: (
    data: WhyChooseUsSectionType
  ) => void;
}

export interface FaqSectionProps {
  faq: FAQSectionType;
  setFaq: (
    faq: FAQSectionType
  ) => void;
}