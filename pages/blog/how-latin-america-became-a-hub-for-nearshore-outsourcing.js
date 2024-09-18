import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentLatinAmericaBecame from "../../components/Blog/BlogDetailsContentLatinAmericaBecame";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>How Latin America Became a Hub for Nearshore Outsourcing</title>
        <meta
          property="og:title"
          content="How Latin America Became a Hub for Nearshore Outsourcing"
          key="title"
        />
        <meta
          name="description"
          content="Explore the rise of Latin America as a premier destination for nearshore outsourcing, highlighting the key factors that have propelled the region to the forefront of the global outsourcing industry."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/how-latin-america-became-a-hub-for-nearshore-outsourcing-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="How Latin America Became a Hub for Nearshore Outsourcing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentLatinAmericaBecame />
      <Footer />
    </>
  );
};

export default BlogDetails;
