import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentMobileAppTestingManagedService from "../../components/Blog/BlogDetailsContentMobileAppTestingManagedService";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Master Mobile App Testing: Managed Services for Flawless Apps
        </title>
        <meta
          property="og:title"
          content="Master Mobile App Testing: Managed Services for Flawless Apps"
          key="title"
        />
        <meta
          name="description"
          content="Conquer device fragmentation & ensure quality across platforms! Explore Mobile App Testing as a Managed Service (MATMS) – benefits, best practices, and advanced techniques for a flawless app launch"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/mobile-app-testing-managed-service.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Master Mobile App Testing: Managed Services for Flawless Apps | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentMobileAppTestingManagedService />
      <Footer />
    </>
  );
};

export default BlogDetails;
