import { Container, Row, Col, Tab, Card, Form, Button } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import EditProfileModal from "../../../components/Dashboard/EditProfileModal";

const ProfileTab = () => {
  return (
    <Container fluid className="p-4">
      <h3 className="mb-4">My Account Center</h3>
      <Tab.Container defaultActiveKey="profile">
        <Row>
          {/* Tabs Navigation */}
          <AccountCenterTab />
        </Row>

        <Row>
          <Col md={12}>
            <Tab.Content>
              {/* Profile Tab */}
              <Tab.Pane eventKey="profile">
                <Row>
                  <Col md={6}>
                    <Card className="mb-3">
                      <Card.Body>
                        <h5>BABVIP CREATIONS PVT. LTD.</h5>
                        <p className="text-muted">babvipdevelopers@gmail.com</p>
                      </Card.Body>
                    </Card>

                    <Card className="mb-3">
                      <Card.Body>
                        <h6>Ad preferences</h6>
                        <Form.Check
                          type="checkbox"
                          label="I would like Bluehost India ads on my website’s 404 pages."
                          defaultChecked
                        />
                      </Card.Body>
                    </Card>

                    <Card className="mb-3">
                      <Card.Body>
                        <h6>Single sign on</h6>
                        <Button variant="outline-primary" className="mt-2">
                          <img
                            src="https://developers.google.com/identity/images/g-logo.png"
                            alt="Google"
                            style={{ width: 20, marginRight: 8 }}
                          />
                          Sign in with Google
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card className="mb-3">
                      <Card.Body>
                        <h6>cPanel language settings</h6>
                        <Form.Group controlId="languageSelect">
                          <Form.Label>Selected language</Form.Label>
                          <Form.Select defaultValue="hi">
                            <option value="en">English</option>
                            <option value="ar">العربية (Arabic)</option>
                            <option value="hi">हिन्दी (Hindi)</option>
                            <option value="fr">Français (French)</option>
                          </Form.Select>
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Contact Information only in Profile */}
                  <Col md={6}>
                    <EditProfileModal />
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ProfileTab;
