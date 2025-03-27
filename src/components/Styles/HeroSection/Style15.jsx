import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../VideoModal/VideoModal";

const Style15 = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <section class="hero-eleven bg-dark-black pt-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-12">
              <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <h1 class="fw-bold display-5 text-white">
                  Trusted &amp; Secure Trading Crypto Wallet
                </h1>
                <p class="lead text-white">
                  You might wonder why a designer would choose to use Morem text
                  Paragraphs in English or their native language.
                </p>
                <div class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <Link
                    to="contact-us.html"
                    class="btn rounded-pill btn-primary me-3"
                  >
                    {" "}
                    Get Started{" "}
                  </Link>
                  <Link
                    onClick={() =>
                      "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                      setShowVideo(true)
                    }
                    class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                  >
                    <i class="fas fa-play"></i> How it works
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-12">
              <div class="crypto-hero-img pt-80">
                <ul class="currency-icon list-unstyled">
                  <li>
                    <img src="assets/img/currency1.svg" alt="icon" />
                  </li>
                  <li>
                    <img src="assets/img/currency2.svg" alt="icon" />
                  </li>
                  <li>
                    <img src="assets/img/currency3.svg" alt="icon" />
                  </li>
                  <li>
                    <img src="assets/img/currency4.svg" alt="icon" />
                  </li>
                </ul>
                <img
                  src="assets/img/crypto-person.png"
                  class="img-fluid"
                  alt="person"
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

export default Style15;
