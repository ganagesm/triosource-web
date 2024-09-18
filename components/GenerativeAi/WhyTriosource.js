import React, { useState } from "react";
import Link from "next/link";

const WhyTriosource = () => {
  return (
    <>
      <section className="webinar-area pt-100 pb-70">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2>Getting Help and Support</h2>
              <p>
                Our dedication to your success goes beyond just providing AI
                services. We offer extensive support resources, including
                detailed documentation, active community forums, and direct
                access to our team of AI experts. Whether you're facing a
                technical challenge or seeking advice on best practices, we're
                here to help you achieve your goals with AI.
              </p>

              <Link href="/contact/" className="btn btn-primary">
                Know More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            {/* <div className="webinar-video-image"> */}
            <div className="">
              <img src="/images/thisisengineering.jpeg" alt="image" />
              {/* <img src="/images/woman.jpg" alt="image" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyTriosource;
