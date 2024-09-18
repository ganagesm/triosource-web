import React from "react";
import Head from "next/head";
import Navbar from "../../components/Live/Navbar";
import Footer from "../../components/Live/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContentNearshoreSoftware from "../../components/Blog/BlogDetailsContentNearshoreSoftware";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const BlogDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/the-advantages-of-nearshore-software-development-in-latin-america",
          title:
            "Unlocking the Advantages of Nearshore Software Development in Latin America",
          description:
            "In the dynamic landscape of software development, businesses are constantly seeking innovative solutions to enhance efficiency and reduce costs",
          images: [
            {
              url: "https://triosource.com/images/blog/unlocking-the-advantages-of-nearshore-software.jpg",
              width: 800,
              height: 600,
              alt: "In the dynamic landscape of software development, businesses are constantly seeking innovative solutions to enhance efficiency and reduce costs",
            },
          ],
          authorName: "Triosource",
          keywords: "Nearshore Software Development in Latin America",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://triosource.com/blog/the-advantages-of-nearshore-software-development-in-latin-america"
        title="Unlocking the Advantages of Nearshore Software Development in Latin America"
        headline="Unlocking the Advantages of Nearshore Software Development in Latin America"
        description="In the dynamic landscape of software development, businesses are constantly seeking innovative solutions to enhance efficiency and reduce costs"
        datePublished="Jan 15, 2023"
        dateModified="Jan 15, 2023"
        siteName="Triosource"
        publisherName="Triosource"
        publisherLogo="https://triosource.com/images/white-triosource.png"
        openGraph={{
          type: "article",
          url: "https://triosource.com/blog/the-advantages-of-nearshore-software-development-in-latin-america",
          article: {
            publishedTime: "Jan 15, 2023",
            author: {
              type: "Organization",
              name: "Triosource",
            },
          },
        }}
      />
      <Head>
        <title>
          Unlocking the Advantages of Nearshore Software Development in Latin
          America
        </title>
        <meta
          property="og:title"
          content="Unlocking the Advantages of Nearshore Software Development in Latin America"
          key="title"
        />
        <meta
          name="description"
          content="In the dynamic landscape of software development, businesses are constantly seeking innovative solutions to enhance efficiency and reduce costs."
          key=""
        />
        <meta
          property="og:image"
          content="https://triosource.com/images/blog/unlocking-the-advantages-of-nearshore-software-tb.jpg"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Unlocking the Advantages of Nearshore Software Development in Latin America | Triosource"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
        bgImgClass="item-bg3"
      />
      <BlogDetailsContentNearshoreSoftware />
      <Footer />
    </>
  );
};

export default BlogDetails;
