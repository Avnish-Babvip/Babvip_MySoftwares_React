import { useState } from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import DealerDashboardSidebar from "../Sidebar/DealerDashboardSidebar";
import DealerDashboardHeader from "../Header/DealerDashboardHeader";

const DealerDashboardDefaultLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const { isUserLoggedIn } = useSelector((state) => state.authentication);

  //   if (!isUserLoggedIn) {
  //     return <Navigate to="/login/dealer" replace />;
  //   }

  return (
    <ErrorBoundary>
      <div className="d-flex nunitoSans-font min-vh-100 position-relative">
        {/* Sidebar */}
        <div
          className={`bg-light d-none d-lg-block`}
          style={{
            width: "auto",
            minWidth: "300px",
          }}
        >
          <DealerDashboardSidebar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>

        {/* Popup sidebar for small screens */}
        {isSidebarOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              zIndex: 1049,
              background: "rgba(0, 0, 0, 0.4)",
            }}
            onClick={() => setSidebarOpen(false)} // clicking on the background closes sidebar
          >
            <div
              className="position-absolute top-0 start-0 bg-white shadow"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "300px",
                zIndex: 1050,
                overflowY: "auto",
              }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside sidebar
            >
              <DealerDashboardSidebar
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                closeSidebar={() => setSidebarOpen(false)}
              />
              <button
                className="position-absolute top-0 end-0 m-3 btn-close"
                onClick={() => setSidebarOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Right side - header and content */}
        <div className="flex-grow-1 d-flex flex-column">
          <DealerDashboardHeader
            onHamburgerClick={() => setSidebarOpen(true)}
          />
          <main
            className="flex-grow-1 p-3  "
            style={{ backgroundColor: "#F7F7F7" }}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DealerDashboardDefaultLayout;
