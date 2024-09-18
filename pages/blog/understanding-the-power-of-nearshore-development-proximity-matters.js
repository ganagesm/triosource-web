import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ProximityMatters from "../../components/Blog/ProximityMatters";
import Footer from "../../components/Live/Footer";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog//understanding-the-power-of-nearshore-development-proximity-matters",
          title: "Proximity Matters: Advantages of Nearshore Development",
          description:
            "Discover how proximity in nearshore development boosts collaboration, cuts costs, and accelerates projects Unlock global success with Triosource",
          images: [
            {
              url: "https://triosource.com/images/blog/proximity-matters.jpeg",
              width: 800,
              height: 600,
              alt: "Discover how proximity in nearshore development boosts collaboration, cuts costs, and accelerates projects Unlock global success with Triosource",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore vs. Offshore",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog//understanding-the-power-of-nearshore-development-proximity-matters"
        title="Proximity Matters: Advantages of Nearshore Development"
        headline="Proximity Matters: Advantages of Nearshore Development"
        description="Discover how proximity in nearshore development boosts collaboration, cuts costs, and accelerates projects Unlock global success with Triosource"
        datePublished="Nov 20, 2023"
        dateModified="Nov 20, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog//understanding-the-power-of-nearshore-development-proximity-matters",
          article: {
            publishedTime: "Nov 20, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>Proximity Matters: Advantages of Nearshore Development </title>
        <meta
          property="og:title"
          content="Proximity Matters: Advantages of Nearshore Development"
          key="title"
        />
        <meta
          name="description"
          content="Discover how proximity in nearshore development boosts collaboration, cuts costs, and accelerates projects. Unlock global success with Triosource."
          key="description"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Understanding the Power of Nearshore Development: Proximity Matters"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <ProximityMatters />
      <Footer />
    </>
  );
};

export default BlogDetails;
