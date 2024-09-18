import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentRegulatoryCompliance from "../../components/Blog//BlogDetailsContentRegulatoryCompliance";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/regulatory-compliance-in-nearshore-outsourcing",
          title:
            "Regulatory Compliance in Nearshore Outsourcing: Ensuring Security and Legal Adherence",
          description:
            "Navigate the complex landscape of nearshore outsourcing with a deep dive into regulatory compliance Learn how to ensure security and legal adherence for a successful outsourcing partnership",
          images: [
            {
              url: "https://triosource.com/images/blog/regulatory-compliance-in-nearshore-outsourcing.jpg",
              width: 800,
              height: 600,
              alt: "Navigate the complex landscape of nearshore outsourcing with a deep dive into regulatory compliance Learn how to ensure security and legal adherence for a successful outsourcing partnership",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Outsourcing",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/regulatory-compliance-in-nearshore-outsourcing"
        title="Regulatory Compliance in Nearshore Outsourcing: Ensuring Security and Legal Adherence"
        headline="Regulatory Compliance in Nearshore Outsourcing: Ensuring Security and Legal Adherence"
        description="Navigate the complex landscape of nearshore outsourcing with a deep dive into regulatory compliance Learn how to ensure security and legal adherence for a successful outsourcing partnership"
        datePublished="Jan 10, 2023"
        dateModified="Jan 10, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/regulatory-compliance-in-nearshore-outsourcing",
          article: {
            publishedTime: "Jan 10, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Regulatory Compliance in Nearshore Outsourcing: Ensuring Security and
          Legal Adherence
        </title>
        <meta
          property="og:title"
          content="Regulatory Compliance in Nearshore Outsourcing: Ensuring Security and Legal Adherence"
          key="title"
        />
        <meta
          name="description"
          content="Navigate the complex landscape of nearshore outsourcing with a deep dive into regulatory compliance. Learn how to ensure security and legal adherence for a successful outsourcing partnership."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/regulatory-compliance-in-nearshore-outsourcing.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Regulatory Compliance in Nearshore Outsourcing: Ensuring Security and Legal Adherence | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentRegulatoryCompliance />
      <Footer />
    </>
  );
};

export default BlogDetails;
