import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentTechHotspotsDevelopment from "../../components/Blog/BlogDetailsContentTechHotspotsDevelopment";
import Footer from "../../components/Live/Footer";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import Head from "next/head";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/nearshore-innovation-hubs-emerging-tech-hotspots",
          title:
            "Nearshore Innovation Hubs: Exploring Emerging Tech Hotspots for Development",
          description:
            "Discover the rise of nearshore innovation hubs as emerging tech hotspots for development. Learn how nearshore IT services in countries like Mexico, Colombia, and Eastern Europe are transforming global software development and offering new opportunities for businesses.",
          images: [
            {
              url: "https://triosource.com/images/blog/nearshore-innovation-hubs-emerging-tech-hotspots.jpg",
              width: 800,
              height: 600,
              alt: "Discover the rise of nearshore innovation hubs as emerging tech hotspots for development. Learn how nearshore IT services in countries like Mexico, Colombia, and Eastern Europe are transforming global software development and offering new opportunities for businesses.",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/nearshore-innovation-hubs-emerging-tech-hotspots"
        title="Nearshore Innovation Hubs: Exploring Emerging Tech Hotspots for Development"
        headline="AI Revolution in Nearshore Software Development"
        description="Discover the rise of nearshore innovation hubs as emerging tech hotspots for development. Learn how nearshore IT services in countries like Mexico, Colombia, and Eastern Europe are transforming global software development and offering new opportunities for businesses."
        datePublished="17 september, 2024"
        dateModified="17 september, 2024"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/nearshore-innovation-hubs-emerging-tech-hotspots",
          article: {
            publishedTime: "17 september, 2024",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Nearshore Innovation Hubs: Exploring Emerging Tech Hotspots for
          Development
        </title>
        <meta
          property="og:title"
          content="Nearshore Innovation Hubs: Exploring Emerging Tech Hotspots for Development"
          key="title"
        />
        <meta
          name="description"
          content="Discover the rise of nearshore innovation hubs as emerging tech hotspots for development. Learn how nearshore IT services in countries like Mexico, Colombia, and Eastern Europe are transforming global software development and offering new opportunities for businesses."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshore-innovation-hubs-emerging-tech-hotspots.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshore Innovation Hubs: Exploring Emerging Tech Hotspots for Development"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentTechHotspotsDevelopment />
      <Footer />
    </>
  );
};

export default BlogDetails;
