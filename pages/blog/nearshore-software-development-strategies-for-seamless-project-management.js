import React from "react";
import Head from 'next/head';
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentSeamlessProjectManagement from "../../components/Blog/BlogDetailsContentSeamlessProjectManagement";

const BlogDetails = () => {
  return (
    <>
    <Head>
        <title>Mastering Nearshore Software Development: 5 Key Project Management Strategies</title>
        <meta property="og:title" content="Mastering Nearshore Software Development: 5 Key Project Management Strategies" key="title" />
        <meta name="description" content="Explore the essential strategies for seamless project management in nearshore software development. Learn how clear communication, Agile methodologies, time zone optimization, robust project tracking, and cultural sensitivity pave the way for success. Discover the expertise of Triosource, a leading company in nearshore development, committed to excellence in global collaboration and innovative software solutions." key="" />
        <meta property="og:image" content="https://triosource.com/images/blog/seamless-project-management-tb.png"/>
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Mastering Nearshore Software Development: 5 Key Project Management Strategies | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentSeamlessProjectManagement />
      <Footer />
    </>
  );
};

export default BlogDetails;