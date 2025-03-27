import React from "react";
import { Link } from "react-router-dom";

const Style16 = ({ data }) => {
  return (
    <>
      <div
        class="slider-one slider"
        style={{
          background: `url('assets/img/slider/sl-1-1.png') no-repeat center
      center / cover
  `,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="hero-content">
                <h1
                  class="fw-bold display-5 text-white mb-4 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  Reliable Hosting For Game
                  <span class="gr-text ms-lg-2">Solutions.</span>
                </h1>
                <p class="lead text-off-white m-0">
                  Give your Website the speed, security, and uptime it deserves
                  and become part of the fastest Web Hosting.
                </p>
                <Link to={"#"} class="btn-gradient mt-4 link-with-icon">
                  Order Now <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style16;
