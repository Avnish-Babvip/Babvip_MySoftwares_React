import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getSoftwareDataBySlug } from "../features/actions/category";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";


const Software = () => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const {slug}= useParams()
  const { softwareDetailData } = useSelector(
    (action) => action.category
  );
  

  console.log(softwareDetailData)
 

  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    mainSwiperRef.current?.slideTo(index);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(()=>{
    dispatch(getSoftwareDataBySlug(slug))
  },[])

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
                {Array.isArray(softwareDetailData?.software_images) && softwareDetailData?.software_images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/software-images/${image.image_path}`}
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
                  {Array.isArray(softwareDetailData.software_images) && softwareDetailData?.software_images.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/software-images/${image.image_path}`}
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
              <h4 className="text-danger mt-3">Price: ₹ {softwareDetailData?.price}</h4>

              {/* Description */}
              <p className="mt-3">
              {softwareDetailData?.short_description}
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
              {parse(softwareDetailData?.description)}
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
                    {Array.isArray(softwareDetailData?.software_plans) && softwareDetailData?.software_plans.map((plan,idx)=>
                      plan?.plan_type?.plan_type_name==="Halfyearly" && 
                     ( <div key={idx} class="col-xl-4 col-md-6">
                      <div class="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/software-plan/${plan?.badge_icon}`}
                         
                          class="position-absolute top-0 offer-badge z-2"
                        />

                        <div class="icon-wrapper d-inline-block rounded-circle bg-white">
                          <span class="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                            <img
                              src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/software-plan/${plan?.plan_icon}`}
                             
                            />
                          </span>
                        </div>

                        <h5 class="mt-4 mb-3">{plan?.plan_name}</h5>
                        <p class="mb-4 fm">{plan?.plan_short_description}</p>

                        <ul
                          class="dg-feature-list list-unstyled d-inline-block text-start p-0"
                          id="default-module-list-1"
                        >
                        {Array.isArray(softwareDetailData?.software_module) && softwareDetailData?.software_module.map((plan,idx)=> <><li class="fs-sm ">
                          {plan?.additional_info ===0 ? <span class="me-2">
                              <i class="fas fa-check"></i>
                            </span> :
                                        <span class="me-2"><i class="fa-solid fa-circle-check" style={{"color":"red"}}></i></span>
                                    }
                            {plan?.module_name}
                          </li>
                 
                          {showMore && (
                            <li className="fs-sm">
                              <span className="me-2">
                                <i className="fas fa-check"></i>
                              </span>
                              Library Management System
                            </li>
                          )}
                          </>
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
                            <span>₹ {plan?.plan_price}</span>
                            <span class="ms-2 fs-md fw-normal">{plan?.plan_type?.duration_value} {plan?.plan_type?.duration_type}</span>
                          </h2>
                          <a href="#" class="btn dg-outline-btn rounded-pill">
                            Purchase Now
                          </a>
                        </div>
                      </div>
                    </div>)
                    )
                    }
                   
                  </div>
                </div>
                <div
                  class="tab-pane fade 
                "
                  id="tabplan2"
                  role="tabpanel"
                >
                  <div class="row g-4 justify-content-center">
                  {Array.isArray(softwareDetailData?.software_plans) && softwareDetailData?.software_plans.map((plan,idx)=>
                      plan?.plan_type?.plan_type_name==="Yearly" && 
                     ( <div key={idx} class="col-xl-4 col-md-6">
                      <div class="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                        <img
                            src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/software-plan/${plan?.badge_icon}`}
                          
                          class="position-absolute top-0 offer-badge z-2"
                        />

                        <div class="icon-wrapper d-inline-block rounded-circle bg-white">
                          <span class="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                            <img
                              src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/software-plan/${plan?.plan_icon}`}
                              
                            />
                          </span>
                        </div>

                        <h5 class="mt-4 mb-3">{plan?.plan_name}</h5>
                        <p class="mb-4 fm">{plan?.plan_short_description}</p>

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
                            <span>₹ {plan?.plan_price}</span>
                            <span class="ms-2 fs-md fw-normal">{plan?.plan_type?.duration_value} {plan?.plan_type?.duration_type}</span>
                          </h2>
                          <a href="#" class="btn dg-outline-btn rounded-pill">
                            Purchase Now
                          </a>
                        </div>
                      </div>
                    </div>
                    ))
                  }
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
