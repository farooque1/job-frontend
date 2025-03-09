import React, { useCallback, useEffect, useState } from "react";
import { APIgetJobList } from "../../../auth/comman";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa"; // Importing icons

function JobListing() {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [userListData, setUserListData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const getAPIUserListHandler = useCallback(async () => {
    setShowLoader(true);
    const resp = await APIgetJobList();
    setShowLoader(false);
    if (resp?.ok && resp?.data) {
      setUserListData(resp?.data || []);
    } else {
      setUserListData([]);
    }
  }, []);

  useEffect(() => {
    getAPIUserListHandler();
  }, [getAPIUserListHandler]);

  if (showLoader) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      {userListData.length === 0 ? (
        <p>No job listings available</p>
      ) : (
        <div className="row">
          {userListData.map((job) => (
            <div key={job.id} className="col-md-12 mb-4">
              <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
                <div className="card-body p-4">
                  <h5 className="card-title text-primary font-weight-bold">{job.Title}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">{job.Company}</h6>
                  
                  <div className="d-flex align-items-center mb-3">
                    <FaMapMarkerAlt className="text-success mr-2" />
                    <p className="card-text text-muted">{job.Location}</p>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <FaCalendarAlt className="text-warning mr-2" />
                    <p className="card-text text-muted">
                      Posted: {job.Posted} | Date: {new Date(job.DateTime).toLocaleDateString()}
                    </p>
                  </div>

                  <a
                    href={job.Link}
                    className="btn btn-primary w-100 mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaBriefcase className="mr-2" />
                    View Job
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobListing;
