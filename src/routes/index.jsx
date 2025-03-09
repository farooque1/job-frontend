import React from "react";
import { Route, Routes } from "react-router-dom";
import Loadable from "../components/share/Loadable";
import MainLayout from "../Layout/index";
import ROUTES_NAVIGATION from "./routes";

const JobListing = Loadable(
  React.lazy(() => import("../components/pages/HomeComponent"))
);

const JobsDetails = Loadable(
  React.lazy(() => import("../components/pages/JobDetailComponent"))
);

const RouteComponent = () => {
  // For authentication
  //   const { isAuthenticated, role, role_id } = useAuth();
  //   const [dashboardComponent, setDashboardComponent] = useState(null);
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       navigate(ROUTES_NAVIGATION.LOGIN);
  //     }
  //   }, [isAuthenticated, navigate]);
  //   if (!isAuthenticated) {
  //     return <LoginScreen />;
  //   }

  return (
    <Routes>
      <Route path={ROUTES_NAVIGATION.DASHBOARD} element={<MainLayout />}>
        <Route path={ROUTES_NAVIGATION.Home} index element={<JobListing />} />
        <Route path={ROUTES_NAVIGATION.JOB_DETAILS} element={<JobsDetails />} />
      </Route>
    </Routes>
  );
};

export default RouteComponent;
