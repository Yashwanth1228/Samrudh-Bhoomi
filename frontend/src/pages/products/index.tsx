import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { PageContainer } from "../../styles/user/products/Products.styles";

import ProductsHero from "../../components/user/products/ProductsHero";
import ProductsFilter from "../../components/user/products/ProductsFilter";
import ProductsGrid from "../../components/user/products/ProductsGrid";
import CTASection from "../../components/user/home/CTASection";

import { useGetCmsByPageQuery } from "@/store/api/apiSlice";
import { useGetProductsQuery } from "@/store/api/apiSlice";

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

  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,

    search: "",
    category: "",
    status: "",
    alphabetical: "",
    price: "",
  });

  const { data : productdata, isLoading, error, refetch, isFetching } =
    useGetProductsQuery(filters);
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

         <ProductsFilter filters={filters} onChange={setFilters} />

        <ProductsGrid
          products={productdata?.data ?? []}
          pagination={productdata?.pagination}
          filters={filters}
          onChange={setFilters}
          loading={isLoading}
          error={error}
          refetch={refetch}
          isFetching={isFetching}
        />

       <CTASection />
       
      </PageContainer>
    </>
  );
};

export default ProductsPage;