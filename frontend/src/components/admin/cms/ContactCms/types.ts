export interface UploadedImage {
    url: string;
    publicId: string;
  }
  
  /* ---------------- Hero ---------------- */
  
  export interface HeroType {
    title: string;
    description: string;
    image: UploadedImage;
  }
  
  /* ---------------- Contact Section ---------------- */
  
  export interface ContactCardType {
    title: string;
    subtitle: string;
    icon: string;
    value: string;
    link: string;
  }
  
  export interface ContactSectionType {
    title: string;
    description: string;
    contactCards: ContactCardType[];
  }
  
  /* ---------------- Office Section ---------------- */
  
  export interface OfficeAddressType {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  }
  
  export interface OfficeMapType {
    embedUrl: string;
    locationUrl: string;
  }

  export interface OfficeSectionType {
    title: string;
    address: OfficeAddressType;
    map: OfficeMapType;
  }
  
  /* ---------------- FAQ ---------------- */
  
  export interface FAQItemType {
    question: string;
    answer: string;
  }
  
  export interface FAQSectionType {
    title: string;
    description: string;
    items: FAQItemType[];
  }
  
  /* ---------------- Complete Contact CMS ---------------- */
  
  export interface ContactCmsType {
    hero: HeroType;
    contactSection: ContactSectionType;
    officeSection: OfficeSectionType;
    faqSection: FAQSectionType;
  }