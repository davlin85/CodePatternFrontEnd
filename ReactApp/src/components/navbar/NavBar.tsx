//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../container/Container";
import { LogoType } from "./LogoType";
import { Menu } from "./Menu";
import { ProductLinks } from "./ProductLinks";

export const NavBar = () => {
  return (
    <section id="navBar">
      <Container>
        <div className="navBarContainer">
          <LogoType />
          <Menu />
          <ProductLinks />
        </div>
      </Container>
    </section>
  );
};
