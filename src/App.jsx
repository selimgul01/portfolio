import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import BannerPage from "./pages/BannerPage";
import Aos from "aos";

function App() {

  
  useEffect(() => {
    Aos.init({
      // Opsiyonel: Global ayarlarınızı buraya ekleyebilirsiniz
      // Her bir animasyon için ayrı ayrı belirtmek yerine
      duration: 1000, // Animasyon süresi (ms)
      once: true,    // Animasyonun sadece bir kez çalışmasını sağlar
      mirror: false, // Animasyonun aşağı kaydırırken tekrar etmesini sağlar (yukarı kaydırınca eski haline dönmez)
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/afis" element={<BannerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
