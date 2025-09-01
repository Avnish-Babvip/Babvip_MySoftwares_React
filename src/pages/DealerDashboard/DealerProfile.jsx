import React, { useState } from "react";
import { Tab, Nav, Container } from "react-bootstrap";
import { FiChevronRight } from "react-icons/fi";

const DealerProfile = () => {
  const [key, setKey] = useState("basicInfo");

  return (
    <Container fluid className="px-4 pt-60">
      <div className="d-flex justify-content-end">
        <div style={{ fontSize: "16px", fontWeight: "700", color: "black" }}>
          Dealer Profile <FiChevronRight />{" "}
          <span className="text-muted">Welcome</span>
        </div>
      </div>

      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <div
          className="d-md-flex mt-3 rounded  shadow overflow-hidden"
          style={{ minHeight: "85vh" }}
        >
          {/* Sidebar */}
          <div className="col-md-3 p-4">
            <div className="text-center">
              <img
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                alt="Avatar"
                className="img-fluid rounded-circle"
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className="mt-3 mb-1">Gaurav Singh Negi</h5>
              <p className="fw-semibold small text-black">
                BABVIP/DC/2024120001
              </p>
              <p
                className="text-muted  small mb-4"
                style={{ fontSize: "14px" }}
              >
                Rishikesh Uttrakhand India, Dehradun, Uttarakhand, India
                (249201)
              </p>
            </div>

            <Nav
              variant="pills"
              className="flex-column"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              <Nav.Item>
                <Nav.Link eventKey="basicInfo" className="rounded ">
                  Basic Info
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="businessInfo" className="rounded">
                  Business Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="documentVerification" className="rounded">
                  Document Verification
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bankDetails" className="rounded">
                  Bank Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="invoiceTransactions" className="rounded">
                  Invoice & Transactions
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* Right Content */}
          <div className="col-md-9  flex-grow-1 bg-white p-4">
            <Tab.Content>
              <Tab.Pane eventKey="basicInfo">
                <h5 className="fw-bold mb-4">Basic Information</h5>
                <div className="border-top border-bottom">
                  {[
                    ["Full Name", "Gaurav Singh Negi"],
                    ["Email ID", "bvde12202019@gmail.com"],
                    ["Date Of Birth", "1994-01-26"],
                    ["Gender", "Male"],
                    ["Mobile Number", "7351865676"],
                    ["Phone Number", "7351865676"],
                    ["Work Phone Number", "9027420191"],
                    [
                      "Address",
                      "Rishikesh Uttrakhand India, Dehradun, Uttarakhand, India (249201)",
                    ],
                  ].map(([label, value], idx) => (
                    <div
                      className=" py-2 border-bottom"
                      key={idx}
                      style={{ fontSize: "15px" }}
                    >
                      <div className="fw-semibold w-100">{label}:</div>
                      <div>{value}</div>
                    </div>
                  ))}
                </div>
              </Tab.Pane>

              {/* Placeholder content for other tabs */}
              <Tab.Pane eventKey="businessInfo">
                <div className="flex-grow-1 bg-white ">
                  <h5 className="fw-bold mb-4">Business Information</h5>

                  <div className="row g-2">
                    <div className="col-md-6">
                      <div className="fw-semibold w-100">Business Name:</div>
                      <div> Negi Software Tech</div>
                    </div>
                    <div className="col-md-6">
                      <div className="fw-semibold w-100">Business Type:</div>
                      <div> Sole Proprietorship</div>
                    </div>
                    <div className="col-md-6">
                      <div className="fw-semibold w-100">Business Year:</div>
                      <div>2012</div>
                    </div>
                    <div className="col-md-6">
                      <div className="fw-semibold w-100">GST Number:</div>
                      <div> GSTIN1232321123</div>
                    </div>
                    <div className="col-md-6">
                      <div className="fw-semibold w-100">TIN Number:</div>
                      <div> TINN121</div>
                    </div>
                    <div className="col-md-6">
                      <div className="fw-semibold w-100">
                        Number Of Employees:
                      </div>
                      <div> 10</div>
                    </div>
                    <div className="col-md-12">
                      <div className="fw-semibold w-100">Annual Revenue:</div>
                      <div> —</div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="fw-semibold w-100">Business Address:</div>
                      <div>
                        {" "}
                        Nehru Gram, Rishikesh, Dehradun, Uttarakhand, India
                        (249201)
                      </div>
                    </div>
                  </div>

                  <h6 className="mt-4">Contact Persons</h6>
                  <div className="row g-3 mt-2">
                    <div className="col-md-3">
                      <input
                        type="text"
                        placeholder="Contact Person 1 Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="email"
                        placeholder="Contact Person 1 Email"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="tel"
                        placeholder="Contact Person 1 Phone"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        placeholder="Contact Person 1 Position"
                        className="form-control"
                      />
                    </div>

                    <div className="col-md-3">
                      <input
                        type="text"
                        placeholder="Contact Person 2 Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="email"
                        placeholder="Contact Person 2 Email"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="tel"
                        placeholder="Contact Person 2 Phone"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        placeholder="Contact Person 2 Position"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <button className="btn btn-success mt-4">
                    Update Contact Person
                  </button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="documentVerification">
                <div className="flex-grow-1 bg-white ">
                  <h5 className="fw-bold mb-4">Document Verification</h5>

                  <div className="row g-4">
                    <div className="col-md-3">
                      <div className="fw-semibold w-100">
                        Aadhar Card Number:
                      </div>
                      <div> 64564</div>
                    </div>
                    <div className="col-md-3">
                      <div className="fw-semibold w-100">Aadhar Front:</div>
                      <button className="btn p-0 px-2 btn-info ">
                        View & Download
                      </button>
                    </div>
                    <div className="col-md-3">
                      <div className="fw-semibold w-100">Aadhar Back:</div>
                      <button className="btn p-0 px-2 btn-info ">
                        View & Download
                      </button>
                    </div>
                    <div className="col-md-3">
                      <div className="fw-semibold w-100">
                        Aadhar Card Verification Status:
                      </div>
                      <button className="btn d-flex align-items-center gap-2 p-0 px-2 btn-success ">
                        <div> Verified </div>
                        <i
                          className="fas fa-star "
                          style={{ fontSize: "12px" }}
                        ></i>
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">Pan Card Number:</div>
                      <div> CDHPN5100L</div>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">Pan Card:</div>
                      <button className="btn p-0 px-2 btn-info ">
                        View & Download
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">
                        Pan Card Verification Status:
                      </div>
                      <button className="btn d-flex align-items-center gap-2 p-0 px-2 btn-success ">
                        <div> Verified </div>
                        <i
                          className="fas fa-star "
                          style={{ fontSize: "12px" }}
                        ></i>
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">Passport Number:</div>
                      <div> CDHPN5100L</div>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">Passport:</div>
                      <button className="btn p-0 px-2 btn-info ">
                        View & Download
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">
                        Passport Verification Status:
                      </div>
                      <button className="btn d-flex align-items-center gap-2 p-0 px-2 btn-success ">
                        <div> Verified </div>
                        <i
                          className="fas fa-star "
                          style={{ fontSize: "12px" }}
                        ></i>
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">
                        Business Registration Number:
                      </div>
                      <div> CDHPN5100L</div>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">
                        Business Registration Certificate:
                      </div>
                      <button className="btn p-0 px-2 btn-info ">
                        View & Download
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">
                        Registration Certificate Verification Status:
                      </div>
                      <button className="btn d-flex align-items-center gap-2 p-0 px-2 btn-success ">
                        <div> Verified </div>
                        <i
                          className="fas fa-star "
                          style={{ fontSize: "12px" }}
                        ></i>
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">
                        Social Security Number (SSN):
                      </div>
                      <div> Not Provided</div>
                    </div>
                    <div className="col-md-6">
                      <div className="fw-semibold w-100">Social Security:</div>
                      <button className="btn p-0 px-2 btn-info ">
                        View & Download
                      </button>
                    </div>

                    <div className="col-md-4">
                      <div className="fw-semibold w-100">Dealer Agreement:</div>
                      <button className="btn p-0 px-2 btn-info ">
                        View & Download
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div className="fw-semibold w-100">
                        Agreement Verification Status:
                      </div>
                      <button className="btn d-flex align-items-center gap-2 p-0 px-2 btn-success ">
                        <div> Verified </div>
                        <i
                          className="fas fa-star "
                          style={{ fontSize: "12px" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="bankDetails">
                <h5 className="fw-bold mb-4">Bank Details</h5>
                <div className="border-top border-bottom">
                  {[
                    ["Bank Name", "Punjab National Bank"],
                    ["Account Number", "09857574643627"],
                    ["Account Holder Name", "Gaurav Negi"],
                    ["Bank Branch", "Haridwar Road Rishikesh"],
                    ["IFSC Code", "PUNB94985"],
                    ["Swift Code", "—"],
                    ["IBAN Code", "—"],
                  ].map(([label, value], idx) => (
                    <div
                      className=" py-2 border-bottom"
                      key={idx}
                      style={{ fontSize: "15px" }}
                    >
                      <div className="fw-semibold w-100">{label}:</div>
                      <div>{value}</div>
                    </div>
                  ))}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="invoiceTransactions">
                <h5 className="fw-bold mb-4">Invoice & Transactions</h5>
                <div class="mb-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="section-title text-black fw-700">
                      Financial Years Invoices
                    </div>
                    <button class="btn btn-primary btn-sm btn-generate">
                      Generate Current Financial Year Invoice
                    </button>
                  </div>

                  <div class="table-responsive">
                    <table class="table table-bordered align-middle">
                      <thead class="table-light">
                        <tr>
                          <th style={{ width: "5%" }}>#</th>
                          <th>Invoice Number</th>
                          <th>Financial Year</th>
                          <th>Product Detail</th>
                          <th>Amount</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>BVC-DS/24-25/01</td>
                          <td>2024–2025</td>
                          <td>BABVIP Softwares Dealership Fee (2024–2025)</td>
                          <td>RS.166666.67</td>
                          <td>
                            <a href="#" class="download-link">
                              <i class="bi bi-download"></i> Download
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div class="section-title mb-3 text-black fw-700">
                    Dealer Transaction History
                  </div>

                  <div class="table-responsive">
                    <table class="table table-bordered align-middle">
                      <thead class="table-light">
                        <tr>
                          <th style={{ width: "5%" }}>#</th>
                          <th>Order Number</th>
                          <th>Billing Name</th>
                          <th>Order Status</th>
                          <th>Tracking Number</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>BVSDF-24-25-001</td>
                          <td>Negi Software tech</td>
                          <td>
                            <span class="badge bg-success text-white">
                              Success
                            </span>
                          </td>
                          <td>RS.313012390325</td>
                          <td>RS.500000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </Container>
  );
};

export default DealerProfile;
