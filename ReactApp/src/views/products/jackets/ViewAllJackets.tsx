//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../../components/container/Container";
import { GetJackets } from "../../../components/jackets/GetJackets";

export const ViewAllJackets = () => {
  return (
    <section id="views">
      <Container>
        <div className="viewsContainer">
          <div className="categoriesContainer">{GetJackets()}</div>
        </div>
      </Container>
    </section>
  );
};
