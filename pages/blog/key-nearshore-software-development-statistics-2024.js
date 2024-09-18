import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentKeyNearshoreSoftwareDevelopmentStatistics2024 from "../../components/Blog/BlogDetailsContentKeyNearshoreSoftwareDevelopmentStatistics2024";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Key Nearshore Software Development Statistics for 2024: A
          Comprehensive Analysis
        </title>
        <meta
          property="og:title"
          content="Key Nearshore Software Development Statistics for 2024: A Comprehensive Analysis"
          key="title"
        />
        <meta
          name="description"
          content="Explore the latest trends and key statistics in nearshore software development for 2024. This comprehensive analysis provides insights into the growth, benefits, and future of nearshore outsourcing, helping businesses make informed decisions."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/key-nearshore-software-development-statistics-2024.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Key Nearshore Software Development Statistics for 2024: A Comprehensive Analysis | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentKeyNearshoreSoftwareDevelopmentStatistics2024 />
      <Footer />
    </>
  );
};

export default BlogDetails;
