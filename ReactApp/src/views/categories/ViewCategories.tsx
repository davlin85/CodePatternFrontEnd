//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "../../components/cards/Card";
import { Container } from "../../components/container/Container";
import {
  JacketOne,
  JeansTwo,
  ShoesThree,
  WatchFour,
} from "../../utils/services/ImagesSmall";

const one = JacketOne;
const two = JeansTwo;
const three = ShoesThree;
const four = WatchFour;

export const ViewCategories = () => {
  return (
    <section id="views">
      <Container>
        <div className="viewsContainer">
          <div className="categoriesContainer">
            <NavLink to="/categories/jackets/">
              <Card>
                {one}
                <div className="category">Jackets</div>
              </Card>
            </NavLink>
            <NavLink to="/categories/jeans/">
              <Card>
                {two}
                <div className="category">Jeans</div>
              </Card>
            </NavLink>
            <NavLink to="/categories/shoes/">
              <Card>
                {three}
                <div className="category">Shoes</div>
              </Card>
            </NavLink>
            <NavLink to="/categories/watches/">
              <Card>
                {four}
                <div className="category">Watches</div>
              </Card>
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
};
