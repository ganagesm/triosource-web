import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContenttopNearshoreDestinationsDoftwareDevelopment from "../../components/Blog//BlogDetailsContenttopNearshoreDestinationsDoftwareDevelopment";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/top-nearshore-destinations-for-software-development",
          title:
            "Benefits of Nearshore Software Development: Cost Savings and Quality | Triosource",
          description:
            "Discover how nearshore software development balances cost savings with high quality output Learn about its advantages in real time collaboration, skilled labor, and more",
          images: [
            {
              url: "https://triosource.com/images/blog/comparative-analysis.png",
              width: 800,
              height: 600,
              alt: "Discover how nearshore software development balances cost savings with high quality output Learn about its advantages in real time collaboration, skilled labor, and more",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/top-nearshore-destinations-for-software-development"
        title="Benefits of Nearshore Software Development: Cost Savings and Quality | Triosource"
        headline="Benefits of Nearshore Software Development: Cost Savings and Quality | Triosource"
        description="Discover how nearshore software development balances cost savings with high quality output Learn about its advantages in real time collaboration, skilled labor, and more"
        datePublished="December 16, 2023"
        dateModified="December 16, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/top-nearshore-destinations-for-software-development",
          article: {
            publishedTime: "December 16, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Benefits of Nearshore Software Development: Cost Savings and Quality |
          Triosource
        </title>
        <meta
          property="og:title"
          content="Benefits of Nearshore Software Development: Cost Savings and Quality | Triosource"
          key="title"
        />
        <meta
          name="description"
          content="Discover how nearshore software development balances cost savings with high-quality output. Learn about its advantages in real-time collaboration, skilled labor, and more."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/comparative-analysis.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Benefits of Nearshore Software Development: Cost Savings and Quality | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContenttopNearshoreDestinationsDoftwareDevelopment />
      <Footer />
    </>
  );
};

export default BlogDetails;
