export interface ImageType {
    url: string;
    publicId: string;
  }
  
  export interface CompanyType {
    logo: ImageType;
    copyright: string;
    description: string;
  }
  
  export interface FooterLink {
    label: string;
    url: string;
  }
  
  export interface FooterLinksType {
    title: string;
    links: FooterLink[];
  }
  
  export interface SocialLink {
    platform: string;
    icon: string;
    url: string;
  }
  
  export interface SocialLinksType {
    title: string;
    items: SocialLink[];
  }
  
  export interface BottomBarType {
    leftText: string;
    rightText: string;
  }
  
  export interface FooterContentType {
    company: CompanyType;
    companyLinks: FooterLinksType;
    productLinks: FooterLinksType;
    legalLinks: FooterLinksType;
    socialLinks: SocialLinksType;
    bottomBar: BottomBarType;
  }