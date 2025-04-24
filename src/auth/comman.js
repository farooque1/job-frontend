import apiClient from "./client";
import privateAPIClient from "./privateClient";
import { APIUrlStrings } from "./endpoint";
import privateAPIClientMultiForm from "./privateClientMultiForm";
import { create } from "apisauce";
import settings from "./settings";

const GlobalAPI = create({
  baseURL: settings.API_BASE_URL,
});

//login
export const APIAdminLogin = (payload) => {
  return apiClient.post(APIUrlStrings.login, payload);
};

export const APIAdminLogout = (payload, headers) => {
  return privateAPIClient.post(APIUrlStrings.logout, payload, { headers });
};

export const APIgetJobList = (payload) => {
  return privateAPIClient.get(APIUrlStrings.jobList,payload);
};

export const APIgetJobDetails = (id) => {
  return privateAPIClient.post(APIUrlStrings.jobDetails+ "/" + id);
};

export const APIgetJobLocation = (payload) => {
  return privateAPIClient.post(APIUrlStrings.jobLocation,payload);
};

export const APIUploadLeads = (payload) => {
    return privateAPIClientMultiForm.post(APIUrlStrings.UploadLeads, payload);
  };