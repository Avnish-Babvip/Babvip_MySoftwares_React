import React from "react";
import { Link } from "react-router-dom";

const Style24 = ({ data }) => {
  return (
    <>
      <section class="dg-hero-section position-relative z-1 overflow-hidden">
        <img
          src="assets/img/digital-agency/hero-left-shape.png"
          alt="hero shape"
          class="position-absolute hero-curve left z--1"
        />
        <img
          src="assets/img/digital-agency/hero-right-shape.png"
          alt="hero shape"
          class="position-absolute hero-curve right z--1"
        />
        <span class="dg-circle-blur position-absolute rounded-circle"></span>
        <img
          src="assets/img/digital-agency/hero-line-shape-1.png"
          alt="line shape"
          class="position-absolute hero-line-shape-1 z--1"
        />
        <img
          src="assets/img/digital-agency/hero-line-shape-2.png"
          alt="line shape"
          class="position-absolute hero-line-shape-2 z--1"
        />
        <img
          src="assets/img/digital-agency/hero-net-shape.png"
          alt="hero net"
          class="position-absolute hero-net-shape z--1"
        />
        <img
          src="assets/img/digital-agency/triangle-circle.png"
          alt="triangle"
          class="position-absolute triangle-circle z--1 d-none d-sm-block"
        />
        <span class="dg-hero-circle-1 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span class="dg-hero-circle-2 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span class="dg-hero-circle-3 dg-circle-style-2 position-absolute z--1 rounded-circle"></span>
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-xl-6 col-lg-10">
              <div class="dg-hero-content">
                <span class="fw-bold text-warning mb-3">
                  QUIETY DIGITAL AGENCY
                </span>
                <h1 class="display-2 text-white mb-4 fw-bold">
                  We help you <br class="d-none d-xxl-block" />
                  to grow Business
                </h1>
                <p class="mb-5 text-white">
                  Make your work easier with an integrated ecosystem that lets
                  all departments work properly together.
                </p>
                <Link to="#" class="btn dg-primary-btn rounded-pill">
                  Get Started
                </Link>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="dg-hero-right position-relative">
                <img
                  src="assets/img/digital-agency/doted.png"
                  alt="doted shape"
                  class="position-absolute doted-shape"
                />
                <img
                  src="assets/img/digital-agency/hero-man.png"
                  alt="man"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style24;
