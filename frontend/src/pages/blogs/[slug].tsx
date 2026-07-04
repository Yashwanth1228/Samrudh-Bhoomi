import React from "react";
import { useRouter } from "next/router";
import { Container, Box } from "@mui/material";

import { BlogDetailHero } from "@/components/user/blog/BlogDetail/BlogDetailHero";
import { BlogDetailContent } from "@/components/user/blog/BlogDetail/BlogDetailContent";
import { BlogDetailSidebar } from "@/components/user/blog/BlogDetail/BlogDetailSidebar";
import { BlogDetailAuthor } from "@/components/user/blog/BlogDetail/BlogDetailAuthor";
import { BlogDetailRelated } from "@/components/user/blog/BlogDetail/BlogDetailRelated";
import { BlogDetailCTA } from "@/components/user/blog/BlogDetail/BlogDetailCTA";

import { BlogDetailContainer } from "@/styles/user/blog/BlogDetail/BlogDetail.styles";
import { useGetBlogbyslugQuery } from "@/store/api/apiSlice";
import CTASection from "@/components/user/home/CTASection";
import LoadingState from "@/components/common/LoadingState";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

// Sample blog data - In a real app, this would come from an API
// const blogData = {
//   id: 1,
//   title: "The Future of Sustainable Farming: Integrating Tech and Tradition",
//   category: "Agriculture Technology",
//   readTime: "6 min read",
//   date: "October 24, 2023",
//   author: {
//     name: "Dr. Arvind Sharma",
//     title: "Senior Agricultural Scientist",
//     bio: "Senior Agricultural Scientist with over 15 years of experience in agronomical research. Dr. Sharma specializes in integrating precision technology with sustainable farming practices to improve crop resilience in arid regions.",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZlYxqqQTzDOYhvSAhX0FQ-UopWQqLS_zmYbLbZkD-YjsCSl_z1SGMHv1HydEPtsTjBU8Y8oqkjw3yl7WupHBsBqXLW6MEn9qyWjHIfgnjUqQ2f8l6PBZgnxC8BHLK3Ldbwt8pg_a6WkhHFKG0VQC2386Sa-hE1k9tRnmSYU-Tf2D2-3XlBZaSo8XCkw4VcgYuBPRPrFGcxhFLvbGFsH4kDV3Cp50BeioXRIn7Cp7MPHPyyturku8v1Ay-1UJmFJkdgcAl-SoXSIwk",
//   },
//   image: "https://t3.ftcdn.net/jpg/04/44/29/88/360_F_444298806_TL4e98PxzTBoFoEWvwKWEOUv25z6XFcx.jpg",
//   content: `
//     <p>The agricultural landscape is undergoing a profound transformation. As we face the dual challenges of a growing global population and climate change, the old paradigms of farming are no longer sufficient. However, the answer doesn't lie in discarding traditional wisdom, but rather in augmenting it with cutting-edge technology. This intersection is where the future of sustainable farming takes root.</p>
    
//     <h2>The Role of Precision Agri-Tech</h2>
//     <p>Precision agriculture uses technology to ensure that crops and soil receive exactly what they need for optimum health and productivity. The goal is to maximize yields while minimizing environmental impact. From GPS-guided tractors to IoT soil sensors, technology is providing granular data that was previously unimaginable.</p>
    
//     <blockquote>"Technology doesn't replace the farmer; it empowers them to be better stewards of the land, turning anecdotal feeling into actionable data."</blockquote>
    
//     <p>Consider the deployment of aerial drones. Once a novelty, they are now essential tools for crop monitoring, allowing farmers to detect pest infestations, nutrient deficiencies, or water stress long before they become visible to the naked eye from the ground.</p>
    
//     <h2>Organic Practices Meet Data</h2>
//     <p>Sustainable farming isn't just about reducing chemical inputs; it's about optimizing organic practices. Data analytics allows farmers to track the efficacy of organic composts, monitor crop rotation outcomes, and predict weather patterns with greater accuracy. This synergy provides several tangible benefits:</p>
    
