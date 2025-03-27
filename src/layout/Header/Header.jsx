import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const { headMenuData } = useSelector((state) => state.headMenu);
  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData
  );

  // Function to close offcanvas menu on link click
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasWithBackdrop");
    if (offcanvasElement) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  };
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDropdown2, setActiveDropdown2] = useState(null);

  // useEffect(() => {
  //   const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  //   dropdowns.forEach((dropdown) => {
  //     dropdown.addEventListener("mouseenter", function () {
  //       let dropdownMenu = this.querySelector(".dropdown-menu");
  //       dropdownMenu.classList.add("show");
  //       dropdownMenu.style.display = "block";
  //     });

  //     dropdown.addEventListener("mouseleave", function () {
  //       let dropdownMenu = this.querySelector(".dropdown-menu");
  //       dropdownMenu.classList.remove("show");
  //       dropdownMenu.style.display = "none";
  //     });
  //   });
  // }, []);

  return (
    // <header class="main-header position-absolute w-100 z-10">
    <header class="main-header  w-100 z-10">
      <nav class="navbar navbar-expand-xl navbar-light sticky-header">
        <div class="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link
            to={"/"}
            class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
          >
            {siteSetting?.setting_data?.site_logo && (
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  siteSetting?.setting_data?.site_logo
                }`}
                alt={siteSetting?.setting_data?.site_logo_alt}
                class="img-fluid"
              />
            )}
          </Link>
          {/* Hamburger */}
          <div
            class="navbar-toggler position-absolute right-0 border-0"
            role="button"
          >
            <i
              class="flaticon-menu"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            ></i>
          </div>
          <div class="clearfix"></div>
          <div class="collapse navbar-collapse justify-content-center">
            <ul class="nav col-12 col-md-auto justify-content-center main-menu">
              {Array.isArray(headMenuData) &&
                headMenuData?.length > 0 &&
                headMenuData?.map((item, idx) =>
                  item?.is_horizontal &&
                  item?.children_recursive?.length > 0 ? (
                    <li
                      key={idx}
                      className="nav-item dropdown"
                      onMouseEnter={() => setActiveDropdown(idx)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        to={
                          item?.menu_slug ||
                          item?.pages?.page_data?.page_slug ||
                          "#"
                        }
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item?.title}
                      </Link>
                      <div
                        className={`dropdown-menu border-0 rounded-custom shadow py-0 homepage-list-wrapper ${
                          activeDropdown === idx ? "show" : ""
                        }`}
                      >
                        <div className="dropdown-grid rounded-custom homepage-dropdown">
                          <div style={{ width: "810px" }}>
                            <div className="row g-0">
                              {item?.children_recursive?.map((item2, idx2) => (
                                <Link
                                  to={
                                    item2?.menu_slug ||
                                    item2?.pages?.page_data?.page_slug ||
                                    "#"
                                  }
                                  key={idx2}
                                  className="col-md-4"
                                  onClick={() => setActiveDropdown(null)} // Close dropdown when clicked
                                >
                                  <div
                                    className="card h-100 border-0 rounded-3 zoom-card"
                                    style={{
                                      width: "270px",
                                      cursor: "pointer",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <div className="card-body">
                                      <div className="mb-3">
                                        <img
                                          src={
                                            item2?.menu_image
                                              ? `${
                                                  import.meta.env
                                                    .VITE_REACT_APP_IMAGE_PATH
                                                }/${item2?.menu_image}`
                                              : `${assetRoute}/placeholder.webp`
                                          }
                                          alt={item2?.title}
                                          width={220}
                                          height={150}
                                          className="rounded-3 zoom-image"
                                        />
                                      </div>
                                      <div>
                                        <h5 className="card-title d-flex fs-6 gap-2">
                                          {item2?.title} <span>›</span>
                                        </h5>
                                        <p className="card-text text-muted small truncate-2 font-weight-semibold text-capitalize">
                                          {item2?.menu_description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : !item?.is_horizontal &&
                    item?.children_recursive?.length > 0 ? (
                    <li
                      key={idx}
                      class="nav-item dropdown"
                      onMouseEnter={() => setActiveDropdown2(idx)}
                      onMouseLeave={() => setActiveDropdown2(null)}
                    >
                      <Link
                        class="nav-link dropdown-toggle  "
                        onClick={() => setActiveDropdown2(null)}
                        to={
                          item?.menu_slug ||
                          item?.pages?.page_data?.page_slug ||
                          "#"
                        }
                        // data-bs-toggle="dropdown"
                      >
                        {item?.title}
                      </Link>
                      <div
                        class={`dropdown-menu border-0 rounded-custom shadow py-0  homepage-list-wrapper ${
                          activeDropdown2 === idx ? "show" : ""
                        }`}
                      >
                        <div class="dropdown-grid rounded-custom  homepage-dropdown">
                          {/* Custom Logo Mega Header Layout  */}
                          <div className="" style={{ width: "900px" }}>
                            <div className="row g-0">
                              {item?.children_recursive?.map((item2, idx2) => (
                                <Link
                                  to={
                                    item2?.menu_slug ||
                                    item2?.pages?.page_data?.page_slug ||
                                    "#"
                                  }
                                  key={idx2}
                                  className="col-md-6 "
                                  onClick={() => setActiveDropdown2(null)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div
                                    className="card h-100 border-0 rounded-4 dropdownCardHover "
                                    style={{ width: "450px" }}
                                  >
                                    <div className="card-body d-flex align-items-center gap-3  ">
                                      {" "}
                                      {/* Reduced padding */}
                                      <div className="">
                                        <img
                                          src={
                                            item2?.menu_image
                                              ? `${
                                                  import.meta.env
                                                    .VITE_REACT_APP_IMAGE_PATH
                                                }/${item2?.menu_image}`
                                              : `${assetRoute}/placeholder.webp`
                                          }
                                          alt="Free tier illustration"
                                          width={70}
                                          height={70}
                                          className="rounded-3"
                                        />
                                      </div>
                                      <div>
                                        <h5
                                          className="card-title d-flex gap-2 fs-6  custom-hover-color"
                                          style={{ color: "#175cff" }}
                                        >
                                          {item2?.title}
                                          <span>›</span>
                                        </h5>
                                        {item2.menu_description && (
                                          <p className="card-text truncate-2 text-muted text-capitalize small font-weight-semibold">
                                            {item2.menu_description}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li key={idx}>
                      <Link
                        to={
                          item?.menu_slug ||
                          item?.pages?.page_data?.page_slug ||
                          "#"
                        }
                        class="nav-link"
                      >
                        {item?.title}
                      </Link>
                    </li>
                  )
                )}

              {/* <li class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
                        <a href="javascript:void(0)" class="btn btn-link p-1 tt-theme-toggle">
                            <div class="tt-theme-light" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Light"><i class="flaticon-sun-1 fs-lg"></i></div>
                            <div class="tt-theme-dark" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Dark"><i class="flaticon-moon-1 fs-lg"></i></div>
                        </a> 
                    </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasWithBackdrop"
      >
        <div class="offcanvas-header d-flex align-items-center mt-4">
          <Link
            to={"/"}
            class="d-flex align-items-center mb-md-0 text-decoration-none"
          >
            {siteSetting?.setting_data?.site_logo && (
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  siteSetting?.setting_data?.site_logo
                }`}
                alt={siteSetting?.setting_data?.site_logo_alt}
                class="img-fluid ps-2"
              />
            )}
          </Link>
          <button
            type="button"
            class="close-btn text-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="flaticon-cancel"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="nav col-12 col-md-auto justify-content-center main-menu">
            {Array.isArray(headMenuData) &&
              headMenuData?.length > 0 &&
              headMenuData?.map((item, idx) =>
                item?.children_recursive?.length > 0 ? (
                  <li key={idx} class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      to={
                        item?.menu_slug ||
                        item?.pages?.page_data?.page_slug ||
                        "#"
                      }
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item?.title}
                    </Link>
                    <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper">
                      <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                        <div class="dropdown-grid-item bg-white radius-left-side">
                          {item?.children_recursive?.map((item2, idx2) => (
                            <Link
                              to={
                                item2?.menu_slug ||
                                item2?.pages?.page_data?.page_slug ||
                                "#"
                              }
                              onClick={closeOffcanvas} // Close offcanvas on click
                              key={idx2}
                              class="dropdown-link"
                            >
                              <img
                                src={
                                  item2?.menu_image
                                    ? `${
                                        import.meta.env
                                          .VITE_REACT_APP_IMAGE_PATH
                                      }/${item2?.menu_image}`
                                    : `${assetRoute}/placeholder.webp`
                                }
                                alt={item2?.title}
                                class="demo-list rounded"
                              />

                              <div class="dropdown-info">
                                <div class="drop-title text-capitalize">
                                  {item2?.title}
                                </div>
                                <p className="text-capitalize truncate-1">
                                  {item2?.menu_description}{" "}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={idx}>
                    <Link
                      to={
                        item?.menu_slug ||
                        item?.pages?.page_data?.page_slug ||
                        "#"
                      }
                      class=" nav-link text-capitalize"
                      onClick={closeOffcanvas} // Close offcanvas on click
                    >
                      {item?.title}
                    </Link>
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
