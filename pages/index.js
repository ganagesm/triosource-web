import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import HeroBanner from "../components/Live/HeroBanner";
import Services from "../components/Live/Services";
import CaseStudiesPost from "../components/Live/CaseStudiesPost";
import FunFacts from "../components/Live/FunFacts";
import PartnerContent from "../components/Live/PartnerContent";
import Testimonials from "../components/Live/Testimonials";
import TechSlider from "../components/Live/TechSlider";
import BlogPostSlider from "../components/Live/BlogPostSlider";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Hire Top Software Developers in Latin America | TrioSource
        </title>
        <meta
          property="og:title"
          content="Hire Top Software Developers in Latin America | TrioSource"
          key="title"
        />
        <meta
          name="description"
          content="We will help you recruit and Hire Best Software Developers in Latin America. We provide top tech talents in Latin America, Brazil, and Mexico. We have been in this industry for 20 years with Over 500 Clients. Connect with us Today!"
          key="description"
        />
      </Head>
      <Navbar />
      <HeroBanner />
      <PartnerContent />
      <Services />
      <FunFacts />
      <Testimonials />
      <TechSlider />
      <BlogPostSlider />
      <CaseStudiesPost />
      <Footer />
    </>
  );
};
export default Index;
