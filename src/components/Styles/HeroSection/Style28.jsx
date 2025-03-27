import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style28 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div class="design-agency-two-hero dat-bg pt-160 position-relative overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-shape position-relative">
                <img
                  src="assets/img/design-agency/two/hero_4.png"
                  alt=""
                  class="position-absolute one"
                />
                <img
                  src="assets/img/design-agency/two/hero_5.png"
                  alt=""
                  class="position-absolute two"
                />
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-7">
              <h1 class="design-agency-two-hero__title text-center clr-text mb-30">
                RIGHT DESIGN STRATEGY FOR YOUR BUSINESS
              </h1>
              <div class="design-agency-two-hero__btn-box d-flex justify-content-center align-items-center flex-wrap gap-10 mb-80">
                <Link to="#" class="btn btn-dat-one clr-white">
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
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 col-sm-12">
              <div class="design-agency-two-hero__bottom-content position-relative z-1">
                <div
                  class="design-agency-two-hero__bottom-content__icon d-flex
                            align-items-center justify-content-center"
                >
                  <img src="assets/img/design-agency/two/alarm.png" alt="" />
                </div>
                <h5 class="design-agency-two-hero__bottom-content__title mt-4 clr-text">
                  Authoritatively network synergistic materials after
                  performance based.
                </h5>
                <div class="design-agency-two-hero__bottom-content__user-box mt-4 d-flex align-items-center gap-5">
                  <img src="assets/img/design-agency/two/users.png" alt="" />
                  <span class="dat-user-text">1000+ worldwide</span>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-sm-12">
              <div class="design-agency-two-hero__bottom-img position-relative">
                <img
                  src="assets/img/design-agency/two/hero_main.png"
                  alt=""
                  class="main-img"
                />
                <img
                  src="assets/img/design-agency/two/hero_2.png"
                  alt=""
                  class="position-absolute hero-two"
                />
                <img
                  src="assets/img/design-agency/two/hero_3.png"
                  alt=""
                  class="position-absolute hero-three"
                />
                <img
                  src="assets/img/design-agency/hero_shape.png"
                  alt=""
                  class="position-absolute hero-four"
                />
              </div>
            </div>
          </div>
        </div>
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

export default Style28;
