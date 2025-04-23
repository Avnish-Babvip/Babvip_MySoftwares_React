import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
import { getCategoryData } from "../../../features/actions/category";
import { Link } from "react-router-dom";

const Style1 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const { categoryData } = useSelector((action) => action.category);
  useEffect(() => {
    dispatch(getCategoryData());
  }, []);
  useEffect(() => {
    const swiperInstance = new Swiper(".testimonialSwiperCategory", {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      autoplay: {
        delay: 2000, // 2 seconds delay between slides
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1142: { slidesPerView: 4, spaceBetween: 25 },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    // Store the Swiper instance
    swiperRef.current = swiperInstance;
  
    // Add hover event listeners to stop/start autoplay
    const swiperElement = document.querySelector(".testimonialSwiperCategory");
    if (swiperElement) {
      swiperElement.addEventListener("mouseenter", () => {
        swiperInstance.autoplay.stop();
      });
      swiperElement.addEventListener("mouseleave", () => {
        swiperInstance.autoplay.start();
      });
    }
  
    return () => {
      if (swiperRef.current && typeof swiperRef.current.destroy === "function") {
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
              <h5 class="h6 text-primary">{data?.title}</h5>
              <h2>{data?.sub_title}</h2>
            </div>
          </div>
          <div class="col-lg-4 col-md-4" style={{ float: "right" }}>
            <div class="section-heading text-right">
              <a href="#" target="_blank">
                <button class="btn btn-primary">{data?.link_text}</button>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="position-relative w-100">
              <div class="swiper testimonialSwiperCategory">
                <div class="swiper-wrapper">
                  {Array.isArray(categoryData) &&
                    categoryData.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`/category/${item?.category_slug}`}
                        class="swiper-slide"
                      >
                        <div class="border border-2 p-3 rounded-custom position-relative">
                          <div class="d-flex  align-items-center">
                            <img
                              src={
                                item?.category_image
                                  ? `${
                                      import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                    }/software-category/${item?.category_image}`
                                  : `${assetRoute}/placeholder.webp`
                              }
                              style={{ width: "60px", height: "60px", objectFit: "cover" }}
                              class="img-fluid me-3 rounded"
                              width="60"
                              height="60"
                              
                            />
                            <div class="author-info">
                              <h6 class="mb-0">{item?.category_name}</h6>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
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
