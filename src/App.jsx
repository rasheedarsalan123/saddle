import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div className="w-full flex flex-col min-h-screen ">
        <Header />
        <div className="flex-1 overflow-y-auto">
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
