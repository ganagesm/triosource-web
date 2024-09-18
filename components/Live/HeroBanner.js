import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const HeroBanner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-slides">
        <SwiperSlide>
          <div
            className="main-banner"
            style={{ backgroundImage: `url(/images/main-banner-bg1.jpg)` }}>
            <div className="container">
              <div className="main-banner-content">
                <h1 style={{ color: "#fff" }}>
                  {/* AI trained nearshore software development teams. */}
                  Hire Top Talent in Latin America for Software Excellence.
                </h1>
                <p>
                  {/* Nearshore, offshore, onsite. Hire talent anywhere or let our
                  experts unlock business value for you with bleeding edge
                  technologies. */}
                  We're Your Tech-Enabled Recruitment Partner, Making Top Talent
                  Acquisition Seamless. Ready to Scale Your Team with Latin
                  America's Finest Developers? Let's Power Your Success
                  Together!
                </p>

                <div className="btn-box">
                  <Link href="/contact" className="btn btn-primary">
                    Get in touch now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroBanner;
