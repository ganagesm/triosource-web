import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentChoosingtheRightNearshorePartner from "../../components/Blog//BlogDetailsContentChoosingtheRightNearshorePartner";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/choosing-the-right-nearshore-partner",
          title:
            "Choosing the Right Nearshore Partner: Criteria for Selecting a Reliable Vendor",
          description:
            "Discover the key criteria for selecting a reliable nearshore partner Make informed decisions and ensure success in outsourcing",
          images: [
            {
              url: "https://triosource.com/images/blog/choosing-the-right-nearshore.jpg",
              width: 800,
              height: 600,
              alt: "Discover the key criteria for selecting a reliable nearshore partner Make informed decisions and ensure success in outsourcing",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Partner",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/choosing-the-right-nearshore-partner"
        title="Choosing the Right Nearshore Partner: Criteria for Selecting a Reliable Vendor"
        headline="Choosing the Right Nearshore Partner: Criteria for Selecting a Reliable Vendor"
        description="Discover the key criteria for selecting a reliable nearshore partner Make informed decisions and ensure success in outsourcing"
        datePublished="July 10, 2023"
        dateModified="July 10, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/choosing-the-right-nearshore-partner",
          article: {
            publishedTime: "July 10, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Choosing the Right Nearshore Partner: Criteria for Selecting a
          Reliable Vendor
        </title>
        <meta
          property="og:title"
          content="Choosing the Right Nearshore Partner: Criteria for Selecting a Reliable Vendor"
          key="title"
        />
        <meta
          name="description"
          content="Discover the key criteria for selecting a reliable nearshore partner. Make informed decisions and ensure success in outsourcing."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/choosing-the-right-nearshore-thumb.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Choosing the Right Nearshore Partner: Criteria for Selecting a Reliable Vendor | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentChoosingtheRightNearshorePartner />
      <Footer />
    </>
  );
};

export default BlogDetails;
