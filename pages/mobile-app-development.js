import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Industries from "../components/Live/Industries";
import Testimonials from "../components/Live/Testimonials";
import HeroBanner from "../components/mobile-app-development/HeroBanner";
import WhyTriosource from "../components/mobile-app-development/WhyTriosource";
// import Testimonials from "../components/mobile-app-development/Testimonials";
import BlogPost from "../components/mobile-app-development/BlogPost";
import ComputerVisionAI from "../components/mobile-app-development/ComputerVisionAI";
import CaseStudiesSlider from "../components/Live/CaseStudiesSlider";
import TechDetailsContent from "../components/mobile-app-development/TechDetailsContent";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const Index = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/mobile-app-development",
          title: "Engage Users with TrioSource Mobile App Development",
          description:
            "Craft captivating mobile experiences with TrioSource Connect with your audience anytime, anywhere with our expertise",
          images: [
            {
              url: "https://triosource.com/images/app-dev/app-development-1.jpeg",
              width: 800,
              height: 600,
              alt: "Craft captivating mobile experiences with TrioSource Connect with your audience anytime, anywhere with our expertise",
            },
          ],
          authorName: "Triosource",
          keywords: "Mobile App Development",
        }}
      />
      <WebPageJsonLd
        headline="Engage Users with TrioSource Mobile App Development"
        description="Craft captivating mobile experiences with TrioSource Connect with your audience anytime, anywhere with our expertise"
        author="Triosource"
        keywords="Mobile App Development"
        image="https://triosource.com/images/app-dev/app-development-1.jpeg"
      />

      <Head>
        <title>Engage Users with TrioSource Mobile App Development </title>
        <meta
          property="og:title"
          content="Engage Users with TrioSource  Mobile App Development"
          key="title"
        />
        <meta
          name="description"
          content="Craft captivating mobile experiences with TrioSource . Connect with your audience anytime, anywhere with our expertise."
          key="description"
        />
      </Head>
      <Navbar />
      <HeroBanner />
      <ComputerVisionAI />
      <TechDetailsContent />
      <Industries />
      <WhyTriosource />
      {/* <BlogPost /> */}
      <CaseStudiesSlider />
      <Testimonials />
      <Footer />
    </>
  );
};
export default Index;
