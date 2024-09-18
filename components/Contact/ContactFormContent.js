import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

const ContactFormContent = () => {
  const executeFunction = () => {
    try {
      var f = document.createElement("iframe");
      f.src =
        "https://forms.zohopublic.in/satechsoftwareipvtltd/form/Triosource/formperma/Yd6FLG9ozg5icmdah2YR8Dmh3WZ9gw8RHBd3D1sbPJs?zf_rszfm=1";
      f.style.border = "none";
      f.style.height = "576px";
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";

      var d = document.getElementById(
        "zf_div_Yd6FLG9ozg5icmdah2YR8Dmh3WZ9gw8RHBd3D1sbPJs"
      );
      d.appendChild(f);
      window.addEventListener(
        "message",
        function () {
          var evntData = event.data;
          if (evntData && evntData.constructor == String) {
            var zf_ifrm_data = evntData.split("|");
            if (zf_ifrm_data.length == 2) {
              var zf_perma = zf_ifrm_data[0];
              var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
              var iframe = document
                .getElementById(
                  "zf_div_Yd6FLG9ozg5icmdah2YR8Dmh3WZ9gw8RHBd3D1sbPJs"
                )
                .getElementsByTagName("iframe")[0];
              if (
                iframe.src.indexOf("formperma") > 0 &&
                iframe.src.indexOf(zf_perma) > 0
              ) {
                var prevIframeHeight = iframe.style.height;
                if (prevIframeHeight != zf_ifrm_ht_nw) {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        },
        false
      );
    } catch (e) {}
  };
  useEffect(() => {
    executeFunction();
  }, []);
  useEffect(() => {
    function wfa_pstMesgFrmFom(evt) {
      if (
        evt.origin === "https://crm.zoho.in" ||
        evt.origin === "https://crm.zohopublic.in"
      ) {
        var loc_obj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });
        evt.source.postMessage(
          "prnt_wnd_pg_lc_rc_frm_prwindow_" + loc_obj,
          evt.origin
        );
      }
    }

    window.addEventListener("message", wfa_pstMesgFrmFom, false);

    return () => {
      window.removeEventListener("message", wfa_pstMesgFrmFom, false);
    };
  }, []);
  return (
    <>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Message Us</span>
            <h2>Drop us a Message with any inquiry</h2>
            <p>
              Thank you for your interest in TrioSource. We’d like to ask you a
              few questions to get to know you and your requirements better.
            </p>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/contact.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                {/* <ContactForm /> */}
                {/* <div id="zf_div_Yd6FLG9ozg5icmdah2YR8Dmh3WZ9gw8RHBd3D1sbPJs"></div> */}
                <iframe
                  width="610px"
                  height="560px"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=f06b22f3f601e0876699107ea7f879f7b893b41d1a64b8a1dc1ea4d38cfb759db8878d867e30b85b40e1e270f55be455gide87332beb81a871f6e759c53c3864c8b7935d4613f7068625e737d5007582289"></iframe>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Contact us by Phone Number or Email Address</h3>
              <h2>
                <span className="number">(408) 400-7043</span>
                <span className="or">OR</span>
                <span className="email">hello@triosource.com</span>
              </h2>

              {/* <ul className="social">
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        fill="#212529"
                        viewBox="0 0 512 512">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
