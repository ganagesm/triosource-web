import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentWhyLatinAmericaWins from "../../components/Blog/BlogDetailsContentWhyLatinAmericaWins";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>
          From Tech Hubs to Talent Pools: Why Latin America Wins in Nearshore
          Outsourcing
        </title>
        <meta
          property="og:title"
          content="From Tech Hubs to Talent Pools: Why Latin America Wins in Nearshore Outsourcing"
          key="title"
        />
        <meta
          name="description"
          content="Discover why Latin America has become a premier destination for nearshore outsourcing. Explore its thriving tech hubs, diverse talent pools, and the unique advantages it offers for businesses seeking efficient, cost-effective solutions."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/latin-america-nearshore-outsourcing-benefits-thumb.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="From Tech Hubs to Talent Pools: Why Latin America Wins in Nearshore Outsourcing | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentWhyLatinAmericaWins />
      <Footer />
    </>
  );
};

export default BlogDetails;
