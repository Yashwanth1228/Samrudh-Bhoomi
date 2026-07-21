import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { PageContainer } from "../../styles/user/product/ProductDetail.styles";
import ProductDetail from "../../components/user/product/ProductDetail";

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Product Details - Samrudh Bhoomi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <PageContainer>
        <ProductDetail slug={slug as string} />
      </PageContainer>
    </>
  );
};

export default ProductDetailPage;
