//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../components/container/Container";
import { GetWatches } from "../../components/watches/GetWatches";

export const FlashSale02 = () => {
  return (
    <section id="flashSale03">
      <Container>
        <div className="flashSale03Container">
          <div className="productWatches">{GetWatches()}</div>
          <div className="productSale">
            <NavLink to="/categories/watches">
              <div className="title">2 FOR USD $49</div>
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
};
