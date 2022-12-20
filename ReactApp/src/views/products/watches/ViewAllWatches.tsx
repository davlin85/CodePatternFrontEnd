//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../../components/container/Container";
import { GetWatches } from "../../../components/watches/GetWatches";

export const ViewAllWatches = () => {
  return (
    <section id="views">
      <Container>
        <div className="viewsContainer">
          <div className="categoriesContainer">{GetWatches()}</div>
        </div>
      </Container>
    </section>
  );
};
