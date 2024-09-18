import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentNearshoreVsOffshore from "../../components/Blog/BlogDetailsContentNearshoreVsOffshore";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/selecting-best-outsourcing-strategy-nearshore-vs-offshore-outsourcing",
          title:
            "Selecting the Best Outsourcing Strategy: Nearshore vs. Offshore Outsourcing",
          description:
            "Discover the key differences between nearshore and offshore outsourcing to make an informed decision for your business Choose the right strategy today!",
          images: [
            {
              url: "https://triosource.com/images/blog/selecting-best-outsourcing-strategy-nearshore-vs-offshore-outsourcing.png",
              width: 800,
              height: 600,
              alt: "Discover the key differences between nearshore and offshore outsourcing to make an informed decision for your business Choose the right strategy today!",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore vs. Offshore Outsourcing",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/selecting-best-outsourcing-strategy-nearshore-vs-offshore-outsourcing"
        title="Selecting the Best Outsourcing Strategy: Nearshore vs. Offshore Outsourcing"
        headline="Selecting the Best Outsourcing Strategy: Nearshore vs. Offshore Outsourcing"
        description="Discover the key differences between nearshore and offshore outsourcing to make an informed decision for your business Choose the right strategy today!"
        datePublished="Feb 17, 2023"
        dateModified="Feb 17, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/selecting-best-outsourcing-strategy-nearshore-vs-offshore-outsourcing",
          article: {
            publishedTime: "Feb 17, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Selecting the Best Outsourcing Strategy: Nearshore vs. Offshore
          Outsourcing
        </title>
        <meta
          property="og:title"
          content="Selecting the Best Outsourcing Strategy: Nearshore vs. Offshore Outsourcing"
          key="title"
        />
        <meta
          name="description"
          content="Discover the key differences between nearshore and offshore outsourcing to make an informed decision for your business. Choose the right strategy today!"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/selecting-best-outsourcing-strategy-nearshore-vs-offshore-outsourcing-tb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Selecting the Best Outsourcing Strategy: Nearshore vs. Offshore Outsourcing | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentNearshoreVsOffshore />
      <Footer />
    </>
  );
};

export default BlogDetails;
