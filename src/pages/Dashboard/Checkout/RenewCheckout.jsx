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
  getRenewCheckoutData,
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
import { useParams } from "react-router-dom";

export default function RenewCheckout() {
  const [showGst, setShowGst] = useState(false);
  const { productId } = useParams();
  const { countryData, stateData, cityData } = useSelector(
    (state) => state.countryStateCity
  );
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);

  const { isLoadingOrder, renewCheckoutData, renewPaymentCredentials } =
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
      order_id: renewCheckoutData?.order_number,
      amount: renewCheckoutData?.payable_amount,
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
    if (!renewCheckoutData || !countryData.length) return;

    const billing = renewCheckoutData?.customer?.customer_billing || {};

    const country = countryData.find(
      (c) => c.country_name === billing?.billing_country
    );
    const state = stateData.find(
      (s) => s.state_name === billing?.billing_state
    );
    const city = cityData.find((c) => c.city_name === billing?.billing_city);

    setValue(
      "billing_name",
      billing?.billing_name || renewCheckoutData?.customer.first_name
    );
    setValue(
      "billing_email",
      billing?.billing_email || renewCheckoutData?.customer.email
    );
    setValue(
      "billing_tel",
      billing?.billing_tel || renewCheckoutData?.customer.phone_number
    );
    setValue(
      "billing_zip",
      billing?.billing_zip || renewCheckoutData?.customer.postal_code
    );
    setValue(
      "billing_address",
      billing?.billing_address || renewCheckoutData?.customer.address
    );

    if (country) setValue("billing_country", country.id);
    if (state) setValue("billing_state", state.id);
    if (city) setValue("billing_city", city.id);
  }, [renewCheckoutData, countryData, stateData, cityData]);

  useEffect(() => {
    if (!renewCheckoutData) return;

    // Always fetch countries
    dispatch(getAllCountries());

    if (renewCheckoutData?.customer.country_id) {
      dispatch(getAllStatesById(renewCheckoutData?.customer.country_id));
    }

    if (renewCheckoutData?.customer.state_id) {
      dispatch(getAllCityById(renewCheckoutData?.customer.state_id));
    }
  }, [renewCheckoutData]);

  useEffect(() => {
    if (productId) {
      dispatch(
        getRenewCheckoutData({
          loginToken: customerData?.login_token,
          productId,
        })
      );
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
      renewPaymentCredentials?.encrypted_data &&
      renewPaymentCredentials?.accessCode
    ) {
      const form = document.createElement("form");
      form.method = "post";
      form.action =
        "https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&request_type=JSON&response_type=JSON&version=1.1";

      const enc = document.createElement("input");
      enc.type = "hidden";
      enc.name = "encRequest";
      enc.value = renewPaymentCredentials?.encrypted_data;
      form.appendChild(enc);

      const access = document.createElement("input");
      access.type = "hidden";
      access.name = "access_code";
      access.value = renewPaymentCredentials?.accessCode;
      form.appendChild(access);

      document.body.appendChild(form);
      form.submit();
      dispatch(clearCredentialResponse());
    }
  }, [renewPaymentCredentials]);

  return renewCheckoutData ? (
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
                  <th>Plan</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(renewCheckoutData?.items) &&
                  renewCheckoutData?.items.map((item, idx) => (
                    <tr>
                      <td>{item?.software?.software_name}</td>
                      <td>{item?.plan?.plan_name}</td>
                      <td>
                        {item?.plan?.plan_type?.duration_value}{" "}
                        {item?.plan?.plan_type?.duration_type}{" "}
                      </td>
                      <td>₹{item?.plan?.plan_price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>

            {/* Totals */}
            <Row className="justify-content-end">
              <Col md={4}>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>₹{renewCheckoutData?.subtotal}</strong>
                </div>
                {renewCheckoutData?.discount != 0 && (
                  <div className="d-flex justify-content-between">
                    <span>Discount</span>
                    <strong>- ₹{renewCheckoutData?.discount}</strong>
                  </div>
                )}
                <div className="d-flex justify-content-between">
                  <span>CGST {renewCheckoutData?.gst?.gst_rate}%</span>
                  <strong>₹{renewCheckoutData?.gst?.cgst}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>SGST {renewCheckoutData?.gst?.gst_rate}%</span>
                  <strong>₹{renewCheckoutData?.gst?.sgst}</strong>
                </div>
                {renewCheckoutData?.gst?.igst !== "0.00" && (
                  <div className="d-flex justify-content-between">
                    <span>IGST {renewCheckoutData?.gst?.gst_rate}%</span>
                    <strong>₹{renewCheckoutData?.gst?.igst}</strong>
                  </div>
                )}
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Payable Amount</span>
                  <h5 className="fw-bold text-success">
                    ₹{renewCheckoutData?.payable_amount}
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
