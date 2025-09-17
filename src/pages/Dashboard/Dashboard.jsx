import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboardData,
  getProfileData,
} from "../../features/actions/dashboard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { customerData } = useSelector((state) => state.authentication);
  const { customer_software } = useSelector(
    (state) => state.dashboard.dashboardData
  );

  useEffect(() => {
    dispatch(getDashboardData(customerData?.login_token));

    dispatch(getProfileData(customerData?.login_token));
  }, []);

  return (
    <>
      <div className="px-4 py-4">
        <h5 className="fw-medium mb-4">Dashboard</h5>

        <div className="row g-4">
          {Array.isArray(customer_software) &&
            customer_software.map((item, idx) => (
              <Link
                to={`/customer/dashboard/${item?.id}`}
                className="col-md-4"
                key={idx}
              >
                <div className="card shadow-sm rounded-4 border-0 p-3 d-flex flex-row justify-content-between align-items-center">
                  <div className="w-100">
                    <p className="text-muted mb-1">
                      {item?.software?.software_name}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-medium mb-2">
                        {item?.plan?.plan_price}
                      </h5>
                      <span
                        className={`${
                          item?.is_paid ? "text-success" : "text-danger"
                        } fw-semibold`}
                      >
                        {item?.is_paid ? "Paid" : "Not Paid"}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <p
                        className="mb-0 text-success fw-semibold"
                        style={{ fontSize: "14px" }}
                      >
                        {item?.plan?.plan_name}
                      </p>
                      <span
                        className="text-capitalize"
                        style={{ fontSize: "14px" }}
                      >
                        {item?.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
