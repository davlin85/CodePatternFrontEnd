//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Brukar även ha fler routers som man skickas till beroende på om man tex har en verifierad token.

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import "../assets/css/Style.css";
import { Home } from "../views/home/Home";
import { Footer } from "../components/footer/Footer";
import { ViewJackets } from "../views/products/jackets/ViewJackets";
import { ViewJeans } from "../views/products/jeans/ViewJeans";
import { ViewShoes } from "../views/products/shoes/ViewShoes";
import { ViewWatches } from "../views/products/watches/ViewWatches";
import { ViewAllJackets } from "../views/products/jackets/ViewAllJackets";
import { ViewAllJeans } from "../views/products/jeans/ViewAllJeans";
import { ViewAllShoes } from "../views/products/shoes/ViewAllShoes";
import { ViewAllWatches } from "../views/products/watches/ViewAllWatches";
import { ViewAllProducts } from "../views/products/ViewAllProducts";
import { ViewCategories } from "../views/categories/ViewCategories";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<ViewCategories />} />
        <Route path="/categories/jackets/" element={<ViewAllJackets />} />
        <Route path="/categories/jeans/" element={<ViewAllJeans />} />
        <Route path="/categories/shoes/" element={<ViewAllShoes />} />
        <Route path="/categories/watches/" element={<ViewAllWatches />} />
        <Route path="/products/" element={<ViewAllProducts />} />
        <Route path="/products/jackets/:id" element={<ViewJackets />} />
        <Route path="/products/jeans/:id" element={<ViewJeans />} />
        <Route path="/products/shoes/:id" element={<ViewShoes />} />
        <Route path="/products/watches/:id" element={<ViewWatches />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
