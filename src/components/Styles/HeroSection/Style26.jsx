import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style26 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div class="ca-agency-hero bgc-background">
        <div class="container">
          <div class="row g-4 gy-5 gx-xl-5">
            <div class="col-xl-11 col-xxl-10">
              <h1 class="ca-agency-hero__heading heading-1 clr-white font-weight-semibold mb-0">
                The Top Mixing &amp; Mastering Engineers{" "}
                <span class="clr-red">Worldwide</span>
              </h1>
            </div>
            <div class="col-md-8">
              <div class="border border-red-clr rounded-4 padding-5 position-relative z-1">
                <div class="rounded-4 overflow-hidden">
                  <img
                    src="assets/img/creative-agency/hero-thumbnail.png"
                    alt="image"
                    class="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
                <Link
                  onClick={() =>
                    "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                    setShowVideo(true)
                  }
                  class="popup-youtube link d-grid place-content-center bgc-primary-gradient clr-white :clr-white fs-24 padding-x-20 padding-y-12 position-absolute top-0 end-0 rounded-start-end-4"
                >
                  <i class="fas fa-play"></i>
                </Link>
              </div>
            </div>
            <div class="col-md-4">
              <div class="margin-top-xl-20">
                <div class="d-flex flex-wrap align-items-center gap-4 margin-bottom-8">
                  <div class="flex-shrink-0">
                    <img
                      src="assets/img/creative-agency/user-group-sm.png"
                      alt="image"
                      class="img-fluid"
                    />
                  </div>
                  <h4 class="heading-4 mb-0 clr-white font-weight-semibold">
                    40M+
                  </h4>
                </div>
                <p class="mb-0 clr-white">
                  Get more conversions and drive more sales with Anyword’s AI
                  writer that generates and optimizes your copy. Powerful
                  predictive analytics.
                </p>
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

export default Style26;
