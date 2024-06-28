import { Outlet } from "react-router-dom";
import React from "react";
import MainHeader from "../Components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
