import React from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
