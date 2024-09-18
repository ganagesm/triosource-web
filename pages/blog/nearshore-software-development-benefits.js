import React from "react";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentnearshoreSoftwareDevelopmentBenefits from "../../components/Blog/BlogDetailsContentnearshoreSoftwareDevelopmentBenefits";

const BlogDetails = () => {
  return (
    <>
      <WebPageJsonLd
        headline="Maximizing Value with Nearshore Development: Balancing Cost and Quality."
        description="Explore the strategic advantages of nearshore software development, where businesses achieve significant cost savings without compromising on quality Delve into how proximity, cultural alignment, and access to top tier tech talent across Latin America enhance project efficiency and outcomes"
        author="Triosource"
        keywords="nearshore software development"
        image="https://triosource.com/images/blog/nearshore-software-development-benefits.png"
      />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/nearshore-software-development-benefits",
          title:
            "Maximizing Value with Nearshore Development: Balancing Cost and Quality.",
          description:
            "Explore the strategic advantages of nearshore software development, where businesses achieve significant cost savings without compromising on quality Delve into how proximity, cultural alignment, and access to top tier tech talent across Latin America enhance project efficiency and outcomes",
          images: [
            {
              url: "https://triosource.com/images/blog/nearshore-software-development-benefits.png",
              width: 800,
              height: 600,
              alt: "Explore the strategic advantages of nearshore software development, where businesses achieve significant cost savings without compromising on quality Delve into how proximity, cultural alignment, and access to top tier tech talent across Latin America enhance project efficiency and outcomes",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Development",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/nearshore-software-development-benefits"
        title="Maximizing Value with Nearshore Development: Balancing Cost and Quality."
        headline="Maximizing Value with Nearshore Development: Balancing Cost and Quality."
        description="Explore the strategic advantages of nearshore software development, where businesses achieve significant cost savings without compromising on quality Delve into how proximity, cultural alignment, and access to top tier tech talent across Latin America enhance project efficiency and outcomes"
        datePublished="03.27.2023"
        dateModified="03.27.2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/nearshore-software-development-benefits",
          article: {
            publishedTime: "03.27.2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Maximizing Value with Nearshore Development: Balancing Cost and
          Quality.
        </title>
        <meta
          property="og:title"
          content="Maximizing Value with Nearshore Development: Balancing Cost and Quality."
          key="title"
        />
        <meta
          name="description"
          content="Explore the strategic advantages of nearshore software development, where businesses achieve significant cost savings without compromising on quality. Delve into how proximity, cultural alignment, and access to top-tier tech talent across Latin America enhance project efficiency and outcomes."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/nearshore-software-development-benefits.png"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Maximizing Value with Nearshore Development: Balancing Cost and Quality. | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentnearshoreSoftwareDevelopmentBenefits />
      <Footer />
    </>
  );
};

export default BlogDetails;
