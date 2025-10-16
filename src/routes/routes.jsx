// -----------------------------------------------Imports---------------------------------------------
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Maintenance from "../pages/Maintenance";
import DynamicRootPage from "../pages/DynamicRootPage";
import Loader from "../components/Loader/Loader";
import Category from "../pages/Category";
import Software from "../pages/Software";
import Dashboard from "../pages/Dashboard/Dashboard";
import DealerDashboard from "../pages/DealerDashboard/Dashboard";
import Login from "../pages/Authentication/Login";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import ChangePassword from "../pages/Authentication/ChangePassword";
import DashboardChangePassword from "../pages/Dashboard/DashboardChangePassword";
import DealerLogin from "../pages/DealerAuthentication/DealerLogin";
import DealerSignUp from "../pages/DealerAuthentication/DealerSignUp";
import DealerProfile from "../pages/DealerDashboard/DealerProfile";
import DynamicLeads from "../pages/DealerDashboard/Leads/DynamicLeads";
import CustomersTable from "../pages/DealerDashboard/ManageCustomers/CustomersTable";
import AddOns from "../pages/Dashboard/Addons";
import ProfileTab from "../pages/Dashboard/AccountCenterTabData/ProfileTab";
import BillingTab from "../pages/Dashboard/AccountCenterTabData/BillingTab";
import ProductTab from "../pages/Dashboard/AccountCenterTabData/ProductTab";
import SecurityTab from "../pages/Dashboard/AccountCenterTabData/SecurityTab";
import PaymentStatus from "../pages/Dashboard/PaymentStatus";
import CartCheckout from "../pages/Dashboard/Checkout/CartCheckout";
import RenewCheckout from "../pages/Dashboard/Checkout/RenewCheckout";

// Lazy Loading 😴
const Blog = lazy(() => import("../pages/Blog"));
const HelpCenter = lazy(() => import("../pages/HelpCenter"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

// import Blog from "../pages/Blog";
// import HelpCenter from "../pages/HelpCenter";
// import Portfolio from "../components/Home/Portfolio/Portfolio";

// ---------------------------------------------------------------------------------------------------

const NotFound = () => (
  <p className="text-center text-primary fw-bold fs-5 mt-5 mx-5">
    Sorry, no content available on this page right now.
  </p>
);

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <DynamicRootPage />,
      },

      {
        path: "/:slug",
        element: <DynamicRootPage />,
      },
      {
        path: "/login/customer", // 👈 separate route
        element: <Login />,
      },
      {
        path: "/login/dealer", // 👈 separate route
        element: <DealerLogin />,
      },
      {
        path: "/signUp/dealer", // 👈 separate route
        element: <DealerSignUp />,
      },
      {
        path: "/login/customer/password-reset", // 👈 separate route
        element: <ForgotPassword />,
      },
      {
        path: "/reset/password-customer/:slug", // 👈 separate route
        element: <ChangePassword />,
      },
      {
        path: "/customer/dashboard", // 👈 separate dashboard routes
        element: <Dashboard />,
      },
      {
        path: "/customer/cart-checkout", // 👈 separate dashboard routes
        element: <CartCheckout />,
      },
      {
        path: "/customer/renew-checkout/:productId", // 👈 separate dashboard routes
        element: <RenewCheckout />,
      },
      {
        path: "/customer/profile", // 👈 separate dashboard routes
        element: <ProfileTab />,
      },
      {
        path: "/customer/billing", // 👈 separate dashboard routes
        element: <BillingTab />,
      },
      {
        path: "/customer/products", // 👈 separate dashboard routes
        element: <ProductTab />,
      },
      {
        path: "/customer/security", // 👈 separate dashboard routes
        element: <SecurityTab />,
      },
      {
        path: "/customer/add-ons", // 👈 separate dashboard routes
        element: <AddOns />,
      },
      {
        path: "/payment-status/redirect", // 👈 separate dashboard routes
        element: <PaymentStatus />,
      },
      {
        path: "/customer/changePassword", // 👈 separate dashboard routes
        element: <DashboardChangePassword />,
      },
      {
        path: "/dealer/dashboard", // 👈 separate dealer dashboard routes
        element: <DealerDashboard />,
      },
      {
        path: "/dealer/profile", // 👈 separate dealer dashboard routes
        element: <DealerProfile />,
      },
      {
        path: "/dealer/leads/new", // 👈 separate dealer dashboard routes
        element: <DynamicLeads />,
      },
      {
        path: "/dealer/leads/progress", // 👈 separate dealer dashboard routes
        element: <DynamicLeads />,
      },
      {
        path: "/dealer/leads/pending", // 👈 separate dealer dashboard routes
        element: <DynamicLeads />,
      },
      {
        path: "/dealer/leads/rejected", // 👈 separate dealer dashboard routes
        element: <DynamicLeads />,
      },
      {
        path: "/dealer/customers/all", // 👈 separate dealer dashboard routes
        element: <CustomersTable />,
      },
      {
        path: "/blog/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/help/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <HelpCenter />
          </Suspense>
        ),
      },
      {
        path: "/portfolio/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "/category/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: "/software/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Software />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />, // 404 fallback
      },
    ],
  },
]);

export const maintenanceAppRouter = createBrowserRouter([
  {
    path: "*",
    element: <Maintenance />, // 404 fallback
  },
]);
