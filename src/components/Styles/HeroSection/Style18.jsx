import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style18 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section class="digi-hero ptb-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6">
              <div class="digi-hero-text mt-5 mt-lg-0">
                <div>
                  <span class="span-arrow">Best Digital Agency</span>
                  <img
                    src={`${assetRoute}/assets/img/arro-right.svg`}
                    alt="arrow"
                  />
                </div>
                <h1 class="display-5 fw-bold mb-3">
                  We Are the <span class="text-orange fw-bold">Brilliants</span>
                  in Terms of digital Marketing
                </h1>
                <p class="m-0">
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform to help realize.
                </p>
                <div class="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <Link
                    href="contact-us.html"
                    class="btn rounded-pill bg-orange me-3"
                  >
                    Download Now
                  </Link>
                  <Link
                    onClick={() =>
                      "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                      setShowVideo(true)
                    }
                    class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                  >
                    <i class="fas fa-play"></i> How It Works
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-7 cool-md-6">
              <div class="digi-hero-img text-center position-relative mt-5">
                <img
                  src="assets/img/digi-h-girl.jpg"
                  class="img-fluid"
                  alt="girl"
                />
                <ul class="list-unstyled d-none d-xl-block">
                  <li>
                    <img
                      src="assets/img/digital-marketing/hero-shape-1.png"
                      alt="shape"
                      class=""
                    />
                  </li>
                  <li>
                    <img
                      src="assets/img/digital-marketing/hero-shape-2.png"
                      alt="shape"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/img/digital-marketing/hero-shape-3.png"
                      alt="shape"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/img/digital-marketing/hero-shape-4.png"
                      alt="shape"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showVideo && (
        <VideoModal
          videoUrl={"http://www.youtube.com/watch?v=hAP2QF--2Dg"}
          setShowVideo={setShowVideo}
        />
      )}
    </>
  );
};

export default Style18;
