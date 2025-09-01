import { useState } from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import LeadsModal from "../LeadsModal/LeadsModal";

const CustomerLeadsTable = ({ leadsData = [], recordsPerPage = 7, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalData, setModalData] = useState();

  // Pagination logic
  const totalPages = Math.ceil(leadsData.length / recordsPerPage);
  const paginatedData = leadsData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="card mt-4 shadow-sm border-0 ">
        {/* Card Header */}
        <div className="border-bottom px-2 py-3 text-black bg-white fw-semibold fs-6 ">
          {title}
        </div>

        {/* Table */}
        <div className="table-responsive">
          <Table hover className="mb-0  align-middle">
            <thead className="bg-light">
              <tr>
                <th>#Lead ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Postal Code</th>
                <th>Change Status</th>
                {title !== "Customer Rejected Leads" && <th>Convert</th>}
                {title !== "Customer Rejected Leads" && (
                  <th>Software Status</th>
                )}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((lead, index) => (
                <tr key={lead.id || index}>
                  <td>{lead.leadId}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.postalCode}</td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      defaultValue={lead.status}
                    >
                      <option value="New">New</option>
                      <option value="Progress">Progress</option>
                      <option value="Pending">Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  {title !== "Customer Rejected Leads" && (
                    <td>
                      {lead.converted ? (
                        <Button variant="warning" size="sm">
                          View Customer
                        </Button>
                      ) : (
                        <Button variant="primary" size="sm">
                          Convert To Customer
                        </Button>
                      )}
                    </td>
                  )}
                  {title !== "Customer Rejected Leads" && (
                    <td>
                      {lead.converted ? (
                        <Button variant="warning" size="sm">
                          Assign Software
                        </Button>
                      ) : (
                        <Button variant="danger" size="sm">
                          Convert Customer First
                        </Button>
                      )}
                    </td>
                  )}
                  <td>
                    <button
                      className="btn text-primary border py-2 px-5"
                      data="1"
                      id="btn-enquiry-1"
                      data-bs-toggle="modal"
                      data-bs-target=".bs-example-modal-xl"
                      onClick={() => setModalData(item)}
                    >
                      <i className="bi bi-eye"></i> View
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
            Total Records: {leadsData.length} Showing {paginatedData.length}{" "}
            records per page
          </small>
        </div>
      </div>
      <LeadsModal modalData={modalData} />
    </>
  );
};

export default CustomerLeadsTable;
