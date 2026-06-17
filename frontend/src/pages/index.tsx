// import React, { useState } from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardMedia,
//   CardContent,
//   IconButton,
//   useTheme,
//   useMediaQuery,
//   Collapse,
// } from "@mui/material";

// // import { Grid } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

// import {
//   Inventory2 as InventoryIcon,
//   Groups as GroupsIcon,
//   Storefront as StorefrontIcon,
//   Verified as VerifiedIcon,
//   Science as ScienceIcon,
//   SupportAgent as SupportAgentIcon,
//   LocalShipping as LocalShippingIcon,
//   ExpandMore as ExpandMoreIcon,
//   ArrowForward as ArrowForwardIcon,
//   WhatsApp as WhatsAppIcon,
//   Email as EmailIcon,
//   Menu as MenuIcon,
//   Close as CloseIcon,
// } from "@mui/icons-material";

// // import EcoIcon from "@mui/icons-material";

// import {
//   HomeContainer,
//   Header,
//   MobileMenu,
//   MobileMenuItem,
//   HeroSection,
//   HeroOverlay,
//   HeroContent,
//   StatsSection,
//   StatsCard,
//   AboutSection,
//   AboutImageWrapper,
//   ProductsSection,
//   ProductCard,
//   WhyChooseSection,
//   WhyCard,
//   BlogSection,
//   BlogCard,
//   FAQSection,
//   FAQItem,
//   CTASection,
//   Footer,
//   FooterGrid,
//   ProductImageWrapper,
//   ProductOverlay,
//   ProductTitle,
// } from "@/styles/Home.styles";

// export default function HomePage() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

//   const handleFaqToggle =
//     (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//       setExpandedFaq(isExpanded ? panel : false);
//     };

//   const stats = [
//     { icon: <InventoryIcon />, value: "50+", label: "Premium Products" },
//     { icon: <GroupsIcon />, value: "10,000+", label: "Happy Customers" },
//     { icon: <StorefrontIcon />, value: "500+", label: "Authorized Dealers" },
//     { icon: <VerifiedIcon />, value: "15+", label: "Years Experience" },
//   ];

//   const products = [
//     {
//       title: "Fertilizers",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuDWYg0FG286yC9xdhhg5uRLrR9xW1nZ8rdU2KwOWZQxawIAl17sBDRMBz93aJsAzfVryouqjmFIoNrrgwA7HkvlFByYQwiNKzmg2bD8PzVtUZ7_H-1Od9WXiRntYJCAUestBRFWfdAvYMqSYxw7qlmtBKvZXo-EOj_lzzVhyOOIyehAysPewpuix08B9TgO1mUJ_hFw3lrT0LW5fP5ZwOONb2n8AfWYcLnYoKtSwiTU3zqbPtI_Lu8n4zv5FDcfarYpTwlW8JoCpDu3",
//       description:
//         "Premium organic and synthetic fertilizers formulated for optimal soil health and nutrient delivery.",
//     },
//     {
//       title: "Seeds",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuDld63Wq3IrKLiL4jvSKmoA6L-_6_44aAsTl-H9fPVe7FLp7t8jBesGbQuR7pMv0PrHSQFe6HXzoOCLDW2tHD12JMmmHQmPF-l3Vhs-sCSGQthE2FRl2BZF0TP8wcHD8WBo2SajLOsOPD4MwCeXOHMYeDPmKcTMV1ZIss_YTVGsxYRIZ57OPPN47LpO2p6eYiWaH20V86Zw3BBw1QFxtE8V3wbVDQKPFUYlRRPhCzF26XGIm2l7dg9pXUIYnMZcPdgu6Gcm1bh4kKrN",
//       description:
//         "High-yield, disease-resistant seeds selected for local climates and maximum productivity.",
//     },
//     {
//       title: "Pesticides",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuDWUtwQXMtAalFl9MWfW-ggYAVRavUGZ6SPHknED6KPs-2w9WeCrSJC0jt78uGugHTQrdlhmTRgStkokVl12LomhICeOCAu9E_nr7Ltdjg6izJiSBEz54tYxcmDWZAfjviUO7NUx8w1rT2fgqZaC-sCU9GrZwJlIinJU01FodvmnvGR9Md4nPWeUztaOAr2t3P3UgBnnbz75PBdNAD7ouEFDvipID7VtWjVUKQXbv1TSMMoXoRqpSs4vd5RHVDDu2hG83LQDKtk5p2X",
//       description:
//         "Eco-friendly crop protection solutions that effectively manage pests while minimizing environmental impact.",
//     },
//     {
//       title: "Equipment",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuDASLBEAWtx6pYqodWBTl223A_7MEjfR6F9dfGEH17h2s9_kjxQgk9dg8DwDxA3gBu8I6PPIhR30MOEjDODQkO1zU6OEVHIv354sLZAOzwiH6iEDqqbtpTvyJlMjKeOG4nZhNZpL2CWIBThLgTDPFDfXPoceM-p1MA8QDDv8kAzkAi-SPIW5uVH7zTh_b81btDCUr3nKqAPJwwDPPgPNRU7n4gN-Jv30-k4KqNACEx57u_kypDMs7VbIQln_eRiUv2-DBh0p6yJWpMk",
//       description:
//         "Modern, efficient farming tools and machinery to streamline your agricultural operations.",
//     },
//   ];

