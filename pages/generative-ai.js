import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/GenerativeAi/Services";
// import ComputerVisionAI from "../components/GenerativeAi/ComputerVisionAI";
import PageBanner from "../components/GenerativeAi/PageBanner";
import TechDetailsContent from "../components/GenerativeAi/TechDetailsContent";
import CraftingTheFuture from "../components/GenerativeAi/CraftingTheFuture";
import WhyTriosource from "../components/GenerativeAi/WhyTriosource";
import Testimonials from "../components/GenerativeAi/Testimonials";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/generative-ai",
          title: "Unlock the Future with TrioSource Generative AI Solutions",
          description:
            "Unlock creativity with TrioSource Generative AI solutions Drive innovation and stay ahead in the digital age",
          images: [
            {
              url: "https://triosource.com/images/blog/generative-ai-case-studie.jpeg",
              width: 800,
              height: 600,
              alt: "Unlock creativity with TrioSource Generative AI solutions Drive innovation and stay ahead in the digital age",
            },
          ],
          authorName: "Triosource",
          keywords: "Generative Ai",
        }}
      />
      <WebPageJsonLd
        headline="Unlock the Future with TrioSource Generative AI Solutions"
        description="Unlock creativity with TrioSource Generative AI solutions Drive innovation and stay ahead in the digital age"
        author="Triosource"
        keywords="Generative Ai"
        image="https://triosource.com/images/blog/generative-ai-case-studie.jpeg"
      />
      <Head>
        <title>
          Unlock the Future with TrioSource Generative AI Solutions{" "}
        </title>
        <meta
          property="og:title"
          content="Unlock the Future with TrioSource  Generative AI Solutions "
          key="title"
        />
        <meta
          name="description"
          content="Unlock creativity with TrioSource  Generative AI solutions. Drive innovation and stay ahead in the digital age. "
          key="description"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Beyond Imagination: Empowering Businesses with Generative AI"
        homePageUrl="/"
        homePageText="Technology"
        activePageText="Generative AI"
        bgImgClass="item-bg2"
      />

      <TechDetailsContent />
      <CraftingTheFuture />
      <Services />
      <WhyTriosource />
      <Testimonials />
      {/* <BlogPost /> */}

      <Footer />
    </>
  );
};
export default Index;
