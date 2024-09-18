import React from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import NearshoringServices from "../components/Live/NearshoringServices";
import NearshoringTestimonials from "../components/Live/NearshoringTestimonials";
import Footer from "../components/Live/Footer";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const ServiceDetails = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/blog/nearshore",
          title: "Explore the Benefits of Nearshore IT Services | TrioSource",
          description:
            "Triosource offers top tier nearshore IT Services for cost effective and efficient software development solutions Contact Us",
          images: [
            {
              url: "https://triosource.com/images/services-details/service-details1.jpg",
              width: 800,
              height: 600,
              alt: "Triosource offers top tier nearshore IT Services for cost effective and efficient software development solutions Contact Us",
            },
          ],
          authorName: "Triosource",
          keywords: "nearshore IT Services",
        }}
      />
      <WebPageJsonLd
        headline="Explore the Benefits of Nearshore IT Services | TrioSource"
        description="Triosource offers top tier nearshore IT Services for cost effective and efficient software development solutions Contact Us"
        author="Triosource"
        keywords="nearshore IT Services"
        image="https://triosource.com/images/services-details/service-details1.jpg"
      />
      <Head>
        <title>
          Explore the Benefits of Nearshore IT Services | TrioSource{" "}
        </title>
        <meta
          property="og:title"
          content="Explore the Benefits of Nearshore IT Services | TrioSource "
          key="title"
        />
        <meta
          name="description"
          content="Triosource offers top-tier nearshore IT Services for cost-effective and efficient software development solutions. Contact Us"
          key="description"
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Nearshore Development Teams - Talent in your time zone"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Nearshore"
        bgImgClass="item-bg2"
      />
      <NearshoringServices />
      <ServiceDetailsContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