//   const whyChoose = [
//     {
//       icon: <ScienceIcon />,
//       title: "Scientific Approach",
//       description:
//         "Our products are developed through rigorous R&D, ensuring they meet the specific agronomic needs of modern farming environments.",
//     },
//     {
//       icon: <SupportAgentIcon />,
//       title: "Expert Support",
//       description:
//         "Access a team of dedicated agronomists ready to provide personalized consultation and troubleshooting for your farm.",
//     },
//     {
//       icon: <LocalShippingIcon />,
//       title: "Reliable Supply Chain",
//       description:
//         "With a robust distribution network, we ensure timely delivery of essential inputs exactly when you need them.",
//     },
//   ];

//   const blogs = [
//     {
//       category: "Agronomy",
//       date: "Oct 15, 2024",
//       title: "Optimizing Soil Health for the Upcoming Season",
//       description:
//         "Learn the fundamental steps to prepare your soil architecture to maximize nutrient retention and yield.",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuA8D-XiX-twGg_oO496HxRgHxn277gE2mydtqJE6mG-0A9jRs3o21KAXJGjuFdu8NQ-qp8lBDlVRacCZ1U10Bk62uDEzioxivRU56K7HdH9TsX2cHBser52G6pNERqw-o2uaOikwHeeIpu6KQ022_f-CpqiwBovzlUp2DbIQdfIltdaVvSQ_aj2LNDfALqSloBzn3xG70WKD-WkIV5pLv7X6SkjKmIn-bya0kyfBw3SJPxWoasTaTzwY1xCrn_AarODy4yHDrVYNOGb",
//     },
//     {
//       category: "Technology",
//       date: "Oct 02, 2024",
//       title: "Integrating Drone Tech into Daily Operations",
//       description:
//         "Discover how precision agriculture using drones is reducing waste and improving crop monitoring.",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuCFLRcr0jEbSoS1SyMpEUGKKy_9-IPImPtP5o8mJVA-3T982pyn0JDbPTmRT6WUu2adGTvOkqI6-u4NjtcOZBoXcp3tQykBkkQqAzlF6ZzF1NJlTAmCcZG9rq9YoY_0sQ8xVWH2IBZgtwYMuI23fuh0CKl50UZ062Vm76b6d_oT7D8EwZhfzfnedvXjHY-Rx10wBO1yNhQ2hFVv5GXq5VWMPeEQgcI7zfMNkeKKaZZxyYrzeB_tcvghOnxUU5k45oFnItrjzsU-aTgZ",
//     },
//     {
//       category: "Sustainability",
//       date: "Sep 28, 2024",
//       title: "The Future of Sustainable Crop Protection",
//       description:
//         "Exploring new eco-friendly methods to protect crops while maintaining biodiversity and soil integrity.",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuDUxQ9X9pVAop_nVLWlkp3upCU-GPMhufLelYAs6bAOM1xVOQ7scGo9oJw_UzMRCcWpRN6jEFYqvt1pgMxRWL7JFGMShajqNJqxRFfXv307IXyoZV-hKtSLlQpEtFtYxUdlvd2M1QGD4Ipq24JjzBnDUYpdV-QPDc6byRw0SmBQTa6Ve56_kAeBeqUTEITJJX77YEUkrIqpbhzneRigSP3CHXn4Gtq7DkTUJRTl9b351sjKSiR8QQZTaq-Z5zHTaOlf6oXTcm9NEwvm",
//     },
//   ];

