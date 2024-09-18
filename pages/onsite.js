import React from "react";
import Navbar from "../components/Live/Navbar";
import OnsitePageBanner from "../components/Live/OnsitePageBanner";
import OnsiteServiceDetailsContent from "../components/Live/OnsiteServiceDetailsContent";
import OnsiteServices from "../components/Live/OnsiteServices";
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
          url: "https://triosource.com/onsite",
          title: "Onsite Collaboration by TrioSource for Direct Engagement",
          description:
            "Integrate TrioSource experts directly into your team Achieve seamless collaboration and immediate results with our Onsite services",
          images: [
            {
              url: "https://triosource.com/images/services-details/onsite-talent-banner.jpeg",
              width: 800,
              height: 600,
              alt: "Integrate TrioSource experts directly into your team Achieve seamless collaboration and immediate results with our Onsite services",
            },
          ],
          authorName: "Triosource",
          keywords: "onsite Teams",
        }}
      />
      <WebPageJsonLd
        headline="Onsite Collaboration by TrioSource for Direct Engagement"
        description="Integrate TrioSource experts directly into your team Achieve seamless collaboration and immediate results with our Onsite services"
        author="Triosource"
        keywords="onsite Teams"
        image="https://triosource.com/images/services-details/onsite-talent-banner.jpeg"
      />
      <Head>
        <title>Onsite Collaboration by TrioSource for Direct Engagement </title>
        <meta
          property="og:title"
          content="Onsite Collaboration by TrioSource  for Direct Engagement"
          key="title"
        />
        <meta
          name="description"
          content="Integrate TrioSource  experts directly into your team. Achieve seamless collaboration and immediate results with our Onsite services."
          key="description"
        />
      </Head>

      <Navbar />
      <OnsitePageBanner
        pageTitle="Onsite Teams - Proximity and Collaboration"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Onsite"
        bgImgClass="item-bg2"
      />
      <OnsiteServices />
      <OnsiteServiceDetailsContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
