//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../components/container/Container";

export const Sale = () => {
  return (
    <section id="sale">
      <Container>
        <div className="salesContainer">
          <div className="imagegirl"></div>
          <div className="textContainer">
            <div className="title">
              SALE UP
              <br />
              To 50% Off
            </div>
            <div className="text">
              Online shopping<br/>
              free home delivery over $100
            </div>
          </div>
          <div className="imageguy"></div>
        </div>
      </Container>
    </section>
  );
};
