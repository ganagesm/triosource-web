import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentTheImpactCulturalAlignment from "../../components/Blog/BlogDetailsContentTheImpactCulturalAlignment";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          The Impact Of Cultural Alignment On Nearshore Outsourcing Success
        </title>
        <meta
          property="og:title"
          content="The Impact Of Cultural Alignment On Nearshore Outsourcing Success"
          key="title"
        />
        <meta
          name="description"
          content="The Impact of Cultural Alignment on Nearshore Outsourcing Success."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/the-impact-of-cultural-alignment-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="The Impact Of Cultural Alignment On Nearshore Outsourcing Success | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentTheImpactCulturalAlignment />
      <Footer />
    </>
  );
};

export default BlogDetails;
