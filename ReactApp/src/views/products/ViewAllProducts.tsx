//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../components/container/Container";
import { GetWatches } from "../../components/watches/GetWatches";
import { GetShoes } from "../../components/shoes/GetShoes";
import { GetJeans } from "../../components/jeans/GetJeans";
import { GetJackets } from "../../components/jackets/GetJackets";

export const ViewAllProducts = () => {
  return (
    <section id="views">
      <Container>
        <div className="viewsContainer">
          <div className="categoriesContainer">{GetJackets()}</div>
        </div>
        <div className="viewsContainer">
          <div className="categoriesContainer">{GetJeans()}</div>
        </div>
        <div className="viewsContainer">
          <div className="categoriesContainer">{GetShoes()}</div>
        </div>
        <div className="viewsContainer">
          <div className="categoriesContainer">{GetWatches()}</div>
        </div>
      </Container>
    </section>
  );
};
