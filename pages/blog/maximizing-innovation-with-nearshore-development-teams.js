import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentSkilledNearshoreDevelopmentTeam from "../../components/Blog/BlogDetailsContentSkilledNearshoreDevelopmentTeam";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Maximizing Innovation with Skilled Nearshore Development Teams: A
          Comprehensive Guide
        </title>
        <meta
          property="og:title"
          content="Maximizing Innovation with Skilled Nearshore Development Teams: A Comprehensive Guide"
          key="title"
        />
        <meta
          name="description"
          content="Discover how leveraging skilled nearshore development teams can drive innovation and efficiency in your business. Learn the benefits, best practices, and future trends in nearshore IT outsourcing."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/maximizing-innovation-with-nearshore-development-teams.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Maximizing Innovation with Skilled Nearshore Development Teams: A Comprehensive Guide"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentSkilledNearshoreDevelopmentTeam />
      <Footer />
    </>
  );
};

export default BlogDetails;