//   const faqs = [
//     {
//       question: "Do you provide bulk ordering for large enterprises?",
//       answer:
//         "Yes, we offer specialized bulk pricing and dedicated account management for large agricultural enterprises and cooperatives. Please contact our sales team to discuss your specific requirements.",
//     },
//     {
//       question: "Are your organic products certified?",
//       answer:
//         "Absolutely. All our organic fertilizers and pesticides carry relevant national and international certifications, ensuring they meet strict organic farming standards.",
//     },
//     {
//       question: "Do you offer agronomic consultation?",
//       answer:
//         "We provide comprehensive agronomic support. Our team of experts can assist with soil testing analysis, crop planning, and customized input recommendations.",
//     },
//   ];

//   return (
//     <HomeContainer>
//       {/* Header */}
//       <Header>
//         <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               height: 80,
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//               <Box
//                 component="img"
//                 src="/logo.jpeg"
//                 alt="Logo"
//                 sx={{ height: 40 }}
//               />
//               {!isMobile && (
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: 700, color: "#1b1b1b" }}
//                 >
//                   Samrudh Bhoomi Private Limited
//                 </Typography>
//               )}
//             </Box>

//             {!isMobile ? (
//               <>
//                 <Box sx={{ display: "flex", gap: 3 }}>
//                   {["Home", "About Us", "Products", "Blogs", "Contact Us"].map(
//                     (item) => (
//                       <Typography
//                         key={item}
//                         sx={{
//                           cursor: "pointer",
//                           fontWeight: item === "Home" ? 700 : 500,
//                           color: item === "Home" ? "#1b1b1b" : "text.secondary",
//                           borderBottom: item === "Home" ? "2px solid" : "none",
//                           borderColor: "#1b1b1b",
//                           pb: 0.5,
//                           "&:hover": { color: "#1b1b1b" },
//                         }}
//                       >
//                         {item}
//                       </Typography>
//                     ),
//                   )}
//                 </Box>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     borderRadius: 2,
//                     textTransform: "none",
//                     color: "#fff",
//                     bgcolor: "#1C651B",
//                     border: "#1b1b1b",
//                   }}
//                 >
//                   Login
//                 </Button>
//               </>
//             ) : (
//               <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
//               </IconButton>
//             )}
//           </Box>
//         </Container>

//         {/* Mobile Menu */}
//         <Collapse in={mobileMenuOpen}>
//           <MobileMenu>
//             {["Home", "About Us", "Products", "Blogs", "Contact Us"].map(
//               (item) => (
//                 <MobileMenuItem key={item} active={item === "Home"}>
//                   {item}
//                 </MobileMenuItem>
//               ),
//             )}
//             <Button
//               variant="contained"
//               fullWidth
//               sx={{ mt: 2, textTransform: "none" }}
//             >
//               Login
//             </Button>
//           </MobileMenu>
//         </Collapse>
//       </Header>

//       {/* Hero Section */}
//       <HeroSection>
//         <Box component="img" src="/hero-image.jpg" alt="Agriculture" />

//         <HeroOverlay />

//         <HeroContent>
//           <Typography
//             sx={{
//               fontSize: { xs: "2.8rem", md: "4.5rem" },
//               fontWeight: 800,
//               lineHeight: 1.1,
//               color: "#fff",
//               mb: 3,
//             }}
//           >
//             Sustainable Solutions for
//             <br />
//             Agricultural Excellence
//           </Typography>

//           <Typography
//             sx={{
//               color: "rgba(255,255,255,0.9)",
//               fontSize: "1.1rem",
//               maxWidth: 600,
//               mb: 5,
//             }}
//           >
//             Empowering farmers with premium fertilizers, high-yield seeds, and
//             organic growth solutions designed for the future of farming.
//           </Typography>

