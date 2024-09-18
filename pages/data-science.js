import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/data-science/HeroBanner";
import Industries from "../components/Live/Industries";
// import Testimonials from "../components/data-science/Testimonials";
import Testimonials from "../components/Live/Testimonials";
import CaseStudiesSlider from "../components/data-science/CaseStudiesSlider";
import WhyTriosource from "../components/data-science/WhyTriosource";
import ComputerVisionAI from "../components/data-science/ComputerVisionAI";
import TechDetailsContent from "../components/data-science/TechDetailsContent";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/data-science",
          title: "Data Science Expertise by TrioSource for Actionable Insights",
          description:
            "Turn big data into actionable insights TrioSource data science solutions drive decisions powered by analytics",
          images: [
            {
              url: "https://triosource.com/images/banners/data-science-001.jpeg",
              width: 800,
              height: 600,
              alt: "Turn big data into actionable insights TrioSource data science solutions drive decisions powered by analytics",
            },
          ],
          authorName: "Triosource",
          keywords: "Data Science",
        }}
      />
      <WebPageJsonLd
        headline="Data Science Expertise by TrioSource for Actionable Insights"
        description="Turn big data into actionable insights TrioSource data science solutions drive decisions powered by analytics"
        author="Triosource"
        keywords="Data Science"
        image="https://triosource.com/images/banners/data-science-001.jpeg"
      />

      <Head>
        <title>
          Data Science Expertise by TrioSource for Actionable Insights{" "}
        </title>
        <meta
          property="og:title"
          content="Data Science Expertise by TrioSource  for Actionable Insights "
          key="title"
        />
        <meta
          name="description"
          content="Turn big data into actionable insights. TrioSource  data science solutions drive decisions powered by analytics."
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
