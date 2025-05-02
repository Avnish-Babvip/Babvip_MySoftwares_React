import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { customerLogout } from "../../features/actions/authentication";
import { RxDashboard } from "react-icons/rx";
import { LuBoxes, LuLogOut } from "react-icons/lu";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FiSettings, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BsPerson, BsKey } from "react-icons/bs";

const DashboardSidebar = ({ activeMenu, setActiveMenu, closeSidebar }) => {
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const menuItems = [
    { label: "Dashboard", icon: RxDashboard, url: "/customer/dashboard" },
    { label: "My Products", icon: LuBoxes, url: "/customer/myProducts" },
    { label: "Payment", icon: CiMoneyCheck1, url: "/customer/payment" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);

  const isSettingsActive = [
    "Settings",
    "My Profile",
    "Change Password",
  ].includes(activeMenu);

  return (
    <div className="d-flex flex-column align-items-center w-100 py-4">
      {/* Logo */}
      <Link to={"/"} className="navbar-brand mb-5 text-decoration-none">
        <img
          src={`${assetRoute}/assets/img/dashboardIcons/logo.png`}
          className="mx-auto d-block"
          height={50}
          width={100}
          alt="Logo"
        />
      </Link>

      {/* Menu */}
      <div className="d-flex flex-column w-100">
        {menuItems.map((item) => {
          const ItemLogo = item.icon;
          const isActive = activeMenu === item.label;
          return (
            <div
              key={item.label}
              onClick={() => {
                setActiveMenu(item.label);
                item.url && navigate(item.url);
                if (closeSidebar) closeSidebar();
              }}
              className="d-flex align-items-center gap-3 px-4 py-3"
              style={{
                cursor: "pointer",
                color: isActive ? "#0096FF" : "",
                borderRight: isActive ? "5px solid #0096FF" : "none",
              }}
            >
              <ItemLogo
                style={{
                  height: "20px",
                  width: "20px",
                  filter: isActive ? "" : "grayscale(100%)",
                }}
              />
              <span className="fw-medium">{item.label}</span>
            </div>
          );
        })}

        {/* Settings with Dropdown */}
        <div
          onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
          className="d-flex align-items-center justify-content-between gap-3 px-4 py-3"
          style={{
            cursor: "pointer",
            color: isSettingsActive ? "#0096FF" : "",
            borderRight: isSettingsActive ? "5px solid #0096FF" : "none",
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <FiSettings style={{ height: "20px", width: "20px" }} />
            <span className="fw-medium">Settings</span>
          </div>

          <div>
            {" "}
            {showSettingsDropdown ? (
              <FiChevronUp style={{ height: "20px", width: "20px" }} />
            ) : (
              <FiChevronDown style={{ height: "20px", width: "20px" }} />
            )}
          </div>
        </div>

        {showSettingsDropdown && (
          <div className="d-flex flex-column ps-5">
            <div
              onClick={() => {
                navigate("/customer/profile");
                setActiveMenu("My Profile");
                if (closeSidebar) closeSidebar();
              }}
              className="d-flex align-items-center gap-2 py-2"
              style={{
                cursor: "pointer",
                color: activeMenu === "My Profile" ? "#0096FF" : "",
              }}
            >
              <BsPerson /> <span>My Profile</span>
            </div>
            <div
              onClick={() => {
                navigate("/customer/changePassword");
                setActiveMenu("Change Password");
                if (closeSidebar) closeSidebar();
              }}
              className="d-flex align-items-center gap-2 py-2"
              style={{
                cursor: "pointer",
                color: activeMenu === "Change Password" ? "#0096FF" : "",
              }}
            >
              <BsKey /> <span>Change Password</span>
            </div>
          </div>
        )}

        {/* Logout */}
        <div
          onClick={() => {
            dispatch(customerLogout(customerData?.login_token));
          }}
          className="d-flex align-items-center gap-3 px-4 py-3"
          style={{ cursor: "pointer" }}
        >
          <LuLogOut
            className="text-danger"
            style={{ height: "20px", width: "20px" }}
          />
          <span className="fw-medium text-danger">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
