import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import WhyProximityMatters from "../../components/Blog/WhyProximityMatters";
import Footer from "../../components/Live/Footer";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/the-advantages-of-nearshore-development-why-proximity-matters",
          title: "Proximity Matters: Nearshore Development Benefits",
          description:
            "Discover nearshore development s edge with proximity advantages Explore how Triosource optimizes global collaboration for your business success",
          images: [
            {
              url: "https://triosource.com/images/blog/the-advantages-of-nearshore-development-why-proximity-matters.png",
              width: 800,
              height: 600,
              alt: "Discover nearshore development s edge with proximity advantages Explore how Triosource optimizes global collaboration for your business success",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/the-advantages-of-nearshore-development-why-proximity-matters"
        title="Proximity Matters: Nearshore Development Benefits"
        headline="Proximity Matters: Nearshore Development Benefits"
        description="Discover nearshore development s edge with proximity advantages Explore how Triosource optimizes global collaboration for your business success"
        datePublished="Nov 01, 2023"
        dateModified="Nov 01, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/the-advantages-of-nearshore-development-why-proximity-matters",
          article: {
            publishedTime: "Nov 01, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>Proximity Matters: Nearshore Development Benefits </title>
        <meta
          property="og:title"
          content="Proximity Matters: Nearshore Development Benefits"
          key="title"
        />
        <meta
          name="description"
          content="Discover nearshore development's edge with proximity advantages. Explore how Triosource optimizes global collaboration for your business success."
          key="description"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Proximity Matters: Nearshore Development Benefits"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <WhyProximityMatters />
      <Footer />
    </>
  );
};

export default BlogDetails;
