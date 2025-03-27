import React, { useState } from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

const Style22 = ({ data }) => {
  return (
    <>
      <section
        class="crm-hero ptb-120 position-relative overflow-hidden"
        style={{
          "background-image": `url('assets/img/shape/crm-hero-bg.png')`,
        }}
      >
        <img
          src="assets/img/crm/slack.png"
          alt="slack"
          class="position-absolute slack-thumb"
        />
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-6">
              <div class="crm-hero-content position-relative z-1">
                <img
                  src="assets/img/shape/arrow-lg-red.png"
                  alt="arrow"
                  class="position-absolute arrow-lg-red z--1"
                />
                <h4 class="crm-subtitle fw-semibold">
                  Build Everlasting
                  <img
                    src="assets/img/shape/arrow-red.png"
                    alt="arrow"
                    class="ms-2"
                  />
                </h4>
                <h1 class="display-2 mb-0">
                  Customer{" "}
                  <span class="d-inline-block d-lg-block">Relationship</span>
                  Management
                </h1>

                <div class="crm-hero-bottom mt-60">
                  <p class="text-white lead">
                    30 Day Free Trial <span class="dot"></span> No Credit Card
                    Required
                  </p>
                  <SubscribeForm buttonText="Subscribe" />
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-5">
              <div class="crm-hero-img mt-60 mt-lg-0">
                <img
                  src="assets/img/crm/hero-img.png"
                  alt="not found"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="crm-header-social d-none d-xl-flex align-items-center position-absolute z-5">
          <span class="title">Get In Touch</span>
          <ul class="social-list ms-3 list-unstyled p-0 m-0">
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Style22;
