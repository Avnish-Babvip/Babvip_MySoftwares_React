import React from "react";
import { Link } from "react-router-dom";

const Style34 = ({ data }) => {
  return (
    <>
      <div class="ail-hero-area pt-120 ">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="text-center">
                <h1 class="ail-hero-title text-black fs-72">
                  Copywriting AI <br />
                  With a{" "}
                  <span class="ail-highlighted-text">Predictable Results</span>
                </h1>
                <p class="ail-body-color fs-20 fch-55 mx-auto">
                  Create SEO-optimized and plagiarism-free content for your
                  blogs, ads, emails, &amp; website 10X faster.
                </p>
                <Link
                  to=""
                  class="btn ail-gd-bg dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                >
                  Start Writing for free
                </Link>
                <img
                  src="assets/img/ail_home/hero.png"
                  alt=""
                  class="ail-hero-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style34;
