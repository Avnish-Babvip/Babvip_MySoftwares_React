import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SoftwarePagination = ({data,software_category,setUrl}) => {
  
  return (
       <section class="feature-promo">
              <div class="container mb-4">
                <div class="row">
                  <div class="col-md-8">
                    <h4>Our Best {software_category?.category_name}</h4>
                    <p>
                      <b>
                        Total Records: {data?.total} Showing {data?.per_page}{" "}
                        records per page
                      </b>
                    </p>
                  </div>
                  <div class="col-md-4 text-end">
                    <button
                      class="btn btn-default px-4 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#filterModal"
                    >
                      <i class="fa fa-filter me-2"></i> Advanced Filter
                    </button>
    
                    <div class="dropdown d-inline-block">
                     
                        <button
                          class="btn btn-default px-4 py-2 dropdown-toggle"
                          type="button"
                          id="sortingDropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa fa-sort me-2"></i> Sort By
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="sortingDropdown">
                          <li>
                            <a class="dropdown-item software_sort" onClick={()=>setUrl( `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION
        }/site/categoryallsoftware/${slug}?sort_by=Newest`)}>
                              Newest
                            </a>
                          </li>
    
                          <li>
                            <a class="dropdown-item software_sort"  onClick={()=>setUrl( `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION
        }/site/categoryallsoftware/${slug}?sort_by=Oldest`)}>
                              Oldest
                            </a>
                          </li>
                        </ul>
                     
                    </div>
                  </div>
                </div>
                <hr />
              </div>
    
              <div class="container">
                {Array.isArray(data?.data) &&
                  data?.data.map((item, idx) => (
                    <div class="row justify-content-center mb-3">
                      <div class="col-md-12">
                        <div class="card flex-row">
                          <Link
                            to={`/software/${item?.software_slug}`}
                            class="position-relative"
                          >
                            <img
                              src={`${
                                import.meta.env.VITE_REACT_APP_IMAGE_PATH
                              }/software-images/${item?.software_image}`}
                              class="card-img-left m-3"
                              alt="Product"
                            />
                            <span class="wishlist-icon">
                              <i class="fa fa-heart"></i>
                            </span>
                          </Link>
    
                          <Link to={`/software/${item?.software_slug}`}>
                            <div class="card-body">
                              <h5 class="card-title">
                                <a>{item?.software_name}</a>
                              </h5>
                              <div class="ratting-wrap">
                                <p class="mb-1">
                                  <b>5/5 Overall Rating</b>
                                </p>
                                <ul class="list-unstyled rating-list list-inline mb-1">
                                  <li class="list-inline-item">
                                    <i class="fas fa-star"></i>
                                  </li>
                                  <li class="list-inline-item">
                                    <i class="fas fa-star"></i>
                                  </li>
                                  <li class="list-inline-item">
                                    <i class="fas fa-star"></i>
                                  </li>
                                  <li class="list-inline-item">
                                    <i class="fas fa-star"></i>
                                  </li>
                                  <li class="list-inline-item">
                                    <i class="fas fa-star"></i>
                                  </li>
                                </ul>
                                <p class="mb-1">
                                  <b>100+ users</b>
                                </p>
                                <p class="text-muted">{item?.short_description}</p>
                              </div>
                            </div>
                          </Link>
    
                          <div class="text-center action-buttons">
                            <p class="card-text fw-bold mb-3">Rs. {item?.price}</p>
    
                            <div class="d-flex justify-content-center align-items-center mt-5">
                              <button class="icon-btn" title="Call"  id="btn-enquiry-1"
                                data-bs-toggle="modal"
                                data-bs-target=".bs-example-modal-xl">
                                <i class="fa fa-phone"></i>
                              </button>
                              <button
                                class="icon-btn free_demo"
                                title="Get a Free Demo"
                                data="1"
                              >
                                <i class="fa fa-handshake"></i>
                              </button>
                              <button
                                type="button"
                                class="btn d-none"
                                id="btn-enquiry-1"
                                data-bs-toggle="modal"
                                data-bs-target=".bs-example-modal-xl"
                              >
                                {" "}
                                Enquery Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
    
                <div class="row">
                  <div class="col-md-12 text-center">
                    <nav aria-label="Page navigation example" class=" ">
                      <ul class="pagination">
                        {Array.isArray(data?.links) && (
                          <li
                            class={`page-item ${
                              !data?.links[0]?.url && "disabled"
                            }`}
                            onClick={() =>
                              data?.links[0]?.url && setUrl(data?.links[0]?.url)
                            }
                          >
                            <span class="page-link">
                              {data?.links[0]?.label?.replace("&laquo;", "")}
                            </span>
                          </li>
                        )}
    
                        {Array.isArray(data?.links) &&
                          data?.links?.slice(1, -1).map((item, idx) => (
                            <li class={`page-item ${item?.active && "active"}`}>
                              <a
                                onClick={() => item?.url && setUrl(item?.url)}
                                class="page-link"
                              >
                                {item?.label}
                              </a>
                            </li>
                          ))}
                        <li
                          class={`page-item ${
                            !data?.links.at(-1)?.url && "disabled"
                          }`}
                          onClick={() =>
                            data?.links[2]?.url && setUrl(data?.links.at(-1)?.url)
                          }
                        >
                          <span class="page-link">
                            {" "}
                            {data?.links.at(-1)?.label?.replace("&raquo;", "")}
                          </span>
                        </li>
                      </ul>
                      <p>Total Records: {data?.total} Showing {data?.per_page}{" "}
                      records per page</p>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default SoftwarePagination