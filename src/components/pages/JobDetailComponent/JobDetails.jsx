import React, { useCallback, useEffect, useState } from "react";
import { APIgetJobDetails } from "../../../auth/comman";
import { FaMapMarkerAlt, FaBriefcase, FaBuilding } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";

function JobDetails() {
  const [id] = useSearchParams();
  const JobId = id.get("id");
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchJobDetails = useCallback(async () => {
    setLoading(true);
    const resp = await APIgetJobDetails(JobId);
    setLoading(false);
    if (resp?.ok && resp?.data) {
      setJobDetails(resp.data);
    } else {
      setJobDetails(null);
    }
  }, [JobId]);

  useEffect(() => {
    fetchJobDetails();
  }, [fetchJobDetails]);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!jobDetails) {
    return <div className="text-center mt-5">No job details available.</div>;
  }

  return (
    <div className="container-fluid mt-3">
      <div className="card shadow-lg rounded-lg p-4">
        <div className="card-body">
          {/* Job Title and Company */}
          <h4 className="card-title text-primary fw-bold">
            {jobDetails.Title}
          </h4>
          <div className="d-flex justify-content-between align-items-center">
            {/* Company Name */}
            <h6 className="card-subtitle text-muted d-flex align-items-center">
              <FaBuilding className="text-success me-2" />
              {jobDetails.Company}
            </h6>

            {/* Apply Now Button */}
            <a
              href={jobDetails.Details.ApplyLink}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBriefcase className="me-2" /> Apply Now
            </a>
          </div>

          {/* Job Location (Separate Line) */}
          <p className="text-muted d-flex align-items-center mt-1">
            <FaMapMarkerAlt className="text-danger me-2" />
            {jobDetails.Location}
          </p>

          {/* Job Description */}
          <div className="mt-3">
            <h5 className="text-dark fw-semibold">Job Description</h5>
            <p className="text-secondary">{jobDetails.Details.Description}</p>
          </div>

          {/* Responsibilities */}
          <div className="mt-4">
            <h5 className="text-dark fw-semibold">Responsibilities</h5>
            <ul className="list-group list-group-flush">
              {jobDetails.Details.Responsibilities.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mt-4">
            <h5 className="text-dark fw-semibold">Skills</h5>
            <ul className="list-group list-group-flush">
              {jobDetails.Details.Skills.map((skill, index) => (
                <li key={index} className="list-group-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
