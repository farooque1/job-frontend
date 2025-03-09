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

const privateAPIClient = create({
  baseURL: settings.API_BASE_URL,
});

privateAPIClient.addAsyncRequestTransform(async (request) => {
  const authToken = await getToken();
  console.log("🚀 ", authToken);
  if (!authToken) {
    console.log("------invalid Access------");
    return;
  }

  request.headers["Authorization"] = "Bearer " + authToken;
  request.headers["Content-Type"] = "application/json";
  return request;
});

// privateAPIClient.addResponseTransform((response) => {
//   if (response.status === 401) {
//     alert("Session is Expired")
//     cookies.remove("auth_token");
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("Roles");
//     localStorage.removeItem("Roles_id");
//     localStorage.removeItem("Name");
//     localStorage.removeItem("Menu");
//     window.location.href = "/login"; // Redirect to login page
//   }
// });

export default privateAPIClient;
