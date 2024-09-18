import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentNearshoreOutsourcingTrends from "../../components/Blog//BlogDetailsContentNearshoreOutsourcingTrends";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/nearshore-outsourcing-trends",
          title:
            "Challenges and Solutions in Nearshore Outsourcing: How to Overcome Distance Barriers | Triosource",
          description:
            "Challenges and Solutions in Nearshore Outsourcing How to Overcome Distance Barriers",
          images: [
            {
              url: "https://triosource.com/images/blog/nearshore-outsourcing-trends.png",
              width: 800,
              height: 600,
              alt: "Challenges and Solutions in Nearshore Outsourcing How to Overcome Distance Barriers",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Outsourcing",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/nearshore-outsourcing-trends"
        title="Challenges and Solutions in Nearshore Outsourcing: How to Overcome Distance Barriers | Triosource"
        headline="Challenges and Solutions in Nearshore Outsourcing: How to Overcome Distance Barriers | Triosource"
        description="Challenges and Solutions in Nearshore Outsourcing How to Overcome Distance Barriers"
        datePublished="November 23, 2023"
        dateModified="November 23, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/nearshore-outsourcing-trends",
          article: {
            publishedTime: "November 23, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Challenges and Solutions in Nearshore Outsourcing: How to Overcome
          Distance Barriers | Triosource
        </title>
        <meta
          property="og:title"
          content="Challenges and Solutions in Nearshore Outsourcing: How to Overcome Distance Barriers | Triosource"
          key="title"
        />
        <meta
          name="description"
          content="Challenges and Solutions in Nearshore Outsourcing: How to Overcome Distance Barriers"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshore-outsourcing-trends.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Challenges and Solutions in Nearshore Outsourcing: How to Overcome Distance Barriers | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentNearshoreOutsourcingTrends />
      <Footer />
    </>
  );
};

export default BlogDetails;
