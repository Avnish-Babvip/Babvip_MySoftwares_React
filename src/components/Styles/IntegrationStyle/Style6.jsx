import React from "react";
import { Link } from "react-router-dom";

const Style6 = ({ data }) => {
  return (
    <>
      <section class="mk-integration bg-white ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="mk-title text-center">
                <span class="mk-subtitle fw-bold">Core Features</span>
                <h2 class="mk-heading mb-0 mt-3">
                  Integrated with 20+ Quiety Used Software
                </h2>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center g-4">
              <div class="col-xxl-3 col-xl-4 col-md-6">
                <div class="mk-app-single d-flex align-items-center p-3">
                  <span class="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded instagram">
                    <img
                      src="assets/img/icons/instagram.svg"
                      alt="instagram"
                      class="img-fluid"
                    />
                  </span>
                  <div class="ms-3">
                    <h6 class="mk-heading mb-1">Instagram</h6>
                    <p class="mb-0 fs-sm">
                      Exponent keeps all your data safe and secured.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-md-6">
                <div class="mk-app-single d-flex align-items-center p-3">
                  <span class="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded slack">
                    <img
                      src="assets/img/icons/slack.svg"
                      alt="slack"
                      class="img-fluid"
                    />
                  </span>
                  <div class="ms-3">
                    <h6 class="mk-heading mb-1">Slack</h6>
                    <p class="mb-0 fs-sm">
                      Exponent keeps all your data safe and secured.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-md-6">
                <div class="mk-app-single d-flex align-items-center p-3">
                  <span class="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded twitter">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <div class="ms-3">
                    <h6 class="mk-heading mb-1">Twitter</h6>
                    <p class="mb-0 fs-sm">
                      Exponent keeps all your data safe and secured.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-md-6">
                <div class="mk-app-single d-flex align-items-center p-3">
                  <span class="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded figma">
                    <img
                      src="assets/img/icons/figma.svg"
                      alt="figma"
                      class="img-fluid"
                    />
                  </span>
                  <div class="ms-3">
                    <h6 class="mk-heading mb-1">Figma</h6>
                    <p class="mb-0 fs-sm">
                      Exponent keeps all your data safe and secured.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-md-6">
                <div class="mk-app-single d-flex align-items-center p-3">
                  <span class="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded facebook">
                    <i class="fab fa-facebook-f"></i>
                  </span>
                  <div class="ms-3">
                    <h6 class="mk-heading mb-1">Facebook</h6>
                    <p class="mb-0 fs-sm">
                      Exponent keeps all your data safe and secured.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-md-6">
                <div class="mk-app-single d-flex align-items-center p-3">
                  <span class="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded zapier">
                    <img
                      src="assets/img/icons/zapier.svg"
                      alt="zapier"
                      class="img-fluid"
                    />
                  </span>
                  <div class="ms-3">
                    <h6 class="mk-heading mb-1">Zapier</h6>
                    <p class="mb-0 fs-sm">
                      Exponent keeps all your data safe and secured.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-4 col-md-6">
                <div class="mk-app-single d-flex align-items-center p-3">
                  <span class="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded drive">
                    <img
                      src="assets/img/icons/drive.svg"
                      alt="drive"
                      class="img-fluid"
                    />
                  </span>
                  <div class="ms-3">
                    <h6 class="mk-heading mb-1">Google Drive</h6>
                    <p class="mb-0 fs-sm">
                      Exponent keeps all your data safe and secured.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center mb-0 mt-40">
              Do You Want to explore more{" "}
              <Link to="#" class="text-mk-secondary fw-bold">
                Integration
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style6;
