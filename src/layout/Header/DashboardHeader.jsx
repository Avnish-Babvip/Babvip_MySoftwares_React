import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { customerLogout } from "../../features/actions/authentication";
import { FaRegUser } from "react-icons/fa";
import { MdDelete, MdPayment, MdVpnKey } from "react-icons/md";
import { RiBox3Fill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const DashboardHeader = ({ onHamburgerClick }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.dashboard.profileData);
  const { cartData } = useSelector((state) => state.cart);
  const { customerData } = useSelector((state) => state.authentication);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const [desktopCartOpen, setDesktopCartOpen] = useState(false);
  const [mobileCartOpen, setMobileCartOpen] = useState(false);

  const desktopCartRef = useRef(null);
  const mobileCartRef = useRef(null);

  const cartTotalPrice = cartData.reduce(
    (acc, cart) => acc + Number(cart?.plan?.plan_price || 0),
    0
  );

  function useOutsideClick(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler();
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  useOutsideClick(desktopCartRef, () => setDesktopCartOpen(false));
  useOutsideClick(mobileCartRef, () => setMobileCartOpen(false));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
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
          <div className="d-xl-none">
            <div className="position-relative" ref={mobileCartRef}>
              <FaCartShopping
                size={20}
                color="#171717"
                style={{ cursor: "pointer" }}
                onClick={() => setMobileCartOpen(!mobileCartOpen)}
              />
              {/* Badge on cart icon */}
              {cartData?.length > 0 && (
                <span
                  className="position-absolute top-0 text-white start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.7rem" }}
                >
                  {cartData?.length}
                </span>
              )}

              {mobileCartOpen && (
                <div
                  className="dropdown-menu show mt-2 p-3 shadow rounded-4 d-xl-none"
                  style={{
                    width: "75vw",
                    left: "50%",
                    transform: "translateX(-50%)",
                    position: "fixed",
                    top: "70px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    border: "1px solid #eee",
                    zIndex: 1050,
                  }}
                >
                  {/* Cart heading with total items */}
                  <div className="fw-bold fs-5 mb-3 border-bottom pb-2 d-flex justify-content-between align-items-center">
                    <span>Cart</span>
                    <span className="badge bg-danger">
                      {cartData?.length} items
                    </span>
                  </div>

                  {Array.isArray(cartData) && cartData.length > 0 ? (
                    cartData.map((cart, idx) => (
                      <div
                        key={idx}
                        className="d-flex justify-content-between align-items-start mb-3 pb-2 border-bottom"
                      >
                        <div>
                          <div className="fw-semibold text-dark">
                            {cart?.software?.software_name}
                          </div>
                          <small className="text-muted">
                            {cart?.plan?.plan_name}
                          </small>
                        </div>
                        <div className="text-end">
                          <div className="fw-bold text-success">
                            ₹ {cart?.plan?.plan_price}
                          </div>
                          <button
                            className="btn btn-sm btn-light border mt-1"
                            style={{
                              borderRadius: "50%",
                              width: "28px",
                              height: "28px",
                              padding: "0",
                            }}
                            onClick={() => handleDelete(cart?.id)}
                          >
                            <MdDelete size={20} color="#DC143C" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-muted text-center py-3">
                      Cart is Empty
                    </div>
                  )}

                  {/* Totals */}
                  <div className="mt-3 border-top pt-3">
                    <div className="d-flex justify-content-between fw-semibold fs-6 mb-2">
                      <span>Subtotal</span>
                      <span>₹ {cartTotalPrice?.toFixed(2)}</span>
                    </div>
                    <Link
                      to="/customer/checkout"
                      className="btn btn-primary w-100 fw-semibold"
                    >
                      Go to Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="d-xl-flex gap-5 align-items-center d-none ">
            {" "}
            <div className="position-relative" ref={desktopCartRef}>
              <FaCartShopping
                size={20}
                color="#171717"
                style={{ cursor: "pointer" }}
                onClick={() => setDesktopCartOpen(!desktopCartOpen)}
              />
              {cartData?.length > 0 && (
                <span
                  className="position-absolute top-0 start-100  text-white translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.7rem" }}
                >
                  {cartData?.length}
                </span>
              )}

              {desktopCartOpen && (
                <div
                  className="dropdown-menu show mt-2 p-3 shadow rounded-4"
                  style={{
                    width: "30vw",
                    left: "30%", // center relative to cart icon
                    transform: "translateX(-80%)",
                    position: "absolute", // relative to parent
                    top: "100%", // just below icon
                    maxHeight: "80vh",
                    overflowY: "auto",
                    border: "1px solid #eee",
                    zIndex: 1050,
                  }}
                >
                  <div className="fw-bold fs-5 mb-3 border-bottom pb-2 d-flex justify-content-between align-items-center">
                    <span>Cart</span>
                    <span className="badge bg-danger text-white">
                      {cartData?.length} items
                    </span>
                  </div>

                  {Array.isArray(cartData) && cartData.length > 0 ? (
                    cartData.map((cart, idx) => (
                      <div
                        key={idx}
                        className="d-flex justify-content-between align-items-start mb-3 pb-2 border-bottom"
                      >
                        <div>
                          <div className="fw-semibold text-dark">
                            {cart?.software?.software_name}
                          </div>
                          <small className="text-muted">
                            {cart?.plan?.plan_name}
                          </small>
                        </div>
                        <div className="text-end">
                          <div className="fw-bold text-success">
                            ₹ {cart?.plan?.plan_price}
                          </div>
                          <button
                            className="btn btn-sm btn-light border mt-1"
                            style={{
                              borderRadius: "50%",
                              width: "28px",
                              height: "28px",
                              padding: "0",
                            }}
                            onClick={() => handleDelete(cart?.id)}
                          >
                            <MdDelete size={20} color="#DC143C" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-muted text-center py-3">
                      Cart is Empty
                    </div>
                  )}

                  <div className="mt-3 border-top pt-3">
                    <div className="d-flex justify-content-between fw-semibold fs-6 mb-2">
                      <span>Subtotal</span>
                      <span>₹ {cartTotalPrice?.toFixed(2)}</span>
                    </div>
                    <Link
                      to="/customer/checkout"
                      className="btn btn-primary w-100 fw-semibold"
                    >
                      Go to Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
