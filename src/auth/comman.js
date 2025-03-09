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

export const APIgetJobList = () => {
  return privateAPIClient.get(APIUrlStrings.jobList);
};

export const APIgetJobDetails = (payload) => {
  return privateAPIClient.get(APIUrlStrings.jobDetails, payload);
};

export const APIUploadLeads = (payload) => {
    return privateAPIClientMultiForm.post(APIUrlStrings.UploadLeads, payload);
  };