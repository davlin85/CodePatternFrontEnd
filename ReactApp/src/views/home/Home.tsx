//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { FeaturedProducts } from "./FeaturedProducts";
import { FlashSale } from "./FlashSale";
import { FlashSale02 } from "./FlashSale02";
import { PaymentInfo } from "./PaymentInfo";
import { Sale } from "./Sale";

export const Home = () => {
  return (
    <section id="home">
      <div className="homeContainer">
        <Sale />
        <FeaturedProducts />
        <FlashSale />
        <FlashSale02 />
        <PaymentInfo />
      </div>
    </section>
  );
};
