const LeadsModal = ({ modalData }) => {
  const customer = {
    enquiry: "Customer Management System",
    leadId: "BABVIP/CLN/004",
    name: "Gaurav Negi",
    email: "admin@babvip.com",
    phone: "46436436545",
    country: "India",
    state: "Uttarakhand",
    city: "Dehradun",
    postalCode: "54654",
    address: "fghfgh",
    message: "fgh",
  };
  return (
    <div className="modal fade bs-example-modal-xl" id="btn-enquiry-1">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="row p-5">
              <h5 className="card-title mb-3 text-black">
                Customer Detail View
              </h5>

              {/* Enquiry Row */}
              <div className="border-bottom pb-2 mb-3">
                <p className="mb-0 ">
                  <strong className="text-black">
                    {" "}
                    Enquiry For Software Name:
                  </strong>{" "}
                  {customer.enquiry}
                </p>
              </div>

              {/* Row 1 */}
              <div className="row border-bottom pb-2 mb-3">
                <div className="col-md-4">
                  <p className="mb-1 ">
                    <strong className="text-black">Lead ID/ Number:</strong>{" "}
                    {customer.leadId}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1">
                    <strong className="text-black">Name:</strong>{" "}
                    {customer.name}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1">
                    <strong className="text-black">Email:</strong>{" "}
                    {customer.email}
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="row border-bottom pb-2 mb-3">
                <div className="col-md-4">
                  <p className="mb-1">
                    <strong className="text-black">Phone Number:</strong>{" "}
                    {customer.phone}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1">
                    <strong className="text-black">Country:</strong>{" "}
                    {customer.country}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1">
                    <strong className="text-black">State:</strong>{" "}
                    {customer.state}
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="row border-bottom pb-2 mb-3">
                <div className="col-md-4">
                  <p className="mb-1">
                    <strong className="text-black">City:</strong>{" "}
                    {customer.city}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1">
                    <strong className="text-black">Postal Code:</strong>{" "}
                    {customer.postalCode}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1">
                    <strong className="text-black">Address:</strong>{" "}
                    {customer.address}
                  </p>
                </div>
              </div>

              {/* Message */}
              <div>
                <p className="mb-0">
                  <strong className="text-black">Message:</strong>{" "}
                  {customer.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsModal;
