import React from "react";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

const Style23 = ({ data }) => {
  return (
    <>
      <section class="hd-hero-section position-relative z-1 overflow-hidden">
        <img
          src="assets/img/help-desk/hero-man.png"
          alt="man"
          class="position-absolute hd-hero-man"
        />
        <img
          src="assets/img/help-desk/hero-girl.png"
          alt="girl"
          class="position-absolute hd-hero-girl"
        />
        <img
          src="assets/img/help-desk/desk-girl.png"
          alt="not found"
          class="position-absolute desk-girl"
        />
        <img
          src="assets/img/shape/line-plan.png"
          alt="line shape"
          class="position-absolute line-plan z--1"
        />
        <img
          src="assets/img/shape/arrow-line-shape.png"
          alt="arrow line shape"
          class="position-absolute arrow-line-shape z--1 d-none d-sm-block"
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-10">
              <div class="hd-hero-content text-center">
                <h1 class="display-3 fw-semibold hd-hero-title clr-text">
                  A Better Way to Talk With Your{" "}
                  <mark class="bg-transparent p-0">
                    Customers{" "}
                    <img
                      src="assets/img/shape/line-shape.png"
                      alt="line shape"
                      class="position-absolute hd-line-shape"
                    />
                  </mark>
                </h1>
                <p class="mt-40 mb-5">
                  Be available right where your customers need it, and give your
                  team the automatically.
                </p>
                <SubscribeForm buttonText="Try For Free" />
                <ul class="crm-special-features list-unstyled p-0 m-0 d-flex align-items-center justify-content-center flex-wrap mt-4">
                  <li>
                    <span class="dot me-2"></span>Free 7 Days trial
                  </li>
                  <li>
                    <span class="dot me-2"></span>No Credit Card Required
                  </li>
                  <li>
                    <span class="dot me-2"></span>Cancel anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style23;
