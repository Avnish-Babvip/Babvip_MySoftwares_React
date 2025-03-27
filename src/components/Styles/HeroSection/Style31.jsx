import React from "react";
import { Link } from "react-router-dom";

const Style31 = ({ data }) => {
  return (
    <>
      <div class="rm-hero pt-120 pb-120 position-relative overflow-hidden">
        <div class="container">
          <div class="position-relative">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-6">
                <h1 class="rm-hero-title text-white fs-72 fw-800 ff-risk-pri mb-20">
                  {" "}
                  Streamlined Risk <span class="risk-gd-text">
                    Management
                  </span>{" "}
                  <br />
                  <span class="text-ind">-Software</span>{" "}
                  <span>
                    <img src="assets/img/risk_managment/font.png" alt="" />
                  </span>
                </h1>
                <p class="text-white fs-20 ff-dmsans fw-500 flh-28">
                  There are many variations of passages of Loren epsom available
                  but the majority have suffered alteration by injected.
                </p>
                <Link
                  href=""
                  class="btn risk-btn-bg risk-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-30"
                >
                  Start Free Trial
                </Link>
                <div class="risk-customer-area mt-60">
                  <p class="text-white ff-risk-pri fw-600">
                    See how over 7,700 customers{" "}
                    <span class="risk-highlight-color fw-800">
                      Help the world work
                    </span>
                  </p>
                  <div class="risk-customer-logo-wrapper d-flex align-items-center gap-10 flex-wrap">
                    <img
                      class="risk-customer-logo"
                      src="assets/img/risk_managment/customer.png"
                      alt=""
                    />
                    <img
                      class="risk-customer-logo"
                      src="assets/img/risk_managment/customer_2.png"
                      alt=""
                    />
                    <img
                      class="risk-customer-logo"
                      src="assets/img/risk_managment/customer_3.png"
                      alt=""
                    />
                    <img
                      class="risk-customer-logo"
                      src="assets/img/risk_managment/customer_4.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-8">
                <div class="position-relative">
                  <img
                    src="assets/img/risk_managment/hero.png"
                    alt=""
                    class="risk-hero-img img-fluid"
                  />
                  <Link
                    to=""
                    class="risk-click-btn risk-gd-bg rounded-circle d-flex align-items-center justify-content-center position-absolute"
                  >
                    <svg
                      width="25"
                      height="32"
                      viewBox="0 0 25 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.39397 1.4711C1.39397 1.4711 11.7558 16.9705 21.1011 30.9492M21.1011 30.9492C14.3501 20.851 23.4213 12.0896 23.4213 12.0896M21.1011 30.9492C14.3501 20.851 2.78667 25.8846 2.78667 25.8846"
                        stroke="white"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </Link>
                  <div class="risk-social d-flex align-items-center flex-column gap-20">
                    <a
                      class="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      href=""
                    >
                      <span>
                        <i class="fa-brands fa-facebook-f"></i>
                      </span>
                      Facebook
                    </a>
                    <a
                      class="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      href=""
                    >
                      <span>
                        <i class="fa-brands fa-linkedin"></i>
                      </span>
                      LinkedIn
                    </a>
                    <a
                      class="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      href=""
                    >
                      <span>
                        <i class="fa-brands fa-instagram"></i>
                      </span>
                      Instagram
                    </a>
                    <a
                      class="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      href=""
                    >
                      <span>
                        <i class="fa-brands fa-twitter"></i>
                      </span>
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="assets/img/risk_managment/shape/hero.png"
              alt=""
              class="hero-shape position-absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Style31;