//           <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
//             <Button
//               variant="contained"
//               sx={{
//                 bgcolor: "#8BC34A",
//                 color: "#1b1b1b",
//                 px: 4,
//                 py: 1.7,
//                 fontWeight: 700,
//                 borderRadius: "10px",
//                 "&:hover": {
//                   bgcolor: "#7CB342",
//                 },
//               }}
//             >
//               Explore Products
//             </Button>

//             <Button
//               variant="outlined"
//               sx={{
//                 borderColor: "rgba(255,255,255,0.8)",
//                 color: "#fff",
//                 px: 4,
//                 py: 1.7,
//                 fontWeight: 700,
//                 borderRadius: "10px",

//                 "&:hover": {
//                   backgroundColor: "rgba(255,255,255,0.1)",
//                   borderColor: "#fff",
//                 },
//               }}
//             >
//               Contact Us
//             </Button>
//           </Box>
//         </HeroContent>
//       </HeroSection>

//       {/* Stats Section */}
//       <StatsSection>
//         <Container maxWidth="lg">
//           <Grid container spacing={3}>
//             {stats.map((stat, index) => (
//               <Grid size={{ xs: 6, md: 3 }} key={index}>
//                 <StatsCard>
//                   <Box
//                     sx={{
//                       width: 56,
//                       height: 56,
//                       borderRadius: 2,
//                       bgcolor: "#fff",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#1C6518",
//                       mb: 1,
//                     }}
//                   >
//                     {stat.icon}
//                   </Box>
//                   <Typography
//                     variant="h4"
//                     sx={{ fontWeight: 700, color: "#154406" }}
//                   >
//                     {stat.value}
//                   </Typography>
//                   <Typography variant="caption" color="#154406">
//                     {stat.label}
//                   </Typography>
//                 </StatsCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </StatsSection>

//       {/* About Section */}
//       {/* About Section - Redesigned based on the image */}
//       <AboutSection>
//         <Container maxWidth="lg">
//           {/* Main About Content */}
//           <Grid container spacing={8} sx={{ alignItems: "center" }}>
//             {/* Left Side - Image */}
//             <Grid size={{ xs: 12, md: 6 }}>
//               <AboutImageWrapper>
//                 <Box
//                   component="img"
//                   src="/about-image.jpg"
//                   alt="Soil and plant"
//                   sx={{
//                     width: "100%",
//                     height: "auto",
//                     objectFit: "cover",
//                     borderRadius: "24px",
//                   }}
//                 />
//               </AboutImageWrapper>
//             </Grid>

//             {/* Right Side - Content */}
//             <Grid size={{ xs: 12, md: 6 }}>
//               <Box
//                 sx={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 1,
//                   px: 2,
//                   py: 0.6,
//                   borderRadius: "20px",
//                   bgcolor: "#e8f5e9",
//                   color: "#2e7d32",
//                   mb: 3,
//                 }}
//               >
//                 <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
//                   About Samrudh Bhoomi
//                 </Typography>
//               </Box>

//               <Typography
//                 sx={{
//                   fontSize: { xs: "2rem", md: "3rem" },
//                   fontWeight: 800,
//                   lineHeight: 1.2,
//                   color: "#1b5e20",
//                   mb: 3,
//                 }}
//               >
//                 Rooted in Quality,
//                 <br />
//                 Growing with Trust
//               </Typography>

//               <Typography
//                 sx={{
//                   color: "#616161",
//                   lineHeight: 1.8,
//                   mb: 3,
//                   fontSize: "0.95rem",
//                 }}
//               >
//                 Since our inception, Samrudh Bhoomi Private Limited has been at
//                 the forefront of agricultural innovation. We believe in
//                 providing solutions that not only increase yield but preserve
//                 the integrity of the soil for generations to come.
//               </Typography>

//               <Typography
//                 sx={{
//                   color: "#616161",
//                   lineHeight: 1.8,
//                   mb: 4,
//                   fontSize: "0.95rem",
//                 }}
//               >
//                 Our commitment to sustainable practices, rigorous quality
//                 control, and premium inputs has made us a trusted partner for
//                 thousands of farmers, agribusinesses, and agricultural
//                 enterprises across the region.
//               </Typography>

