import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentNearshoreAgileDevelopment from "../../components/Blog/BlogDetailsContentNearshoreAgileDevelopment";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>Nearshore Agile Development: Mastering Remote Scrum Teams</title>
        <meta
          property="og:title"
          content="Nearshore Agile Development: Mastering Remote Scrum Teams"
          key="title"
        />
        <meta
          name="description"
          content="Unleash the power of Agile with remote Scrum teams! Explore best practices for nearshore development, overcome challenges, and unlock success in your software projects"
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshore-agile-development-remote-scrum-thumb.jpeg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshore Agile Development: Mastering Remote Scrum Teams | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentNearshoreAgileDevelopment />
      <Footer />
    </>
  );
};

export default BlogDetails;
