import React from "react";

const Style3 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <section class="cta-with-subscribe ptb-120">
      <div class="container">
        <div class="bg-dark text-white rounded-custom position-relative">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5 col-md-10">
              <div class="cta-with-feature-wrap p-5">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
                <div class="form-block-banner mt-5">
                  <form
                    id="email-form"
                    name="email-form"
                    class="subscribe-form d-flex"
                  >
                    <input
                      type="email"
                      class="form-control me-2"
                      name="Email"
                      data-name="Email"
                      placeholder="Your email"
                      id="Email"
                      required=""
                    />
                    <input
                      type="submit"
                      value="Join!"
                      data-wait="Please wait..."
                      class="btn btn-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="img-with-shape-wrap">
                <div class="shape-top position-absolute top--40 z-2 right--40">
                  <img
                    src={`${assetRoute}/assets/img/shape/circel-shape-top-1.png`}
                    alt="shape"
                  />
                </div>
                <div class="shape-image">
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                      data?.image
                    }`}
                    alt={data?.image_alt_tag}
                    class="img-fluid screen-img"
                  />
                </div>

                <div class="shape-bottom">
                  <img
                    src={`${assetRoute}/assets/img/shape/circel-shape-bottom-1.png`}
                    alt="shape"
                  />
                  <img
                    src={`${assetRoute}/assets/img/shape/circel-shape-bottom-2.png`}
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style3;