//               <Button
//                 variant="outlined"
//                 sx={{
//                   borderColor: "#2e7d32",
//                   color: "#1b5e20",
//                   px: 4,
//                   py: 1.2,
//                   borderRadius: "8px",
//                   textTransform: "none",
//                   fontWeight: 600,
//                   fontSize: "0.9rem",
//                   "&:hover": {
//                     bgcolor: "#2e7d32",
//                     color: "#fff",
//                     borderColor: "#2e7d32",
//                   },
//                 }}
//               >
//                 Learn More About Us
//               </Button>
//             </Grid>
//           </Grid>

//           {/* Mission Section */}
//           <Box sx={{ mt: 12, textAlign: "center" }}>
//             <Typography
//               sx={{
//                 fontSize: { xs: "1.8rem", md: "2.5rem" },
//                 fontWeight: 700,
//                 color: "#1b5e20",
//                 mb: 2,
//               }}
//             >
//               Our Mission
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: "1rem", md: "1.2rem" },
//                 color: "#616161",
//                 maxWidth: "800px",
//                 mx: "auto",
//                 lineHeight: 1.6,
//               }}
//             >
//               To deliver unparalleled quality, deep-rooted customer trust,
//               transparent practices, and excellence.
//             </Typography>
//           </Box>

//           {/* Stats Section - Key Metrics */}
//           {/* Stats Cards Section */}
//           <Box sx={{ mt: 8 }}>
//             <Typography
//               sx={{
//                 fontSize: { xs: "1.2rem", md: "1.5rem" },
//                 fontWeight: 600,
//                 color: "#1b5e20",
//                 textAlign: "center",
//                 mb: 6,
//               }}
//             >
//               Founded with a core focus on...
//             </Typography>

//             <Grid container spacing={4}>
//               {[
//                 {
//                   value: "1000+",
//                   label: "Farmers Served",
//                   description: "Across the region",
//                   icon: "🌾",
//                 },
//                 {
//                   value: "50+",
//                   label: "Premium Products",
//                   description: "Quality assured",
//                   icon: "🌱",
//                 },
//                 {
//                   value: "15+",
//                   label: "Years Experience",
//                   description: "In agri-innovation",
//                   icon: "🏆",
//                 },
//               ].map((stat, index) => (
//                 <Grid size={{ xs: 12, md: 4 }} key={index}>
//                   <Box
//                     sx={{
//                       textAlign: "center",
//                       p: 4,
//                       borderRadius: "16px",
//                       bgcolor: "#f9f9f9",
//                       transition: "all 0.3s",
//                       "&:hover": {
//                         transform: "translateY(-8px)",
//                         boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
//                       },
//                     }}
//                   >
//                     <Typography sx={{ fontSize: "2.5rem", mb: 1 }}>
//                       {stat.icon}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         fontSize: { xs: "2.5rem", md: "3rem" },
//                         fontWeight: 800,
//                         color: "#2e7d32",
//                         mb: 1,
//                       }}
//                     >
//                       {stat.value}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         fontSize: "1rem",
//                         fontWeight: 600,
//                         color: "#424242",
//                         mb: 1,
//                       }}
//                     >
//                       {stat.label}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         fontSize: "0.85rem",
//                         color: "#757575",
//                       }}
//                     >
//                       {stat.description}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Container>
//       </AboutSection>

//       {/* Products Section */}
//       <ProductsSection>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 6 }}>
//             <Typography
//               variant="h3"
//               sx={{ fontWeight: 700, color: "#154406", mb: 2 }}
//             >
//               Our Products & Solutions
//             </Typography>
//             <Typography
//               variant="body1"
//               color="#154406"
//               sx={{ maxWidth: 600, mx: "auto" }}
//             >
//               Comprehensive agricultural inputs designed to maximize your yield
//               and ensure sustainable farming practices.
//             </Typography>
//           </Box>
//           <Grid container spacing={3}>
//             {products.map((product, index) => (
//               <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
//                 <ProductCard>
//                   <ProductImageWrapper>
//                     <img src={product.image} alt={product.title} />

//                     <ProductOverlay />

//                     <ProductTitle>{product.title}</ProductTitle>
//                   </ProductImageWrapper>

//                   <CardContent sx={{ p: 3 }}>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       sx={{
//                         lineHeight: 1.8,
//                         mb: 3,
//                       }}
//                     >
//                       {product.description}
//                     </Typography>

