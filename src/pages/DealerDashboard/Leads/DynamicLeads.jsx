import { FiChevronRight } from "react-icons/fi";
import CustomerLeadsTable from "../../../components/Table/CustomerLeadsTable";
import { useLocation } from "react-router-dom";

const leads = [
  {
    id: 1,
    leadId: "BABVIP/CLN/005",
    name: "Gaurav Negi",
    email: "admin@babvip.com",
    phone: "546456",
    postalCode: "54654",
    status: "New",
    converted: true,
  },
  {
    id: 2,
    leadId: "BABVIP/CLN/007",
    name: "hgfh fgh",
    email: "bvde12202019@gmail.com",
    phone: "fgh",
    postalCode: "234533",
    status: "New",
    converted: false,
  },
  // Add more leads...
];

export default function DynamicLeads() {
  const location = useLocation();
  let leadName = location.pathname.replace("/dealer/leads/", "");
  leadName = leadName.charAt(0).toUpperCase() + leadName.slice(1);

  return (
    <div className="px-4 py-4 pt-60">
      <div className="d-flex justify-content-end px-3">
        <div style={{ fontSize: "16px", fontWeight: "700", color: "black" }}>
          Customer {leadName} Leads <FiChevronRight />{" "}
          <span className="text-muted">Welcome</span>
        </div>
      </div>
      <CustomerLeadsTable
        leadsData={leads}
        recordsPerPage={7}
        title={`Customer ${leadName} Leads`}
      />
    </div>
  );
}
