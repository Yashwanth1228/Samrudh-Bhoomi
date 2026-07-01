import React, { useState } from "react";
import { Container, Box } from "@mui/material";

import { BlogHero } from "@/components/user/blog/BlogHero";
import { BlogFeatured } from "@/components/user/blog/BlogFeatured";
import { BlogFilters } from "@/components/user/blog/BlogFilters";
import { BlogCard } from "@/components/user/blog/BlogCard";
import { BlogPagination } from "@/components/user/blog/BlogPagination";
import { BlogNewsletter } from "@/components/user/blog/BlogNewsletter";

import { BlogPageContainer } from "@/styles/user/blog/Blog.styles";
import { useGetBlogsQuery } from "@/store/api/apiSlice";
import { CenterBox, Spinner, StatusCard, StatusText, StatusTitle } from "@/styles/admin/Blog.styles";
import CTASection from "@/components/user/home/CTASection";

// Sample blog data
// const blogPosts = [
//   {
//     id: 1,
//     title: "Selecting the Right High-Yield Seeds for Variable Climates",
//     excerpt:
//       "A comprehensive guide to understanding seed resilience and choosing the perfect varieties to ensure a bountiful harvest despite unpredictable weather patterns.",
//     category: "Seeds",
//     date: "Oct 20, 2023",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBcag8aNS5DgbaIvBVDnT6WqO-g_vO7_kRRIqO4mQ8C7m6P582r3tw0hU_m1-rUqbyTvokXc240GTlu5-M76JP_oZpOkpvW_a_Ld2g-52DCRk1Ufb9dPDljP8AB5WB5odtyXNqft60ib_Glk9uiZluXJuKOooA5atsZHybim6XCMeOAETwXXAQfPTe32i8Kw34oteHDMKGPHexEkkbq6MmmSucdRevyeFqY_w_pGl6oSnfHJDJeE3oY03wsjOpoT5mvf6vbTLnh1vm0",
//     featured: false,
//   },
//   {
//     id: 2,
//     title: "Data-Driven Agriculture: Maximizing ROI with Smart Sensors",
//     excerpt:
//       "Learn how implementing IoT soil sensors can reduce water waste by 30% and optimize fertilizer application, leading to significant cost savings and healthier crops.",
//     category: "Tech",
//     date: "Oct 18, 2023",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAfZqgStXhPXDU2kyg5sU-o-czKtvzpeZhgsaRCXRRVfGIdZwXWJ31CgqG-EgvJi6A_netWqW5zrildCyq3B2XadN2E9y4cBDZZ_ttbEgr2jOzQLE03Bno5wiOQgDyrf-CW6in0mLtW6kuOizu8TVV5zlb0V2IZy7Uk23dKChZDYzc5-Smor5qZuOA0ONQyACuWWYZglnM9Cu2YXiJlYvwFFUlAfoYt4oKvN2HPmsbdwvlzqspyA-AfSSuKQR59l04SvkLU5-L3Ilpl",
//     featured: false,
//   },
//   {
//     id: 3,
//     title: "The Shift to Organic: Enhancing Soil Microbes Long-Term",
//     excerpt:
//       "Transitioning away from harsh synthetic chemicals doesn't mean sacrificing yield. We break down the science of organic fertilizers and soil microbiology.",
//     category: "Fertilizers",
//     date: "Oct 15, 2023",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBcJOF9yk94lI7dBcpv1BhwNgH5ODLIbVpvwKaiBD065dghaH9QK63pXBeMpOE4RGC8e4lAD3PG9-1KebGdkNUvReIB-xChWGfHutzT4NFDmxfRMFgPYL3fki7ZNdSOKDH3BH_Ievn13JRpsgUZHtCCjZkt_Dfsw51skfWX1sjQa01sCaQnodbyIAn1Lb6Q1_4XiPIvC1YJtEulYG57AaoLsMwl1xCe-La8L0ccHP6Wcwm5MyBzf_Z72nBe4v74Z8Ews0adoXDW0tpW",
//     featured: false,
//   },
//   {
//     id: 4,
//     title: "The Future of Sustainable Farming: Integrating Tech and Tradition",
//     excerpt:
//       "Discover how modern drones and organic fertilizers are revolutionizing crop yields while preserving soil health for future generations.",
//     category: "Featured",
//     date: "Oct 24, 2023",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBKWHhmJp7kzWxGXn9as7dXNZIT3sQ9zmt6sPm0uslky7VC_SUq-8wZn6S050F4qk-ax5_icu8X8bii3OvPx4O_H92_p3BKcS7Ayq9ecHA1dh3ZNlKr29t1myb5j2_pkxRP_4CXwflfUqo__F4GTBDPBFRsJzgOGkO57p0dq0k-Uo4oWhjQqSE_YSKvxi9UoEllLr8RAlnqNbZ4vO5QQQQdItoXwkyhg-lVewAIiRuTjn3KCZ__Mjt0qzkzJyGXaqVYlrh65m52S7VZ",
//     featured: true,
//   },
// ];
interface BlogPost {
  _id: string;
  id?: string;

  title: string;
  slug: string;
  category: string;

  featuredImages: string[];

  excerpt: string;
  content: string;

  readTime: string;

  author: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };

  seo: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
  };

  status: "draft" | "published";

  featured?: boolean;

  publishedAt?: string;

  views: number;

  relatedPosts: string[];

  createdAt: string;
  updatedAt: string;
  date: string;
  image: string;
}

const categories = [
  "All",
  "Farming Tips",
  "Fertilizers",
  "Organic Products",
  "Seeds",
  "Pesticides",
  "Agriculture Technology",
  "Company Updates",
];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const { data : blogPosts, error, isLoading: blogloading} = useGetBlogsQuery();
  console.log(" the data from server", blogPosts);

  const featuredPost = blogPosts?.find((post:BlogPost) => post.featured);
  const regularPosts = blogPosts?.filter((post:BlogPost) => !post.featured);

  const filteredPosts = regularPosts?.filter((post:BlogPost) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts?.length / postsPerPage);
  const currentPosts = filteredPosts?.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (blogloading) {
    return (
      <CenterBox>
        <StatusCard>
          <Spinner />
          <StatusTitle>Loading blogs...</StatusTitle>
          <StatusText>Please wait while we fetch your data</StatusText>
        </StatusCard>
      </CenterBox>
    );
  }

  return (
    <BlogPageContainer>
      {/* Hero Section */}
      <BlogHero />

      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 }, py: 6 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Featured Blog */}
          {featuredPost && <BlogFeatured post={featuredPost} />}

          {/* Filters */}
          <BlogFilters
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            categories={categories}
            sortBy={sortBy}
            onSortChange={handleSortChange}
            totalPosts={filteredPosts.length}
          />

          {/* Blog Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {currentPosts?.map((post:any) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </Box>

          {/* Pagination */}
          {totalPages > 1 && (
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}

          {/* Newsletter */}
          {/* <BlogNewsletter /> */}
          <CTASection />
        </Box>
      </Container>
    </BlogPageContainer>
  );
}
