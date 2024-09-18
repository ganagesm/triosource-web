import React from "react";
import Head from 'next/head';
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentChallengesSolutionsNearshoreOutsourcing from "../../components/Blog//BlogDetailsContentChallengesSolutionsNearshoreOutsourcing";

const BlogDetails = () => {
  return (
    <>
    <Head>
        <title>Overcoming Nearshore Outsourcing Challenges</title>
        <meta property="og:title" content="Overcoming Nearshore Outsourcing Challenges" key="title" />
        <meta name="description" content="Explore key solutions to tackle nearshore outsourcing hurdles and drive your project's success. Get insights now!" key="" />
        <meta property="og:image" content="https://triosource.com/images/blog/challenges-solutions-blog.png"/>
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Challenges and Solutions in Nearshore Outsourcing: How to Overcome Distance Barriers | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentChallengesSolutionsNearshoreOutsourcing />
      <Footer />
    </>
  );
};

export default BlogDetails;