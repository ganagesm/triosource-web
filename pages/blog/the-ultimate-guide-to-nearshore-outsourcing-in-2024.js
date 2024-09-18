import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentNearshoreOutsourcing2024 from "../../components/Blog/BlogDetailsContentNearshoreOutsourcing2024";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>The Ultimate Guide to Nearshore Outsourcing in 2024</title>
        <meta
          property="og:title"
          content="The Ultimate Guide to Nearshore Outsourcing in 2024"
          key="title"
        />
        <meta
          name="description"
          content="Explore the rise of Latin America as a premier destination for nearshore outsourcing, highlighting the key factors that have propelled the region to the forefront of the global outsourcing industry."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/the-ultimate-guide-to-nearshore-outsourcing-in-2024-thumb.jpeg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="The Ultimate Guide to Nearshore Outsourcing in 2024"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentNearshoreOutsourcing2024 />
      <Footer />
    </>
  );
};

export default BlogDetails;
