// ----------------------------------Imports--------------------------------------
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

// --------------------------------------------------------------------------------

const DefaultLayout = () => {
  const { pathname } = useLocation(); // Get the current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]); // Runs when route changes

  return (
    <div>
      <ErrorBoundary>
        <Header />
        <Outlet />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default DefaultLayout;
