import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryDataBySlug, getStyle1SoftwareListing } from "../../../features/actions/category";
import { Link } from "react-router-dom";

const Style1 = () => {
  const dispatch = useDispatch();
  const { styleSoftware } = useSelector((action) => action.category);
   useEffect(() => {
     dispatch(getStyle1SoftwareListing());
   }, []);
   
   const [selectedCategory,setSelectedCategory]= useState(Array.isArray(styleSoftware) &&
   styleSoftware[0]?.category_name)

   let data = (Array.isArray(styleSoftware) &&
   styleSoftware
     .find((item) => item.category_name === selectedCategory)) || styleSoftware[0]

     console.log(selectedCategory)
     


   console.log(styleSoftware)

  return (<>
  <section class="work-process ptb-120">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
                <div class="section-heading text-center">
                    <h4 class="h5 text-primary">Our Software's</h4>
                    <h2>We Are Provide Best Software's In India</h2>
                    <p>This is Test Description This is Test Description This is Test Description This is Test Description</p>
                </div>
            </div>
        </div>


        <div class="row justify-content-between">
            {/* <!-- Sidebar --> */}
            <div class="col-lg-3 col-md-3 d-md-block d-lg-block">
                <div class="support-article-sidebar sticky-sidebar">
                    <div class="nav flex-column nav-pills support-article-tab bg-light-subtle rounded-custom p-5" id="v-pills-support" role="tablist" aria-orientation="vertical">
                        {/* <!-- All Software Button --> */}
                        {/* <button class="nav-link active " ">All Available Softwares</button> */}

                        {/* <!-- Category-wise Buttons --> */}
                                             { Array.isArray(styleSoftware) && styleSoftware.map((item,idx)=>
                                              <button key={idx} onClick={()=>setSelectedCategory(item?.category_name)} class={`nav-link ${selectedCategory === item?.category_name && "active"} `} >
                                              {item?.category_name}
                                          </button>)}
                                          
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
      <Link to={`/software/${software?.software_slug}`} key={idx} className="col-lg-3 col-md-3 software-item category-1">
        <div className="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-5">
          <div className="position-relative connected-app-content">
            <div className="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/software-images/${software.software_image}`}
                width="100"
                className="img-fluid"
                alt="Software Logo"
              />
            </div>
            <h5>{software.software_name}</h5>
            <p className="mb-0 text-muted">
            {software.short_description}
              <a href="" className="text-primary">Read More</a>
            </p>
          </div>
          <span className="badge position-absolute integration-badge bg-success-soft px-3 py-2 text-success">
            {data?.category_name
            }
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
