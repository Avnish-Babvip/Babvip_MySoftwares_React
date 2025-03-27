import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style5 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section class="hd-cta-section pb-120">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="hd-cta-box bg-danger-subtle position-relative z-1 overflow-hidden">
                <img
                  src={`${assetRoute}/assets/img/shape/box-shape.png`}
                  alt="box shape"
                  class="box-shape z--1 position-absolute"
                />
                <img
                  src={`${assetRoute}/assets/img/shape/box-shape.png`}
                  alt="box shape"
                  class="box-shape-2 z--1 position-absolute"
                />
                <div class="hd-cta-box-content">
                  <div class="hd-title text-center">
                    <h2 class="mb-0 clr-text">
                      We're ready to talk about{" "}
                      <mark class="bg-transparent p-0 position-relative">
                        opportunities{" "}
                        <img
                          src={`${assetRoute}/assets/img/shape/line-shape.png`}
                          alt="line-shape"
                          class="position-absolute line-shape"
                        />{" "}
                      </mark>
                    </h2>
                  </div>
                  <div class="mt-40 d-flex align-items-center justify-content-center cta-btns flex-wrap">
                    <Link to={"#"} class="btn hd-secondary-btn">
                      Get Started
                    </Link>
                    <Link
                      onClick={() =>
                        "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                        setShowVideo(true)
                      }
                      class="hd-video-btn popup-youtube d-inline-flex align-items-center"
                    >
                      <span class="me-3 d-inline-flex align-items-center justify-content-center rounded-circle">
                        <i class="fas fa-play"></i>
                      </span>
                      Play Video
                    </Link>
                  </div>
                </div>
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

export default Style5;
