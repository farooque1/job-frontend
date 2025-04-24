import React, { useState } from "react";
import JobListing from "./JobListing";
import JobFilter from "./JobFilter";
import "./style.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleLocationChange = (e) => setLocationFilter(e.target.value);
  const handleJobTypeChange = (e) => setJobTypeFilter(e.target.value);

  return (
    <>
      <div className="container-fluid">
      <div className="filter-container bg-white shadow-sm py-3 px-4">
      <div className="d-flex justify-content-between align-items-center">
          <div className="search-box me-2 ">
            <input
              type="text"
              placeholder="Search jobs"
              value={searchQuery}
              onChange={handleSearchChange}
              className="form-control"
            />
          </div>
          <div className="filter-dropdowns d-flex gap-3">
            <select
              className="form-select"
              value={locationFilter}
              onChange={handleLocationChange}
            >
              <option value="">Filter by Location</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Remote">Remote</option>
              {/* Add more locations here */}
            </select>

            <select
              className="form-select"
              value={jobTypeFilter}
              onChange={handleJobTypeChange}
            >
              <option value="">Filter by Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              {/* Add more job types here */}
            </select>
          </div>
        </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <JobListing
              searchQuery={searchQuery}
              locationFilter={locationFilter}
              jobTypeFilter={jobTypeFilter}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <JobFilter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
