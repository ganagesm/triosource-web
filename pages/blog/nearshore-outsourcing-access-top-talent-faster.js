import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentAccessTopTalent from "../../components/Blog/BlogDetailsContentAccessTopTalent";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>Nearshore Outsourcing: Access Top Talent, Faster</title>
        <meta
          property="og:title"
          content="Nearshore Outsourcing: Access Top Talent, Faster"
          key="title"
        />
        <meta
          name="description"
          content="how it enables businesses to access top talent quickly and efficiently. Learn about the benefits of proximity, cultural compatibility, cost-effectiveness, and more. Explore why nearshore outsourcing is the ideal strategy for accelerating projects and driving growth."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshore-outsourcing-access-top-talent-faster.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshore Outsourcing: Access Top Talent, Faster"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentAccessTopTalent />
      <Footer />
    </>
  );
};

export default BlogDetails;
