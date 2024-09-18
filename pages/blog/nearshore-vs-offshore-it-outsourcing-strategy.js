import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentnearshoreVSOffshoreITOutsourcingStrategy from "../../components/Blog/BlogDetailsContentnearshoreVSOffshoreITOutsourcingStrategy";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Nearshore vs. Offshore IT Outsourcing: Which Strategy Fits Your
          Business Best?
        </title>
        <meta
          property="og:title"
          content="Nearshore vs. Offshore IT Outsourcing: Which Strategy Fits Your Business Best?"
          key="title"
        />
        <meta
          name="description"
          content="Discover the key differences between nearshore and offshore IT outsourcing. Learn how to choose the right strategy to enhance efficiency, reduce costs, and access top talent for your business. Find out which outsourcing model suits your needs."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshore-vs-offshore-it-outsourcing-strategy.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshore vs. Offshore IT Outsourcing: Which Strategy Fits Your Business Best?"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentnearshoreVSOffshoreITOutsourcingStrategy />
      <Footer />
    </>
  );
};

export default BlogDetails;
