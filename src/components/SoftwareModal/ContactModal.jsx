import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../../features/actions/countryStateCity";
import { addCustomerLeads } from "../../features/actions/submission";
import ButtonLoader from "../Loader/ButtonLoader";

const ContactModal = ({ modalData }) => {
  const dispatch = useDispatch();
  const { countryData, stateData, cityData } = useSelector(
    (state) => state.countryStateCity
  );
  const { isLoading, addContactDetailsStatus } = useSelector(
    (state) => state.submission
  );
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, software_id: modalData.id };
    dispatch(addCustomerLeads(newData));
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  useEffect(() => {
    console.log(addContactDetailsStatus);
    if (addContactDetailsStatus) {
      reset();
    }
  }, [addContactDetailsStatus]);

  return (
    <div className="modal fade bs-example-modal-xl" id="btn-enquiry-1">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="row">
              <div className="col-md-8 p-5">
                <form id="customer-lead-form" onSubmit={handleSubmit(onSubmit)}>
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
                        <label className="form-label">Email ID *</label>
                        <input
                          type="email"
                          className="form-control"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email",
                            },
                          })}
                          placeholder="Enter Email ID *"
                        />
                        {errors.email && (
                          <span className="text-danger">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>
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
                  </div>

                  {/* Country Dropdown (Fixed to India) */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Select Country *</label>
                        <select
                          className="form-control"
                          {...register("country_id")}
                          onChange={(e) => {
                            dispatch(getAllStatesById(e.target.selectedIndex));
                            setSelectedCountry(e.target.value);
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

                    {selectedCountry && (
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
                              setSelectedState(e.target.value);
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
                    )}
                  </div>

                  {/* City Dropdown (Shown after State is selected) */}
                  <div className="row">
                    {selectedCountry && selectedState && (
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Select City *</label>
                          <select
                            className="form-control"
                            {...register("city_id", {
                              required: "City is required",
                            })}
                            onChange={(e) => {
                              setSelectedCity(e.target.value);
                            }}
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
                    )}
                    {selectedCountry && selectedState && selectedCity && (
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
                    )}
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Enter Your Address *
                        </label>
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
                      {isLoading ? <ButtonLoader /> : "Send Now"}
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-4 p-0" style={{ background: "#b04373" }}>
                <div className="modal-header d-block">
                  <h5 className="modal-title text-white">
                    {modalData?.software_name}
                  </h5>
                  <p className="text-white truncate-2">
                    {modalData?.short_description}
                  </p>
                </div>
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/9pLCJZ73-VQ"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
