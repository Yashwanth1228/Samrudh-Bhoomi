import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../styles/user/home/Home.styles";
import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import HeroSection from "../components/user/home/HeroSection";
import StatsSection from "../components/user/home/StatsSection";
import AboutSection from "../components/user/home/AboutSection";
import ProductsSection from "../components/user/home/ProductsSection";
import WhySection from "../components/user/home/WhySection";
import BlogsSection from "../components/user/home/BlogsSection";
import FAQSection from "../components/user/home/FAQSection";
import CTASection from "../components/user/home/CTASection";

import { useGetCmsByPageQuery } from "@/store/api/apiSlice";
import LoadingState from "@/components/common/LoadingState";

const HomePage: NextPage = () => {
  const {
    data: homeCms,
    isLoading,
  } = useGetCmsByPageQuery("home");

  if (isLoading)
  return <LoadingState title="Loading home page..." message="Please wait while we fetch your data." />;
  
  return (
    <>
      <Head>
        <title>Samrudh Bhoomi Private Limited - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sustainable Solutions for Agricultural Excellence"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageContainer>
      <HeroSection hero={homeCms?.content?.hero} />
      <StatsSection
        statistics={homeCms?.content?.statistics}
      />
        <AboutSection
        about={homeCms?.content?.about}
      />
        <ProductsSection />
        <WhySection
        whyChooseUs={homeCms?.content?.whyChooseUs}
      />
        <BlogsSection />
        <FAQSection
        faq={homeCms?.content?.faq}
      />
        <CTASection />
      </PageContainer>
    </>
  );
};

export default HomePage;
