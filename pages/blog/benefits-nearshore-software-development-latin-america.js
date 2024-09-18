import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentExploringtheBenefitsofNearshoreSoftware from "../../components/Blog/BlogDetailsContentExploringtheBenefitsofNearshoreSoftware";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Exploring the Benefits of Nearshore Software Development in Latin
          America
        </title>
        <meta
          property="og:title"
          content="Exploring the Benefits of Nearshore Software Development in Latin America"
          key="title"
        />
        <meta
          name="description"
          content="The Impact of Cultural Alignment on Nearshore Outsourcing Success."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/benefits-nearshore-software-development-latin-america-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Exploring the Benefits of Nearshore Software Development in Latin America | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentExploringtheBenefitsofNearshoreSoftware />
      <Footer />
    </>
  );
};

export default BlogDetails;
