import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentTheStrategicShift from "../../components/Blog/BlogDetailsContentTheStrategicShift";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          The Strategic Shift: Why Companies Are Choosing to Outsource
          E-commerce Development
        </title>
        <meta
          property="og:title"
          content="The Strategic Shift: Why Companies Are Choosing to Outsource E-commerce Development"
          key="title"
        />
        <meta
          name="description"
          content="The Strategic Shift: Why Companies Are Choosing to Outsource E-commerce Development"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/the-strategic-shift-why-companies-are-choosing-to-outsource-e-commerce-development-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="The Strategic Shift: Why Companies Are Choosing to Outsource E-commerce Development"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentTheStrategicShift />
      <Footer />
    </>
  );
};

export default BlogDetails;
