import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style19 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section
        class="event-hero"
        style={{
          background: `url('assets/img/event/event-h-bg.jpg')no-repeat center center/cover`,
        }}
      >
        <div class="position-relative">
          <div class="container">
            <div class="row align-items-md-center">
              <div class="col-lg-6">
                <div class="event-hero-content">
                  <span class="text-pink fw-bold">
                    22- 23 November 2022 | ExCeL London
                  </span>
                  <h1 class="fw-bold display-5">
                    <span class="display-2 fw-bold">Design</span> <br />
                    Conference-2022
                  </h1>
                  <p class="mb-4">
                    Intrinsicly drive high standards in scenarios and
                    stand-alone applications assertively streamline stand-alone
                    alignments via resource maximizing core.
                  </p>
                  <div class="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                    <Link to="#" class="btn btn-primary bg-pink me-3 mb-3">
                      Register Now
                    </Link>
                    <Link to="#" class="btn border-pink text-pink mb-3">
                      Download PDF
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mt-5 mt-lg-0 event-hero-img">
                  <img
                    src="assets/img/event/h-spea.png"
                    class="img-fluid"
                    alt="Event"
                  />
                  <Link
                    onClick={() =>
                      "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                      setShowVideo(true)
                    }
                    class="popup-youtube"
                  >
                    <i class="fas fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
            <ul class="list-unstyled ev-hero-shape d-none d-xl-block m-0">
              <li>
                <img src="assets/img/event/star.png" alt="star" />
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <img src="assets/img/event/square.png" alt="shape" />
              </li>
            </ul>
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

export default Style19;
