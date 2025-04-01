import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../components/Styles/SoftwareListing/Softwares.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryDataBySlug } from "../features/actions/category";
import Loader from "../components/Loader/Loader";
import parse from "html-react-parser";
import FilterModal from "../components/CategoryModal/FilterModal";
import SoftwarePagination from "../components/SoftwarePagination/SoftwarePagination";

const Category = () => {
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { data,software_category } = useSelector(
    (action) => action.category?.categoryDetailData
  );
  const { isLoading } = useSelector((action) => action.category);

  const [url, setUrl] = useState(
    `${
      import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION
    }/site/categoryallsoftware/${slug}`
  );

 
  useEffect(() => {
    dispatch(getCategoryDataBySlug(url));

  }, [url]);

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
              <h1 class="display-5 fw-bold">
                {software_category?.category_title}
              </h1>
              <p class="lead">
                {software_category?.short_description}{" "}
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

      {isLoading ? (
        <Loader />
      ) : (
     <SoftwarePagination data={data} software_category={software_category} setUrl={setUrl}/>
      )}



      <section class="feature-promo" id="cat-description">
        <div class="container mb-4">
          <div class="row">
            <div class="col-md-12">
              <h4>Category Description:</h4>
          {parse(software_category?.description)}
         
  
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

      <FilterModal slug={slug} setUrl={setUrl}/>
      
    </>
  );
};

export default Category;