//                     <Button
//                       endIcon={<ArrowForwardIcon />}
//                       sx={{
//                         color: "#154406",
//                         textTransform: "none",
//                         fontWeight: 600,
//                         p: 0,

//                         "&:hover": {
//                           background: "transparent",
//                           color: "#2e7d32",
//                         },
//                       }}
//                     >
//                       Explore Range
//                     </Button>
//                   </CardContent>
//                 </ProductCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </ProductsSection>

//       {/* Why Choose Us Section */}
//       <WhyChooseSection>
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 6 }}>
//             <Typography
//               variant="h3"
//               sx={{ fontWeight: 700, color: "#154406", mb: 2 }}
//             >
//               Why Choose Samrudh Bhoomi?
//             </Typography>
//             <Typography
//               variant="body1"
//               color="#154406"
//               sx={{ maxWidth: 600, mx: "auto" }}
//             >
//               We bring enterprise-grade solutions and uncompromising quality to
//               every acre you farm.
//             </Typography>
//           </Box>
//           <Grid container spacing={3}>
//             {whyChoose.map((item, index) => (
//               <Grid size={{ xs: 12, md: 4 }} key={index}>
//                 <WhyCard>
//                   <Box
//                     sx={{
//                       width: 64,
//                       height: 64,
//                       borderRadius: 2,
//                       bgcolor: "#fff",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#1C651B",
//                       mb: 3,
//                     }}
//                   >
//                     {item.icon}
//                   </Box>
//                   <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" color="#154406">
//                     {item.description}
//                   </Typography>
//                 </WhyCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </WhyChooseSection>

//       {/* Blog Section */}
//       <BlogSection>
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-end",
//               mb: 4,
//               flexWrap: "wrap",
//               gap: 2,
//             }}
//           >
//             <Box>
//               <Typography
//                 variant="h3"
//                 sx={{ fontWeight: 700, color: "#154406", mb: 1 }}
//               >
//                 Insights & Updates
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Stay informed with the latest trends, tips, and news in modern
//                 agriculture.
//               </Typography>
//             </Box>
//             <Button variant="outlined" sx={{ textTransform: "none" }}>
//               View All Articles
//             </Button>
//           </Box>
//           <Grid container spacing={3}>
//             {blogs.map((blog, index) => (
//               <Grid size={{ xs: 12, md: 4 }} key={index}>
//                 <BlogCard>
//                   <CardMedia
//                     component="img"
//                     height="250"
//                     image={blog.image}
//                     alt={blog.title}
//                   />
//                   <CardContent>
//                     <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//                       <Typography
//                         variant="caption"
//                         sx={{
//                           color: "#154406",
//                           fontWeight: 700,
//                           textTransform: "uppercase",
//                         }}
//                       >
//                         {blog.category}
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         {blog.date}
//                       </Typography>
//                     </Box>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: 700,
//                         mb: 1,
//                         cursor: "pointer",
//                         "&:hover": { color: "#1C651B" },
//                       }}
//                     >
//                       {blog.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {blog.description}
//                     </Typography>
//                   </CardContent>
//                 </BlogCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </BlogSection>

//       {/* FAQ Section */}
//       <FAQSection>
//         <Container maxWidth="md">
//           <Box sx={{ textAlign: "center", mb: 6 }}>
//             <Typography
//               variant="h3"
//               sx={{ fontWeight: 700, color: "#154406", mb: 2 }}
//             >
//               Frequently Asked Questions
//             </Typography>
//             <Typography variant="body1" color="text.secondary">
//               Find answers to common queries about our products and services.
//             </Typography>
//           </Box>
//           <Box>
//             {faqs.map((faq, index) => (
//               <FAQItem
//                 key={index}
//                 expanded={expandedFaq === index}
//                 onChange={handleFaqToggle(index)}
//               >
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: 600,
//                       color: "#154406",
//                     }}
//                   >
//                     {faq.question}
//                   </Typography>
//                 </AccordionSummary>

//                 <AccordionDetails>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{
//                       lineHeight: 1.8,
//                     }}
//                   >
//                     {faq.answer}
//                   </Typography>
//                 </AccordionDetails>
//               </FAQItem>
//             ))}
//           </Box>
//         </Container>
//       </FAQSection>

