import { useState } from "react";
import { Table, Pagination } from "react-bootstrap";

const CustomersTable = () => {
  let recordsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Example customers data (replace with API or props later)
  const customersData = [
    {
      id: 1,
      customerId: "BABVIP/CI/2025010001",
      name: "Gaurav Negi",
      email: "admin@babvip.com",
      phone: "546456",
      country: "India",
      state: "Uttarakhand",
      city: "Dehradun",
      status: "Active",
    },
    {
      id: 2,
      customerId: "BABVIP/CI/2025020002",
      name: "Test Test",
      email: "test@gmail.com",
      phone: "43543534",
      country: "India",
      state: "Uttarakhand",
      city: "Champawat",
      status: "Inactive",
    },
    {
      id: 3,
      customerId: "BABVIP/CI/2025020003",
      name: "Avnish Negi",
      email: "bvde12202021@gmail.com",
      phone: "7894561221",
      country: "India",
      state: "Uttarakhand",
      city: "Nainital",
      status: "Active",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(customersData.length / recordsPerPage);
  const paginatedData = customersData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="card mt-4 shadow-sm border-0">
      {/* Card Header */}
      <div className="border-bottom px-2 py-3 text-black bg-white fw-semibold fs-6">
        Customers List
      </div>

      {/* Table */}
      <div className="table-responsive">
        <Table hover className="mb-0 align-middle">
          <thead className="bg-light">
            <tr>
              <th>#</th>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((cust, index) => (
              <tr key={cust.id}>
                <td>{(currentPage - 1) * recordsPerPage + index + 1}</td>
                <td>{cust.customerId}</td>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.phone}</td>
                <td>{cust.country}</td>
                <td>{cust.state}</td>
                <td>{cust.city}</td>
                <td>{cust.status}</td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      defaultChecked={cust.status === "Active"}
                    />
                    <label className="form-check-label">
                      {cust.status === "Active" ? "Active" : "Inactive"}
                    </label>
                  </div>
                </td>
                <td>
                  <button className="btn btn-link text-primary p-0">
                    <i className="bi bi-pencil-square"></i> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <Pagination className="mb-0">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx + 1}
              active={idx + 1 === currentPage}
              onClick={() => handlePageChange(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
        <small className="text-muted">
          Total Records: {customersData.length} Showing {paginatedData.length}{" "}
          records per page
        </small>
      </div>
    </div>
  );
};

export default CustomersTable;
