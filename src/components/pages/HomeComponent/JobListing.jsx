import React, { useCallback, useEffect, useState } from "react";
import { APIgetJobList } from "../../../auth/comman";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaEye,
  FaBuilding,
} from "react-icons/fa";
import CustomPagination from "../../share/CustomPagination"; // Import Pagination Component
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../../routes/routes";

function JobListing() {
  const [userListData, setUserListData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [perPage, setPerPage] = useState(8); // Jobs per page

  const navigate = useNavigate();
  const getAPIUserListHandler = useCallback(async () => {
    setShowLoader(true);
    const payload = {
      page: currentPage,
      limit: perPage,
    };
    const resp = await APIgetJobList(payload); // Ensure API supports pagination
    setShowLoader(false);
    if (resp?.ok && resp?.data) {
      setUserListData(resp?.data?.jobs || []); // Ensure API returns jobs in a structured format
      setTotalJobs(resp?.data?.totalJobs || 0); // Update total job count from API response
    } else {
      setUserListData([]);
      setTotalJobs(0);
    }
  }, [currentPage, perPage]);

  useEffect(() => {
    getAPIUserListHandler();
  }, [getAPIUserListHandler]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (showLoader) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      {userListData.length === 0 ? (
        <p>No job listings available</p>
      ) : (
        <>
          <div className="row">
            {userListData.map((job) => (
              <div key={job.id} className="col-lg-12 col-md-12 col-sm-12 mb-3">
                <div className="card shadow-lg rounded-lg overflow-hidden">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-12">
                        <h5 className="card-title text-primary font-weight-bold">
                          {job.Title}
                        </h5>
                        <h6 className="card-subtitle mb-1 text-muted">
                          <FaBuilding className="text-success me-2" />
                          {job.Company}
                        </h6>
                        <div className="d-flex align-items-center">
                          <FaMapMarkerAlt className="text-success me-2" />
                          <p className="card-text text-muted">{job.Location}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <FaCalendarAlt className="text-warning me-2" />
                          <p className="card-text text-muted">
                            Posted: {job.Posted} | Date:{" "}
                            {new Date(job.DateTime).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <a
                          href={job.Link}
                          className="btn btn-primary w-100 mt-3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaBriefcase className="me-2" />
                          Apply Job
                        </a>
                        <button
                          className="btn btn-primary w-100 mt-3"
                          onClick={() => {
                            navigate(
                              ROUTES_NAVIGATION.JOB_DETAILS + "?id=" + job?.id
                            );
                          }}
                        >
                          <FaEye className="me-2" />
                          View Job
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Component */}
          <CustomPagination
            pagination={{
              currentPage,
              totalResult: totalJobs,
              perPage,
            }}
            onPeginationHandler={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default JobListing;
