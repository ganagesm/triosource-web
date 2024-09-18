import React from "react";
import Link from "next/link";
// import Services from "../../components/employer-of-record/Services";

const ServiceDetailsContent = () => {
  return (
    <>
    {/* <Services /> */}
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>
                One-Stop Solutions for all your Global Hiring Needs, Vetted IT
                talent
              </h3>
              <p>
                TrioSource offers unparalleled simplicity, in onboarding IT
                talent in US, Canada, Latin America, India and Singapore.
                Whether you aim to onboard contractors and employees across the
                globe without establishing legal entities.TrioSource seamlessly
                handles it all while ensuring compliance at every step.
              </p>
              <div className="btn-box">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="services-details-image">
              <img
                src="/images/eor/1st-side-image-payroll.jpg"
                alt="One-Stop Solutions for all your Global Hiring Needs, Vetted IT
                talent"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
