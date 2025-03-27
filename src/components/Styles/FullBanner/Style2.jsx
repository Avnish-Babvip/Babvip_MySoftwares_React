import React from "react";

const Style2 = ({ data }) => {
  return (
    <section
      class="game-counter-bg"
      style={{ background: `url('assets/img/counter-bg.png')` }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="content pt-100">
              <h2 class="text-white mb-4">
                Free DDOS Best Protection With Quiety.
              </h2>
              <p class="text-white mb-4">
                Conveniently coordinate interactive convergence rather than
                parallel growth strategies. Dramatically productivate functional
                results before diverse benefits. Dramatically plagiarize
                cross-media best practice.
              </p>
            </div>
            <div class="row counter-grid pt-1">
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-white">
                  <h4 class="text-white">5745+</h4>
                  <p>Game Servers Deployed</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-white">
                  <h4 class="text-white">12.5k+</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-white">
                  <h4 class="text-white">45+</h4>
                  <p>Data Centers Worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="game-counter-img mt-4">
              <img
                src="assets/img/counter-lock.png"
                class="img-fluid"
                alt="Locker"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style2;
