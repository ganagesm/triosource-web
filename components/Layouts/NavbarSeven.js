import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarSeven = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/white-logo.png"
                  className="main-logo"
                  alt="logo"
                />
                <img
                  src="/images/black-logo.png"
                  className="optional-logo"
                  alt="logo"
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/technologies"
                      className={`nav-link ${
                        currentPath == "/technologies" && "active"
                      }`}
                    >
                      Technologies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/cloud-partnerships"
                      className={`nav-link ${
                        currentPath == "/cloud-partnerships" && "active"
                      }`}
                    >
                      Cloud Partnerships
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/case-studies"
                      className={`nav-link ${
                        currentPath == "/case-studies" && "active"
                      }`}
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/team"
                      className={`nav-link ${
                        currentPath == "/team" && "active"
                      }`}
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default NavbarSeven;
