import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentStreamlinedSupplyChain from "../../components/Blog/BlogDetailsContentStreamlinedSupplyChain";
import Footer from "../../components/Live/Footer";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/nearshoring-the-key-to-a-streamlined-supply-chain",
          title: "Nearshoring: The Key to a Streamlined Supply Chain",
          description:
            "Discover how nearshoring can streamline your supply chain, reduce risks, and enhance operational efficiency. Learn why this strategic move is key to success in today's global market.",
          images: [
            {
              url: "https://triosource.com/images/blog/nearshoring-the-key-to-a-streamlined-supply-chain.jpg",
              width: 800,
              height: 600,
              alt: "Discover how nearshoring can streamline your supply chain, reduce risks, and enhance operational efficiency. Learn why this strategic move is key to success in today's global market.",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/nearshoring-the-key-to-a-streamlined-supply-chain"
        title="Nearshoring: The Key to a Streamlined Supply Chain"
        headline="AI Revolution in Nearshore Software Development"
        description="Discover how nearshoring can streamline your supply chain, reduce risks, and enhance operational efficiency. Learn why this strategic move is key to success in today's global market."
        datePublished="05 september, 2024"
        dateModified="05 september, 2024"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/nearshoring-the-key-to-a-streamlined-supply-chain",
          article: {
            publishedTime: "05 september, 2024",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Nearshoring: Streamline Your Supply Chain for Efficiency and
          Resilience
        </title>
        <meta
          property="og:title"
          content="Nearshoring: The Key to a Streamlined Supply Chain"
          key="title"
        />
        <meta
          name="description"
          content="Discover how nearshoring can streamline your supply chain, reduce risks, and enhance operational efficiency. Learn why this strategic move is key to success in today's global market."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshoring-the-key-to-a-streamlined-supply-chain.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshoring: The Key to a Streamlined Supply Chain"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentStreamlinedSupplyChain />
      <Footer />
    </>
  );
};

export default BlogDetails;
