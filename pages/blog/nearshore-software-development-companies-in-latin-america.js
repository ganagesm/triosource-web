import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentLatinAmericaBlog from "../../components/Blog/BlogDetailsContentLatinAmericaBlog";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/nearshore-software-development-companies-in-latin-america",
          title:
            "Top 5 Nearshore Software Development Companies in Latin America [2024]",
          description:
            "Discover the leading nearshore software development companies in Latin America for 2024 This guide highlights the top tech firms known for their innovation, quality, and exceptional service in software solutions Dive into the vibrant LatAm tech scene and find the perfect partner for your next project",
          images: [
            {
              url: "https://triosource.com/images/blog/nearshore-software-development-companies-in-latin-america.png",
              width: 800,
              height: 600,
              alt: "Discover the leading nearshore software development companies in Latin America for 2024 This guide highlights the top tech firms known for their innovation, quality, and exceptional service in software solutions Dive into the vibrant LatAm tech scene and find the perfect partner for your next project",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development Companies in Latin America",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/nearshore-software-development-companies-in-latin-america"
        title="Top 5 Nearshore Software Development Companies in Latin America [2024]"
        headline="Top 5 Nearshore Software Development Companies in Latin America [2024]"
        description="Discover the leading nearshore software development companies in Latin America for 2024 This guide highlights the top tech firms known for their innovation, quality, and exceptional service in software solutions Dive into the vibrant LatAm tech scene and find the perfect partner for your next project"
        datePublished="Mar 12, 2023"
        dateModified="Mar 12, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/nearshore-software-development-companies-in-latin-america",
          article: {
            publishedTime: "Mar 12, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Top 5 Nearshore Software Development Companies in Latin America [2024]
        </title>
        <meta
          property="og:title"
          content="Top 5 Nearshore Software Development Companies in Latin America [2024]"
          key="title"
        />
        <meta
          name="description"
          content="Discover the leading nearshore software development companies in Latin America for 2024. This guide highlights the top tech firms known for their innovation, quality, and exceptional service in software solutions. Dive into the vibrant LatAm tech scene and find the perfect partner for your next project."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshore-software-development-companies-in-latin-america-tb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Top 5 Nearshore Software Development Companies in Latin America [2024] | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentLatinAmericaBlog />
      <Footer />
    </>
  );
};

export default BlogDetails;
