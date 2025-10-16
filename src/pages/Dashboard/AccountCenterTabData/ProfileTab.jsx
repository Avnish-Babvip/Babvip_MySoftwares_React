import { Container, Row, Col, Tab, Card, Form, Button } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import EditProfileModal from "../../../components/Dashboard/EditProfileModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  updateProfilePhotoDashboard,
} from "../../../features/actions/dashboard";
import { useEffect } from "react";

const ProfileTab = () => {
  const { updateResponse, isImageLoading } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);
  const { customer } = useSelector((state) => state.dashboard.profileData);
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const formData = new FormData();
      formData.append("profile_image", file); // Append the file to FormData
      formData.append("profile_image_old", customer?.profile_image); // Append the file to FormData
      // formData.forEach((file, profile_image) => {
      //   console.log(profile_image, file);
      // });
      dispatch(
        updateProfilePhotoDashboard({
          payload: formData,
          loginToken: customerData?.login_token,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(getProfileData(customerData?.login_token));
  }, [updateResponse]);

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
                    {" "}
                    <div className="text-center bg-light pb-4  mx-3">
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          position: "relative", // Ensure the container is relative for absolute positioning of loader
                          width: "80px", // Width of the container (same as the image)
                          height: "80px", // Height of the container (same as the image)
                          margin: "0 auto", // Center the container
                        }}
                      >
                        {isImageLoading ? (
                          <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                              position: "absolute", // Position the loader in the center of the container
                              top: "50%", // Vertically center
                              left: "50%", // Horizontally center
                              transform: "translate(-50%, -50%)", // Adjust for exact centering
                              width: "50px", // Width of the loader circle
                              height: "50px", // Height of the loader circle
                              backgroundColor: "gray", // Gray background
                              borderRadius: "50%", // Round the loader
                            }}
                          >
                            <div
                              className="spinner-border spinner-border-sm text-white"
                              role="status"
                              style={{
                                width: "25px", // Spinner width
                                height: "25px", // Spinner height
                              }}
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={
                              customer?.profile_image
                                ? `${
                                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                  }/customer-profile/${customer?.profile_image}`
                                : `${assetRoute}/placeholder.webp`
                            }
                            height={80}
                            width={80}
                            className="rounded-circle"
                            alt="Profile"
                          />
                        )}
                      </div>

                      <h5 className="mb-0 mt-3">
                        {customer?.first_name} {customer?.last_name}
                      </h5>
                      <span
                        style={{
                          backgroundColor: "rgba(34, 201, 164, 0.1)",
                          color: "#18BBA2",
                        }}
                        className="rounded-3 px-2 fw-semibold fs-sm"
                      >
                        {customer?.email}
                      </span>
                      <div className="d-flex gap-3 justify-content-center">
                        <button
                          className="btn btn-warning"
                          style={{
                            border: "1px solid #dee2e6",
                            borderRadius: "0.5rem",
                            fontSize: "0.5 rem",
                            fontWeight: 500,
                            padding: "0.15rem 0.5rem",
                            marginTop: "1rem",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          onClick={() =>
                            document.getElementById("fileInput").click()
                          } // Trigger file input when button is clicked
                        >
                          Change Picture
                        </button>

                        <input
                          id="fileInput"
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
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
