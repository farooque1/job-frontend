import { create } from "apisauce";
import Cookies from "universal-cookie";
import settings from "./settings";

const cookies = new Cookies();

const getToken = async () => {
  try {
    return await cookies.get("auth_token");
  } catch (e) {
    console.log("Error getting access token: " + e);
  }
};

const privateAPIClientMultiForm = create({
  baseURL: settings.API_BASE_URL,
});

privateAPIClientMultiForm.addAsyncRequestTransform(async (request) => {
  const authToken = await getToken();
  console.log("🚀 ", authToken);
  if (!authToken) {
    // console.log("------invalid Access------");
    return;
  }
  request.headers["Authorization"] = "Bearer " + authToken;
  request.headers["Content-Type"] = "multipart/form-data";
  // request.headers["Content-Type"] = "application/json";
  // request.headers["Accept"] = "*/*";
  // if not working remove return
  return request;
});

export default privateAPIClientMultiForm;
