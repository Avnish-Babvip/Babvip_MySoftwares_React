import React from "react";
import { Link } from "react-router-dom";

const Style1 = ({ data }) => {
  return (
    <section class="bg-dark-black pt-120 pb-60">
      <div class="container">
        <div class="bg-soft-black p-4 rounded-custom">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="section-title mb-4">
                <h2>Also Available on IOS &amp; Android</h2>
                <p>
                  This site regularly and would like to help keep the site on
                  the Internet please consider donating a small.
                </p>
              </div>
              <div class="crypto-btn-wrapper">
                <Link
                  to={"#"}
                  class="crypto-app-btn me-3 text-decoration-none mb-3 mb-xl-0"
                >
                  <span class="crypto-btn-content-wrapper">
                    <span class="crypto-btn-icon">
                      <i class="fab fa-google-play"></i>
                    </span>
                    <span class="text-wrapper">
                      <span class="btn-tagline">Available on the </span>
                      <span class="crypto-btn-text">Play Store</span>
                    </span>
                  </span>
                </Link>
                <Link to={"#"} class="crypto-app-btn me-3 text-decoration-none">
                  <span class="crypto-btn-content-wrapper">
                    <span class="crypto-btn-icon">
                      <i class="fab fa-apple"></i>
                    </span>
                    <span class="text-wrapper">
                      <span class="btn-tagline">Available on the </span>
                      <span class="crypto-btn-text">Play Store</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="crypto-app-cta-img text-center text-lg-end mt-5 mt-lg-0">
                <img
                  src="assets/img/crypto-app-image.png"
                  class="img-fluid"
                  alt="Phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style1;
