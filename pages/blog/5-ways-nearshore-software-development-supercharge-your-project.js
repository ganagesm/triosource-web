import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent5WaysNearshore from "../../components/Blog/BlogDetailsContent5WaysNearshore";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          5 Ways Nearshore Software Development Can Supercharge Your Project
        </title>
        <meta
          property="og:title"
          content="5 Ways Nearshore Software Development Can Supercharge Your Project"
          key="title"
        />
        <meta
          name="description"
          content="Discover how nearshore software development can enhance collaboration, accelerate development cycles, improve cost efficiency, and access high-quality talent to supercharge your project."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/5-ways-nearshore-software-development-supercharge-your-project.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="5 Ways Nearshore Software Development Can Supercharge Your Project"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContent5WaysNearshore />
      <Footer />
    </>
  );
};

export default BlogDetails;
