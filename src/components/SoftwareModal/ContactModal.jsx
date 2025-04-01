import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const statesByCountry = {
  India:  [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
    "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", 
    "Puducherry", "Ladakh", "Jammu and Kashmir"
  ],
};

const citiesByState = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kadapa", "Rajahmundry", "Kakinada", "Tirupati", "Anantapur", "Srikakulam", "Ongole", "Eluru", "Chittoor", "Machilipatnam", "Nandyal", "Tenali", "Proddatur"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Pasighat", "Ziro", "Bomdila", "Roing", "Tezu", "Daporijo", "Aalo", "Changlang"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur", "Nagaon", "Tinsukia", "Diphu", "Karimganj", "Bongaigaon", "Barpeta", "Sivasagar", "Dhubri", "Goalpara"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Begusarai", "Purnia", "Arrah", "Chapra", "Katihar", "Munger", "Saharsa", "Samastipur", "Bettiah", "Sitamarhi"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon", "Jagdalpur", "Raigarh", "Ambikapur", "Dhamtari", "Kanker", "Mahasamund"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Canacona"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Navsari", "Morbi", "Bharuch", "Vapi", "Mehsana", "Patan"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Hisar", "Karnal", "Sonipat", "Rohtak", "Panchkula", "Bhiwani", "Sirsa", "Kurukshetra", "Rewari", "Jhajjar"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu", "Mandi", "Solan", "Chamba", "Bilaspur", "Kangra", "Una", "Hamirpur", "Nahan"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Ramgarh", "Medininagar"],
  Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Shimoga", "Tumkur", "Udupi", "Bijapur", "Raichur", "Hassan"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kottayam", "Malappuram", "Kannur", "Pathanamthitta"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Ratlam", "Rewa", "Satna", "Chhindwara"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Nanded", "Sangli", "Jalgaon", "Ahmednagar", "Latur"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Kakching"],
  Meghalaya: ["Shillong", "Tura", "Jowai", "Nongstoin"],
  Mizoram: ["Aizawl", "Lunglei", "Serchhip", "Champhai"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Zunheboto", "Wokha"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Balasore", "Puri", "Berhampur", "Bhadrak", "Jeypore"],
  Punjab: ["Amritsar", "Ludhiana", "Chandigarh", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Ferozepur"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota", "Bikaner", "Bhilwara", "Alwar", "Sikar"],
  Sikkim: ["Gangtok", "Namchi", "Mangan"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirapalli", "Salem", "Vellore", "Erode", "Tirunelveli"],
  Telangana: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut", "Allahabad", "Gorakhpur", "Bareilly", "Jhansi"],
  Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rudrapur", "Haldwani"],
  "West Bengal": ["Kolkata", "Howrah", "Darjeeling", "Siliguri", "Durgapur", "Asansol", "Bardhaman"],
  "Andaman and Nicobar Islands": ["Port Blair"],
  Chandigarh: ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Silvassa"],
  Lakshadweep: ["Kavaratti"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh"],
  Puducherry: ["Puducherry", "Karaikal", "Yanam", "Mahe"],
  Ladakh: ["Leh", "Kargil"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"]
};


const ContactModal = () => {
  const dispatch = useDispatch();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const country = watch("country", "India");

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // dispatch(submitForm(data));
  };

  return (
    <div className="modal fade bs-example-modal-xl" id="btn-enquiry-1">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="row">
              <div className="col-md-8 p-5">
                <form id="customer-lead-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("first_name", { required: "First name is required" })}
                          placeholder="Enter First Name *"
                        />
                        {errors.first_name && <span className="text-danger">{errors.first_name.message}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("last_name", { required: "Last name is required" })}
                          placeholder="Enter Last Name *"
                        />
                        {errors.last_name && <span className="text-danger">{errors.last_name.message}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Email ID *</label>
                        <input
                          type="email"
                          className="form-control"
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                          })}
                          placeholder="Enter Email ID *"
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("phone_number", {
                            required: "Phone number is required",
                            pattern: { value: /^[1-9]\d{9}$/, message: "Enter a valid 10-digit number" },
                          })}
                          placeholder="Enter Phone Number *"
                        />
                        {errors.phone_number && <span className="text-danger">{errors.phone_number.message}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Country Dropdown (Fixed to India) */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Select Country *</label>
                        <select
                          className="form-control"
                          {...register("country")}
                          disabled
                        >
                          <option value="India">India</option>
                        </select>
                      </div>
                    </div>

                    {/* State Dropdown (Shown after Country is selected) */}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Select State *</label>
                        <select
                          className="form-control"
                          {...register("state", { required: "State is required" })}
                          onChange={(e) => {
                            setSelectedState(e.target.value);
                            setValue("city", ""); // Reset city selection
                          }}
                        >
                          <option value="">Select State</option>
                          {statesByCountry["India"].map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        {errors.state && <span className="text-danger">{errors.state.message}</span>}
                      </div>
                    </div>
                  </div>

                  {/* City Dropdown (Shown after State is selected) */}
                  {selectedState && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Select City *</label>
                          <select
                            className="form-control"
                            {...register("city", { required: "City is required" })}
                          >
                            <option value="">Select City</option>
                            {citiesByState[selectedState]?.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                          {errors.city && <span className="text-danger">{errors.city.message}</span>}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Postal Code *</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("postal_code", { required: "Postal Code is required" })}
                          placeholder="Enter Postal Code *"
                        />
                        {errors.postal_code && <span className="text-danger">{errors.postal_code.message}</span>}
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
                          {...register("address", { required: "Address is required" })}
                          placeholder="Enter Your Address"
                        />
                        {errors.address && <span className="text-danger">{errors.address.message}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Send Now
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-4 p-0" style={{ background: "#b04373" }}>
                <div className="modal-header d-block">
                  <h5 className="modal-title text-white">Customer Management System</h5>
                  <p className="text-white">
                    A CRM software that helps businesses manage customer relationships.
                  </p>
                </div>
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/9pLCJZ73-VQ"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
