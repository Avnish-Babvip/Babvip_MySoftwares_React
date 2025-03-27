import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style21 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section
        class="mk-hero-section bg-white position-relative overflow-hidden"
        style={{
          "background-image": `url('assets/img/shape/mk-hero-curve.svg')`,
        }}
      >
        <span class="mk-hero-rectangle-shape position-absolute"></span>
        <img
          src="assets/img/shape/mk-hero-circle-line.png"
          alt="circle line"
          class="position-absolute start-0 w-100 mk-hero-circle-line"
        />
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-7">
              <div class="mk-title">
                <h1 class="display-4 fw-bold mk-title text-white">
                  Make Digital <mark class="bg-transparent p-0">Business</mark>{" "}
                  Very Easy way!
                </h1>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="mk-hero-content">
                <p class="mb-4 text-white">
                  Make your work easier with an integrated ecosystem that lets
                  all departments work properly together.
                </p>
                <div class="d-flex align-items-center mk-btn-group flex-wrap">
                  <Link href="request-demo.html" class="ins-btn mk-white-btn">
                    Get Started
                  </Link>
                  <Link
                    onClick={() =>
                      "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                      setShowVideo(true)
                    }
                    class="mk-hero-play fw-bold popup-youtube"
                  >
                    <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-white me-2">
                      <i class="fas fa-play"></i>
                    </span>{" "}
                    How it Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mk-hero-dashboard text-md-center position-relative mt-60 position-relative">
                <span class="mk-gradient-hero-shape position-absolute rounded-circle"></span>
                <span class="mk-secondary-gradient-shape position-absolute rounded-circle"></span>
                <img
                  src="assets/img/shape/mk-doted.png"
                  alt="doted"
                  class="mk-hero-doted position-absolute"
                />
                <img
                  src="assets/img/marketing/dashboard.png"
                  alt="not found"
                  class="img-fluid"
                />
                <img
                  src="assets/img/marketing/dashboard-sm.png"
                  alt="dashboard"
                  class="dashboard-sm d-none d-sm-block"
                />
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

export default Style21;
