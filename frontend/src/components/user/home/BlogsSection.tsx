import React from "react";
import { Container, CardContent, Box } from "@mui/material";
import {
  BlogsSectionContainer,
  BlogsHeader,
  BlogsTitle,
  BlogsSubtitle,
  ViewAllButton,
  BlogsGrid,
  BlogCard,
  BlogImageWrapper,
  BlogImage,
  BlogMeta,
  BlogCategory,
  BlogDate,
  BlogCardTitle,
  BlogExcerpt,
} from "../../../styles/user/home/BlogsSection.styles";

const blogs = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8D-XiX-twGg_oO496HxRgHxn277gE2mydtqJE6mG-0A9jRs3o21KAXJGjuFdu8NQ-qp8lBDlVRacCZ1U10Bk62uDEzioxivRU56K7HdH9TsX2cHBser52G6pNERqw-o2uaOikwHeeIpu6KQ022_f-CpqiwBovzlUp2DbIQdfIltdaVvSQ_aj2LNDfALqSloBzn3xG70WKD-WkIV5pLv7X6SkjKmIn-bya0kyfBw3SJPxWoasTaTzwY1xCrn_AarODy4yHDrVYNOGb",
    category: "Agronomy",
    date: "Oct 15, 2024",
    title: "Optimizing Soil Health for the Upcoming Season",
    excerpt:
      "Learn the fundamental steps to prepare your soil architecture to maximize nutrient retention and yield.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFLRcr0jEbSoS1SyMpEUGKKy_9-IPImPtP5o8mJVA-3T982pyn0JDbPTmRT6WUu2adGTvOkqI6-u4NjtcOZBoXcp3tQykBkkQqAzlF6ZzF1NJlTAmCcZG9rq9YoY_0sQ8xVWH2IBZgtwYMuI23fuh0CKl50UZ062Vm76b6d_oT7D8EwZhfzfnedvXjHY-Rx10wBO1yNhQ2hFVv5GXq5VWMPeEQgcI7zfMNkeKKaZZxyYrzeB_tcvghOnxUU5k45oFnItrjzsU-aTgZ",
    category: "Technology",
    date: "Oct 02, 2024",
    title: "Integrating Drone Tech into Daily Operations",
    excerpt:
      "Discover how precision agriculture using drones is reducing waste and improving crop monitoring.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUxQ9X9pVAop_nVLWlkp3upCU-GPMhufLelYAs6bAOM1xVOQ7scGo9oJw_UzMRCcWpRN6jEFYqvt1pgMxRWL7JFGMShajqNJqxRFfXv307IXyoZV-hKtSLlQpEtFtYxUdlvd2M1QGD4Ipq24JjzBnDUYpdV-QPDc6byRw0SmBQTa6Ve56_kAeBeqUTEITJJX77YEUkrIqpbhzneRigSP3CHXn4Gtq7DkTUJRTl9b351sjKSiR8QQZTaq-Z5zHTaOlf6oXTcm9NEwvm",
    category: "Sustainability",
    date: "Sep 28, 2024",
    title: "The Future of Sustainable Crop Protection",
    excerpt:
      "Exploring new eco-friendly methods to protect crops while maintaining biodiversity and soil integrity.",
  },
];

const BlogsSection: React.FC = () => {
  return (
    <BlogsSectionContainer>
      <Container maxWidth="xl">
        <BlogsHeader>
          <Box>
            <BlogsTitle variant="h2">Insights &amp; Updates</BlogsTitle>
            <BlogsSubtitle variant="body1">
              Stay informed with the latest trends, tips, and news in modern
              agriculture.
            </BlogsSubtitle>
          </Box>
          <ViewAllButton variant="outlined">View All Articles</ViewAllButton>
        </BlogsHeader>
        <BlogsGrid>
          {blogs.map((blog, index) => (
            <BlogCard key={index}>
              <BlogImageWrapper>
                <BlogImage src={blog.image} alt={blog.title} />
              </BlogImageWrapper>
              <CardContent>
                <BlogMeta>
                  <BlogCategory variant="caption">{blog.category}</BlogCategory>
                  <BlogDate variant="caption">{blog.date}</BlogDate>
                </BlogMeta>
                <BlogCardTitle variant="h6">{blog.title}</BlogCardTitle>
                <BlogExcerpt variant="body2">{blog.excerpt}</BlogExcerpt>
              </CardContent>
            </BlogCard>
          ))}
        </BlogsGrid>
      </Container>
    </BlogsSectionContainer>
  );
};

export default BlogsSection;
