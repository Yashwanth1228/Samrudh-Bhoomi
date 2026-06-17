import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../styles/user/about/About.styles";
import AboutHero from "../components/user/about/AboutHero";
import OverviewSection from "../components/user/about/OverviewSection";
import MissionVisionSection from "../components/user/about/MissionVisionSection";
import TimelineSection from "../components/user/about/TimelineSection";
import WhyChooseSection from "../components/user/about/WhyChooseSection";
import GallerySection from "../components/user/about/GallerySection";
import AboutCTA from "../components/user/about/AboutCTA";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Samrudh Bhoomi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Empowering agriculture through innovation and sustainable solutions."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageContainer>
        <AboutHero />
        <OverviewSection />
        <MissionVisionSection />
        <TimelineSection />
        <WhyChooseSection />
        <GallerySection />
        <AboutCTA />
      </PageContainer>
    </>
  );
};

export default AboutPage;
