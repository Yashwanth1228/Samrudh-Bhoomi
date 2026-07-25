import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { PageContainer } from "../styles/user/about/About.styles";

import AboutHero from "../components/user/about/AboutHero";
import OverviewSection from "../components/user/about/OverviewSection";
import MissionVisionSection from "../components/user/about/MissionVisionSection";
import TimelineSection from "../components/user/about/TimelineSection";
import GallerySection from "../components/user/about/GallerySection";
import CTASection from "../components/user/home/CTASection";

import { useGetCmsByPageQuery } from "@/store/api/apiSlice";
import LoadingState from "@/components/common/LoadingState";

const AboutPage: NextPage = () => {
  const { data, isLoading } = useGetCmsByPageQuery("about");

  if (isLoading)
  return <LoadingState title="Loading about page..." message="Please wait while we fetch your data." />;
  
  const cms = data?.content;

  return (
    <>
      <Head>
        <title>About Us - Samrudh Bhoomi</title>

        <meta
          name="description"
          content="Empowering agriculture through innovation and sustainable solutions."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <PageContainer>
        <AboutHero hero={cms?.hero} />

        <OverviewSection about={cms?.about} />

        <MissionVisionSection
          missionVision={cms?.missionVision}
        />

        <TimelineSection
          journey={cms?.journey}
        />

        <GallerySection
          ecosystem={cms?.ecosystem}
        />

        <CTASection />
      </PageContainer>
    </>
  );
};

export default AboutPage;