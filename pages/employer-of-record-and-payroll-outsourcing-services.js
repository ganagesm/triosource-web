import Navbar from "../components/Live/Navbar";
import Footer from "../components/Live/Footer";
import Services from "../components/employer-of-record/Services";
// import ComputerVisionAI from "../components/employer-of-record/ComputerVisionAI";
import PageBanner from "../components/employer-of-record/PageBanner";
import TechDetailsContent from "../components/employer-of-record/TechDetailsContent";
import Head from "next/head";
import { ArticleJsonLd, WebPageJsonLd, NextSeo } from "next-seo";
const Index = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://triosource.com/employer-of-record-and-payroll-outsourcing-services",
          title:
            "Seamless EOR and Payroll Outsourcing Services Globally | TrioSource",
          description:
            "TrioSource brings you the ultimate solution for global talent onboarding with our Streamlined Global Talent Onboarding, Employer Of Record and Payroll Outsourcing Services Whether you re expanding operations in the US, Canada, Latin America, India, or Singapore, TrioSource ensures a hassle free process",
          images: [
            {
              url: "https://triosource.com/images/eor/1st-side-image-payroll.jpg",
              width: 800,
              height: 600,
              alt: "TrioSource brings you the ultimate solution for global talent onboarding with our Streamlined Global Talent Onboarding, Employer Of Record and Payroll Outsourcing Services Whether you re expanding operations in the US, Canada, Latin America, India, or Singapore, TrioSource ensures a hassle free process",
            },
          ],
          authorName: "Triosource",
          keywords: "EOR Solutions",
        }}
      />
      <WebPageJsonLd
        headline="Seamless EOR and Payroll Outsourcing Services Globally | TrioSource"
        description="TrioSource brings you the ultimate solution for global talent onboarding with our Streamlined Global Talent Onboarding, Employer Of Record and Payroll Outsourcing Services Whether you re expanding operations in the US, Canada, Latin America, India, or Singapore, TrioSource ensures a hassle free process"
        author="Triosource"
        keywords="EOR Solutions"
        image="https://triosource.com/images/eor/1st-side-image-payroll.jpg"
      />
      <Head>
        <title>
          Seamless EOR and Payroll Outsourcing Services Globally | TrioSource{" "}
        </title>
        <meta
          property="og:title"
          content="Seamless EOR and Payroll Outsourcing Services Globally | TrioSource  "
          key="title"
        />
        <meta
          name="description"
          content="TrioSource brings you the ultimate solution for global talent onboarding with our Streamlined Global Talent Onboarding, Employer Of Record and Payroll Outsourcing Services. Whether you're expanding operations in the US, Canada, Latin America, India, or Singapore, TrioSource ensures a hassle-free process."
          key="description"
        />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Global Talent, Simplified: EOR Solutions"
        homePageUrl="/"
        homePageText="Engagement Models"
        activePageText="Employer of Record (EOR)"
        bgImgClass="item-bg2 eor-banner"
      />

      <Services />
      {/* <TechDetailsContent /> */}
      {/* <ComputerVisionAI /> */}
      {/* <BlogPost /> */}

      <Footer />
    </>
  );
};
export default Index;
