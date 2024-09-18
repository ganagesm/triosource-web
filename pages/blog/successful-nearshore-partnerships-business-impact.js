import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentNearshorePartnershipsBusinessImpact from "../../components/Blog/BlogDetailsContentNearshorePartnershipsBusinessImpact";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Successful Nearshore Partnerships and Their Impact on Businesses
        </title>
        <meta
          property="og:title"
          content="Successful Nearshore Partnerships and Their Impact on Businesses"
          key="title"
        />
        <meta
          name="description"
          content="Discover the transformative power of nearshore partnerships and their positive impact on businesses. Learn how companies leverage nearshore outsourcing to enhance efficiency, reduce costs, and drive innovation."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/successful-nearshore-partnerships-business-impact.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Successful Nearshore Partnerships and Their Impact on Businesses | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentNearshorePartnershipsBusinessImpact />
      <Footer />
    </>
  );
};

export default BlogDetails;
