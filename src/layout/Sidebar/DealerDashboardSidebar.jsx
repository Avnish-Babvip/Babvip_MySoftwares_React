import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { customerLogout } from "../../features/actions/authentication";

import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { GrCubes } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";

import { FaRegUser } from "react-icons/fa";

const DealerDashboardSidebar = ({
  activeMenu,
  setActiveMenu,
  closeSidebar,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customerData } = useSelector((state) => state.authentication);

  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeSubItem, setActiveSubItem] = useState(null);

  const toggleDropdown = (label) => {
    setExpandedMenus((prev) => ({
      [label]: !prev[label], // toggle current
    }));
  };

  const menuItems = [
    {
      section: "Menu",
      items: [
        {
          label: "Dashboard",
          icon: RxDashboard,
          url: "/dealer/dashboard",
          badge: "18+",
        },
      ],
    },
    {
      section: "Apps",
      items: [
        {
          label: "Manage Leads",
          icon: GrCubes,
          hasDropdown: true,
          submenu: [
            { label: "New Leads", url: "/dealer/leads/new" },
            { label: "Progress Leads", url: "/dealer/leads/progress" },
            { label: "Pending Leads", url: "/dealer/leads/pending" },
            { label: "Rejected Leads", url: "/dealer/leads/rejected" },
          ],
        },
        {
          label: "Manage Customer's",
          icon: FaRegUser,
          hasDropdown: true,
          submenu: [
            { label: "Customers List", url: "/dealer/customers/all" },
            { label: "Create Customer", url: "/dealer/customers/pending" },
          ],
        },
        {
          label: "Customer Software's",
          icon: MdPayment,
          badge: "3+",
          url: "/dealer/softwares",
        },
        {
          label: "Softwares List",
          icon: GrCubes,
          badge: "8+",
          url: "/dealer/softwares",
        },
        {
          label: "Customer Invoice's",
          icon: MdPayment,
          badge: "9+",
          url: "/dealer/invoices",
        },
        {
          label: "Reports's",
          icon: MdPayment,
          hasDropdown: true,
          submenu: [
            { label: "Sales Report", url: "/dealer/reports/sales" },
            { label: "Customer Report", url: "/dealer/reports/customers" },
            { label: "Revenue Report", url: "/dealer/reports/revenue" },
          ],
        },
      ],
    },
  ];

  return (
    <div
      className="d-flex p-3 flex-column justify-content-between"
      style={{
        position: "fixed", // keep sidebar always on screen
        top: 0,
        left: 0,
        height: "100vh", // fixed height
        width: "auto", // content-based width
        minWidth: "250px", // prevent it from collapsing too narrow
        maxWidth: "90vw", // prevent too wide on small screens
        backgroundColor: "#fff",
        borderRight: "1px solid #eee",
        zIndex: 1050,
      }}
    >
      <div
        style={{
          overflowY: "auto",
          maxHeight: "calc(100vh - 180px)", // leaves space for footer
          paddingRight: "4px",
        }}
      >
        <div className="d-flex">
          {" "}
          <img
            height={25}
            alt="Logo"
            className="mb-4 px-3"
            src={`${assetRoute}/BABVIPLOGO.png`}
          />
          <button
            className="border-0 bg-white  position-absolute top-0 end-0 m-2 d-lg-none"
            onClick={closeSidebar}
          >
            ✖
          </button>
        </div>

        {menuItems.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-4">
            <p className="text-muted text-uppercase small px-3">
              {group.section}
            </p>
            {group.items.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.label;
              return (
                <>
                  <div
                    key={idx}
                    onClick={() => {
                      if (item.hasDropdown) {
                        toggleDropdown(item.label);
                        setActiveMenu(item.label);
                      } else {
                        setActiveMenu(item.label);
                        if (item.url) navigate(item.url);
                        if (closeSidebar) closeSidebar();
                      }
                    }}
                    className="d-flex justify-content-between align-items-center px-3 py-2"
                    style={{
                      cursor: "pointer",
                      borderRadius: "8px",
                      backgroundColor: isActive ? "#f0f9ff" : "transparent",
                      color: isActive ? "#0096FF" : "#333",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Icon style={{ width: "18px", height: "18px" }} />
                      <span>{item.label}</span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      {item.badge && (
                        <span className="badge bg-success-subtle text-success rounded-pill small">
                          {item.badge}
                        </span>
                      )}
                      {item.hasDropdown && (
                        <FiChevronRight
                          style={{
                            transform: expandedMenus[item.label]
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      )}
                    </div>
                  </div>
                  {item.hasDropdown && (
                    <div
                      style={{
                        maxHeight: expandedMenus[item.label] ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                      className="ps-4"
                    >
                      {item.submenu?.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.url}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "#0096FF")
                          }
                          onMouseLeave={(e) => {
                            if (activeSubItem !== `${item.label}-${subIdx}`)
                              e.target.style.color = "#666";
                          }}
                          onClick={() => {
                            setActiveSubItem(`${item.label}-${subIdx}`);
                            if (closeSidebar) closeSidebar();
                          }}
                          className="d-block px-3 py-2 text-decoration-none rounded sidebar-submenu"
                          style={{
                            color:
                              activeSubItem === `${item.label}-${subIdx}`
                                ? "#0096FF"
                                : "#666",
                            transition: "0.3s",
                            fontSize: "14px",
                            fontWeight: 600,
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer Card with Logo and Logout */}
      <div
        className="rounded-3 p-3 text-center"
        style={{ backgroundColor: "#e9f3ff" }}
      >
        <img
          src={`${assetRoute}/favicon.png`}
          height={40}
          alt="Logo"
          className="mb-2"
        />
        <p className="small text-muted mb-2">
          Easy to use and manage your customers
        </p>
        <button
          className="btn btn-sm btn-danger d-inline-flex align-items-center gap-2"
          onClick={() => dispatch(customerLogout(customerData?.login_token))}
        >
          <LuLogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default DealerDashboardSidebar;