//       {/* CTA Section */}
//       <CTASection>
//         <Container maxWidth="md">
//           <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
//             <Typography
//               variant="h3"
//               sx={{ fontWeight: 700, color: "white", mb: 3 }}
//             >
//               Ready to Transform Your Yield?
//             </Typography>
//             <Typography variant="body1" sx={{ color: "white/90", mb: 4 }}>
//               Partner with Samrudh Bhoomi Private Limited for expert
//               agricultural solutions tailored to your specific farming needs.
//               Our enterprise team is ready to assist you.
//             </Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 gap: 3,
//                 justifyContent: "center",
//                 flexWrap: "wrap",
//               }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<WhatsAppIcon />}
//                 sx={{
//                   bgcolor: "#25D366",
//                   "&:hover": { bgcolor: "#154406" },
//                   textTransform: "none",
//                 }}
//               >
//                 Chat with Enterprise Sales
//               </Button>
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<EmailIcon />}
//                 sx={{
//                   bgcolor: "white",
//                   color: "#154406",
//                   "&:hover": { bgcolor: "grey.100" },
//                   textTransform: "none",
//                 }}
//               >
//                 Request a Quote
//               </Button>
//             </Box>
//           </Box>
//         </Container>
//       </CTASection>

//       {/* Footer */}
//       <Footer>
//         <Container maxWidth="lg">
//           <FooterGrid>
//             <Box>
//               <Box
//                 component="img"
//                 src="/logo.jpeg"
//                 alt="Logo"
//                 sx={{ height: 40, mb: 2, opacity: 0.8 }}
//               />
//               <Typography variant="body2" color="text.secondary">
//                 © 2024 Samrudh Bhoomi Private Limited.
//                 <br />
//                 All rights reserved.
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 variant="caption"
//                 sx={{
//                   fontWeight: 700,
//                   color: "#154406",
//                   mb: 2,
//                   display: "block",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                 }}
//               >
//                 Company
//               </Typography>
//               <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
//                 {["Home", "About Us", "Contact Us", "Blogs"].map((item) => (
//                   <Box component="li" key={item} sx={{ mb: 1 }}>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         cursor: "pointer",
//                         "&:hover": { color: "#138808" },
//                       }}
//                     >
//                       {item}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>
//             <Box>
//               <Typography
//                 variant="caption"
//                 sx={{
//                   fontWeight: 700,
//                   color: "#154406",
//                   mb: 2,
//                   display: "block",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                 }}
//               >
//                 Products
//               </Typography>
//               <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
//                 {[
//                   "Products",
//                   "Fertilizers",
//                   "Organic Products",
//                   "Seeds",
//                   "Pesticides",
//                 ].map((item) => (
//                   <Box component="li" key={item} sx={{ mb: 1 }}>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         cursor: "pointer",
//                         "&:hover": { color: "#138808" },
//                       }}
//                     >
//                       {item}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>
//             <Box>
//               <Typography
//                 variant="caption"
//                 sx={{
//                   fontWeight: 700,
//                   color: "#154406",
//                   mb: 2,
//                   display: "block",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                 }}
//               >
//                 Legal
//               </Typography>
//               <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
//                 {["Privacy Policy", "Terms of Service"].map((item) => (
//                   <Box component="li" key={item} sx={{ mb: 1 }}>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         cursor: "pointer",
//                         "&:hover": { color: "#138808" },
//                       }}
//                     >
//                       {item}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>
//           </FooterGrid>
//         </Container>
//       </Footer>
//     </HomeContainer>
//   );
// }

import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../styles/user/home/Home.styles";
import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import HeroSection from "../components/user/home/HeroSection";
import StatsSection from "../components/user/home/StatsSection";
import AboutSection from "../components/user/home/AboutSection";
import ProductsSection from "../components/user/home/ProductsSection";
import WhySection from "../components/user/home/WhySection";
import BlogsSection from "../components/user/home/BlogsSection";
import FAQSection from "../components/user/home/FAQSection";
import CTASection from "../components/user/home/CTASection";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Samrudh Bhoomi Private Limited - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sustainable Solutions for Agricultural Excellence"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageContainer>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProductsSection />
        <WhySection />
        <BlogsSection />
        <FAQSection />
        <CTASection />
      </PageContainer>
    </>
  );
};

export default HomePage;
