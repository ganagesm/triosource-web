import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/frontendDevelopment/HeroBanner";
import AboutUs from "../components/frontendDevelopment/AboutUs";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
// import Testimonials from "../components/frontendDevelopment/Testimonials";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import WhyTriosource from "../components/frontendDevelopment/WhyTriosource";
import ComputerVisionAI from "../components/frontendDevelopment/ComputerVisionAI";
import TechDetailsContent from "../components/frontendDevelopment/TechDetailsContent";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/frontend-development",
          title:
            "Create Stunning UI with TrioSource frontend development services.",
          description:
            "Deliver stunning web interfaces with TrioSource frontend development services User centric designs for the modern web",
          images: [
            {
              url: "https://triosource.com/images/banners/frontend-development-1.jpeg",
              width: 800,
              height: 600,
              alt: "Deliver stunning web interfaces with TrioSource frontend development services User centric designs for the modern web",
            },
          ],
          authorName: "Triosource",
          keywords: "Frontend Development",
        }}
      />
      <WebPageJsonLd
        headline="Create Stunning UI with TrioSource frontend development services."
        description="Deliver stunning web interfaces with TrioSource frontend development services User centric designs for the modern web"
        author="Triosource"
        keywords="Frontend Development"
        image="https://triosource.com/images/banners/frontend-development-1.jpeg"
      />

      <Head>
        <title>
          Create Stunning UI with TrioSource frontend development services.{" "}
        </title>
        <meta
          property="og:title"
          content="Create Stunning UI with TrioSource  frontend development services."
          key="title"
        />
        <meta
          name="description"
          content="Deliver stunning web interfaces with TrioSource  frontend development services. User-centric designs for the modern web."
          key="description"
        />
      </Head>

      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      {/* <AboutUs /> */}
      <Industries />
      <WhyTriosource />
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  );
};
export default Index;
