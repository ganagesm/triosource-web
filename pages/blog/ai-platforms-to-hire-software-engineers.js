import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentHireSoftwareEngineers from "../../components/Blog/BlogDetailsContentHireSoftwareEngineers";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/ai-platforms-to-hire-software-engineers",
          title:
            "Evaluating AI Platforms to Hire Software Engineers: Selecting the Appropriate Tools for Your Requirements",
          description:
            "Explore the top AI platforms to streamline your software engineer hiring process Make informed decisions with our comprehensive guide",
          images: [
            {
              url: "https://triosource.com/images/blog/ai-platforms-to-hire-software-engineers.jpg",
              width: 800,
              height: 600,
              alt: "Explore the top AI platforms to streamline your software engineer hiring process Make informed decisions with our comprehensive guide",
            },
          ],
          authorName: "Triosource",
          keywords: "Software Engineers",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/ai-platforms-to-hire-software-engineers"
        title="Evaluating AI Platforms to Hire Software Engineers: Selecting the Appropriate Tools for Your Requirements"
        headline="Evaluating AI Platforms to Hire Software Engineers: Selecting the Appropriate Tools for Your Requirements"
        description="Explore the top AI platforms to streamline your software engineer hiring process Make informed decisions with our comprehensive guide"
        datePublished="Jan 20, 2023"
        dateModified="Jan 20, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/ai-platforms-to-hire-software-engineers",
          article: {
            publishedTime: "Jan 20, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Evaluating AI Platforms to Hire Software Engineers: Selecting the
          Appropriate Tools for Your Requirements
        </title>
        <meta
          property="og:title"
          content="Evaluating AI Platforms to Hire Software Engineers: Selecting the Appropriate Tools for Your Requirements"
          key="title"
        />
        <meta
          name="description"
          content="Explore the top AI platforms to streamline your software engineer hiring process. Make informed decisions with our comprehensive guide."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/ai-platforms-to-hire-software-engineers-tb.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Evaluating AI Platforms to Hire Software Engineers: Selecting the Appropriate Tools for Your Requirements | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentHireSoftwareEngineers />
      <Footer />
    </>
  );
};

export default BlogDetails;
