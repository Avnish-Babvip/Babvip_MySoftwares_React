import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateModal = ({ show, handleClose, startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="bg-white rounded-4 p-4">
        <h6 className="fw-bold mb-3">By Date</h6>

        <div className="d-flex flex-wrap gap-3 mb-3">
          {["This Week", "Last Week", "This Month", "Last Month", "This Year", "Last Year"].map((label, i) => (
            <div className="form-check form-check-inline" key={i}>
              <input className="form-check-input" type="checkbox" id={`check-${i}`} />
              <label className="form-check-label small text-muted" htmlFor={`check-${i}`}>{label}</label>
            </div>
          ))}
        </div>

        <div className="mb-2 fw-semibold small">Date Range</div>

        <div className="d-flex gap-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="From"
            className="form-control"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="To"
            className="form-control"
          />
        </div>

        <div className="text-end mt-4">
          <Button className="w-100 rounded-3 fw-semibold" style={{ backgroundColor: "#4266FF", border: "none" }} onClick={handleClose}>
            Filter
          </Button>
        </div>
      </div>
    </Modal>
  );
};
