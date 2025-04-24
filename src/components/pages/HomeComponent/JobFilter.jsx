import React, { useCallback, useEffect, useState } from "react";
import "./JobFilter.css"; // Custom CSS for styling
import { TOP_LOCATIONS_OPTIONS, TECH_STACK_OPTIONS, REMOTE_JOB_OPTIONS } from "../../../constant/data";
import { APIgetJobLocation } from "../../../auth/comman";

function JobFilter() {
    const [userListData, setUserListData] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

   const getAPILocationFilterHandler = useCallback(async (data) => {
    console.log("data=>",data)
      setShowLoader(true);
      const payload = {
        location:data,
        tech:data
      };
      const resp = await APIgetJobLocation(payload);
      setShowLoader(false);
      if (resp?.ok && resp?.data) {
        setUserListData(resp?.data|| []);
      } else {
        setUserListData([]);
      }
    }, []);
  

  if (showLoader) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {/* Top Job Locations */}
      <h4 className="text-center my-3">📍 Top Job Locations</h4>
      <div className="row">
        {TOP_LOCATIONS_OPTIONS.map(({ id, label, jobCount,key }) => (
          <div key={id} className="col-md-12" onClick={()=>getAPILocationFilterHandler(key)}>
            <div className="card job-card shadow-lg rounded-lg overflow-hidden my-1">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-geo-alt me-2"></i>
                  {label}
                </span>
                <span className="badge bg-primary">{jobCount} Jobs</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <h4 className="text-center my-3">💻 Popular Tech Stacks</h4>
      <div className="row">
        {TECH_STACK_OPTIONS.map(({ id, label, jobCount,key }) => (
          <div key={id} className="col-md-12" onClick={()=>getAPILocationFilterHandler(key)}>
            <div className="card job-card shadow-lg rounded-lg overflow-hidden my-2">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-code-slash me-2"></i>
                  {label}
                </span>
                <span className="badge bg-success">{jobCount} Jobs</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Remote Jobs */}
      <h4 className="text-center my-3">🌍 Remote Job Opportunities</h4>
      <div className="row">
        {REMOTE_JOB_OPTIONS.map(({ id, label, jobCount }) => (
          <div key={id} className="col-md-12">
            <div className="card job-card shadow-lg rounded-lg overflow-hidden my-2">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span>
                  <i className="bi bi-laptop me-2"></i>
                  {label}
                </span>
                <span className="badge bg-warning">{jobCount} Jobs</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobFilter;
