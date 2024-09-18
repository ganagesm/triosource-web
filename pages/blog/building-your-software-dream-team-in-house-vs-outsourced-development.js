import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentSoftwareDreamTeam from "../../components/Blog/BlogDetailsContentSoftwareDreamTeam";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Building Your Software Dream Team: In-House vs. Outsourced Development
        </title>
        <meta
          property="og:title"
          content="Building Your Software Dream Team: In-House vs. Outsourced Development"
          key="title"
        />
        <meta
          name="description"
          content="Building Your Software Dream Team: In-House vs. Outsourced Development"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/building-your-software-dream-team-in-house-vs-outsourced-development-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Building Your Software Dream Team: In-House vs. Outsourced Development"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentSoftwareDreamTeam />
      <Footer />
    </>
  );
};

export default BlogDetails;
