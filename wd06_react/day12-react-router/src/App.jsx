import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/home';
import Contact from './pages/contact';
import DashBoard from './pages/dashboard';
import Header from './components/header';
import Footer from './components/footer';
import Details from './pages/details';
import SubDetails from './components/subDetail';
import ProductDetails from './pages/productDetails';
import KartDetails from './pages/kartDetails';

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      {/* Body */}
      <Routes>
        {/* we have explored diff ways to call functions in jsx here.
         <Home /> this one is standard practice */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={Contact()}></Route>
        <Route path="/DashBoard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/Details" element={<Details />}>
          <Route index element={<SubDetails />}></Route>
          <Route path="Product" element={<ProductDetails />}></Route>
          <Route path="Kart" element={<KartDetails />}></Route>
        </Route>
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
