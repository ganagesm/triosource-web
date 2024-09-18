import React, { Component, useEffect } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";

const Footer = () => {
  // useEffect(() => {
  //   const script = document.createElement("script")

  //   script.src =
  //     "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"

  //   script.async = true

  //   script.integrity =
  //     "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"

  //   script.crossOrigin = "anonymous"

  //   document.body.appendChild(script)

  //   return () => {
  //     // clean up the script when the component in unmounted
  //     document.body.removeChild(script)
  //   }
  // }, [])

  //Zoho Sales Iq Script:
  const useScript = (url, widgetCode) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");

      let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`;

      script.appendChild(document.createTextNode(code));
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [url]);
  };

  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/images/white-triosource.png"
                      alt="triosource logo"
                      width={200}
                    />
                    <p style={{ color: "white", marginTop: 0 }}>
                      SA Technologies Company
                    </p>
                  </Link>
                  {/* <p>
                    Trisource is a technology consulting and outsourcing
                    company. Nearshore, Offshore, onsite. Hire technology talent
                    anywhere or let our experts use bleeding edge tech to unlock
                    business value for you.
                  </p> */}
                  <p>
                    TrioSource, a dedicated brand of SA Technologies exclusively
                    focused on nearshore solutions, is a technology consulting
                    and outsourcing company. Hire technology talent anywhere
                    with us, and let our team of experts help you grow your
                    business value.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/triosource/"
                      target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/TrioSource/"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/TrioSource"
                      target="_blank"
                      rel="noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        fill="#ffffff"
                        viewBox="0 0 512 512">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200">
                <h3>Engagement Models</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/nearshore">Nearshoring</Link>
                  </li>
                  <li>
                    <Link href="/offshore">Offshoring</Link>
                  </li>
                  <li>
                    <Link href="/onsite">Onsite Hiring</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300">
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  {/* <li>
                    {" "}
                    <Link href="/technologies">Technologies</Link>{" "}
                  </li> */}
                  <li>
                    <Link href="/generative-ai/">Generative AI</Link>
                  </li>
                  <li>
                    <Link href="/case-studies/">Case Studies </Link>
                  </li>
                  <li>
                    <Link href="/blog/">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400">
                <h3>Contact</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    3031 Tisch Way, 110 Plaza West <br /> San Jose, CA
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:hello@triosource.com">
                      hello@triosource.com
                    </a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:(408)4007043">(408) 400-7043</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  @ Copyright &copy;{currentYear} Triosource. All Rights
                  Reserved .
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>

      <React.Fragment>
        {useScript(
          "https://salesiq.zoho.in/widget",
          "siqed6b1d489c04455fb0ed606f0cf924d5fc10486201b13b1557662d1e9206aa3c"
        )}
      </React.Fragment>

      <Helmet>
        {/* <script type="text/javascript" id="zsiqchat">var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siqed6b1d489c04455fb0ed606f0cf924d5fc10486201b13b1557662d1e9206aa3c", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</script> */}
      </Helmet>
    </>
  );
};

export default Footer;
