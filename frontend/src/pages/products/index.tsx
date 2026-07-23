import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../../styles/user/products/Products.styles";
import ProductsHero from "../../components/user/products/ProductsHero";
import ProductsFilter from "../../components/user/products/ProductsFilter";
import ProductsGrid from "../../components/user/products/ProductsGrid";
import ProductsCTA from "../../components/user/products/ProductsCTA";
import { useGetProductsQuery } from "@/store/api/apiSlice";

const ProductsPage: NextPage = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,

    search: "",
    category: "",
    status: "",
    alphabetical: "",
    price: "",
  });

  const { data, isLoading, error, refetch, isFetching } =
    useGetProductsQuery(filters);
  return (
    <>
      <Head>
        <title>Products - Samrudh Bhoomi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Empowering farmers with high-quality, scientifically backed inputs for sustainable and maximized yield."
        />
      </Head>

      <PageContainer>
        <ProductsHero />
        <ProductsFilter filters={filters} onChange={setFilters} />
        <ProductsGrid
          products={data?.data ?? []}
          pagination={data?.pagination}
          filters={filters}
          onChange={setFilters}
          loading={isLoading}
          error={error}
          refetch={refetch}
          isFetching={isFetching}
        />
        <ProductsCTA />
      </PageContainer>
    </>
  );
};

export default ProductsPage;
