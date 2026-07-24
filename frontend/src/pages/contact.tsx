import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { PageContainer } from "../styles/user/contact/Contact.styles";

import ContactHero from "../components/user/contact/ContactHero";
import ContactFormSection from "../components/user/contact/ContactFormSection";
import ContactMapSection from "../components/user/contact/ContactMapSection";
import ContactFAQSection from "../components/user/contact/ContactFAQSection";
import CTASection from "../components/user/home/CTASection";

import { useGetCmsByPageQuery } from "@/store/api/apiSlice";
import { ContactCmsType } from "../components/user/contact/contactCms";

const ContactPage: NextPage = () => {
  const { data } = useGetCmsByPageQuery("contact");

  const cms: ContactCmsType | undefined = data?.content;

  return (
    <>
      <Head>
        <title>Contact Us - Samrudh Bhoomi</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="description"
          content={
            cms?.hero.description ||
            "Get in touch with our agricultural experts. We're here to support your farming operations."
          }
        />
      </Head>

      <PageContainer>
        <ContactHero hero={cms?.hero} />

        <ContactFormSection
          contactSection={cms?.contactSection}
        />

        <ContactMapSection
          officeSection={cms?.officeSection}
        />

        <ContactFAQSection
          faqSection={cms?.faqSection}
        />

        <CTASection />
      </PageContainer>
    </>
  );
};

export default ContactPage;