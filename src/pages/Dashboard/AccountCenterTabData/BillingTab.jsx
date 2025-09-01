import { Container, Row, Col, Tab, Card, Table } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import EditBillingForm from "../../../components/Dashboard/EditBillingForm";

const BillingTab = () => {
  return (
    <Container fluid className="p-4">
      <h3 className="mb-4">My Account Center</h3>
      <Tab.Container defaultActiveKey="billing">
        <Row>
          {/* Tabs Navigation */}
          <AccountCenterTab />
        </Row>

        {/* Tabs Content */}
        <Row>
          <Col md={12}>
            <Tab.Content>
              {/* Billing Tab */}
              <Tab.Pane eventKey="billing">
                {/* Contact Information only in Profile */}
                <Col md={6}>
                  <EditBillingForm />
                </Col>

                <Col md={12}>
                  <Card className="mb-3 h-100">
                    <Card.Body>
                      <h6 className="pb-2">Your Payments</h6>

                      <Table responsive border>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Aug 13, 2025</td>
                            <td>₹ FREE</td>
                            <td className="text-primary">
                              Download receipt as PDF
                            </td>
                            <td className="text-primary">View details</td>
                          </tr>
                          <tr>
                            <td>Aug 12, 2025</td>
                            <td>₹ 47570.52</td>
                            <td className="text-primary">
                              Download receipt as PDF
                            </td>
                            <td className="text-primary">View details</td>
                          </tr>
                          <tr>
                            <td>Jul 24, 2025</td>
                            <td>₹ 14182.42</td>
                            <td className="text-primary">
                              Download receipt as PDF
                            </td>
                            <td className="text-primary">View details</td>
                          </tr>
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

export default BillingTab;
