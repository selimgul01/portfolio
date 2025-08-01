import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="bg-[url('/1.png')] w-full h-screen bg-no-repeat bg-center bg-cover ">
      <Navbar  />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
