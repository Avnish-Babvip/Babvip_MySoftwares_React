import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Style1 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".testimonialSwiper", {
      modules: [Navigation],
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
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
    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      if (
        swiperRef.current &&
        typeof swiperRef.current.destroy === "function"
      ) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);
  return (
    <section class="feature-section ptb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10">
            <div class="section-heading text-left">
              <h5 class="h6 text-primary">Our Software Category</h5>
              <h2>100+ Software Category and 5000 Software's Available</h2>
            </div>
          </div>
          <div class="col-lg-4 col-md-4" style={{ float: "right" }}>
            <div class="section-heading text-right">
              <a href="#" target="_blank">
                <button class="btn btn-primary">See All</button>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="position-relative w-100">
              <div class="swiper testimonialSwiper">
                <div class="swiper-wrapper">
                  <a
                    href="https://my.babvipsoftwares.com/category/account-software"
                    class="swiper-slide"
                  >
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
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://my.babvipsoftwares.com/category/cms-content-management-system-"
                    class="swiper-slide "
                  >
                    <div class="border border-2 p-3 rounded-custom position-relative">
                      <div class="d-flex  align-items-center">
                        <img
                          src="https://my.babvipsoftwares.com/admin/images/noimage.jpg"
                          width="60"
                          class="img-fluid me-3 rounded"
                          id="photo-preview"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">CMS (Content management System)</h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="/category/online-erp-system" class="swiper-slide">
                    <div class="border border-2 p-3 rounded-custom position-relative">
                      <div class="d-flex  align-items-center">
                        <img
                          src="https://my.babvipsoftwares.com/admin/images/noimage.jpg"
                          width="60"
                          class="img-fluid me-3 rounded"
                          id="photo-preview"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">Online ERP System</h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://my.babvipsoftwares.com/category/pos"
                    class="swiper-slide"
                  >
                    <div class="border border-2 p-3 rounded-custom position-relative">
                      <div class="d-flex  align-items-center">
                        <img
                          src="https://my.babvipsoftwares.com/admin/images/noimage.jpg"
                          width="60"
                          class="img-fluid me-3 rounded"
                          id="photo-preview"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">Online POS System</h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://my.babvipsoftwares.com/category/talley-softwares"
                    class="swiper-slide"
                  >
                    <div class="border border-2 p-3 rounded-custom position-relative">
                      <div class="d-flex  align-items-center">
                        <img
                          src="https://my.babvipsoftwares.com/storage/uploads/software-category/8cac1495-0551-42cd-b0d7-4734bb45b20d.png"
                          class="img-fluid me-3 rounded"
                          width="60"
                          alt="8cac1495-0551-42cd-b0d7-4734bb45b20d.png"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">Talley Softwares</h6>
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
    </section>
  );
};

export default Style1;
