import React from "react";
import NavBar from "./NavBar";

function Header({ about }) {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">&lt; SUNDY /&gt;</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href={"mailto:" + about.email}>
                <i className="bx bxl-gmail"></i>
              </a>
              <a href={about.github}>
                <i className="bx bxl-github"></i>
              </a>
              <a href={about.linkedIn}>
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </>
  );
}

export default Header;
