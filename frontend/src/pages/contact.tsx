import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../styles/user/contact/Contact.styles";
import ContactHero from "../components/user/contact/ContactHero";
import ContactFormSection from "../components/user/contact/ContactFormSection";
import ContactMapSection from "../components/user/contact/ContactMapSection";
import ContactFAQSection from "../components/user/contact/ContactFAQSection";
import ContactCTASection from "../components/user/contact/ContactCTASection";

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Samrudh Bhoomi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Get in touch with our agricultural experts. We're here to support your farming operations."
        />
      </Head>

      <PageContainer>
        <ContactHero />
        <ContactFormSection />
        <ContactMapSection />
        <ContactFAQSection />
        <ContactCTASection />
      </PageContainer>
    </>
  );
};

export default ContactPage;
