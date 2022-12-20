//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../components/container/Container";
import { GetJackets } from "../../components/jackets/GetJackets";
import { GetJeans } from "../../components/jeans/GetJeans";

export const FeaturedProducts = () => {
  return (
    <section id="featuredProducts">
      <Container>
        <div className="featuredProductsContainer">
          <div className="title">Featured Products</div>
          <div className="products">{GetJackets()}</div>
          <div className="products">{GetJeans()}</div>
        </div>
      </Container>
    </section>
  );
};
