import React from "react";
import { Link } from "react-router-dom";

const Style36 = ({ data }) => {
  return (
    <>
      <div class="aiart-hreo-area bgc-white pt-200 pb-60 position-relative z-1 overflow-hidden">
        <img
          src="assets/img/aiart_home/shape/hero-1.png"
          alt=""
          class="shape-1 z--1 position-absolute"
        />
        <img
          src="assets/img/aiart_home/shape/hero-2.png"
          alt=""
          class="shape-2 z--1 position-absolute"
        />
        <img
          src="assets/img/aiart_home/shape/hero-3.png"
          alt=""
          class="shape-3 z--1 position-absolute"
        />
        <div class="container">
          <div class="position-relative">
            <div class="row">
              <div class="col-xxl-8 col-xl-10">
                <h1 class="text-black fs-142 ff-risk-pri">
                  Unleash <br />
                  <span class="bg-white pr-40 pb-20 rounded-3">
                    Art Image
                  </span>{" "}
                  <br />
                  <span class="title-img">
                    <img src="assets/img/aiart_home/title.png" alt="" />
                  </span>
                  <span class="bgc-white fs-130 pr-40 pb-20 rounded-3">
                    <span class="aiart-outline-text">Generator</span>
                  </span>
                </h1>
                <div class="row">
                  <div class="col-lg-8">
                    <p class="text-black fw-700 ff-risk-pri mt-20 mb-30">
                      Your One-Stop Solution for Content{" "}
                      <span class="aiart-gd-text">
                        Creation, Audio Generation,
                      </span>{" "}
                      Image Crafting, &amp; AI Chatbot Development alteration
                      rando missed.
                    </p>
                    <ul class="aiart-hero-list d-flex align-items-center flex-wrap gap-4 list-unstyled">
                      <li>
                        <Link
                          to=""
                          class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Creative
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Moody Lighting
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          3d Modeling
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Color Grading
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Back light
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Depth of Filed
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          class="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-8">
                <div class="aiart-hero-right">
                  <img
                    src="assets/img/aiart_home/hero.png"
                    alt=""
                    class="aiart-hero-img position-absolute img-fluid z--1"
                  />
                  <Link
                    href=""
                    class="aiart-un-btn aiart-gd-bg text-white fw-700 rounded-circle d-flex align-items-center justify-content-center flex-column gap-0 position-absolute"
                  >
                    <span class="d-flex align-items-center justify-content-center gap-3">
                      Get
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.763587 17.2308C0.763587 17.2308 9.42193 8.57241 17.2308 0.76353M17.2308 0.76353C11.5897 6.40463 4.78493 1.68236 4.78493 1.68236M17.2308 0.76353C11.5897 6.40463 16.312 13.2094 16.312 13.2094"
                          stroke="white"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </span>
                    Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style36;
