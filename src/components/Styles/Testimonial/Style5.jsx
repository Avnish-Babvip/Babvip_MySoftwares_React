import React, { useEffect, useRef } from "react";

const Style5 = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".appTwoReviewSwiper", {
      slidesPerView: 2,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
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
      <section class="cutomer-review-app-two ptb-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-12">
              <div class="mb-4 mb-sm-5">
                <h2>Our Happy Clients say about us.</h2>
                <p class="m-0">
                  Oxford hunky dory super so I said bender arse over blog.so I
                  said bender arse over blog.
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-12 text-end d-none d-lg-block">
              <div class="appTwoReviewSwiper-Controller ms-md-auto position-relative">
                <span class="swiper-button-next"></span>
                <span class="swiper-button-prev"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="swiper appTwoReviewSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide position-relative ">
                    <div class=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <ul class="review-rate mb-1 list-unstyled list-inline">
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
                      <h5 class="h6">5 review average in our app</h5>
                      <p>
                        Blinding shot excuse my french willia david tosser
                        jeffrey bubble and sque bleeder mush.
                      </p>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/img/testimonial/app-testimonial-1.png"
                          class="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">Chauffina Carr</h6>
                          <small>Founder</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide position-relative  ">
                    <div class=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <ul class="review-rate mb-1 list-unstyled list-inline">
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
                      <h5 class="h6">35+ minutes per session</h5>
                      <p>
                        Blinding shot excuse my french willia david tosser
                        jeffrey bubble and sque bleeder mush.
                      </p>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/img/testimonial/app-testimonial-2.png"
                          class="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">Hugh Saturation</h6>
                          <small>UX Designer</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide position-relative  ">
                    <div class=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <ul class="review-rate mb-1 list-unstyled list-inline">
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
                      <h5 class="h6">$0.00 everything is FREE</h5>
                      <p>
                        Blinding shot excuse my french willia david tosser
                        jeffrey bubble and sque bleeder mush.
                      </p>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/img/testimonial/app-testimonial-3.png"
                          class="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">Richard Tea</h6>
                          <small>Manager</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide position-relative ">
                    <div class=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <ul class="review-rate mb-1 list-unstyled list-inline">
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
                      <h5 class="h6">5 review average in our app</h5>
                      <p>
                        Blinding shot excuse my french willia david tosser
                        jeffrey bubble and sque bleeder mush.
                      </p>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/img/testimonial/app-testimonial-1.png"
                          class="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">Chauffina Carr</h6>
                          <small>Founder</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide position-relative ">
                    <div class=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <ul class="review-rate mb-1 list-unstyled list-inline">
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
                      <h5 class="h6">35+ minutes per session</h5>
                      <p>
                        Blinding shot excuse my french willia david tosser
                        jeffrey bubble and sque bleeder mush.
                      </p>
                      <div class="d-flex align-items-center">
                        <img
                          src="assets/img/testimonial/app-testimonial-2.png"
                          class="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div class="author-info">
                          <h6 class="mb-0">Hugh Saturation</h6>
                          <small>UX Designer</small>
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
    </>
  );
};

export default Style5;
