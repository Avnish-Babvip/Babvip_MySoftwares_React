import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style25 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div class="ca-hero bgc-primary">
        <div class="container">
          <div class="row gy-5 gy-lg-0 align-items-center">
            <div class="col-lg-6 col-xl-6 col-xxl-5">
              <h1 class="heading-2 font-weight-bold clr-white margin-bottom-8">
                We Craft Digital Experience
              </h1>
              <p class="fs-18 clr-white margin-bottom-10 font-weight-medium">
                Make your work easier with an integrated ecosystem that lets all
                departments work properly together.
              </p>
              <div class="d-flex gap-8 flex-wrap">
                <Link
                  href="#"
                  class="link d-inline-flex rounded-pill bgc-white text-center font-weight-bold padding-y-5 padding-x-12 clr-text :clr-text flex-shrink-0 lh-1"
                >
                  Get Started
                </Link>
                <Link
                  onClick={() =>
                    "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                    setShowVideo(true)
                  }
                  class="link d-inline-flex align-items-center gap-4 popup-youtube"
                >
                  <span class="d-grid place-content-center width-14 height-14 rounded-circle bgc-tertiary clr-text flex-shrink-0">
                    <i class="fas fa-play"></i>
                  </span>
                  <span class="flex-grow-1 clr-white font-weight-semibold">
                    How It Work
                  </span>
                </Link>
              </div>
              <div class="follow-nav margin-top-10 margin-top-xxl-0">
                <div class="d-flex gap-4 align-items-center">
                  <div class="follow-nav__text font-weight-bold clr-white">
                    Follow Now
                  </div>
                  <div class="follow-nav__dash"></div>
                </div>
                <ul class="list list-row gap-4">
                  <li>
                    <Link to="#" class="link clr-white :clr-white">
                      <i class="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="link clr-white :clr-white">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="link clr-white :clr-white">
                      <i class="fas fa-basketball-ball"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="link clr-white :clr-white">
                      <i class="fab fa-behance"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8 col-lg-4 col-xl-4 col-xxl-5">
              <div class="text-center">
                <img
                  src="assets/img/creative-agency/agency-hero-img.png"
                  alt="image"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-md-4 col-lg-2">
              <div class="margin-bottom-6 text-center text-xl-end">
                <img
                  src="assets/img/creative-agency/user-group.png"
                  alt="image"
                  class="img-fluid"
                />
              </div>
              <p class="margin-bottom-10 margin-bottom-xxl-25 text-center text-xl-end fs-20 clr-white font-weight-semibold lh-15">
                1000+ worldwide trust clients
              </p>
              <div class="margin-bottom-6 text-center text-xl-end">
                <img
                  src="assets/img/creative-agency/user-img.png"
                  alt="image"
                  class="img-fluid"
                />
              </div>
              <p class="mb-0 text-center text-xl-end fs-20 clr-white font-weight-semibold lh-15">
                Jone Smith Deo
              </p>
              <span class="d-block text-center text-xl-end clr-white font-weight-medium">
                Founder &amp; CEO
              </span>
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

export default Style25;
