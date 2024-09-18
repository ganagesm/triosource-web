import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentReduceOutsourcingRisks from "../../components/Blog/BlogDetailsContentReduceOutsourcingRisks";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Reduce Outsourcing Risks: Benefits of Choosing a Nearshore Provider
        </title>
        <meta
          property="og:title"
          content="Reduce Outsourcing Risks: Benefits of Choosing a Nearshore Provider"
          key="title"
        />
        <meta
          name="description"
          content="Discover how nearshore outsourcing can mitigate risks, enhance collaboration, and boost efficiency. Learn why choosing a nearshore provider is the best decision for your business."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/reduce-outsourcing-risks-choose-nearshore-provider-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Reduce Outsourcing Risks: Benefits of Choosing a Nearshore Provider"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentReduceOutsourcingRisks />
      <Footer />
    </>
  );
};

export default BlogDetails;
