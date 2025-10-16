import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Swiper2 from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getSoftwareDataBySlug } from "../features/actions/category";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import ContactModal from "../components/SoftwareModal/ContactModal";
import { IoCart } from "react-icons/io5";
import { addToCart, getCustomerCartData } from "../features/actions/cart";
import { checkSoftwareExist } from "../features/actions/authentication";

const Software = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [showMoreStates, setShowMoreStates] = useState({});

  const [activeSection, setActiveSection] = useState("");

  const { customerData, isUserLoggedIn, checkSoftwareResponse } = useSelector(
    (state) => state.authentication
  );
  const { updateResponse } = useSelector((state) => state.cart);

  const toggleShowMore = (idx) => {
    setShowMoreStates((prevState) => ({
      ...prevState,
      [idx]: !prevState[idx], // Toggle the specific index
    }));
  };
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { softwareDetailData } = useSelector((action) => action.category);

  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    mainSwiperRef.current?.slideTo(index);
  };

  const handleAddToCart = (plan_id) =>
    dispatch(
      addToCart({
        software_id: softwareDetailData?.id,
        plan_id,
        loginToken: customerData?.login_token,
      })
    );

  const [showImageModal, setShowImageModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const [isSticky, setIsSticky] = useState(false);

  const scrollToPricing = (e) => {
    e.preventDefault();
    const section = document.getElementById("pricing");
    if (section) {
      const yOffset = -80; // adjust offset for sticky header
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (slug) dispatch(getSoftwareDataBySlug(slug));
  }, [slug]);

  useEffect(() => {
    if (Array.isArray(softwareDetailData?.software_plans))
      dispatch(
        checkSoftwareExist({
          payload: {
            software_id: softwareDetailData?.id,
            plan_id: softwareDetailData?.software_plans[0]?.id,
          },
          loginToken: customerData?.login_token,
        })
      );
  }, [softwareDetailData]);

  useEffect(() => {
    const sectionIds = [
      "description",
      "pricing",
      "faq",
      "specification",
      "features",
      "reviews",
    ];

    const handleScroll = () => {
      const descriptionSection = document.getElementById("description");
      if (descriptionSection) {
        const descriptionOffset = descriptionSection.offsetTop;
        setIsSticky(window.scrollY > descriptionOffset - 100);
      }

      const scrollPos = window.scrollY + 150; // Add some offset to trigger earlier

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (updateResponse?.status) {
      dispatch(getCustomerCartData(customerData?.login_token));
    }
  }, [updateResponse]);

  useEffect(() => {
    const swiperInstance = new Swiper2(".testimonialSwiperreview", {
      modules: [Navigation],
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1142: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      if (
        swiperRef.current &&
        typeof swiperRef.current.destroy === "function"
      ) {
        swiperRef.current.destroy(true, true);
      }
    };
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
                {Array.isArray(softwareDetailData?.software_images) &&
                  softwareDetailData?.software_images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`${
                          import.meta.env.VITE_REACT_APP_IMAGE_PATH
                        }/software-images/${image.image_path}`}
                        alt={`Product ${index + 1}`}
                        className="img-fluid rounded"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setActiveImage(
                            `${
                              import.meta.env.VITE_REACT_APP_IMAGE_PATH
                            }/software-images/${image.image_path}`
                          );
                          setShowImageModal(true);
                        }}
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
                  {Array.isArray(softwareDetailData.software_images) &&
                    softwareDetailData?.software_images.map((image, index) => (
                      <SwiperSlide
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={`${
                            import.meta.env.VITE_REACT_APP_IMAGE_PATH
                          }/software-images/${image.image_path}`}
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
              <h2 className="fw-bold">{softwareDetailData?.software_name}</h2>
              <a
                href="#"
                className="badge bg-primary text-white text-decoration-none"
              >
                {softwareDetailData?.category?.category_title}
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
              <h4 className="text-danger mt-3">
                {softwareDetailData?.price
                  ? `Price: ₹ ${softwareDetailData?.price}`
                  : "Price not available"}
              </h4>

              {/* Description */}
              <p className="mt-3">{softwareDetailData?.short_description}</p>

              {/* Buttons */}
              {!isUserLoggedIn ? (
                <div className="mt-4 d-flex justify-content-center d-sm-block">
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
              ) : checkSoftwareResponse?.expiry === "Active" ? (
                <div className="mt-4 d-flex justify-content-center d-sm-block">
                  <Link
                    to={`/customer/renew-checkout`}
                    state={{ productId: checkSoftwareResponse?.data?.id }}
                    className="btn btn-primary me-2"
                  >
                    Renew Now
                  </Link>

                  <button onClick={scrollToPricing} className="btn btn-danger">
                    Upgrade Now
                  </button>
                </div>
              ) : (
                <div className="mt-4 d-flex justify-content-center d-sm-block">
                  <button
                    onClick={scrollToPricing}
                    className="btn btn-success me-2 d-flex gap-3 align-items-center"
                  >
                    Add to cart <IoCart size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Header Section */}
      <section
        style={{
          // even smaller vertical padding
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
        <div className="container my-3">
          <div className="row " id="tab-custom">
            <div className="col-12 ">
              <ul className="nav-custom feature-tab-list-2" id="nav-tab-2">
                <li className="nav-item">
                  <a
                    className={`nav-link nav-link-custom ${
                      activeSection === "description" ? "active" : ""
                    }`}
                    href="#description"
                    onClick={(e) => scrollToSection("description", e)}
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link nav-link-custom ${
                      activeSection === "pricing" ? "active" : ""
                    }`}
                    href="#pricing"
                    onClick={(e) => scrollToSection("pricing", e)}
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link nav-link-custom ${
                      activeSection === "faq" ? "active" : ""
                    }`}
                    href="#faq"
                    onClick={(e) => scrollToSection("faq", e)}
                  >
                    FAQ's
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link nav-link-custom ${
                      activeSection === "specification" ? "active" : ""
                    }`}
                    href="#specification"
                    onClick={(e) => scrollToSection("specification", e)}
                  >
                    Specifications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link nav-link-custom ${
                      activeSection === "features" ? "active" : ""
                    }`}
                    href="#features"
                    onClick={(e) => scrollToSection("features", e)}
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link nav-link-custom ${
                      activeSection === "reviews" ? "active" : ""
                    }`}
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

      <section
        class="feature-promo "
        id="description"
        style={{ paddingTop: isSticky ? "100px" : "0" }}
      >
        <div class="container mb-4">
          <div class="row">
            <div class="col-md-12">
              <h4>Software Description:</h4>
              {softwareDetailData?.description &&
                parse(String(softwareDetailData?.description))}
            </div>
          </div>
        </div>
      </section>

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
                <div className="row g-4 justify-content-center">
                  {Array.isArray(softwareDetailData?.software_plans) &&
                    softwareDetailData?.software_plans.map(
                      (plan, idx) =>
                        plan?.plan_type?.plan_type_name === "Halfyearly" && (
                          <div key={idx} className="col-xl-4 col-md-6">
                            <div className="dg-pricing-column text-center bg-white rounded-4 position-relative z-1 h-100 d-flex flex-column justify-content-between p-4 shadow-sm">
                              {/* Badge */}
                              {plan?.badge_icon && (
                                <img
                                  src={`${
                                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                  }/software-plan/${plan?.badge_icon}`}
                                  className="position-absolute top-0 offer-badge z-2"
                                />
                              )}

                              {/* Icon */}
                              <div>
                                <div className="icon-wrapper d-inline-block rounded-circle bg-white shadow-sm">
                                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100 p-3">
                                    <img
                                      src={`${
                                        import.meta.env
                                          .VITE_REACT_APP_IMAGE_PATH
                                      }/software-plan/${plan?.plan_icon}`}
                                      alt="plan-icon"
                                      className="img-fluid"
                                    />
                                  </span>
                                </div>

                                {/* Name + Description */}
                                <h5 className="mt-4 mb-3">{plan?.plan_name}</h5>
                                <p className="mb-4 fm truncate-2">
                                  {plan?.plan_short_description}
                                </p>

                                {/* Features */}
                                <ul className="dg-feature-list list-unstyled d-inline-block text-start p-0 mb-3">
                                  {Array.isArray(plan?.modules) &&
                                    plan?.modules.map((module, moduleIdx) => (
                                      <li
                                        className="fs-sm mb-2"
                                        key={moduleIdx}
                                        style={{
                                          display:
                                            moduleIdx < 4 || showMoreStates[idx]
                                              ? "block"
                                              : "none",
                                        }}
                                      >
                                        <span className="me-2">
                                          <i
                                            className={
                                              module?.additional_info === 0
                                                ? "fas fa-check text-success"
                                                : "fa-solid fa-circle-check text-danger"
                                            }
                                          ></i>
                                        </span>
                                        {module?.module_name}
                                      </li>
                                    ))}
                                </ul>

                                {/* Conditionally render "See More / Less" */}
                                {Array.isArray(plan?.modules) &&
                                  plan.modules.some(
                                    (m) => m.additional_info !== 0
                                  ) && (
                                    <button
                                      className="btn btn-link ps-1 fs-sm"
                                      onClick={() => toggleShowMore(idx)}
                                    >
                                      {showMoreStates[idx]
                                        ? "See Less"
                                        : "See More"}
                                    </button>
                                  )}
                              </div>

                              {/* Price Box — stays at bottom and centered */}
                              <div
                                className="dg-pricing-amount mt-auto pt-3 pb-3 px-4 rounded-4 bg-dg-primary text-white mx-auto text-center"
                                style={{
                                  width: "fit-content",
                                  minWidth: "80%",
                                }}
                              >
                                <h2
                                  className="mb-3"
                                  style={{ fontSize: "22px" }}
                                >
                                  <span>₹ {plan?.plan_price}</span>
                                  <span className="ms-2 fs-md fw-normal text-light">
                                    {plan?.plan_type?.duration_value}{" "}
                                    {plan?.plan_type?.duration_type}
                                  </span>
                                </h2>
                                {isUserLoggedIn && (
                                  <button
                                    disabled={
                                      plan?.id ==
                                      checkSoftwareResponse?.data?.plan_id
                                    }
                                    onClick={() =>
                                      checkSoftwareResponse?.expiry !== "Active"
                                        ? handleAddToCart(plan?.id)
                                        : navigate(
                                            `/customer/upgrade-checkout`,
                                            {
                                              state: {
                                                softwareName:
                                                  softwareDetailData?.software_name,
                                                productId:
                                                  checkSoftwareResponse?.data
                                                    ?.id,
                                                planId: plan?.id,
                                              },
                                            }
                                          )
                                    }
                                    className="btn dg-outline-btn rounded-pill"
                                  >
                                    {checkSoftwareResponse?.expiry !== "Active"
                                      ? "Add to cart"
                                      : plan?.id ==
                                        checkSoftwareResponse?.data?.plan_id
                                      ? "Active"
                                      : "Upgrade Now"}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                    )}
                </div>
              </div>
              <div
                class="tab-pane fade 
                "
                id="tabplan2"
                role="tabpanel"
              >
                <div className="row g-4 justify-content-center">
                  {Array.isArray(softwareDetailData?.software_plans) &&
                    softwareDetailData?.software_plans.map(
                      (plan, idx) =>
                        plan?.plan_type?.plan_type_name === "Yearly" && (
                          <div key={idx} className="col-xl-4 col-md-6">
                            <div className="dg-pricing-column text-center bg-white rounded-4 position-relative z-1 h-100 d-flex flex-column justify-content-between p-4 shadow-sm">
                              {/* Badge */}
                              {plan?.badge_icon && (
                                <img
                                  src={`${
                                    import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                  }/software-plan/${plan?.badge_icon}`}
                                  className="position-absolute top-0 offer-badge z-2"
                                />
                              )}

                              {/* Icon */}
                              <div>
                                <div className="icon-wrapper d-inline-block rounded-circle bg-white shadow-sm">
                                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100 p-3">
                                    <img
                                      src={`${
                                        import.meta.env
                                          .VITE_REACT_APP_IMAGE_PATH
                                      }/software-plan/${plan?.plan_icon}`}
                                      alt="plan-icon"
                                      className="img-fluid"
                                    />
                                  </span>
                                </div>

                                {/* Name + Description */}
                                <h5 className="mt-4 mb-3">{plan?.plan_name}</h5>
                                <p className="mb-4 fm truncate-2">
                                  {plan?.plan_short_description}
                                </p>

                                {/* Features */}
                                <ul className="dg-feature-list list-unstyled d-inline-block text-start p-0 mb-3">
                                  {Array.isArray(plan?.modules) &&
                                    plan?.modules.map((module, moduleIdx) => (
                                      <li
                                        className="fs-sm mb-2"
                                        key={moduleIdx}
                                        style={{
                                          display:
                                            moduleIdx < 4 || showMoreStates[idx]
                                              ? "block"
                                              : "none",
                                        }}
                                      >
                                        <span className="me-2">
                                          <i
                                            className={
                                              module?.additional_info === 0
                                                ? "fas fa-check text-success"
                                                : "fa-solid fa-circle-check text-danger"
                                            }
                                          ></i>
                                        </span>
                                        {module?.module_name}
                                      </li>
                                    ))}
                                </ul>

                                {/* Conditionally render "See More / Less" */}
                                {Array.isArray(plan?.modules) &&
                                  plan.modules.some(
                                    (m) => m.additional_info !== 0
                                  ) && (
                                    <button
                                      className="btn btn-link ps-1 fs-sm"
                                      onClick={() => toggleShowMore(idx)}
                                    >
                                      {showMoreStates[idx]
                                        ? "See Less"
                                        : "See More"}
                                    </button>
                                  )}
                              </div>

                              {/* Price Box — stays at bottom and centered */}
                              <div
                                className="dg-pricing-amount mt-auto pt-3 pb-3 px-4 rounded-4 bg-dg-primary text-white mx-auto text-center"
                                style={{
                                  width: "fit-content",
                                  minWidth: "80%",
                                }}
                              >
                                <h2
                                  className="mb-3"
                                  style={{ fontSize: "22px" }}
                                >
                                  <span>₹ {plan?.plan_price}</span>
                                  <span className="ms-2 fs-md fw-normal text-light">
                                    {plan?.plan_type?.duration_value}{" "}
                                    {plan?.plan_type?.duration_type}
                                  </span>
                                </h2>
                                {isUserLoggedIn && (
                                  <button
                                    disabled={
                                      plan?.id ==
                                      checkSoftwareResponse?.data?.plan_id
                                    }
                                    onClick={() =>
                                      checkSoftwareResponse?.expiry !== "Active"
                                        ? handleAddToCart(plan?.id)
                                        : navigate(
                                            `/customer/upgrade-checkout`,
                                            {
                                              state: {
                                                softwareName:
                                                  softwareDetailData?.software_name,
                                                productId:
                                                  checkSoftwareResponse?.data
                                                    ?.id,
                                                planId: plan?.id,
                                              },
                                            }
                                          )
                                    }
                                    className="btn dg-outline-btn rounded-pill"
                                  >
                                    {checkSoftwareResponse?.expiry !== "Active"
                                      ? "Add to cart"
                                      : plan?.id ==
                                        checkSoftwareResponse?.data?.plan_id
                                      ? "Active"
                                      : "Upgrade Now"}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                    )}
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

      <section class="faq-section section-custom" id="faq">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-12">
              <h4>Software Faq's:</h4>
              <div class="accordion faq-accordion" id="accordionExample">
                {Array.isArray(softwareDetailData?.software_faq) &&
                  softwareDetailData?.software_faq.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      class={`accordion-item border border-2 
                                                   ${
                                                     faqIndex === 0 && "active"
                                                   }`}
                    >
                      <h5 class="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${faqIndex}`}
                        >
                          {faq?.question}
                        </button>
                      </h5>
                      <div
                        id={`collapse-${faqIndex}`}
                        class={`accordion-collapse collapse   
                                                       ${
                                                         faqIndex === 0 &&
                                                         "show"
                                                       }`}
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">{faq?.answer}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white section-custom" id="specification">
        <div class="container custom-container">
          <h4 class="custom-heading">Software Specification:</h4>
          {Array.isArray(softwareDetailData?.software_specification) &&
            softwareDetailData?.software_specification.map(
              (spec, specIndex) => (
                <div
                  key={specIndex}
                  class="row justify-content-center custom-rowcontent"
                >
                  <div class="col-md-3 custom-column-left">
                    <div class="row">
                      <div class="col-md-12 custom-item">{spec?.title}</div>
                    </div>
                  </div>
                  <div class="col-md-9 custom-column-right">
                    <div class="row">
                      <div class="col-md-12 custom-faq-row">
                        {Array.isArray(spec?.content?.step_data) &&
                          spec?.content?.step_data.map((step, stepIndex) => (
                            <>
                              <img
                                src={`${
                                  import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                }/software-images/${step?.step_image}`}
                                alt=""
                              />
                              <div class="custom-faq-text">
                                {step?.step_title}
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </section>

      <section class="faq-section section-custom" id="features">
        <div class="container custom-container">
          <h4 class="custom-heading">Software Features:</h4>
          <div class="row justify-content-center">
            {Array.isArray(softwareDetailData?.software_feature) &&
              softwareDetailData?.software_feature.map(
                (feature, featureIndex) => (
                  <div key={featureIndex} class="col-md-12">
                    <h5>{feature?.feature_title}</h5>
                    <div class="row p-2">
                      {Array.isArray(feature?.feature_steps) &&
                        feature?.feature_steps.map(
                          (featureStep, featureStepIndex) => (
                            <div key={featureStepIndex} class="col-md-3">
                              <i
                                class="fa fa-check-circle custom-icon"
                                aria-hidden="true"
                              ></i>{" "}
                              {featureStep}
                            </div>
                          )
                        )}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </section>

      <section class="feature-promo ptb-120" id="reviews">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-12">
              <h4>{softwareDetailData?.software_name} Review:</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="position-relative w-100">
                <div class="swiper testimonialSwiperreview ">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide ">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">New</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide ">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide ">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center  mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="border border-2 p-3 rounded-custom position-relative">
                        <div class="circle-badge">SN</div>
                        <div class="d-flex align-items-center mt-4">
                          <div class="author-info">
                            <h6 class="mb-0">Software Name</h6>
                            <div class="ratting-wrap">
                              <p class="mb-0">4.5</p>
                              <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p>
                                ERP software is an integrated system designed to
                                streamline and unify business processes across
                                various departments within an organization, such
                                as finance, human resources, supply chain,
                                manufacturing, sales, and customer service. By
                                centralizing data into a single database.
                              </p>
                              <p class="mb-0">
                                <b>Gaurav Negi</b>
                              </p>
                              <p class="mb-0">10 Dec 2024 05:00 AM</p>
                              <hr class="my-4" />
                              <div class="d-flex justify-content-between align-items-center">
                                <a
                                  href="#"
                                  class="text-gray d-inline-flex align-items-center text-decoration-none"
                                >
                                  See all software reviews
                                  <i class="fas fa-arrow-right ms-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-nav-control">
                  <span class="swiper-button-next"></span>
                  <span class="swiper-button-prev"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showImageModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 1050,
          }}
          onClick={() => setShowImageModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body text-center p-0">
                <img
                  src={activeImage}
                  alt="Large View"
                  className="img-fluid rounded"
                  style={{ maxHeight: "90vh" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactModal modalData={softwareDetailData} />
    </>
  );
};

export default Software;
