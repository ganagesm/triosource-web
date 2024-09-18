import React from "react";
import Navbar from "../components/Live/Navbar";
import OffshorePageBanner from "../components/Live/OffshorePageBanner";
import OffshoreServiceDetailsContent from "../components/Live/OffshoreServiceDetailsContent";
import OffshoreServices from "../components/Live/OffshoreServices";
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
          url: "https://triosource.com/offshore",
          title: "Explore the Benefits of Nearshore IT Services | TrioSource",
          description:
            "Tap into a world of talent with TrioSource Offshore services Get quality solutions at competitive rates, bridging global distances",
          images: [
            {
              url: "https://triosource.com/images/services-details/service-details1.jpg",
              width: 800,
              height: 600,
              alt: "Tap into a world of talent with TrioSource Offshore services Get quality solutions at competitive rates, bridging global distances",
            },
          ],
          authorName: "Triosource",
          keywords: "Offshore",
        }}
      />
      <WebPageJsonLd
        headline="Explore the Benefits of Nearshore IT Services | TrioSource"
        description="Tap into a world of talent with TrioSource Offshore services Get quality solutions at competitive rates, bridging global distances"
        author="Triosource"
        keywords="Offshore"
        image="https://triosource.com/images/services-details/service-details1.jpg"
      />
      <Head>
        <title>
          Offshore Solutions by TrioSource for Global Talent Access{" "}
        </title>
        <meta
          property="og:title"
          content="Offshore Solutions by TrioSource  for Global Talent Access "
          key="title"
        />
        <meta
          name="description"
          content="Tap into a world of talent with TrioSource  Offshore services. Get quality solutions at competitive rates, bridging global distances."
          key="description"
        />
      </Head>

      <Navbar />
      <OffshorePageBanner
        pageTitle="Offshore Teams - Cost Savings and Global Talent Pool"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Offshore"
        bgImgClass="item-bg2"
      />
      <OffshoreServices />
      <OffshoreServiceDetailsContent />
      <NearshoringTestimonials />
      <Footer />
    </>
  );
};

export default ServiceDetails;
