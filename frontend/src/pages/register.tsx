import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../styles/signup/Signup.styles";
import SignupForm from "../components/signup/SignupForm";

const SignupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Samrudh Bhoomi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Create your account to access products, inquiries, brochure downloads, and future services."
        />
      </Head>

      <PageContainer>
        <SignupForm />
      </PageContainer>
    </>
  );
};

export default SignupPage;
