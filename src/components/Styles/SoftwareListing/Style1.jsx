import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getStyle1SoftwareListing } from "../../../features/actions/category";
import { Link } from "react-router-dom";

const Style1 = ({data:styleData}) => {
  const dispatch = useDispatch();
  const { styleSoftware } = useSelector((action) => action.category);
   useEffect(() => {
     dispatch(getStyle1SoftwareListing());
   }, []);
   
   const [selectedCategory,setSelectedCategory]= useState("All")

   const allData = {
    softwares: Array.isArray(styleSoftware)
      ? styleSoftware.flatMap(item => item.softwares || [])
      : []
  };

   const data = Array.isArray(styleSoftware) && selectedCategory!=="All" ?
   (styleSoftware
     .find((item) => item.category_name === selectedCategory) || styleSoftware[0]) : allData

     


   console.log(allData)

  return (<>
  <style>
    {`
    .nav-link {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
`}
  </style>
  <section class="work-process ptb-120">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
                <div class="section-heading text-center">
                    <h4 class="h5 text-primary">{styleData?.title}</h4>
                    <h2>{styleData?.sub_title}</h2>
                    <p>{styleData?.description}</p>
                </div>
            </div>
        </div>


        <div class="row justify-content-between">
            {/* <!-- Sidebar --> */}
            <div class="col-lg-3 col-md-3 d-md-block d-lg-block">
                <div class="support-article-sidebar sticky-sidebar">
                <div
  className="nav flex-column nav-pills support-article-tab bg-light-subtle rounded-custom p-5 "

  id="v-pills-support"
  role="tablist"
  aria-orientation="vertical"
>
  {/* All Software Button */}
  <button
    className={`nav-link text-center ${selectedCategory === "All" ? "active" : ""}`}
    onClick={() => setSelectedCategory("All")}
  >
    All Available Softwares
  </button>

  {/* Category-wise Buttons */}
  {Array.isArray(styleSoftware) &&
    styleSoftware.map((item, idx) => (
      <button
        key={idx}
        onClick={() => setSelectedCategory(item?.category_name)}
        className={`nav-link text-center ${selectedCategory === item?.category_name ? "active" : ""}`}
        style={{ wordBreak: "break-word", whiteSpace: "normal" }} // Ensures long names wrap
      >
        {item?.category_name}
      </button>
    ))}
</div>

                </div>
            </div>

            {/* <!-- Main Content --> */}
            <div class="col-lg-9 col-md-9">
                <div class="tab-content" id="v-pills-supportContent">
                    <div class="tab-pane fade active show" id="support-tab-1" role="tabpanel">
                        <div class="support-article-wrap">
                            <div class="row software-container">
                                
                                                                                                                                                                                                                                
                            {Array.isArray(data?.softwares) && data?.softwares.length >0  ?
 
 data?.softwares .map((software, idx) => (
  <Link
  to={`/software/${software?.software_slug}`}
  key={idx}
  className="col-lg-4 col-md-6 software-item category-1 d-flex"
>
  <div className="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4 w-100 d-flex flex-column justify-content-between" style={{ minHeight: "100%", height: "100%" }}>
    <div className="position-relative connected-app-content mb-3">
      <div className="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
        <img
          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/software-images/${software.software_image}`}
          width="100"
          className="img-fluid"
          alt="Software Logo"
        />
      </div>
      <h5 className="mt-3 text-truncate" title={software.software_name}>
        {software.software_name}
      </h5>
      <p
        className="mb-0 text-muted text-truncate-3"
        title={software.short_description}
      >
        {software.short_description}{" "}
      </p>
        <span className="text-primary">Read More</span>
    </div>
    <span className="badge position-absolute integration-badge bg-success-soft px-3 py-2 text-success">
      {data?.category_name}
    </span>
  </div>
</Link>

    ))
    :
    <div className="col-lg-12 col-md-12 pt-40 no-software-message">
    <h3 className="text-left text-muted">No software available...</h3>
  </div>
}
                            

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      

    </div>
    </section>
  </>)
};

export default Style1;
