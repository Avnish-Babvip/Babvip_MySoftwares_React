import React, { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../components/Styles/SoftwareListing/Softwares.css";

const Category = () => {
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".testimonialSwiper", {
      modules: [Navigation],
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1142: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const swiperInstance2 = new Swiper(".testimonialSwiperreview", {
      modules: [Navigation],
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1142: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;
    swiperRef2.current = swiperInstance2;

    return () => {
      if (
        swiperRef.current &&
        typeof swiperRef.current.destroy === "function"
      ) {
        swiperRef.current.destroy(true, true);
      }
      if (
        swiperRef2.current &&
        typeof swiperRef2.current.destroy === "function"
      ) {
        swiperRef2.current.destroy(true, true);
      }
    };
  }, []);
  return (
    <>
      <section
        class="page-header position-relative overflow-hidden ptb-120 bg-dark"
        style={{
          background: `url(https://my.babvipsoftwares.com/site/assets/img/page-header-bg.svg) no-repeat bottom left`,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <h1 class="display-5 fw-bold">Online ERP SYSTEM</h1>
              <p class="lead">
                Online ERP SYSTEM Online ERP SYSTEM Online ERP SYSTEM Online ERP
                SYSTEM Online ERP SYSTEM Online ERP SYSTEM Online ERP SYSTEM
                Online ERP SYSTEM Online ERP SYSTEM{" "}
                <a href="#cat-description">Read More</a>
              </p>
            </div>
          </div>
          <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
        </div>
      </section>

      <section class="feature-promo ptb-120">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <ul class="nav  feature-tab-list">
                <li class="nav-item " role="presentation">
                  <Link
                    class="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                  >
                    <i class="fa-solid fa-check"></i> Best Dealer
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                  >
                    <i class="fa-solid fa-magnifying-glass-chart"></i>Top
                    Selling
                  </Link>
                </li>
                <li class="nav-item" role="presentation">
                  <Link
                    class="nav-link "
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <i class="fa-solid fa-thumbs-up"></i> Easy To Use
                  </Link>
                </li>
              </ul>
              <div class="tab-content rounded-custom" id="nav-tabContent">
                <div
                  class="tab-pane fade active show"
                  id="tab-1"
                  role="tabpanel"
                >
                  <div class="row p-1">
                    <div class="col-12">
                      <div class="position-relative w-100">
                        <div class="swiper testimonialSwiper ">
                          <div class="swiper-wrapper">
                            <a href="#" class="swiper-slide ">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide ">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="swiper-nav-control">
                          <span class="swiper-button-next"></span>
                          <span class="swiper-button-prev "></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab-2" role="tabpanel">
                  <div class="row p-1">
                    <div class="col-12">
                      <div class="position-relative w-100">
                        <div class="swiper testimonialSwiper ">
                          <div class="swiper-wrapper">
                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          ></span>
                        </div>
                        <div class="swiper-nav-control">
                          <span class="swiper-button-next"></span>
                          <span class="swiper-button-prev"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="tab-3" role="tabpanel">
                  <div class="row p-1">
                    <div class="col-12">
                      <div class="position-relative w-100">
                        <div class="swiper testimonialSwiper ">
                          <div class="swiper-wrapper">
                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a href="#" class="swiper-slide">
                              <div class="border border-2 p-3 rounded-custom position-relative">
                                <div class="d-flex  align-items-center">
                                  <img
                                    src="https://my.babvipsoftwares.com/storage/uploads/software-category/66067529-adcb-47a5-83f4-4179207afeef.png"
                                    class="img-fluid me-3 rounded"
                                    width="60"
                                    alt="66067529-adcb-47a5-83f4-4179207afeef.png"
                                  />
                                  <div class="author-info">
                                    <h6 class="mb-0">Account software</h6>
                                    <div class="ratting-wrap">
                                      <p class="mb-0">5/5 Overall rating</p>
                                      <ul class="list-unstyled rating-list list-inline mb-0">
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                        <li class="list-inline-item">
                                          <i class="fas fa-star text-warning"></i>
                                        </li>
                                      </ul>
                                      <p class="mb-0">
                                        <b>100 + users</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="swiper-nav-control">
                          <span class="swiper-button-next"></span>
                          <span class="swiper-button-prev "></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-promo">
        <div class="container mb-4">
          <div class="row">
            <div class="col-md-8">
              <h4>Our Best Online ERP System</h4>
              <p>
                <b>Total Records: 2 Showing 2 records per page</b>
              </p>
            </div>
            <div class="col-md-4 text-end">
              <button
                class="btn btn-default px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#filterModal"
              >
                <i class="fa fa-filter me-2"></i> Advanced Filter
              </button>

              <div class="dropdown d-inline-block">
                <form
                  action="https://my.babvipsoftwares.com/category/online-erp-system"
                  method="get"
                  id="sort-form"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="ZUHmuf5nLBEW3PfSIGjJ6EqmNXOVsBR2ajXkkPCs"
                    autocomplete="off"
                  />
                  <input type="hidden" value="" name="sort_by" id="sort_by" />
                  <button
                    class="btn btn-default px-4 py-2 dropdown-toggle"
                    type="button"
                    id="sortingDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-sort me-2"></i> Sort By
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="sortingDropdown">
                    <li>
                      <a class="dropdown-item software_sort" data="Newest">
                        Newest
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item software_sort" data="Oldest">
                        Oldest
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div class="container">
          <div class="row justify-content-center mb-3">
            <div class="col-md-12">
              <div class="card flex-row">
                <div class="position-relative">
                  <img
                    src="https://my.babvipsoftwares.com/storage/uploads/software-images/83302ce0-26a6-46df-9e9b-c80e25c6b77f.png"
                    class="card-img-left m-3"
                    alt="Product"
                  />
                  <span class="wishlist-icon">
                    <i class="fa fa-heart"></i>
                  </span>
                </div>

                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://my.babvipsoftwares.com/software/customer-management-system">
                      Customer Management System
                    </a>
                  </h5>
                  <div class="ratting-wrap">
                    <p class="mb-1">
                      <b>5/5 Overall Rating</b>
                    </p>
                    <ul class="list-unstyled rating-list list-inline mb-1">
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                    </ul>
                    <p class="mb-1">
                      <b>100+ users</b>
                    </p>
                    <p class="text-muted">
                      A Customer Management System, often referred to as
                      Customer Relationship Management (CRM) software, is a tool
                      that helps businesses manage interactions and
                      relationships with their customers and prospects. It is
                      designed to organize and streamline communication, track.
                    </p>
                  </div>
                </div>

                <div class="text-center action-buttons">
                  <p class="card-text fw-bold mb-3">Rs. 2000.00</p>
                  <a href="#" class="view-plans-link d-block mb-3">
                    View Plans
                  </a>
                  <div class="d-flex justify-content-center align-items-center mt-5">
                    <button class="icon-btn" title="Call">
                      <i class="fa fa-phone"></i>
                    </button>
                    <button
                      class="icon-btn free_demo"
                      title="Get a Free Demo"
                      data="1"
                    >
                      <i class="fa fa-handshake"></i>
                    </button>
                    <button
                      type="button"
                      class="btn d-none"
                      id="btn-enquiry-1"
                      data-bs-toggle="modal"
                      data-bs-target=".bs-example-modal-xl"
                    >
                      {" "}
                      Enquery Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-md-12">
              <div class="card flex-row">
                <div class="position-relative">
                  <img
                    src="https://my.babvipsoftwares.com/storage/uploads/software-images/0c029d8a-8a6e-4064-aa90-f2b2b0a34131.png"
                    class="card-img-left m-3"
                    alt="Product"
                  />
                  <span class="wishlist-icon">
                    <i class="fa fa-heart"></i>
                  </span>
                </div>

                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://my.babvipsoftwares.com/software/school-management-system">
                      School Management System
                    </a>
                  </h5>
                  <div class="ratting-wrap">
                    <p class="mb-1">
                      <b>5/5 Overall Rating</b>
                    </p>
                    <ul class="list-unstyled rating-list list-inline mb-1">
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star"></i>
                      </li>
                    </ul>
                    <p class="mb-1">
                      <b>100+ users</b>
                    </p>
                    <p class="text-muted">
                      A Customer Management System, often referred to as
                      Customer Relationship Management (CRM) software, is a tool
                      that helps businesses manage interactions and
                      relationships with their customers and prospects. It is
                      designed to organize and streamline communication, track.
                    </p>
                  </div>
                </div>

                <div class="text-center action-buttons">
                  <p class="card-text fw-bold mb-3">Rs. 3000.00</p>
                  <a href="#" class="view-plans-link d-block mb-3">
                    View Plans
                  </a>
                  <div class="d-flex justify-content-center align-items-center mt-5">
                    <button class="icon-btn" title="Call">
                      <i class="fa fa-phone"></i>
                    </button>
                    <button
                      class="icon-btn free_demo"
                      title="Get a Free Demo"
                      data="2"
                    >
                      <i class="fa fa-handshake"></i>
                    </button>
                    <button
                      type="button"
                      class="btn d-none"
                      id="btn-enquiry-2"
                      data-bs-toggle="modal"
                      data-bs-target=".bs-example-modal-xl"
                    >
                      {" "}
                      Enquery Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <nav aria-label="Page navigation example" class=" ">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                  </li>

                  <li class="page-item active">
                    <a
                      class="page-link"
                      href="https://my.babvipsoftwares.com/category/online-erp-system?page=1"
                    >
                      1
                    </a>
                  </li>
                  <li class="page-item disabled">
                    <span class="page-link">Next</span>
                  </li>
                </ul>
                <p>Total Records: 2 Showing 2 records per page</p>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-promo" id="cat-description">
        <div class="container mb-4">
          <div class="row">
            <div class="col-md-12">
              <h4>Category Description:</h4>
              <p>
                ERP software is an integrated system designed to streamline and
                unify business processes across various departments within an
                organization, such as finance, human resources, supply chain,
                manufacturing, sales, and customer service. By centralizing data
                into a single database, ERP systems enable real-time data
                sharing and improved communication across all departments,
                allowing for better decision-making, efficiency, and
                scalability.
              </p>
              <p>
                ERP software typically includes modules that can be customized
                to meet the unique needs of different industries, whether in
                manufacturing, retail, healthcare, or service sectors. Key
                features include financial management, inventory control, order
                processing, customer relationship management (CRM), human
                resources, and reporting and analytics tools.
              </p>
              <p>The core benefits of ERP software include:</p>
              <ol>
                <li>
                  <strong>Data Integration</strong>: Consolidates data from
                  multiple sources, reducing data silos and promoting data
                  accuracy.
                </li>
                <li>
                  <strong>Efficiency Improvement</strong>: Automates repetitive
                  tasks and streamlines workflows, leading to increased
                  productivity.
                </li>
                <li>
                  <strong>Real-Time Data Access</strong>: Provides up-to-date
                  insights, enabling faster responses to market demands and
                  customer needs.
                </li>
                <li>
                  <strong>Scalability</strong>: Modular design allows for
                  expansion as business needs grow, supporting scalability.
                </li>
                <li>
                  <strong>Enhanced Compliance</strong>: Built-in compliance
                  tools help organizations adhere to regulatory standards and
                  industry requirements.
                </li>
              </ol>
              <p>
                Overall, ERP software is a comprehensive tool that helps
                businesses optimize resources, reduce operational costs, and
                improve customer satisfaction by creating a cohesive environment
                for all business activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-promo ptb-120" id="reviews">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-12">
              <h4> Online ERP System Review:</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="position-relative w-100">
                <div class="swiper testimonialSwiperreview ">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide ">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">New</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide ">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide ">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-nav-control">
                  <span class="swiper-button-next"></span>
                  <span class="swiper-button-prev"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal"
        id="filterModal"
        tabindex="-1"
        aria-labelledby="filterModalLabel"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="filterModalLabel">
                Advanced Filter
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="https://my.babvipsoftwares.com/category/online-erp-system"
                method="get"
                id="advance-filter"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="ZUHmuf5nLBEW3PfSIGjJ6EqmNXOVsBR2ajXkkPCs"
                  autocomplete="off"
                />{" "}
                <div class="mb-3">
                  <label for="filterCategory" class="form-label">
                    Software Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="software_name"
                    name="software_name"
                    placeholder="Enter Software Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="filterRating" class="form-label">
                    Rating
                  </label>
                  <select class="form-select" id="filterRating">
                    <option selected="">Choose Rating</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                  </select>
                </div>
                <div class="d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    id="clear-filter"
                  >
                    Clear Filter
                  </button>
                  <button
                    type="submit"
                    class="btn btn-danger"
                    id="clearFilters"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
