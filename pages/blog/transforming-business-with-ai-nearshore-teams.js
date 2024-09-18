import React from "react";
import Navbar from "../../components/Live/Navbar";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentTransformingBusinessOperationsAI from "../../components/Blog/BlogDetailsContentTransformingBusinessOperationsAI";
import Footer from "../../components/Live/Footer";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/transforming-business-with-ai-nearshore-teams",
          title: "Transform Your Biz with AI & Nearshore Teams",
          description:
            "Discover how AI nearshore teams can revolutionize your business operations and boost growth Dive in now!",
          images: [
            {
              url: "https://triosource.com/images/blog/transforming-business-with-ai-nearshore-teams-min.png",
              width: 800,
              height: 600,
              alt: "Discover how AI nearshore teams can revolutionize your business operations and boost growth Dive in now!",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/transforming-business-with-ai-nearshore-teams"
        title="Transform Your Biz with AI & Nearshore Teams"
        headline="Transform Your Biz with AI & Nearshore Teams"
        description="Discover how AI nearshore teams can revolutionize your business operations and boost growth Dive in now!"
        datePublished="August 17, 2023"
        dateModified="August 17, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/transforming-business-with-ai-nearshore-teams",
          article: {
            publishedTime: "August 17, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>Transform Your Biz with AI & Nearshore Teams</title>
        <meta
          property="og:title"
          content="Transform Your Biz with AI & Nearshore Teams"
          key="title"
        />
        <meta
          name="description"
          content="Discover how AI nearshore teams can revolutionize your business operations and boost growth. Dive in now!"
          key="description"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Transforming Business Operations with AI-Trained Nearshore Software Development Teams"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentTransformingBusinessOperationsAI />
      <Footer />
    </>
  );
};

export default BlogDetails;
