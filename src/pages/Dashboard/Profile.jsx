import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  updateProfilePhotoDashboard,
} from "../../features/actions/dashboard";
import { TbTimezone } from "react-icons/tb";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRoad } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { BsPostcard } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import EditProfileModal from "../../components/Dashboard/EditProfileModal";

const Profile = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  // const getTimeAgo = (timestamp) => {
  //   const now = new Date();
  //   const past = new Date(timestamp);

  //   const diffMs = now.getTime() - past.getTime();

  //   const seconds = Math.floor(diffMs / 1000);
  //   const minutes = Math.floor(diffMs / (1000 * 60));
  //   const hours = Math.floor(diffMs / (1000 * 60 * 60));
  //   const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  //   if (seconds < 60) return `${seconds} seconds ago`;
  //   if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  //   if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  //   return `${days} day${days !== 1 ? "s" : ""} ago`;
  // };

  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);
  const { customer } = useSelector((state) => state.dashboard.profileData);
  const { updateResponse, isImageLoading } = useSelector(
    (state) => state.dashboard
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const formData = new FormData();
      formData.append("profile_image", file); // Append the file to FormData
      formData.append("profile_image_old", customer?.profile_image); // Append the file to FormData
      // formData.forEach((file, profile_image) => {
      //   console.log(profile_image, file);
      // });
      dispatch(
        updateProfilePhotoDashboard({
          payload: formData,
          loginToken: customerData?.login_token,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getProfileData(customerData?.login_token));
  }, [updateResponse]);

  return (
    <>
      <div className="py-4">
        <div className="bg-white  shadow-sm rounded-3">
          {/* Profile Header */}
          <div className="text-center bg-light py-4 border-bottom mx-3">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                position: "relative", // Ensure the container is relative for absolute positioning of loader
                width: "80px", // Width of the container (same as the image)
                height: "80px", // Height of the container (same as the image)
                margin: "0 auto", // Center the container
              }}
            >
              {isImageLoading ? (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    position: "absolute", // Position the loader in the center of the container
                    top: "50%", // Vertically center
                    left: "50%", // Horizontally center
                    transform: "translate(-50%, -50%)", // Adjust for exact centering
                    width: "50px", // Width of the loader circle
                    height: "50px", // Height of the loader circle
                    backgroundColor: "gray", // Gray background
                    borderRadius: "50%", // Round the loader
                  }}
                >
                  <div
                    className="spinner-border spinner-border-sm text-white"
                    role="status"
                    style={{
                      width: "25px", // Spinner width
                      height: "25px", // Spinner height
                    }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <img
                  src={
                    customer?.profile_image
                      ? `${
                          import.meta.env.VITE_REACT_APP_IMAGE_PATH
                        }/customer-profile/${customer?.profile_image}`
                      : `${assetRoute}/placeholder.webp`
                  }
                  height={80}
                  width={80}
                  className="rounded-circle"
                  alt="Profile"
                />
              )}
            </div>

            <h5 className="mb-0 mt-3">
              {customer?.first_name} {customer?.last_name}
            </h5>
            <span
              style={{
                backgroundColor: "rgba(34, 201, 164, 0.1)",
                color: "#18BBA2",
              }}
              className="rounded-3 px-2 fw-semibold fs-sm"
            >
              Active
            </span>
            <div className="d-flex gap-3 justify-content-center">
              <button
                className="btn btn-warning"
                style={{
                  border: "1px solid #dee2e6",
                  borderRadius: "0.5rem",
                  fontSize: "0.5 rem",
                  fontWeight: 500,
                  padding: "0.15rem 0.5rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => document.getElementById("fileInput").click()} // Trigger file input when button is clicked
              >
                Change Picture
              </button>

              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target=".bs-example-modal-xl"
                style={{
                  border: "1px solid #dee2e6",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.25rem 0.75rem",
                  marginTop: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="container px-3 py-3">
            <div className="row">
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  className="bg-secondary rounded-circle px-3"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <FaRegAddressCard size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">Customer ID</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.customer_id}
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  className="bg-secondary rounded-circle px-3"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <IoMailOutline size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">E-mail</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.email}
                  </div>
                </div>
              </div>

              {/* Repeat the same structure for each remaining item */}
              {/* First Name */}
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  className="bg-secondary rounded-circle px-3"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <CiUser size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">First Name</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.first_name}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  className="bg-secondary rounded-circle px-3"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <CiUser size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">Last Name</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.last_name}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  className="bg-secondary rounded-circle px-3"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <FiPhone size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">Phone Number</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.phone_number}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  className="bg-secondary rounded-circle px-3"
                >
                  <IoGlobeOutline size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">Country</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.country?.country_name}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  className="bg-secondary rounded-circle px-3"
                >
                  <TbTimezone size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">State</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.state?.state_name}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  className="bg-secondary rounded-circle px-3"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <FaRoad size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">City</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.city?.city_name}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  className="bg-secondary rounded-circle px-3"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <BsPostcard size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">Postal Code</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.postal_code}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 d-flex gap-2 align-items-center">
                <div
                  className="bg-secondary rounded-circle px-3"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <IoLocationOutline size={20} />
                </div>
                <div>
                  <span className="fs-sm fw-semibold">Address</span>
                  <div className="text-black fs-md fw-medium">
                    {customer?.address}
                  </div>
                </div>
              </div>

              {/* Repeat for Last Name, Country, Address, etc. */}
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal />
    </>
  );
};

export default Profile;
