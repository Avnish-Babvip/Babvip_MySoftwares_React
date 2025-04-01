import { useState } from "react";

const FilterModal = ({ slug, setUrl }) => {
  const [softwareName, setSoftwareName] = useState("");
  const [rating, setRating] = useState("");

  console.log(softwareName)

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission

    const baseUrl = `${import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION}/site/categoryallsoftware/${slug}`;
    
    const url = `${baseUrl}?software_name=${encodeURIComponent(softwareName)}&rating=${encodeURIComponent(rating)}`;
    
    console.log("Updated URL:", url); // Debugging
    setUrl(url);
    // Manually trigger modal close (optional, since data-bs-dismiss is used)
  
  };

  const handleClear = () => {
    setSoftwareName("");
    setRating("");
    const baseUrl = `${import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION}/site/categoryallsoftware/${slug}`;
    console.log("Clearing filters, resetting URL to:", baseUrl);
    setUrl(baseUrl);
  };

  return (
    <div className="modal" id="filterModal">
      <div className="modal-dialog  ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="filterModalLabel">Advanced Filter</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSearch}>
              <div className="mb-3">
                <label htmlFor="software_name" className="form-label">Software Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="software_name"
                  name="software_name"
                  placeholder="Enter Software Name"
                  value={softwareName}
                  onChange={(e) => setSoftwareName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="filterRating" className="form-label">Rating</label>
                <select
                  className="form-select"
                  id="filterRating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Choose Rating</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                </select>
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" onClick={handleClear}>
                  Clear Filter
                </button>
                <button type="submit" data-bs-dismiss="modal" aria-label="Close" className="btn btn-danger">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
