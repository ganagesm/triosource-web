import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentAITrainedNearshoreSoftware from "../../components/Blog/BlogDetailsContentAITrainedNearshoreSoftware";
import Footer from "../../components/Live/Footer";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/ultimate-guide-to-ai-trained-nearshore-software-development",
          title:
            "TrioSource - Pioneering Digital Solutions with Advanced Tech & Expertise!",
          description:
            "Navigate the digital future with TrioSource! Specializing in AI, IoT, Data Science, Cloud Infrastructure, and more, we turn your tech goals into reality Engage with us to explore innovative solutions, tailored just for your business, and drive transformative results together",
          images: [
            {
              url: "https://triosource.com/images/blog/ultimate-guide-to-ai-trained-nearshore-software-development-min.png",
              width: 800,
              height: 600,
              alt: "Navigate the digital future with TrioSource! Specializing in AI, IoT, Data Science, Cloud Infrastructure, and more, we turn your tech goals into reality Engage with us to explore innovative solutions, tailored just for your business, and drive transformative results together",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/ultimate-guide-to-ai-trained-nearshore-software-development"
        title="TrioSource - Pioneering Digital Solutions with Advanced Tech & Expertise!"
        headline="TrioSource - Pioneering Digital Solutions with Advanced Tech & Expertise!"
        description="Navigate the digital future with TrioSource! Specializing in AI, IoT, Data Science, Cloud Infrastructure, and more, we turn your tech goals into reality Engage with us to explore innovative solutions, tailored just for your business, and drive transformative results together"
        datePublished="October 23, 2023"
        dateModified="October 23, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/ultimate-guide-to-ai-trained-nearshore-software-development",
          article: {
            publishedTime: "October 23, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>Ultimate Guide to AI-Trained Nearshore Software Dev</title>
        <meta
          property="og:title"
          content="Ultimate Guide to AI-Trained Nearshore Software Dev"
          key="title"
        />
        <meta
          name="description"
          content="Master the benefits of AI-trained nearshore software development. Your guide to smarter, efficient project execution."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/ultimate-guide-to-ai-trained-nearshore-software-development-min.png"
        />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Ultimate Guide to AI-Trained Nearshore Software Development | TrioSource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentAITrainedNearshoreSoftware />
      <Footer />
    </>
  );
};

export default BlogDetails;
