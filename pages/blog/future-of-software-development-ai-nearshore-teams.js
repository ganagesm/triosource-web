import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentFutureSoftwareDevelopment from "../../components/Blog/BlogDetailsContentFutureSoftwareDevelopment";
import Footer from "../../components/Live/Footer";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/future-of-software-development-ai-nearshore-teams",
          title: "Future of Software Dev: AI & Nearshore Teams",
          description:
            "Dive into how AI and nearshore teams are shaping the future of software development Stay ahead of the curve!",
          images: [
            {
              url: "https://triosource.com/images/blog/future-of-software-development-ai-nearshore-teams-min.png",
              width: 800,
              height: 600,
              alt: "Dive into how AI and nearshore teams are shaping the future of software development Stay ahead of the curve!",
            },
          ],
          authorName: "Triosource",
          keywords: "Software Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/future-of-software-development-ai-nearshore-teams"
        title="Future of Software Dev: AI & Nearshore Teams"
        headline="Future of Software Dev: AI & Nearshore Teams"
        description="Dive into how AI and nearshore teams are shaping the future of software development Stay ahead of the curve!"
        datePublished="03.27.2023"
        dateModified="03.27.2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/future-of-software-development-ai-nearshore-teams",
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
        <title>Future of Software Dev: AI & Nearshore Teams</title>
        <meta
          property="og:title"
          content="Future of Software Dev: AI & Nearshore Teams"
          key="title"
        />
        <meta
          name="description"
          content="Dive into how AI and nearshore teams are shaping the future of software development. Stay ahead of the curve!"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/future-of-software-development-ai-nearshore-teams-min.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="The Future of Software Development: Benefits of AI-Trained Nearshore Teams"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentFutureSoftwareDevelopment />
      <Footer />
    </>
  );
};

export default BlogDetails;
