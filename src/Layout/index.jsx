import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/pages/HeaderComponent";
import FooterComponent from "../components/pages/FooterComponent";

const MainLayout = () => {
  return (
    <>
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
    </>
  );
};

export default MainLayout;
