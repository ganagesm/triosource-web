import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import HeroBanner from "../components/cloud-nfrastructure-services/HeroBanner";
import WhyTriosource from "../components/cloud-nfrastructure-services/WhyTriosource";
import ComputerVisionAI from "../components/cloud-nfrastructure-services/ComputerVisionAI";
import TechDetailsContent from "../components/cloud-nfrastructure-services/TechDetailsContent";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const Index = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/cloud-infrastructure-services",
          title:
            "Cloud Infrastructure Services by TrioSource for Seamless Scaling",
          description:
            "Leverage the power of cloud with TrioSource Ensure agility, security, and scalability in your business operations",
          images: [
            {
              url: "https://triosource.com/images/banners/Big_Data_Analytics_in_Cloud_Computing.jpg",
              width: 800,
              height: 600,
              alt: "Leverage the power of cloud with TrioSource Ensure agility, security, and scalability in your business operations",
            },
          ],
          authorName: "Triosource",
          keywords: "Cloud Infrastructure Services",
        }}
      />
      <WebPageJsonLd
        headline="Cloud Infrastructure Services by TrioSource for Seamless Scaling"
        description="Leverage the power of cloud with TrioSource Ensure agility, security, and scalability in your business operations"
        author="Triosource"
        keywords="Cloud Infrastructure Services"
        image="https://triosource.com/images/banners/Big_Data_Analytics_in_Cloud_Computing.jpg"
      />

      <Head>
        <title>
          Cloud Infrastructure Services by TrioSource for Seamless Scaling{" "}
        </title>
        <meta
          property="og:title"
          content="Cloud Infrastructure Services by TrioSource  for Seamless Scaling "
          key="title"
        />
        <meta
          name="description"
          content="Leverage the power of cloud with TrioSource . Ensure agility, security, and scalability in your business operations"
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
