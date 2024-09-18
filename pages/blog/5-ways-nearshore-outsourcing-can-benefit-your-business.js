import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentNearshoreOutsourcingCanBenefit from "../../components/Blog/BlogDetailsContentNearshoreOutsourcingCanBenefit";
import Footer from "../../components/Live/Footer";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/how-ai-is-revolutionizing-nearshore-software-development",
          title:
            "5 Ways Nearshore Outsourcing Can Benefit Your Business | Advantages & Benefits of Nearshoring",
          description:
            "Explore the top 5 ways Nearshore Outsourcing can revolutionize your business. Discover the advantages of nearshoring, from cost savings to enhanced collaboration, and learn why nearshore outsourcing is a smart choice for companies looking to optimize their operations.",
          images: [
            {
              url: "https://triosource.com/images/blog/how-ai-is-revolutionizing-nearshore-software-development-min.png",
              width: 800,
              height: 600,
              alt: "Explore the top 5 ways Nearshore Outsourcing can revolutionize your business. Discover the advantages of nearshoring, from cost savings to enhanced collaboration, and learn why nearshore outsourcing is a smart choice for companies looking to optimize their operations.",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/how-ai-is-revolutionizing-nearshore-software-development"
        title="5 Ways Nearshore Outsourcing Can Benefit Your Business | Advantages & Benefits of Nearshoring"
        headline="AI Revolution in Nearshore Software Development"
        description="Explore the top 5 ways Nearshore Outsourcing can revolutionize your business. Discover the advantages of nearshoring, from cost savings to enhanced collaboration, and learn why nearshore outsourcing is a smart choice for companies looking to optimize their operations."
        datePublished="28 august, 2024"
        dateModified="28 august, 2024"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/how-ai-is-revolutionizing-nearshore-software-development",
          article: {
            publishedTime: "28 august, 2024",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          5 Ways Nearshore Outsourcing Can Benefit Your Business | Advantages &
          Benefits of Nearshoring
        </title>
        <meta
          property="og:title"
          content="5 Ways Nearshore Outsourcing Can Benefit Your Business | Advantages & Benefits of Nearshoring"
          key="title"
        />
        <meta
          name="description"
          content="Explore the top 5 ways Nearshore Outsourcing can revolutionize your business. Discover the advantages of nearshoring, from cost savings to enhanced collaboration, and learn why nearshore outsourcing is a smart choice for companies looking to optimize their operations."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/how-ai-is-revolutionizing-nearshore-software-development-min.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="5 Ways Nearshore Outsourcing Can Benefit Your Business | Advantages & Benefits of Nearshoring"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentNearshoreOutsourcingCanBenefit />
      <Footer />
    </>
  );
};

export default BlogDetails;
