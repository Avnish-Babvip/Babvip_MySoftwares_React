import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";

const Style30 = ({ data }) => {
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
      <div class="ca-two-hero pt-120 pb-330 position-relative">
        <div class="container-fluid">
          <div class="container p-0">
            <div class="position-relative">
              <img
                src="assets/img/creative-agency-2/shape/1.png"
                alt=""
                class="one position-absolute"
              />
              <div class="row">
                <div class="col-xl-8">
                  <div class="position-relative">
                    <h1 class="clr-text fs-72 fw-600 mb-30">
                      We Drive Growth with Digital Creation.
                    </h1>
                    <div class="ca-two-hero-content d-flex align-items-center gap-15">
                      <p class="ca-two-body-clr flh-24 fch-55 mb-0">
                        Access your account via your mobile phone View balance,
                        transfer funds, view transactions wherever happy clients
                        all around.
                      </p>
                      <Link
                        href=""
                        class="btn dg-outline-btn ca-two-body-clr ca-two-bg-hover-two"
                      >
                        Get in Touch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <img
                    src="assets/img/creative-agency-2/hero.png"
                    alt=""
                    class="ca-two-hero-img img-fluid"
                  />
                  <div class="swiper digi-logo-slider mt-40 ">
                    <div
                      class="swiper-wrapper align-items-center"
                      id="swiper-wrapper-918c24b360e77bf8"
                      aria-live="off"
                    >
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
                      <div class="swiper-slide">
                        <div class="single-logo">
                          <img
                            src="assets/img/creative-agency-2/logo_5.png"
                            class="img-fluid"
                            alt="logo"
                            height="30"
                          />
                        </div>
                      </div>
                      <div class="swiper-slide">
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
                    </div>
                    <span
                      class="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            width="1840"
            height="1354"
            viewBox="0 0 1840 1354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 24C0 10.7452 10.7451 0 24 0H1816C1829.25 0 1840 10.7452 1840 24V1179C1840 1192.25 1829.25 1203 1816 1203H1780C1766.75 1203 1756 1213.75 1756 1227V1330C1756 1343.25 1745.25 1354 1732 1354H1180C1166.75 1354 1156 1343.25 1156 1330V1227C1156 1213.75 1145.25 1203 1132 1203H473C465.82 1203 460 1208.82 460 1216C460 1223.18 454.18 1229 447 1229H273C265.82 1229 260 1223.18 260 1216C260 1208.82 254.18 1203 247 1203H24C10.7452 1203 0 1192.25 0 1179V24Z"
              fill="#222222"
              fill-opacity="0.04"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Style30;
