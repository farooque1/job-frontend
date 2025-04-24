import React from "react";
import JobDetails from "./JobDetails";
import JobFilter from "../HomeComponent/JobFilter";

function JobDetail() {
  return (
    <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-12">
       <JobDetails /> 
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
      <JobFilter />
    </div>
    </div>
  );
}

export default JobDetail;
