import React from "react";
import {
  FooterSection,
  FooterGrid,
  FooterLogo,
  FooterText,
  FooterHeading,
  FooterLink,
  FooterLinkList,
} from "../../styles/user/Footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterGrid>
        {/* Column 1 - Logo & Copyright */}
        <div>
          <FooterLogo src="logo.jpeg" alt="Samrudh Bhoomi Logo" />
          <FooterText variant="body2">
            © 2024 Samrudh Bhoomi Private Limited.
            <br />
            All rights reserved.
          </FooterText>
        </div>

        {/* Column 2 - Company */}
        <div>
          <FooterHeading variant="overline">Company</FooterHeading>
          <FooterLinkList>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/blogs">Blogs</FooterLink>
          </FooterLinkList>
        </div>

        {/* Column 3 - Products */}
        <div>
          <FooterHeading variant="overline">Products</FooterHeading>
          <FooterLinkList>
            <FooterLink href="#">Products</FooterLink>
            <FooterLink href="#">Fertilizers</FooterLink>
            <FooterLink href="#">Organic Products</FooterLink>
            <FooterLink href="#">Seeds</FooterLink>
            <FooterLink href="#">Pesticides</FooterLink>
          </FooterLinkList>
        </div>

        {/* Column 4 - Legal */}
        <div>
          <FooterHeading variant="overline">Legal</FooterHeading>
          <FooterLinkList>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </FooterLinkList>
        </div>
      </FooterGrid>
    </FooterSection>
  );
};

export default Footer;
