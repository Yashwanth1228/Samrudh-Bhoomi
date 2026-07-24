import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { PageContainer } from "../../styles/user/products/Products.styles";

import ProductsHero from "../../components/user/products/ProductsHero";
import ProductsFilter from "../../components/user/products/ProductsFilter";
import ProductsGrid from "../../components/user/products/ProductsGrid";
import CTASection from "../../components/user/home/CTASection";

import { useGetCmsByPageQuery } from "@/store/api/apiSlice";

const ProductsPage: NextPage = () => {
  const { data } = useGetCmsByPageQuery("products");

  const hero = data?.content || {
    bannerTitle: "Our Agricultural Innovations",
    bannerDescription:
      "Empowering farmers with high-quality, scientifically backed inputs for sustainable and maximized yield.",
    bannerImage: {
      url: "",
      publicId: "",
    },
  };

  return (
    <>
      <Head>
        <title>Products - Samrudh Bhoomi</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="description"
          content="Empowering farmers with high-quality, scientifically backed inputs for sustainable and maximized yield."
        />
      </Head>

      <PageContainer>
        <ProductsHero hero={hero} />

        <ProductsFilter />

        <ProductsGrid />

        <CTASection />
      </PageContainer>
    </>
  );
};

export default ProductsPage;