import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getUpgradeCheckoutData,
  renewPaymentProcess,
} from "../../../features/actions/cart";
import { useForm } from "react-hook-form";
import ButtonLoader from "../../../components/Loader/ButtonLoader";
import {
  getAllCityById,
  getAllCountries,
  getAllStatesById,
} from "../../../features/actions/countryStateCity";
import { clearCredentialResponse } from "../../../features/slices/cart";
import { useLocation } from "react-router-dom";

export default function UpgradeCheckout() {
  const [showGst, setShowGst] = useState(false);
  const location = useLocation();
  const { softwareName, productId, planId } = location.state;

  const { countryData, stateData, cityData } = useSelector(
    (state) => state.countryStateCity
  );
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);

  const { isLoadingOrder, upgradeCheckoutData, upgradePaymentCredentials } =
    useSelector((state) => state.cart);

  const [tid, setTid] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) || "Please enter a valid email address";
  };
  const onSubmit = (data) => {
    const country = countryData.find(
      (c) => c.id === Number(data.billing_country)
    );
    const state = stateData.find((s) => s.id === Number(data.billing_state));
    const city = cityData.find((c) => c.id === Number(data.billing_city));
    // const payload = {
    //   ...data,
    //   billing_country: country?.country_name,
    //   billing_state: state?.state_name,
    //   billing_city: city?.city_name,
    // };
    // console.log(payload);
    const payload = {
      ...data,
      billing_country: country?.country_name,
      billing_state: state?.state_name,
      billing_city: city?.city_name,
      tid,
      merchant_param1: transactionNumber,
      merchant_id: "3902775",
      order_id: upgradeCheckoutData?.order_number,
      amount: upgradeCheckoutData?.payable_amount,
      currency: "INR",
      redirect_url: `${
        import.meta.env.VITE_REACT_APP_FRONTEND_URL
      }/api/customer/customerpaymentrenewresponse`,
      cancel_url: `${
        import.meta.env.VITE_REACT_APP_FRONTEND_URL
      }/api/customer/customerpaymentrenewresponse`,
      language: "EN",
    };
    dispatch(
      renewPaymentProcess({
        payload,
        loginToken: customerData?.login_token,
      })
    );
  };

  useEffect(() => {
    if (!upgradeCheckoutData || !countryData.length) return;

    const billing = upgradeCheckoutData?.customer?.customer_billing || {};

    const country = countryData.find(
      (c) => c.country_name === billing?.billing_country
    );
    const state = stateData.find(
      (s) => s.state_name === billing?.billing_state
    );
    const city = cityData.find((c) => c.city_name === billing?.billing_city);

    setValue(
      "billing_name",
      billing?.billing_name || upgradeCheckoutData?.customer.first_name
    );
    setValue(
      "billing_email",
      billing?.billing_email || upgradeCheckoutData?.customer.email
    );
    setValue(
      "billing_tel",
      billing?.billing_tel || upgradeCheckoutData?.customer.phone_number
    );
    setValue(
      "billing_zip",
      billing?.billing_zip || upgradeCheckoutData?.customer.postal_code
    );
    setValue(
      "billing_address",
      billing?.billing_address || upgradeCheckoutData?.customer.address
    );

    if (country) setValue("billing_country", country.id);
    if (state) setValue("billing_state", state.id);
    if (city) setValue("billing_city", city.id);
  }, [upgradeCheckoutData, countryData, stateData, cityData]);

  useEffect(() => {
    if (!upgradeCheckoutData) return;

    // Always fetch countries
    dispatch(getAllCountries());

    if (upgradeCheckoutData?.customer.country_id) {
      dispatch(getAllStatesById(upgradeCheckoutData?.customer.country_id));
    }

    if (upgradeCheckoutData?.customer.state_id) {
      dispatch(getAllCityById(upgradeCheckoutData?.customer.state_id));
    }
  }, [upgradeCheckoutData]);

  useEffect(() => {
    if (productId && planId) {
      dispatch(
        getUpgradeCheckoutData({
          loginToken: customerData?.login_token,
          productId,
          planId,
        })
      );
      console.log("first");
    }
  }, []);

  useEffect(() => {
    const d = new Date().getTime();
    setTid(d);
    setTransactionNumber(`BABVIPCUSTR-${d}`);
  }, []); // runs once on mount

  // 2. When API gives encRequest + access_code → auto submit form
  useEffect(() => {
    if (
      upgradePaymentCredentials?.encrypted_data &&
      upgradePaymentCredentials?.accessCode
    ) {
      const form = document.createElement("form");
      form.method = "post";
      form.action =
        "https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&request_type=JSON&response_type=JSON&version=1.1";

      const enc = document.createElement("input");
      enc.type = "hidden";
      enc.name = "encRequest";
      enc.value = upgradePaymentCredentials?.encrypted_data;
      form.appendChild(enc);

      const access = document.createElement("input");
      access.type = "hidden";
      access.name = "access_code";
      access.value = upgradePaymentCredentials?.accessCode;
      form.appendChild(access);

      document.body.appendChild(form);
      form.submit();
      dispatch(clearCredentialResponse());
    }
  }, [upgradePaymentCredentials]);

  return upgradeCheckoutData && productId ? (
    <Container className="my-5">
      <form id="customer-lead-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-4">Shopping Cart</h3>
        <Card className="shadow-sm border-0 mb-4">
          <Card.Body>
            <h5 className="mb-3">Payment Information</h5>
            <Form.Check
              type="radio"
              label="Pay Online"
              name="paymentMethod"
              defaultChecked
              className="mb-3"
            />

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("billing_name", {
                      required: "Full name is required",
                    })}
                    placeholder="Enter Full Name *"
                  />
                  {errors.billing_name && (
                    <span className="text-danger">
                      {errors.billing_name.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("billing_email", {
                      required: "Email is required",
                      validate: validateEmail,
                    })}
                    placeholder="Enter Email Address *"
                  />
                  {errors.billing_email && (
                    <span className="text-danger">
                      {errors.billing_email.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("billing_tel", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[1-9]\d{9}$/,
                        message: "Enter a valid 10-digit number",
                      },
                    })}
                    placeholder="Enter Phone Number *"
                  />
                  {errors.phone_number && (
                    <span className="text-danger">
                      {errors.phone_number.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Select Country *</label>
                  <select
                    className="form-control"
                    {...register("billing_country")}
                    onChange={(e) => {
                      dispatch(getAllStatesById(e.target.selectedIndex));

                      setValue("billing_state", ""); // Reset city selection
                    }}
                  >
                    <option value="">Select Country</option>
                    {countryData.map((country) => (
                      <option key={country?.id} value={country?.id}>
                        {country?.country_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors.billing_country && (
                <span className="text-danger">
                  {errors.billing_country.message}
                </span>
              )}
            </div>

            {/* Country Dropdown (Fixed to India) */}
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Select State *</label>
                  <select
                    className="form-control"
                    {...register("billing_state", {
                      required: "State is required",
                    })}
                    onChange={(e) => {
                      dispatch(getAllCityById(e.target.selectedIndex));
                      setValue("billing_city", ""); // Reset city selection
                    }}
                  >
                    <option value="">Select State</option>
                    {stateData.map((state) => (
                      <option key={state?.id} value={state?.id}>
                        {state?.state_name}
                      </option>
                    ))}
                  </select>
                  {errors.billing_state && (
                    <span className="text-danger">
                      {errors.billing_state.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Select City *</label>
                  <select
                    className="form-control"
                    {...register("billing_city", {
                      required: "City is required",
                    })}
                  >
                    <option value="">Select City</option>
                    {cityData?.map((city) => (
                      <option key={city?.id} value={city?.id}>
                        {city?.city_name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  {errors.billing_city && (
                    <span className="text-danger">
                      {errors.billing_city.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* City Dropdown (Shown after State is selected) */}
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Postal Code *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("billing_zip", {
                      required: "Postal Code is required",
                    })}
                    placeholder="Enter Postal Code *"
                  />
                  {errors.billing_zip && (
                    <span className="text-danger">
                      {errors.billing_zip.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Enter Your Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("billing_address", {
                      required: "Address is required",
                    })}
                    placeholder="Enter Your Address"
                  />
                  {errors.billing_address && (
                    <span className="text-danger">
                      {errors.billing_address.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* GST ID Toggle */}
            <Col xs={12} className="mt-2">
              {!showGst ? (
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => setShowGst(true)}
                >
                  + Add GST ID
                </Button>
              ) : (
                <div>
                  <Form.Label>GST ID</Form.Label>
                  <Form.Control
                    placeholder="Enter GST ID"
                    {...register("gst_number", {
                      required: "GST number is required", // 👈 optional validation
                    })}
                  />
                </div>
              )}
            </Col>
          </Card.Body>
        </Card>

        {/* Items Table */}
        <Card className="shadow-sm border-0 mb-4">
          <Card.Body>
            <h5 className="mb-3">Items To Be Purchased</h5>
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Software Name</th>
                  <th>Current Plan</th>
                  <th>Upgraded Plan</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{softwareName}</td>
                  <td>{upgradeCheckoutData?.current_plan?.plan_name}</td>
                  <td>{upgradeCheckoutData?.upgraded_plan?.plan_name}</td>
                  <td>
                    {
                      upgradeCheckoutData?.upgraded_plan?.plan_type
                        ?.duration_value
                    }{" "}
                    {
                      upgradeCheckoutData?.upgraded_plan?.plan_type
                        ?.duration_type
                    }{" "}
                  </td>
                  <td>₹{upgradeCheckoutData?.upgraded_plan?.plan_price}</td>
                </tr>
              </tbody>
            </Table>

            {/* Totals */}
            <Row className="justify-content-end">
              <Col md={4}>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>₹{upgradeCheckoutData?.subtotal}</strong>
                </div>
                {upgradeCheckoutData?.discount != 0 && (
                  <div className="d-flex justify-content-between">
                    <span>Discount</span>
                    <strong>- ₹{upgradeCheckoutData?.discount}</strong>
                  </div>
                )}
                <div className="d-flex justify-content-between">
                  <span>CGST {upgradeCheckoutData?.gst?.gst_rate}%</span>
                  <strong>₹{upgradeCheckoutData?.gst?.cgst}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>SGST {upgradeCheckoutData?.gst?.gst_rate}%</span>
                  <strong>₹{upgradeCheckoutData?.gst?.sgst}</strong>
                </div>
                {upgradeCheckoutData?.gst?.igst !== "0.00" && (
                  <div className="d-flex justify-content-between">
                    <span>IGST {upgradeCheckoutData?.gst?.gst_rate}%</span>
                    <strong>₹{upgradeCheckoutData?.gst?.igst}</strong>
                  </div>
                )}
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Payable Amount</span>
                  <h5 className="fw-bold text-success">
                    ₹{upgradeCheckoutData?.payable_amount}
                  </h5>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <Button variant="outline-primary">Continue Shopping</Button>
          <Button type="submit" disabled={isLoadingOrder} variant="success">
            {isLoadingOrder ? <ButtonLoader /> : "Process Order"}
          </Button>
        </div>
      </form>
    </Container>
  ) : (
    <div className="d-flex flex-column vh-100 align-items-center justify-content-center text-black">
      <p>OOPS ! </p>
      <p>Nothing Found</p>
    </div>
  );
}
