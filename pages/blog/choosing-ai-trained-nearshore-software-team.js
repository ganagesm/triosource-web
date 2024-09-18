import React from "react";
import Navbar from "../../components/Live/Navbar";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentChoosingRightAITrainedNearshore from "../../components/Blog/BlogDetailsContentChoosingRightAITrainedNearshore";
import Footer from "../../components/Live/Footer";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/choosing-ai-trained-nearshore-software-team",
          title: "Choose the Right AI-Trained Nearshore Team for Success",
          description:
            "Unlock the secrets to selecting an AI trained nearshore software team that propels your project forward Learn more!",
          images: [
            {
              url: "https://triosource.com/images/blog/choosingRightAITrainedNearshore-min.png",
              width: 800,
              height: 600,
              alt: "Unlock the secrets to selecting an AI trained nearshore software team that propels your project forward Learn more!",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/choosing-ai-trained-nearshore-software-team"
        title="Choose the Right AI-Trained Nearshore Team for Success"
        headline="Choose the Right AI-Trained Nearshore Team for Success"
        description="Unlock the secrets to selecting an AI trained nearshore software team that propels your project forward Learn more!"
        datePublished="03.27.2023"
        dateModified="03.27.2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/choosing-ai-trained-nearshore-software-team",
          article: {
            publishedTime: "03.27.2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>Choose the Right AI-Trained Nearshore Team for Success</title>
        <meta
          property="og:title"
          content="Choose the Right AI-Trained Nearshore Team for Success"
          key="title"
        />
        <meta
          name="description"
          content="Unlock the secrets to selecting an AI-trained nearshore software team that propels your project forward. Learn more!"
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Choosing the Right AI-Trained Nearshore Software Development Team: A Comprehensive Guide"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentChoosingRightAITrainedNearshore />
      <Footer />
    </>
  );
};

export default BlogDetails;
