import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentTop10ReasonsChoose from "../../components/Blog/BlogDetailsContentTop10ReasonsChoose";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Top 10 Reasons to Choose Latin America for Nearshore Outsourcing
        </title>
        <meta
          property="og:title"
          content="Top 10 Reasons to Choose Latin America for Nearshore Outsourcing"
          key="title"
        />
        <meta
          name="description"
          content="In today’s fast-paced business world, companies are constantly looking for ways to optimize operations and reduce costs. Nearshore outsourcing has become an increasingly popular strategy, and Latin America stands out as a prime destination for this approach. Here are the top 10 reasons to choose Latin America for nearshore outsourcing:"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/top-10-reasons-to-choose-latin-america-for-nearshore-outsourcing.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Top 10 Reasons to Choose Latin America for Nearshore Outsourcing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentTop10ReasonsChoose />
      <Footer />
    </>
  );
};

export default BlogDetails;
