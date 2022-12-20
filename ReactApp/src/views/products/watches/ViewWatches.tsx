//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../../components/container/Container";
import { GetWatch } from "../../../components/watches/GetWatch";

export const ViewWatches = () => {
  return (
    <section id="views">
      <Container>
        <div className="viewContainer">{GetWatch()}</div>
      </Container>
    </section>
  );
};
