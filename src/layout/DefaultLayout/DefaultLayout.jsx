// ----------------------------------Imports--------------------------------------
import React, { useEffect } from "react";
import {Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import DashboardDefaultLayout from "./DashboardDefaultLayout";

// --------------------------------------------------------------------------------

const DefaultLayout = () => {
  const { pathname } = useLocation(); // Get the current route


  const isCustomerSlugRoute = pathname.startsWith("/customer/");

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]); // Runs when route changes

 

  return (
   isCustomerSlugRoute ? <DashboardDefaultLayout/>  : <div>
      <ErrorBoundary>
        <Header />
        <Outlet />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default DefaultLayout;
