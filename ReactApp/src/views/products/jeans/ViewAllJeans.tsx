//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../../components/container/Container";
import { GetJeans } from "../../../components/jeans/GetJeans";

export const ViewAllJeans = () => {
  return (
    <section id="views">
      <Container>
        <div className="viewsContainer">
          <div className="categoriesContainer">{GetJeans()}</div>
        </div>
      </Container>
    </section>
  );
};
