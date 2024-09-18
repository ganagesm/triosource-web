import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentHowAIRevolutionizingNearshoreSoftware from "../../components/Blog/BlogDetailsContentHowAIRevolutionizingNearshoreSoftware";
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
          title: "AI Revolution in Nearshore Software Development",
          description:
            "Discover how AI is transforming nearshore software development, enhancing efficiency and innovation Start reading!",
          images: [
            {
              url: "https://triosource.com/images/blog/how-ai-is-revolutionizing-nearshore-software-development-min.png",
              width: 800,
              height: 600,
              alt: "Discover how AI is transforming nearshore software development, enhancing efficiency and innovation Start reading!",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/how-ai-is-revolutionizing-nearshore-software-development"
        title="AI Revolution in Nearshore Software Development"
        headline="AI Revolution in Nearshore Software Development"
        description="Discover how AI is transforming nearshore software development, enhancing efficiency and innovation Start reading!"
        datePublished="October 14, 2023"
        dateModified="October 14, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/how-ai-is-revolutionizing-nearshore-software-development",
          article: {
            publishedTime: "October 14, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>AI Revolution in Nearshore Software Development</title>
        <meta
          property="og:title"
          content="AI Revolution in Nearshore Software Development"
          key="title"
        />
        <meta
          name="description"
          content="Discover how AI is transforming nearshore software development, enhancing efficiency and innovation. Start reading!"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/how-ai-is-revolutionizing-nearshore-software-development-min.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="How AI is Revolutionizing Nearshore Software Development: A Deep Dive"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentHowAIRevolutionizingNearshoreSoftware />
      <Footer />
    </>
  );
};

export default BlogDetails;
