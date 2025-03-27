import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style29 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div class="agency-home-hero ah-bg pt-160 position-relative overflow-hidden">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-xl-10">
              <div class="agency-home-hero__content text-end">
                <h1 class="agency-home-hero__content__title display-3 fw-semibold hd-hero-title clr-text">
                  Increase Your Growth Rate With One{" "}
                  <mark class="bg-transparent p-0">
                    Marketing{" "}
                    <img
                      src="assets/img/shape/line-shape.png"
                      alt="line shape"
                      class="position-absolute hd-line-shape"
                    />
                  </mark>{" "}
                  Platform
                </h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-6 col-xl-5">
              <div class="agency-home-hero__img-box position-relative">
                <img
                  src="assets/img/agency-home/hero.png"
                  alt=""
                  class="agency-home-hero__img-box__img w-100"
                />
              </div>
            </div>
            <div class="col-xxl-6 col-xl-7">
              <div class="agency-home-hero__bottom-content pl-100">
                <p class="agency-home-hero__des mt-40 mb-40">
                  Access your account via your mobile phone View balance,
                  transfer funds, view transactions wherever happy clients all
                  around.
                </p>
                <div class="design-agency-two-hero__btn-box d-flex align-items-center flex-wrap gap-10 mb-80">
                  <Link to="" class="btn btn-dat-one clr-white">
                    Download Now
                  </Link>
                  <Link
                    onClick={() =>
                      "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                      setShowVideo(true)
                    }
                    class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn-dat mt-lg-0 mt-md-0 clr-text"
                  >
                    <i class="fas fa-play"></i> How it Work{" "}
                  </Link>
                </div>
              </div>
              <div class="ah-conunter">
                <div class="row">
                  <div class="col-sm-4">
                    <h3 class="ah-conunter-title clr-text">
                      <span class="ah-count">300</span>+
                    </h3>
                    <p class="ah-counter-des">Products Completed</p>
                  </div>
                  <div class="col-sm-4">
                    <h3 class="ah-conunter-title clr-text">
                      <span class="ah-count">1.69</span>M
                    </h3>
                    <p class="ah-counter-des">Earned to worldwide</p>
                  </div>
                  <div class="col-sm-4">
                    <h3 class="ah-conunter-title clr-text">
                      <span class="ah-count">300</span>+
                    </h3>
                    <p class="ah-counter-des">Professional Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/agency-home/hero_shape.png"
          alt=""
          class="hero_shape position-absolute left-0 top--100"
        />
      </div>
      {showVideo && (
        <VideoModal
          videoUrl={"http://www.youtube.com/watch?v=hAP2QF--2Dg"}
          setShowVideo={setShowVideo}
        />
      )}
    </>
  );
};

export default Style29;
