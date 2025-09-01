import { Container, Row, Col, Tab, Card, Table, Button } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";

const ProductTab = () => {
  const domains = [
    { name: "babvip.ca", date: "05/26/26", rate: "₹1089.00/year" },
    { name: "babvip.com", date: "03/21/26", rate: "₹1369.00/year" },
    { name: "babvipanimation.com", date: "08/01/26", rate: "₹1369.00/year" },
    { name: "babvipassociates.com", date: "11/28/25", rate: "₹969.00/year" },
    { name: "babvipcloud.com", date: "08/01/26", rate: "₹1369.00/year" },
    { name: "babvipcommunity.com", date: "02/18/26", rate: "₹969.00/year" },
    { name: "babvipcreations.com", date: "08/25/26", rate: "₹1369.00/year" },
    { name: "babvipdevelopers.com", date: "04/16/26", rate: "₹1369.00/year" },
  ];
  return (
    <Container fluid className="p-4">
      <h3 className="mb-4">My Account Center</h3>
      <Tab.Container defaultActiveKey="products">
        <Row>
          {/* Tabs Navigation */}
          <AccountCenterTab />
        </Row>

        {/* Tabs Content */}
        <Row>
          <Col md={12}>
            <Tab.Content>
              {/* Billing Tab */}
              <Tab.Pane eventKey="products">
                {/* Contact Information only in Profile */}
                <Col md={12}>
                  <Card className="mb-3 shadow-sm">
                    <Card.Body className="d-flex align-items-center justify-content-between">
                      {/* Left side */}
                      <div className="d-flex align-items-center">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
                          alt="Hosting"
                          style={{ width: "40px", height: "40px" }}
                          className="me-3"
                        />
                        <div>
                          <h6 className="mb-1 fw-bold">
                            VPS Ultimate Web Hosting
                          </h6>
                          <small className="text-muted">
                            Location:{" "}
                            <span className="fw-semibold">United States</span>{" "}
                            &nbsp;|&nbsp; Term:{" "}
                            <span className="fw-semibold">6 Months</span>{" "}
                            &nbsp;|&nbsp; Expiration date:{" "}
                            <span className="fw-semibold">02/13/26</span>
                            <span className="badge bg-light text-dark ms-2">
                              Auto-renew off
                            </span>
                          </small>
                        </div>
                      </div>

                      {/* Right side */}
                      <div>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="me-2"
                        >
                          Renew Now
                        </Button>
                        <Button variant="outline-primary" size="sm">
                          Upgrade
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={12}>
                  <Card className="mb-3 h-100">
                    <Card.Body>
                      <h6 className="pb-2">Domains</h6>

                      <Table responsive bordered={false} hover>
                        <thead>
                          <tr>
                            <th>Domain name</th>
                            <th>Expiration date</th>
                            <th>Rate</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {domains.map((d, i) => (
                            <tr key={i}>
                              <td>{d.name}</td>
                              <td>{d.date}</td>
                              <td>{d.rate}</td>
                              <td
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                              >
                                Renew Now
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ProductTab;
