import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../../features/actions/countryStateCity";
import ButtonLoader from "../Loader/ButtonLoader";
import { updateProfileDashboard } from "../../features/actions/dashboard";

const EditProfileModal = () => {
  const dispatch = useDispatch();
  const { countryData, stateData, cityData } = useSelector(
    (state) => state.countryStateCity
  );
  const { customerData } = useSelector((state) => state.authentication);
  const { customer } = useSelector((state) => state.dashboard.profileData);
  const { isLoading } = useSelector((state) => state.dashboard);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: customer?.first_name,
      last_name: customer?.last_name,
      phone_number: customer?.phone_number,
      postal_code: customer?.postal_code,
      address: customer?.address,
      country_id: customer?.country_id,
      state_id: customer?.state_id,
      city_id: customer?.city_id,
    },
  });

  const onSubmit = (data) => {
    dispatch(
      updateProfileDashboard({
        payload: data,
        loginToken: customerData?.login_token,
      })
    );
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <div className="modal fade bs-example-modal-xl" id="btn-enquiry-1">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body p-5">
            <h3>Update Your Profile</h3>
            <hr />
            <form
              className="mt-2"
              id="customer-lead-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      placeholder="Enter First Name *"
                    />
                    {errors.first_name && (
                      <span className="text-danger">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      placeholder="Enter Last Name *"
                    />
                    {errors.last_name && (
                      <span className="text-danger">
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("phone_number", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[1-9]\d{9}$/,
                          message: "Enter a valid 10-digit number",
                        },
                      })}
                      placeholder="Enter Phone Number *"
                    />
                    {errors.phone_number && (
                      <span className="text-danger">
                        {errors.phone_number.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Select Country *</label>
                    <select
                      className="form-control"
                      {...register("country_id")}
                      onChange={(e) => {
                        dispatch(getAllStatesById(e.target.selectedIndex));

                        setValue("state_id", ""); // Reset city selection
                      }}
                    >
                      <option value="">Select Country</option>
                      {countryData.map((country) => (
                        <option key={country?.id} value={country?.id}>
                          {country?.country_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {errors.country_id && (
                  <span className="text-danger">
                    {errors.country_id.message}
                  </span>
                )}
              </div>

              {/* Country Dropdown (Fixed to India) */}
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Select State *</label>
                    <select
                      className="form-control"
                      {...register("state_id", {
                        required: "State is required",
                      })}
                      onChange={(e) => {
                        dispatch(getAllCityById(e.target.selectedIndex));
                        setValue("city_id", ""); // Reset city selection
                      }}
                    >
                      <option value="">Select State</option>
                      {stateData.map((state) => (
                        <option key={state?.id} value={state?.id}>
                          {state?.state_name}
                        </option>
                      ))}
                    </select>
                    {errors.state_id && (
                      <span className="text-danger">
                        {errors.state_id.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Select City *</label>
                    <select
                      className="form-control"
                      {...register("city_id", {
                        required: "City is required",
                      })}
                    >
                      <option value="">Select City</option>
                      {cityData?.map((city) => (
                        <option key={city?.id} value={city?.id}>
                          {city?.city_name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    {errors.city_id && (
                      <span className="text-danger">
                        {errors.city_id.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* City Dropdown (Shown after State is selected) */}
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Postal Code *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("postal_code", {
                        required: "Postal Code is required",
                      })}
                      placeholder="Enter Postal Code *"
                    />
                    {errors.postal_code && (
                      <span className="text-danger">
                        {errors.postal_code.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Enter Your Address *</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("address", {
                        required: "Address is required",
                      })}
                      placeholder="Enter Your Address"
                    />
                    {errors.address && (
                      <span className="text-danger">
                        {errors.address.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target=".bs-example-modal-xl"
                  className="btn btn-danger"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? <ButtonLoader /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