//     <ul>
//       <li><strong>Increased Yield Density:</strong> Optimizing planting patterns and localized nutrient application based on soil topography mapping.</li>
//       <li><strong>Reduced Water Waste:</strong> Utilizing micro-irrigation systems triggered automatically by real-time soil moisture sensors.</li>
//       <li><strong>Enhanced Soil Health:</strong> Monitoring microbial activity and organic matter degradation over time through longitudinal data collection.</li>
//     </ul>
    
//     <p>The transition requires initial investment, but the long-term ROI—both financial and environmental—is compelling. As Samrudh Bhoomi continues to innovate, we remain committed to bridging this gap, providing farmers with the tools that honor the earth while securing our collective future.</p>
//   `,
//   relatedPosts: [
//     {
//       id: 2,
//       title: "Selecting High-Yield Seeds for Variable Climates",
//       category: "AGRONOMY",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRb3KjEz_XM1fgpzyJQMR4A2hOeZu3KPpazFD755mnLha5pWGkqvthJbldFbWTE4z-d3In-OwuCyCvCUiaMj00YcmyzcSrrvcQLr52uY3kXNf1K-jnIKpxkufatIerMY_UkW1jlh5Jw2aS5RbfWJcoB6lPKPLTQOdQM7srOW_5NrKsAD5ShSvNzmAl0x3xs4mvPT_hf28adMJ277trSXEIMF3C56oEMuBZMmukbmkrFVDmNA63rwgmW_DW0BRf1wAIkN2D6lyYf8O0",
//       description: "A comprehensive guide to matching seed genetics with predictive climate modeling for optimal regional performance.",
//     },
//     {
//       id: 3,
//       title: "The Shift to Organic: A Financial Perspective",
//       category: "SUSTAINABILITY",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZzjaGVrghDb2M0BiQrKKJW-SjNsmTr8JB2qTnuV1YVXLTDLn1zlflLs5Li6hql_SCBgjkMyYG-pnpipBmtZOgLvCSP4YrM4HMQ__i_1H6xjQmMF5eJdHGnEvVBCW4FB6VFm_oaw62M199K6SCGKd5zmc7crMegbV2xEDewzE-ByJX6Xh-tjaAr2YQJzaS3866iyXbE_GqiQ78lebjyWhWCk3TLwz2LNUbS7ZAC73vQITz9yL1r-dsY81ttgNukSkjsJsS1oHhgxsX",
//       description: "Analyzing the cost-benefit ratio of transitioning large-scale operations to certified organic practices over a 5-year period.",
//     },
//   ],
// };

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: blogData, isLoading: blogloading, error , isFetching,refetch } = useGetBlogbyslugQuery(slug as string);

  // In a real app, fetch blog data based on slug
  const post = blogData;
  console.log("the blog data are : ", post);

  if (blogloading)
  return <LoadingState title="Loading Blogs..." message="Please wait while we fetch your data." />;

if (error)
  return (
    <ErrorState
  title="Failed to Load Blogs"
  message="Unable to fetch blogs."
  loading={isFetching}
  onRetry={refetch}
/>
  );

if (!post)
  return (
    <EmptyState
      title="No blogs Found"
      message="Create your first blog to get started."
    />
  );

  return (
    <BlogDetailContainer>
      {/* Breadcrumb and Hero */}
      <BlogDetailHero post={post} />

      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ position: "relative", py: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Left Sidebar - Social Share */}
            {/* <BlogDetailSidebar /> */}

            {/* Main Content */}
            <Box sx={{ width: "100%", maxWidth: "900px" }}>
        <BlogDetailContent post={post} />
      </Box>

            {/* Right Sidebar - Empty for spacing */}
            {/* <Box sx={{ display: { xs: "none", lg: "block" } }} /> */}
          </Box>
        </Box>

        {/* Related Articles */}
        <BlogDetailRelated posts={post?.relatedPosts} />

        {/* CTA Section */}
        {/* <BlogDetailCTA /> */}
        <CTASection />
      </Container>
    </BlogDetailContainer>
  );
}