import { Container, Row, Col, Tab, Card, Table, Button } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import { getCustomerProducts } from "../../../features/actions/authentication";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductTab = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
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
  const dispatch = useDispatch();
  const { customerData, productData } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    dispatch(getCustomerProducts(customerData?.login_token));
  }, []);

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
                <Col md={12}>
                  <Card className="mb-3 h-100">
                    <Card.Body>
                      <h6 className="pb-2">My Products</h6>

                      <Table responsive bordered={false} hover>
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Expiration date</th>
                            <th>Plan</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(productData) &&
                            productData.map((d, i) => (
                              <tr key={i}>
                                <td>{d?.software?.software_name}</td>
                                <td>{formatDate(d?.software_end_date)}</td>
                                <td>{d?.plan?.plan_name}</td>
                                <td
                                  className="text-primary"
                                  style={{ cursor: "pointer" }}
                                >
                                  <Link
                                    to={`/customer/renew-checkout/${d?.id}`}
                                  >
                                    Renew Now
                                  </Link>
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
