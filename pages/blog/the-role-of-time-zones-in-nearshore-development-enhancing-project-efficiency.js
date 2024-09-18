import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentEnhancingProjectEfficiency from "../../components/Blog//BlogDetailsContentEnhancingProjectEfficiency";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/the-role-of-time-zones-in-nearshore-development-enhancing-project-efficiency",
          title:
            "The Role of Time Zones in Nearshore Development: Enhancing Project Efficiency",
          description:
            "Explore the impact of time zones on nearshore development and how they can boost project efficiency in this comprehensive guide",
          images: [
            {
              url: "https://triosource.com/images/blog/enhancing-project-efficiency.png",
              width: 800,
              height: 600,
              alt: "Explore the impact of time zones on nearshore development and how they can boost project efficiency in this comprehensive guide",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/the-role-of-time-zones-in-nearshore-development-enhancing-project-efficiency"
        title="The Role of Time Zones in Nearshore Development: Enhancing Project Efficiency"
        headline="The Role of Time Zones in Nearshore Development: Enhancing Project Efficiency"
        description="Explore the impact of time zones on nearshore development and how they can boost project efficiency in this comprehensive guide"
        datePublished="January 02, 2024"
        dateModified="January 02, 2024"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/the-role-of-time-zones-in-nearshore-development-enhancing-project-efficiency",
          article: {
            publishedTime: "January 02, 2024",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          The Role of Time Zones in Nearshore Development: Enhancing Project
          Efficiency
        </title>
        <meta
          property="og:title"
          content="The Role of Time Zones in Nearshore Development: Enhancing Project Efficiency"
          key="title"
        />
        <meta
          name="description"
          content="Explore the impact of time zones on nearshore development and how they can boost project efficiency in this comprehensive guide."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/enhancing-project-efficiency.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="The Role of Time Zones in Nearshore Development: Enhancing Project Efficiency"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentEnhancingProjectEfficiency />
      <Footer />
    </>
  );
};

export default BlogDetails;
