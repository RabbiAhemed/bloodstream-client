import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MenuBar from "../components/MenuBar/MenuBar";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
