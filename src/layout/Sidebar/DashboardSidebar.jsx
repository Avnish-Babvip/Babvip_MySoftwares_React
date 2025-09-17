import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { customerLogout } from "../../features/actions/authentication";

import { LuLogOut } from "react-icons/lu";
import { RiBox3Fill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdPayment, MdVpnKey } from "react-icons/md";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { TbLayoutGridAdd } from "react-icons/tb";
import { setActiveAccountCenterTab } from "../../features/slices/references";

const DashboardSidebar = ({ closeSidebar }) => {
  // const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);

  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);
  const { activeTab } = useSelector((state) => state.references);

  // All non-dropdown menu items in order
  const menuItems = [
    { label: "Home", icon: IoHomeOutline, url: "/customer/dashboard" },
    { label: "My Products", icon: RiBox3Fill, url: "/customer/products" },
    { label: "Profile", icon: FaRegUser, url: "/customer/profile" },
    { label: "Billing", icon: MdPayment, url: "/customer/billing" },
    { label: "Security", icon: MdVpnKey, url: "/customer/security" },
    {
      label: "Add-ons",
      icon: TbLayoutGridAdd,
      url: "/customer/add-ons",
    },
  ];

  // const isMarketplaceActive = [
  //   "Marketplace",
  //   "Buy Products",
  //   "Sell Products",
  // ].includes(activeMenu);

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
        {/* Loop through menu items */}
        {menuItems.map((item) => {
          const ItemLogo = item.icon;
          const isActive = activeTab === item.label;
          return (
            <div
              key={item.label}
              onClick={() => {
                dispatch(setActiveAccountCenterTab(item.label));
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

        {/* Marketplace with Dropdown */}
        {/* <div
          onClick={() => setShowMarketplaceDropdown(!showMarketplaceDropdown)}
          className="d-flex align-items-center justify-content-between gap-3 px-4 py-3"
          style={{
            cursor: "pointer",
            color: isMarketplaceActive ? "#0096FF" : "",
            borderRight: isMarketplaceActive ? "5px solid #0096FF" : "none",
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <MdPayment style={{ height: "20px", width: "20px" }} />
            <span className="fw-medium">Marketplace</span>
          </div>

          <div>
            {showMarketplaceDropdown ? (
              <FiChevronUp style={{ height: "20px", width: "20px" }} />
            ) : (
              <FiChevronDown style={{ height: "20px", width: "20px" }} />
            )}
          </div>
        </div> */}

        {/* {showMarketplaceDropdown && (
          <div className="d-flex flex-column ps-5">
            <div
              onClick={() => {
                navigate("/customer/marketplace/buy");
                setActiveMenu("Buy Products");
                if (closeSidebar) closeSidebar();
              }}
              className="d-flex align-items-center gap-2 py-2"
              style={{
                cursor: "pointer",
                color: activeMenu === "Buy Products" ? "#0096FF" : "",
              }}
            >
              <span>Buy Products</span>
            </div>
            <div
              onClick={() => {
                navigate("/customer/marketplace/sell");
                setActiveMenu("Sell Products");
                if (closeSidebar) closeSidebar();
              }}
              className="d-flex align-items-center gap-2 py-2"
              style={{
                cursor: "pointer",
                color: activeMenu === "Sell Products" ? "#0096FF" : "",
              }}
            >
              <span>Sell Products</span>
            </div>
          </div>
        )} */}

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
