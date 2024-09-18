import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentCostSavingsandQuality from "../../components/Blog//BlogDetailsContentCostSavingsandQuality";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/cost-savings-and-quality",
          title:
            "Cost Savings and Quality: Nearshore Software Development Advantages",
          description:
            "Discover the perfect blend of cost savings and quality in nearshore software development Explore how proximity enhances communication, reduces operating costs, and ensures top notch outcomes Learn from real life case studies and prepare for the future of software development",
          images: [
            {
              url: "https://triosource.com/images/blog/cost-savings-and-quality.jpg",
              width: 800,
              height: 600,
              alt: "Discover the perfect blend of cost savings and quality in nearshore software development Explore how proximity enhances communication, reduces operating costs, and ensures top notch outcomes Learn from real life case studies and prepare for the future of software development",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Outsourcing",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/cost-savings-and-quality"
        title="Cost Savings and Quality: Nearshore Software Development Advantages"
        headline="Cost Savings and Quality: Nearshore Software Development Advantages"
        description="Discover the perfect blend of cost savings and quality in nearshore software development Explore how proximity enhances communication, reduces operating costs, and ensures top notch outcomes Learn from real life case studies and prepare for the future of software development"
        datePublished="July 10, 2023"
        dateModified="July 10, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/cost-savings-and-quality",
          article: {
            publishedTime: "July 10, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Cost Savings and Quality: Nearshore Software Development Advantages
        </title>
        <meta
          property="og:title"
          content="Cost Savings and Quality: Nearshore Software Development Advantages"
          key="title"
        />
        <meta
          name="description"
          content="Discover the perfect blend of cost savings and quality in nearshore software development. Explore how proximity enhances communication, reduces operating costs, and ensures top-notch outcomes. Learn from real-life case studies and prepare for the future of software development."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/cost-savings-and-quality-thumb.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Cost Savings and Quality: Nearshore Software Development Advantages | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentCostSavingsandQuality />
      <Footer />
    </>
  );
};

export default BlogDetails;
