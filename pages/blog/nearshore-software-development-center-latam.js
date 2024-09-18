import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentNearshoreCenterLatam from "../../components/Blog/BlogDetailsContentNearshoreCenterLatam";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Nearshore Software Development Center in Latam: Elevate Your Software
          Solutions
        </title>
        <meta
          property="og:title"
          content="Nearshore Software Development Center in Latam: Elevate Your Software Solutions"
          key="title"
        />
        <meta
          name="description"
          content="Discover the benefits of establishing a Nearshore Software Development Center in Latam. Learn how proximity, cultural affinity, and skilled talent can elevate your software solutions."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/5-ways-nearshore-software-development-supercharge-your-project.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshore Software Development Center in Latam: Elevate Your Software Solutions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentNearshoreCenterLatam />
      <Footer />
    </>
  );
};

export default BlogDetails;
