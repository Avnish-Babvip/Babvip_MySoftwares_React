import React from "react";
import { Link } from "react-router-dom";

const Style33 = ({ data }) => {
  return (
    <>
      <div class="ai-home-hero-area bgc-dark-1 pt-160 pb-120 position-relative z-1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-8 col-lg-10">
              <h1 class="aih-hero-title text-white fs-72">
                One Brilliant Idea Can Change{" "}
                <span class="aih-color"> Your Business</span>
              </h1>
            </div>
            <div class="col-xl-4 col-lg-7">
              <p class="clr-text-1 ff-poppins">
                Get more conversions and drive more sales with Anyword’s AI
                writer that generates and optimizes your copy. Powerful
                predictive analytics.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="position-relative mt-40">
                <img
                  src="assets/img/ai_home/hero.png"
                  alt=""
                  class="aih-hero-img img-fluid"
                />
                <div class="aih-counter-box d-flex align-items-center gap-10 flex-wrap position-absolute">
                  <Link
                    href=""
                    class="aih-arrow-btn d-inline-flex align-items-center justify-content-center position-relative"
                  >
                    <svg
                      width="24"
                      height="39"
                      viewBox="0 0 24 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 38.0607C11.5251 38.6464 12.4749 38.6464 13.0607 38.0607L22.6066 28.5147C23.1924 27.9289 23.1924 26.9792 22.6066 26.3934C22.0208 25.8076 21.0711 25.8076 20.4853 26.3934L12 34.8787L3.51472 26.3934C2.92893 25.8076 1.97919 25.8076 1.3934 26.3934C0.807613 26.9792 0.807613 27.9289 1.3934 28.5147L10.9393 38.0607ZM10.5 2L10.5 37L13.5 37L13.5 2L10.5 2Z"
                        fill="#00E1BE"
                      ></path>
                    </svg>
                    <img
                      class="aih-arrow-btn-img rotate-ani position-absolute"
                      src="assets/img/ai_home/arrow-btn.png"
                      alt=""
                    />
                  </Link>
                  <div class="aih-hero-counter aih-bg-color p-4 rounded-16">
                    <h5 class="aih-color-two fs-48 fw-600">
                      $ <span class="counter">1.69</span> M
                    </h5>
                    <p class="aih-color-two mb-0">Earned to worldwide</p>
                  </div>
                </div>
                <Link
                  href=""
                  class="btn aih-btn aih-bg-color aih-color-two ff-poppins fs-20 fw-600 d-inline-flex align-items-center gap-2 position-absolute"
                >
                  <span>Get in Touch </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.25 10C1.25 14.8325 5.16751 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM5.625 9.375C5.27982 9.375 5 9.65482 5 10C5 10.3452 5.27982 10.625 5.625 10.625H12.8661L10.1831 13.3081C9.93898 13.5521 9.93898 13.9479 10.1831 14.1919C10.4271 14.436 10.8229 14.436 11.0669 14.1919L14.8169 10.4419C15.061 10.1979 15.061 9.80213 14.8169 9.55806L11.0669 5.80806C10.8229 5.56398 10.4271 5.56398 10.1831 5.80806C9.93898 6.05214 9.93898 6.44787 10.1831 6.69194L12.8661 9.375H5.625Z"
                      fill="#141414"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style33;
