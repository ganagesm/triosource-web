import React from "react";
import Navbar from "../../components/Live/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NearshoreVsOffshore from "../../components/Blog/NearshoreVsOffshore";
import Footer from "../../components/Live/Footer";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/nearshore-vs-offshore-outsourcing",
          title: "Nearshore vs. Offshore: Optimal Outsourcing Choice?",
          description:
            "Explore the differences between nearshore and offshore outsourcing to find the perfect fit for your business needs Contact Triosource for expert guidance",
          images: [
            {
              url: "https://triosource.com/images/blog/nearshore-vs-offshore-outsourcing.png",
              width: 800,
              height: 600,
              alt: "Explore the differences between nearshore and offshore outsourcing to find the perfect fit for your business needs Contact Triosource for expert guidance",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore vs. Offshore",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/nearshore-vs-offshore-outsourcing"
        title="Nearshore vs. Offshore: Optimal Outsourcing Choice?"
        headline="Nearshore vs. Offshore: Optimal Outsourcing Choice?"
        description="Explore the differences between nearshore and offshore outsourcing to find the perfect fit for your business needs Contact Triosource for expert guidance"
        datePublished="Nov 10, 2023"
        dateModified="Nov 10, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/nearshore-vs-offshore-outsourcing",
          article: {
            publishedTime: "Nov 10, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>Nearshore vs. Offshore: Optimal Outsourcing Choice? </title>
        <meta
          property="og:title"
          content="Nearshore vs. Offshore: Optimal Outsourcing Choice?"
          key="title"
        />
        <meta
          name="description"
          content="Explore the differences between nearshore and offshore outsourcing to find the perfect fit for your business needs. Contact Triosource for expert guidance."
          key="description"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Nearshore vs. Offshore: Optimal Outsourcing Choice?"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <NearshoreVsOffshore />
      <Footer />
    </>
  );
};

export default BlogDetails;
