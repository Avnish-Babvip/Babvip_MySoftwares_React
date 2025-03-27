import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";

const Style32 = ({ data }) => {
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
      <div class="it-company-hero-area it-company-bg-two pt-160 pb-40 position-relative z-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="it-company-hero-title it-company-color fs-64 mb-30">
                <span class="fs-40 fw-600">Solve Your Business</span>
                Challenges With IT
              </h1>
              <p class="clr-paragraph fs-18 fw-500 flh-28 fch-50 mb-40">
                Be available right where your customers need it and give your
                team the automatically.
              </p>
              <Link
                href=""
                class="btn it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16"
              >
                Get Started
              </Link>
            </div>
            <div class="col-lg-6">
              <img
                src="assets/img/it_company/hero.png"
                alt=""
                class="it-company-img img-fluid"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="swiper digi-logo-slider">
                <div class="swiper-wrapper align-items-center">
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo.png"
                        class="img-fluid"
                        height="30"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide  ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_2.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide  ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_3.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_4.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_5.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo.png"
                        class="img-fluid"
                        height="30"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_2.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_3.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_4.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_5.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo.png"
                        class="img-fluid"
                        height="30"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide  ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_2.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide  ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_3.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_4.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
                      <img
                        src="assets/img/creative-agency-2/logo_5.png"
                        class="img-fluid"
                        alt="logo"
                        height="30"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide ">
                    <div class="single-logo text-center p-3 risk-btn-hover">
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
        <img
          src="assets/img/it_company/shape/hero.png"
          alt=""
          class="s-one position-absolute"
        />
        <img
          src="assets/img/it_company/shape/hero_2.png"
          alt=""
          class="s-two position-absolute"
        />
      </div>
    </>
  );
};

export default Style32;
