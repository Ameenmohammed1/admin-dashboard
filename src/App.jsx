import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./AdminPages/HomePage";
import ProductPage from "./AdminPages/ProductPage";
import OrderPage from "./AdminPages/OrderPage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/order" element={<OrderPage />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
