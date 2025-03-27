import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";

const Style35 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".digi-logo-slider", {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 6,
        },
      },
    });
    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true); // Cleanup on unmount
      }
    };
  }, []);
  return (
    <>
      <div class="ai-wt-hero-area pl-20 pr-20">
        <div class="container-fluid">
          <div class="ai-wt-hero ai-wt-bg pt-160 pb-40 rounded-3 position-relative z-1 overflow-hidden">
            <div class="row justify-content-center">
              <div class="col-xxl-6 col-lg-8">
                <div class="text-center">
                  <h1 class="text-white fs-72 ff-risk-pri mb-20">
                    AI Writing Tool For Generating_
                    <span class="ai-wt-brand-text fw-400">Marketing</span>
                  </h1>
                  <p class="text-white fs-18 ff-risk-pri">
                    AI writing tool for 1-click SEO-optimized articles, blog
                    posts &amp; affiliate content. Available in 48 languages,
                    auto-posted to WordPress with AI Images.
                  </p>
                  <Link
                    to=""
                    class="btn ai-wt-gd-bg-2 dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                  >
                    Start Writing for free
                  </Link>
                </div>
              </div>
            </div>
            <div class="ai-wt-logo-slider pt-120">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-auto">
                    <h5 class="mb-4 text-white fs-20">
                      See how over 7,700+ customers{" "}
                      <span class="ai-wt-brand-text fw-400">
                        Help the world work
                      </span>
                    </h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto">
                    <div class="swiper digi-logo-slider ">
                      <div class="swiper-wrapper align-items-center">
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo.png"
                              class="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_2.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_3.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_4.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide  ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_5.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide  ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo.png"
                              class="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_2.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_3.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_4.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_5.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo.png"
                              class="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_2.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_3.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_4.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide  ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo_5.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                        <div class="swiper-slide  ">
                          <div class="single-logo">
                            <img
                              src="assets/img/creative-agency-2/logo.png"
                              class="img-fluid"
                              alt="logo"
                              height="30"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="assets/img/ai-wt-home/shape/hero-1.png"
              alt=""
              class="shape-1 img-fluid position-absolute left-0 top-0 z--1"
            />
            <img
              src="assets/img/ai-wt-home/shape/hero-2.png"
              alt=""
              class="shape-2 img-fluid position-absolute left-0 bottom-0 z--1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Style35;
