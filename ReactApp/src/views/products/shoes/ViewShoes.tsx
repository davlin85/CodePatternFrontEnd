//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../../components/container/Container";
import { GetShoes } from "../../../components/shoes/GetOneShoes";

export const ViewShoes = () => {
  return (
    <section id="views">
      <Container>
        <div className="viewContainer">{GetShoes()}</div>
      </Container>
    </section>
  );
};
