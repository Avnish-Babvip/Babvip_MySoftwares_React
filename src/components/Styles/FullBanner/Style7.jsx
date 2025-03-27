import React from "react";
import { Link } from "react-router-dom";

const Style7 = ({ data }) => {
  return (
    <div class="rm-cta-area risk-bg-color-two ptb-80 position-relative z-1">
      <div class="container">
        <div class="position-relative">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-7">
              <div class="text-center">
                <img
                  src="assets/img/risk_managment/cta.png"
                  alt=""
                  class="risk-cta-img position-absolute z--1"
                />
                <h6 class="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                  Explore How Can I Help You
                </h6>
                <h2 class="risk-title text-white fs-42 ff-risk-pri flh-56 fw-800">
                  Discover the Value of Risk Intelligence.
                </h2>
                <Link
                  to={"#"}
                  class="btn risk-btn-bg risk-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-20"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style7;
