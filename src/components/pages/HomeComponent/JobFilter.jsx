import React, { useCallback, useEffect, useState } from "react";
import { APIgetJobList } from "../../../auth/comman";
import './JobFilter.css'; // Custom CSS for styling (see below)

function JobFilter() {
  const [userListData, setUserListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  // List of available locations to filter by
  const locations = [...new Set(userListData.map((job) => job.Location))];

  const getAPIUserListHandler = useCallback(async () => {
    setShowLoader(true);
    const resp = await APIgetJobList();
    setShowLoader(false);
    if (resp?.ok && resp?.data) {
      setUserListData(resp?.data || []);
      setFilteredData(resp?.data || []); // Set initial filtered data to the entire list
    } else {
      setUserListData([]);
      setFilteredData([]);
    }
  }, []);

  useEffect(() => {
    getAPIUserListHandler();
  }, [getAPIUserListHandler]);

  // Handle location selection
  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);

    if (location === "") {
      setFilteredData(userListData); // If no location is selected, show all jobs
    } else {
      const filtered = userListData.filter((job) => job.Location === location);
      setFilteredData(filtered);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <h3>Filter Jobs</h3>
      <div className="filter-container">
        <select
          className="form-select custom-select"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">All Locations</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Display job listings */}
      {filteredData.length === 0 ? (
        <p className="text-center">No job listings available</p>
      ) : (
        <div className="row">
          {filteredData.map((job) => (
            <div key={job.id} className="col-md-12">
              <div className="card job-card my-3">
                <div className="card-body">
                  <h5 className="card-title">{job.Title}</h5>
                  <p className="card-text">
                    <i className="bi bi-geo-alt"></i> Location: {job.Location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobFilter;
