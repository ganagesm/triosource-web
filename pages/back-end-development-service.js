import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/back-end-development-service/HeroBanner";
import Industries from "../components/Live/Industries";
import WhyTriosource from "../components/back-end-development-service/WhyTriosource";
// import Testimonials from "../components/back-end-development-service/Testimonials";
import Testimonials from "../components/Live/Testimonials";
import ComputerVisionAI from "../components/back-end-development-service/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/back-end-development-service/TechDetailsContent";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/back-end-development-service",
          title: "Power Your Platforms with TrioSource Back-End Development",
          description:
            "Power your digital platforms with TrioSource back end development Ensure seamless, secure, and scalable operations",
          images: [
            {
              url: "https://triosource.com/images/banners/technologies-we-use.png",
              width: 800,
              height: 600,
              alt: "Power your digital platforms with TrioSource back end development Ensure seamless, secure, and scalable operations",
            },
          ],
          authorName: "Triosource",
          keywords: "Back-end Development Service",
        }}
      />
      <WebPageJsonLd
        headline="Power Your Platforms with TrioSource Back-End Development"
        description="Power your digital platforms with TrioSource back end development Ensure seamless, secure, and scalable operations"
        author="Triosource"
        keywords="Back-end Development Service"
        image="https://triosource.com/images/banners/technologies-we-use.png"
      />
      <Head>
        <title>
          Power Your Platforms with TrioSource Back-End Development{" "}
        </title>
        <meta
          property="og:title"
          content="Power Your Platforms with TrioSource  Back-End Development"
          key="title"
        />
        <meta
          name="description"
          content="Power your digital platforms with TrioSource  back-end development. Ensure seamless, secure, and scalable operations."
          key="description"
        />
      </Head>

      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <Industries />
      <WhyTriosource />
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  );
};
export default Index;
