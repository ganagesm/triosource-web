import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentnearshoreOutsourcingLatinAmericaGuide from "../../components/Blog/BlogDetailsContentnearshoreOutsourcingLatinAmericaGuide";

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
          content="Nearshore Outsourcing in Latin America: What You Need to Know"
          key="title"
        />
        <meta
          name="description"
          content="Discover why Latin America is the ideal region for nearshore outsourcing. Learn about its benefits, key factors, and how to get started with this comprehensive guide."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshore-outsourcing-latin-america-guide-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshore Outsourcing in Latin America: What You Need to Know | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentnearshoreOutsourcingLatinAmericaGuide />
      <Footer />
    </>
  );
};

export default BlogDetails;
