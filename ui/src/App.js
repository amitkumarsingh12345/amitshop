import React from "react";
import Topbar from "./pages/Topbar";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Details from "./pages/details/Details";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />

      {/* Back to Top */}
      <a href="#" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}

export default App;
