import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentChoosingtheRightNearshoreDevelopmentPartner from "../../components/Blog/BlogDetailsContentChoosingtheRightNearshoreDevelopmentPartner";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/guidelines-for-choosing-the-right-partner-in-nearshore-development",
          title:
            "Guidelines for Choosing the Right Partner in Nearshore Development: 5 Expert Tips",
          description:
            "Discover expert tips for choosing the ideal nearshore development partner Assess technical expertise, communication, culture, project management, and client references",
          images: [
            {
              url: "https://triosource.com/images/blog/guidelines-for-choosing-the-right-partner-in-nearshore-development.jpg",
              width: 800,
              height: 600,
              alt: "Discover expert tips for choosing the ideal nearshore development partner Assess technical expertise, communication, culture, project management, and client references",
            },
          ],
          authorName: "Triosource",
          keywords: "Partner in Nearshore Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/guidelines-for-choosing-the-right-partner-in-nearshore-development"
        title="Guidelines for Choosing the Right Partner in Nearshore Development: 5 Expert Tips"
        headline="Guidelines for Choosing the Right Partner in Nearshore Development: 5 Expert Tips"
        description="Discover expert tips for choosing the ideal nearshore development partner Assess technical expertise, communication, culture, project management, and client references"
        datePublished="Jan 30, 2023"
        dateModified="Jan 30, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/guidelines-for-choosing-the-right-partner-in-nearshore-development",
          article: {
            publishedTime: "Jan 30, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Guidelines for Choosing the Right Partner in Nearshore Development: 5
          Expert Tips
        </title>
        <meta
          property="og:title"
          content="Guidelines for Choosing the Right Partner in Nearshore Development: 5 Expert Tips"
          key="title"
        />
        <meta
          name="description"
          content="Discover expert tips for choosing the ideal nearshore development partner. Assess technical expertise, communication, culture, project management, and client references."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/guidelines-for-choosing-the-right-partner-in-nearshore-development-tb.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Guidelines for Choosing the Right Partner in Nearshore Development: 5 Expert Tips | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentChoosingtheRightNearshoreDevelopmentPartner />
      <Footer />
    </>
  );
};

export default BlogDetails;
