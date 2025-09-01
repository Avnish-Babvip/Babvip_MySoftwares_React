import { Container, Row, Col, Tab, Card, Button } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import { useNavigate } from "react-router-dom";

const SecurityTab = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-4">
      <h3 className="mb-4">My Account Center</h3>
      <Tab.Container defaultActiveKey="security">
        <Row>
          {/* Tabs Navigation */}
          <AccountCenterTab />
        </Row>

        {/* Tabs Content */}
        <Row>
          <Col md={12}>
            <Tab.Content>
              {/* Security Tab */}
              <Tab.Pane eventKey="security">
                <Col md={6}>
                  {" "}
                  <Card className="mb-3">
                    <Card.Body>
                      <h6>Main password</h6>
                      <p>
                        The main password allows unrestricted access to the
                        account. It is also used for SFTP and SSH. When logged
                        in with the main password, you can change all other
                        passwords.
                      </p>
                      <Button
                        onClick={() => navigate("/customer/changePassword")}
                        variant="primary"
                      >
                        Change password
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={12}>
                  <Card className="mb-3">
                    <Card.Body>
                      <h6>Two factor authentication</h6>
                      <p>
                        Two factor authentication provides extra protection for
                        your account by requiring a special code.
                      </p>
                      <p>
                        <strong>Note:</strong> You are only activating two
                        factor authentication for the main password.
                      </p>
                      <Button variant="outline-primary">
                        Disable two-factor authentication
                      </Button>
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

export default SecurityTab;
