import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Software = () => {
  const [showMore, setShowMore] = useState(false);
  const images = [
    "https://my.babvipsoftwares.com/storage/uploads/software-images/5aeb4471-3c1d-406d-9a5f-2061d4cd5555.jpg",
    "https://my.babvipsoftwares.com/storage/uploads/software-images/b3aad372-92b2-4710-a5e9-91d0fa5c5c7e.jpg",
    "https://my.babvipsoftwares.com/storage/uploads/software-images/480f70a7-1c04-484e-8e21-17a9567f5e0e.jpg",
    "https://my.babvipsoftwares.com/storage/uploads/software-images/5aeb4471-3c1d-406d-9a5f-2061d4cd5555.jpg",
    "https://my.babvipsoftwares.com/storage/uploads/software-images/b3aad372-92b2-4710-a5e9-91d0fa5c5c7e.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    mainSwiperRef.current?.slideTo(index);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const descriptionSection = document.getElementById("description");
      if (descriptionSection) {
        const descriptionOffset = descriptionSection.offsetTop;
        setIsSticky(window.scrollY > descriptionOffset - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
            .dg-pricing-column {
        max-height: 600px;
        min-height: 600px;
    }

        .nav-custom li {
            display: inline-block;
        }


  
     /* Styling pagination */
    .circle-badge {
        position: absolute;
        top: -2px;
        left: -10px;
        width: 40px;
        height: 40px;
        background-color: #007bff;
        color: #ffffff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .dg-pricing-tab ul li a.active {
        background-color: #007bff;
        color: #fff;
    }

    .dg-pricing-column .dg-pricing-amount.bg-dg-primary {
        background-color: #007bff;
    }

    
    .img-display {
        overflow: hidden;
    }

    .img-showcase {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    .img-showcase img {
        width: 100%;
        object-fit: cover;
    }

    .img-select {
        display: flex;
        margin-top: 1rem;
        gap: 0.3rem;
    }

    .img-item {
        cursor: pointer;
        transition: opacity 0.3s ease;
    }

    .img-item img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .img-item:hover {
        opacity: 0.8;
    }

    .img-item img:hover {
        transform: scale(1.1);
    }

    .product-title {
        font-size: 27px;
        font-weight: 700;
        color: #12263a;
        margin: 1rem 0;
        position: relative;
    }

    .product-title::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 80px;
        background: #12263a;
    }

    .product-price span {
        font-weight: 400;
    }

    .product-link {
        text-decoration: none;
        font-size: 0.9rem;
        color: #fff;
        background: #256eff;
        padding: 0.3rem;
        display: inline-block;
        transition: opacity 0.5s ease;
    }

    .product-link:hover {
        opacity: 0.9;
    }

    .product-rating {
        color: #ffc107;
    }

    .product-rating span {
        font-weight: 600;
        color: #252525;
    }

    .purchase-info {
        margin-top: 1.5rem;
    }

    .purchase-info .btn {
        padding: 0.45rem 1rem;
        border-radius: 25px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        transition: opacity 0.3s ease;
    }

    .purchase-info .btn:first-child {
        background: #256eff;
    }

    .purchase-info .btn:last-child {
        background: #f64749;
    }

    .purchase-info .btn:hover {
        opacity: 0.9;
    }

    @media screen and (max-width: 991px) {
        .img-select {
            justify-content: center;
            gap: 0.5rem;
        }
    }

    
    .custom-container {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        margin-top: 20px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    .custom-heading {
        font-weight: bold;
        margin-bottom: 20px;
    }

    .custom-column-left {
        border-right: 2px solid #e2d9d9;
        background: #f9f9f9;
        padding-left: 31px;
    }

    .custom-column-left .custom-item {
        padding: 10px 0;
        font-weight: bold;
        color: #2c3e50;
        text-align: left;
    }

    .custom-column-right {
        padding-left: 20px;
    }

    .custom-faq-row {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
        align-items: center;
    }

    .custom-faq-row img {
        margin-right: 10px;
        width: 40px;
    }

    .custom-faq-text {
        font-weight: normal;
        color: #333;
    }

    .custom-rowcontent {
        border: 1px solid #e1dddd;
        padding: 10px;

    }

    .custom-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: #663eb2bf;
        border-radius: 50%;
        font-size: 16px;
    }

    .section-custom {
        padding: 50px 0px !important;
        height: auto;
    }

 /* Background color for each section */
    #tab-2-1 {
        background-color: #f8f9fa;
    }

    #pricing {
        background-color: #e9ecef;
    }

    #faq {
        background-color: #f8f9fa;
    }

    #specification {
        background-color: #e9ecef;
    }

    #features {
        background-color: #f8f9fa;
    }

    #reviews {
        background-color: #e9ecef;
    }



        `}
      </style>
      <section id="cat-description" className="py-4">
        <div className="container">
          <div className="row">
            {/* Image Swiper */}
            <div className="col-md-4">
              <Swiper
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                className="rounded"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="img-fluid rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Image Thumbnails Swiper */}
              <div className="position-relative mt-2">
                {/* Navigation Arrows (Always Visible, Centered in Y-Axis) */}
                <button
                  onClick={() => thumbSwiperRef.current?.slidePrev()}
                  style={{
                    position: "absolute",
                    left: "-15px",
                    top: "50%",
                    transform: "translateY(-50%)",

                    background: "none", // No background
                    border: "none",
                    color: "darkgray", // Dark gray arrow
                    fontSize: "14px", // Smaller size
                    fontWeight: "bold", // Keep it visible
                    cursor: "pointer",
                  }}
                >
                  ❮
                </button>

                <button
                  onClick={() => thumbSwiperRef.current?.slideNext()}
                  style={{
                    position: "absolute",
                    right: "-15px",
                    top: "50%",
                    transform: "translateY(-50%)",

                    background: "none", // No background
                    border: "none",
                    color: "darkgray", // Dark gray arrow
                    fontSize: "14px", // Smaller size
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  ❯
                </button>

                <Swiper
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={5}
                  breakpoints={{
                    320: { slidesPerView: 4 },
                    768: { slidesPerView: 2 },
                    990: { slidesPerView: 3 },
                    1142: { slidesPerView: 4 },
                  }}
                  onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
                >
                  {images.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`img-thumbnail mx-1 ${
                          activeIndex === index ? "border border-primary" : ""
                        }`}
                        width="60"
                        height="60"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-md-8">
              <h2 className="fw-bold">Customer Management System</h2>
              <a
                href="#"
                className="badge bg-primary text-white text-decoration-none"
              >
                Online ERP System
              </a>

              {/* Ratings */}
              <div className="mt-2">
                <span className="text-warning">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </span>
                <span className="ms-2 fw-bold">4.7 (21)</span>
              </div>

              {/* Price */}
              <h4 className="text-danger mt-3">Price: ₹ 2000.00</h4>

              {/* Description */}
              <p className="mt-3">
                A Customer Management System, often referred to as Customer
                Relationship Management (CRM) software, is a tool that helps
                businesses manage interactions and relationships with their
                customers and prospects. It is designed to organize and
                streamline communication.
              </p>

              {/* Buttons */}
              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target=".bs-example-modal-xl"
                >
                  Get a Free Demo <i className="fa fa-handshake"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target=".bs-example-modal-xl"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Header Section */}
      <section
        style={{
          padding: 0,
          height: "auto",
          position: isSticky ? "fixed" : "static",
          top: 0,
          left: 0,
          right: 0,
          zIndex: isSticky ? 1000 : "auto",
          backgroundColor: "white",
          boxShadow: isSticky ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container mb-4">
          <div className="row" id="tab-custom">
            <div className="col-12">
              <ul className="nav-custom feature-tab-list-2" id="nav-tab-2">
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-custom"
                    href="#description"
                    onClick={(e) => scrollToSection("description", e)}
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-custom"
                    href="#pricing"
                    onClick={(e) => scrollToSection("pricing", e)}
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-custom"
                    href="#faq"
                    onClick={(e) => scrollToSection("faq", e)}
                  >
                    FAQ's
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-custom"
                    href="#specification"
                    onClick={(e) => scrollToSection("specification", e)}
                  >
                    Specifications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-custom"
                    href="#features"
                    onClick={(e) => scrollToSection("features", e)}
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-custom"
                    href="#reviews"
                    onClick={(e) => scrollToSection("reviews", e)}
                  >
                    Review
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section
          class="feature-promo "
          id="description"
          style={{ paddingTop: isSticky ? "100px" : "0" }}
        >
          <div class="container mb-4">
            <div class="row">
              <div class="col-md-12">
                <h4>Software Description:</h4>
                <p>
                  A Customer Management System, often referred to as Customer
                  Relationship Management (CRM) software, is a tool that helps
                  businesses manage interactions and relationships with their
                  customers and prospects. It is designed to organize and
                  streamline communication, track customer data, and improve
                  customer satisfaction and retention. By centralizing customer
                  information and tracking interactions across various channels,
                  a CMS enables businesses to provide personalized and
                  responsive customer service.
                </p>
                <p>Key features of a Customer Management System include:</p>
                <ol>
                  <li>
                    <strong>Contact Management</strong>: Stores customer
                    details, such as contact information, interaction history,
                    purchase records, and personal preferences, in one place for
                    easy access and retrieval.
                  </li>
                  <li>
                    <strong>Interaction Tracking</strong>: Logs all customer
                    interactions across multiple channels—like email, phone,
                    social media, and in-person—allowing teams to maintain
                    consistent communication and follow up effectively.
                  </li>
                  <li>
                    <strong>Sales Management</strong>: Helps track the sales
                    pipeline, manage leads, and automate sales processes,
                    providing visibility into the status of deals and improving
                    conversion rates.
                  </li>
                  <li>
                    <strong>Customer Support</strong>: Offers tools to manage
                    customer inquiries, track issues, and resolve cases
                    efficiently, often with ticketing systems and live chat
                    capabilities.
                  </li>
                  <li>
                    <strong>Task and Activity Management</strong>: Assigns tasks
                    to team members, sets reminders, and tracks progress on
                    customer-related activities to ensure timely follow-ups and
                    accountability.
                  </li>
                  <li>
                    <strong>Reporting and Analytics</strong>: Provides insights
                    into customer behavior, sales performance, and customer
                    service effectiveness, enabling data-driven decision-making.
                  </li>
                  <li>
                    <strong>Automated Workflows</strong>: Streamlines repetitive
                    tasks, such as sending follow-up emails or reminders, to
                    increase efficiency and reduce manual work.
                  </li>
                  <li>
                    <strong>Customization and Scalability</strong>: Allows
                    businesses to tailor fields, dashboards, and reports to meet
                    their unique needs and expand as the business grows.
                  </li>
                </ol>
                <p>
                  A Customer Management System is an essential tool for
                  businesses looking to build stronger customer relationships,
                  improve communication, and enhance the overall customer
                  experience. By centralizing customer data and providing tools
                  for engagement, it empowers teams to respond to customer needs
                  proactively and efficiently, ultimately driving customer
                  loyalty and business growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          class="dg-pricing-section ptb-120 position-relative overflow-hidden z-1 "
          id="pricing"
          style={{ paddingTop: isSticky ? "100px" : "0" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-5">
                <h4>Software Pricing Plans:</h4>
              </div>
            </div>
            <div class="dg-pricing-tab text-center">
              <ul
                class="nav nav-tabs border-0 d-inline-flex bg-white rounded overflow-hidden p-0"
                role="tablist"
              >
                <li>
                  <a
                    href="#tabplan1"
                    class="
                                        active
                                        "
                    data-bs-toggle="tab"
                    aria-selected="true"
                    role="tab"
                  >
                    Halfyearly
                  </a>
                </li>
                <li>
                  <a
                    href="#tabplan2"
                    class="
                                        "
                    data-bs-toggle="tab"
                    aria-selected="false"
                    role="tab"
                    tabindex="-1"
                  >
                    Yearly
                  </a>
                </li>
              </ul>
              <div class="tab-content mt-5">
                <div
                  class="tab-pane fade 
                    active show
                "
                  id="tabplan1"
                  role="tabpanel"
                >
                  <div class="row g-4 justify-content-center">
                    <div class="col-xl-4 col-md-6">
                      <div class="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                        <img
                          src="https://my.babvipsoftwares.com/storage/uploads/software-plan/a8bec783-15bf-41e6-96e4-a31506097689.png"
                          alt="a8bec783-15bf-41e6-96e4-a31506097689.png"
                          class="position-absolute top-0 offer-badge z-2"
                        />

                        <div class="icon-wrapper d-inline-block rounded-circle bg-white">
                          <span class="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                            <img
                              src="https://my.babvipsoftwares.com/storage/uploads/software-plan/5169cd61-81c2-4208-bef6-c9318d25a6a7.png"
                              alt="5169cd61-81c2-4208-bef6-c9318d25a6a7.png"
                            />
                          </span>
                        </div>

                        <h5 class="mt-4 mb-3">Default</h5>
                        <p class="mb-4 fm">This is plan short description.</p>

                        <ul
                          class="dg-feature-list list-unstyled d-inline-block text-start p-0"
                          id="default-module-list-1"
                        >
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Multi User Access
                          </li>
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Easy To Access
                          </li>
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Attendence Management
                          </li>
                          {showMore && (
                            <li className="fs-sm">
                              <span className="me-2">
                                <i className="fas fa-check"></i>
                              </span>
                              Library Management System
                            </li>
                          )}
                        </ul>
                        <button
                          class="btn btn-link p-0 fs-sm toggle-btn"
                          data-target="default-module-list-1"
                          style={{ width: "0" }}
                          onClick={() => setShowMore(!showMore)}
                        >
                          {showMore ? "See Less" : "See More"}
                        </button>

                        <div class="dg-pricing-amount d-inline-block rounded-4 bg-dg-primary">
                          <h2 style={{ "font-size": "22px" }}>
                            <span>₹ 2000.00</span>
                            <span class="ms-2 fs-md fw-normal">6 months</span>
                          </h2>
                          <a href="#" class="btn dg-outline-btn rounded-pill">
                            Purchase Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                      <div class="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                        <div class="icon-wrapper d-inline-block rounded-circle bg-white">
                          <span class="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                            <img
                              src="https://my.babvipsoftwares.com/storage/uploads/software-plan/032f19da-3757-417c-b2ba-07309202e504.png"
                              alt="032f19da-3757-417c-b2ba-07309202e504.png"
                            />
                          </span>
                        </div>

                        <h5 class="mt-4 mb-3">Silver Plan</h5>
                        <p class="mb-4 fm">This is test Description.</p>

                        <ul
                          class="dg-feature-list list-unstyled d-inline-block text-start p-0"
                          id="default-module-list-4"
                        >
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Multi User Access
                          </li>
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Easy To Access
                          </li>
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Attendence Management
                          </li>
                          {showMore && (
                            <li className="fs-sm">
                              <span className="me-2">
                                <i className="fas fa-check"></i>
                              </span>
                              Library Management System
                            </li>
                          )}
                        </ul>
                        <button
                          class="btn btn-link p-0 fs-sm toggle-btn"
                          data-target="default-module-list-4"
                          style={{ width: "0" }}
                          onClick={() => setShowMore(!showMore)}
                        >
                          {showMore ? "See Less" : "See More"}
                        </button>

                        <ul
                          class="dg-feature-list list-unstyled d-inline-block text-start p-0"
                          id="additional-module-list-4"
                        >
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i
                                class="fa-solid fa-circle-check"
                                style={{ color: "red" }}
                              ></i>
                            </span>
                            Advance Features
                          </li>
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i
                                class="fa-solid fa-circle-check"
                                style={{ color: "red" }}
                              ></i>
                            </span>
                            HR Management
                          </li>
                        </ul>

                        <div class="dg-pricing-amount d-inline-block rounded-4 bg-dg-primary">
                          <h2 style={{ "font-size": "22px" }}>
                            <span>₹ 5000.00</span>
                            <span class="ms-2 fs-md fw-normal">6 months</span>
                          </h2>
                          <a href="#" class="btn dg-outline-btn rounded-pill">
                            Purchase Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade 
                "
                  id="tabplan2"
                  role="tabpanel"
                >
                  <div class="row g-4 justify-content-center">
                    <div class="col-xl-4 col-md-6">
                      <div class="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                        <img
                          src="https://my.babvipsoftwares.com/storage/uploads/software-plan/6f46c072-1564-4da6-865a-9e4b3ef3792d.png"
                          alt="6f46c072-1564-4da6-865a-9e4b3ef3792d.png"
                          class="position-absolute top-0 offer-badge z-2"
                        />

                        <div class="icon-wrapper d-inline-block rounded-circle bg-white">
                          <span class="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                            <img
                              src="https://my.babvipsoftwares.com/storage/uploads/software-plan/f6e4aae6-1079-470a-ab20-544fa1295571.png"
                              alt="f6e4aae6-1079-470a-ab20-544fa1295571.png"
                            />
                          </span>
                        </div>

                        <h5 class="mt-4 mb-3">Gold</h5>
                        <p class="mb-4 fm">This is test Description.</p>

                        <ul
                          class="dg-feature-list list-unstyled d-inline-block text-start p-0"
                          id="default-module-list-3"
                        >
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Multi User Access
                          </li>
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Easy To Access
                          </li>
                          <li class="fs-sm ">
                            <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span>
                            Attendence Management
                          </li>
                          {showMore && (
                            <li className="fs-sm">
                              <span className="me-2">
                                <i className="fas fa-check"></i>
                              </span>
                              Library Management System
                            </li>
                          )}
                        </ul>
                        <button
                          class="btn btn-link p-0 fs-sm toggle-btn"
                          data-target="default-module-list-3"
                          style={{ width: "0" }}
                          onClick={() => setShowMore(!showMore)}
                        >
                          {showMore ? "See Less" : "See More"}
                        </button>

                        <div class="dg-pricing-amount d-inline-block rounded-4 bg-dg-primary">
                          <h2 style={{ "font-size": "22px" }}>
                            <span>₹ 2000.00</span>
                            <span class="ms-2 fs-md fw-normal">1 years</span>
                          </h2>
                          <a href="#" class="btn dg-outline-btn rounded-pill">
                            Purchase Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://my.babvipsoftwares.com/site/assets/img/digital-agency/pr-doted.png"
              alt="doted shape"
              class="pr-doted position-absolute z--1"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Software;
