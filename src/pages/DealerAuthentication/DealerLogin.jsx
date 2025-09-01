import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerLogin } from "../../features/actions/authentication";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import { resetForgotPasswordState } from "../../features/slices/authentication";

const DealerLogin = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const dispatch = useDispatch();
  const { isUserLoggedIn, isLoading, errorMessage } = useSelector(
    (state) => state.authentication
  );
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(customerLogin(data));
    reset();
  };

  useEffect(() => {
    isUserLoggedIn && navigate("/dealer/dashboard");
  }, [isUserLoggedIn]);

  useEffect(() => {
    dispatch(resetForgotPasswordState());
  }, []);
  return (
    <>
      <section
        class="sign-up-in-section bg-dark ptb-40"
        style={{
          background: `url('assets/img/page-header-bg.svg')no-repeat right bottom`,
        }}
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 col-md-8 col-12">
              <a href="index.html" class="mb-4 d-block text-center">
                <img
                  src={`${assetRoute}/assets/img/dashboardIcons/logo.png`}
                  className="mx-auto d-block"
                  //   height={50}
                  //   width={120}
                  alt="Logo"
                />
              </a>
              <div class="register-wrap p-5 bg-light-subtle shadow rounded-custom">
                <h1 class="h3">Nice to Seeing You Again</h1>
                <p class="text-muted">
                  Please log in to access your account web-enabled methods of
                  innovative niches.
                </p>

                <form
                  class="mt-4 register-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="row">
                    <div class="col-sm-12 mb-3 ">
                      <label for="customer_id" class="mb-1">
                        Dealer Id <span class="text-danger">*</span>
                      </label>
                      <div class="input-group ">
                        <input
                          {...register("customer_id", {
                            required: "Customer Id is required",
                          })}
                          type="text"
                          class="form-control"
                          placeholder="Customer Id"
                          id="customer_id"
                        />
                      </div>
                      {errors.customer_id && (
                        <span
                          className="text-danger"
                          style={{ "font-size": "14px" }}
                        >
                          {errors.customer_id.message}
                        </span>
                      )}
                    </div>
                    <div class="col-sm-12 mb-3">
                      <label for="password" class="mb-1">
                        Password <span class="text-danger">*</span>
                      </label>
                      <div class="input-group ">
                        <input
                          {...register("password", {
                            required: "Password is required",
                          })}
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          id="password"
                        />
                      </div>
                      {errors.password && (
                        <span
                          className="text-danger "
                          style={{ "font-size": "14px" }}
                        >
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    {errorMessage && (
                      <span
                        className="text-danger text-center"
                        style={{ "font-size": "14px" }}
                      >
                        {errorMessage}
                      </span>
                    )}
                    <div class="col-12">
                      <button
                        disabled={isLoading}
                        type="submit"
                        class="btn btn-primary mt-3 d-block w-100"
                      >
                        {isLoading ? <ButtonLoader /> : "Log in"}
                      </button>
                    </div>
                  </div>
                  <p class="font-monospace fw-medium text-center text-muted mt-3 pt-4 mb-0">
                    Don’t have an account?{" "}
                    <Link to={"/signUp/dealer"} class="text-decoration-none">
                      Sign up Today
                    </Link>
                    <br />
                    <Link
                      to={"/login/dealer/password-reset"}
                      class="text-decoration-none"
                    >
                      Forgot password
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealerLogin;
