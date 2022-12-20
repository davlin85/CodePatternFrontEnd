//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../../components/container/Container";
import { GetJacket } from "../../../components/jackets/GetJacket";

export const ViewJackets = () => {
  return (
    <section id="views">
      <Container>
        <div className="viewsContainer">{GetJacket()}</div>
      </Container>
    </section>
  );
};
