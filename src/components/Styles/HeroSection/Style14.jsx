import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style14 = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        class="hero-section text-white hero-ten"
        style={{
          background: `url('assets/img/cyber_banner_img.png')no-repeat center center`,
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-10">
              <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 class="fw-bold display-5 text-white">
                  Quiety is Frist priority Your Cyber Security
                </h1>
                <p class="lead">
                  Velit officia consequat duis enim velit mollit Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
                <div class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <Link to={"#"} class="btn btn-primary me-3">
                    Discover More
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
            <div class="col-lg-6 col-md-8 mt-5">
              <div class="hero-img position-relative circle-shape-images">
                <img
                  src="assets/img/cyber_banner_image.svg"
                  alt="hero img"
                  class="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
          <div class="cyber-down-btn text-center position-relative d-none d-lg-block">
            <Link to="#" class="text-primary">
              <i class="fas fa-arrow-down"></i>
            </Link>
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

export default Style14;
