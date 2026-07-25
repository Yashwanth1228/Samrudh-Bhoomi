import React from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import {
  FooterSection,
  FooterGrid,
  FooterLogo,
  FooterText,
  FooterHeading,
  FooterLink,
  FooterLinkList,
  BottomBar,
  SocialContainer,
  SocialIcon,
} from "../../styles/user/Footer.styles";

import { useGetCmsByPageQuery } from "@/store/api/apiSlice";

const iconMap: Record<string, React.ReactNode> = {
  Instagram: <Instagram fontSize="small" />,
  Facebook: <Facebook fontSize="small" />,
  LinkedIn: <LinkedIn fontSize="small" />,
  YouTube: <YouTube fontSize="small"/>,
  Twitter: <Twitter fontSize="small" />,
};

const Footer: React.FC = () => {
  const { data } = useGetCmsByPageQuery("footer");

  const footer = data?.content;

  return (
    <FooterSection>
      <FooterGrid>
        {/* Company */}

        <div>
          <FooterLogo
            src={
              footer?.company?.logo?.url ||
              "/logo.jpeg"
            }
            alt="Samrudh Bhoomi"
          />

          <FooterText>
            {footer?.company?.description ||
              "Providing innovative agricultural solutions for sustainable farming."}
          </FooterText>

          <FooterText sx={{ mt: 2 }}>
            {footer?.company?.copyright ||
              "© 2026 Samrudh Bhoomi Pvt. Ltd. All rights reserved."}
          </FooterText>
        </div>

        {/* Company Links */}

        <div>
          <FooterHeading>
            {footer?.companyLinks?.title || "Company"}
          </FooterHeading>

          <FooterLinkList>
            {(footer?.companyLinks?.links?.length
              ? footer.companyLinks.links
              : [
                  {
                    label: "Home",
                    url: "/",
                  },
                  {
                    label: "About",
                    url: "/about",
                  },
                  {
                    label: "Products",
                    url: "/products",
                  },
                  {
                    label: "Blogs",
                    url: "/blogs",
                  },
                  {
                    label: "Contact",
                    url: "/contact",
                  },
                ]).map((item: any, index: number) => (
              <FooterLink
                key={index}
                href={item.url || "#"}
              >
                {item.label}
              </FooterLink>
            ))}
          </FooterLinkList>
        </div>

        {/* Products */}

        <div>
          <FooterHeading>
            {footer?.productLinks?.title || "Products"}
          </FooterHeading>

          <FooterLinkList>
            {(footer?.productLinks?.links?.length
              ? footer.productLinks.links
              : [
                  {
                    label: "Fertilizers",
                    url: "#",
                  },
                  {
                    label: "Seeds",
                    url: "#",
                  },
                  {
                    label: "Organic Products",
                    url: "#",
                  },
                  {
                    label: "Pesticides",
                    url: "#",
                  },
                ]).map((item: any, index: number) => (
              <FooterLink
                key={index}
                href={item.url || "#"}
              >
                {item.label}
              </FooterLink>
            ))}
          </FooterLinkList>
        </div>

        {/* Legal + Social */}

        <div>
          <FooterHeading>
            {footer?.legalLinks?.title || "Legal"}
          </FooterHeading>

          <FooterLinkList sx={{ mb: 3 }}>
            {(footer?.legalLinks?.links?.length
              ? footer.legalLinks.links
              : [
                  {
                    label: "Privacy Policy",
                    url: "#",
                  },
                  {
                    label: "Terms & Conditions",
                    url: "#",
                  },
                ]).map((item: any, index: number) => (
              <FooterLink
                key={index}
                href={item.url || "#"}
              >
                {item.label}
              </FooterLink>
            ))}
          </FooterLinkList>

          <FooterHeading>
            {footer?.socialLinks?.title || "Follow Us"}
          </FooterHeading>

          <SocialContainer>
            {(footer?.socialLinks?.items?.length
              ? footer.socialLinks.items
              : [
                  {
                    icon: "Instagram",
                    url: "#",
                  },
                  {
                    icon: "Facebook",
                    url: "#",
                  },
                  {
                    icon: "LinkedIn",
                    url: "#",
                  },
                ]).map((item: any, index: number) => (
              <SocialIcon
                key={index}
                href={item.url || "#"}
                target="_blank"
              >
                {iconMap[item.icon]}
              </SocialIcon>
            ))}
          </SocialContainer>
        </div>
      </FooterGrid>

      <BottomBar>
        <FooterText>
          {footer?.bottomBar?.leftText ||
            "Empowering agriculture with innovation."}
        </FooterText>

        <FooterText>
          {footer?.bottomBar?.rightText ||
            "Made with ❤️ by Samrudh Bhoomi"}
        </FooterText>
      </BottomBar>
    </FooterSection>
  );
};

export default Footer;