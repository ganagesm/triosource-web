import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentUnlockingPotentialAgileDevelopment from "../../components/Blog/BlogDetailsContentUnlockingPotentialAgileDevelopment";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          Maximizing Efficiency: The Power of Agile Development with Nearshore
          Teams
        </title>
        <meta
          property="og:title"
          content="Maximizing Efficiency: The Power of Agile Development with Nearshore Teams"
          key="title"
        />
        <meta
          name="description"
          content="Explore the transformative potential of combining Agile development methodologies with nearshore teams. This detailed guide delves into how nearshore collaboration can enhance agility, improve communication, and drive innovation in software development. Discover best practices, overcome common challenges, and unlock the secrets to successful Agile development with nearshore teams."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/agile-development-with-nearshore-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Maximizing Efficiency: The Power of Agile Development with Nearshore Teams | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentUnlockingPotentialAgileDevelopment />
      <Footer />
    </>
  );
};

export default BlogDetails;
