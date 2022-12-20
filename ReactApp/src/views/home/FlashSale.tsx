//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../components/container/Container";
import { GetShoes } from "../../components/shoes/GetShoes";

export const FlashSale = () => {
  return (
    <section id="flashSale02">
      <Container>
        <div className="flashSale02Container">
          <div className="productSale">
            <NavLink to ="/categories/shoes">
            <div className="title">
              2 FOR USD $29
            </div>
            </NavLink>
          </div>
          <div className="productShoes">{GetShoes()}</div>
        </div>
      </Container>
    </section>
  );
};
