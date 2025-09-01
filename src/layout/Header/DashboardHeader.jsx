import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { customerLogout } from "../../features/actions/authentication";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdPayment, MdVpnKey } from "react-icons/md";
import { RiBox3Fill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { IoArrowBackOutline } from "react-icons/io5";

const DashboardHeader = ({ onHamburgerClick }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.dashboard.profileData);
  const { customerData } = useSelector((state) => state.authentication);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const dropdownRef = useRef();
  const cartRef = useRef();

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-100 z-10 p-3 pe-4 bg-white">
      <div className="d-flex justify-content-between align-items-center">
        {/* Hamburger icon only on small screens */}
        <button
          className="border-0 bg-white d-md-none"
          onClick={onHamburgerClick}
        >
          <img
            src={`${assetRoute}/assets/img/dashboardIcons/menu.png`}
            alt="Menu"
            style={{ width: "28px", height: "28px" }}
          />
        </button>

        <div className="d-flex align-items-center gap-4 ms-auto">
          <img
            src={`${assetRoute}/assets/img/dashboardIcons/bell_icon.svg`}
            className="img-fluid"
            alt="Notifications"
            style={{ height: "18px", width: "24px", cursor: "pointer" }}
          />

          {/* Cart with dropdown */}
          <div className="position-relative" ref={cartRef}>
            <FiShoppingCart
              size={20}
              color="#171717"
              style={{ cursor: "pointer" }}
              onClick={() => setCartOpen(!cartOpen)}
            />
            {cartOpen && (
              <div
                className="dropdown-menu show mt-2 p-3 shadow rounded-3"
                style={{
                  right: 0,
                  left: "auto",
                  minWidth: "365px",
                  position: "absolute",
                }}
              >
                <div className="fw-semibold mb-2">Cart</div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <div className="fw-medium">VPS Ultimate</div>
                    <small>Web Hosting</small>
                  </div>
                  <div>
                    <select className="form-select form-select-sm">
                      <option>6 Months</option>
                      <option>12 Months</option>
                    </select>
                    <div className="text-end fw-semibold">₹40314.00</div>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold mb-2">
                  <span>Subtotal</span>
                  <span>₹40314.00</span>
                </div>
                <Link
                  to="/checkout"
                  className="btn btn-primary w-100 fw-medium"
                >
                  Go to Checkout
                </Link>
              </div>
            )}
          </div>

          {/* Profile with dropdown */}
          <div className="position-relative" ref={dropdownRef}>
            <div
              className="d-flex align-items-center gap-2"
              style={{ cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={
                  customer?.profile_image
                    ? `${
                        import.meta.env.VITE_REACT_APP_IMAGE_PATH
                      }/customer-profile/${customer?.profile_image}`
                    : `${assetRoute}/placeholder.webp`
                }
                height={40}
                width={40}
                className="rounded-circle"
                alt="Profile"
              />
              <span className="fw-semibold text-black">
                {customer?.first_name} {customer?.last_name}
              </span>
            </div>

            {dropdownOpen && (
              <div
                className="dropdown-menu show mt-2 p-2 shadow rounded-3"
                style={{
                  right: 0,
                  left: "auto",
                  minWidth: "160px",
                  position: "absolute",
                }}
              >
                <Link
                  to="/"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <IoArrowBackOutline /> <span>Back to Main Site</span>
                </Link>
                <Link
                  to="/customer/profile"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <FaRegUser /> <span>Profile</span>
                </Link>
                <Link
                  to="/customer/billing"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <MdPayment /> <span>Billing</span>
                </Link>
                <Link
                  to="/customer/products"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <RiBox3Fill /> <span>Products</span>
                </Link>
                <Link
                  to="/customer/security"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <MdVpnKey /> <span>Security</span>
                </Link>
                <Link
                  to="/customer/changePassword"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <FaRegUser /> <span>Change Password</span>
                </Link>
                <Link
                  onClick={() =>
                    dispatch(customerLogout(customerData?.login_token))
                  }
                  className="dropdown-item d-flex gap-4 align-items-center text-danger"
                >
                  <LuLogOut /> <span>Logout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
