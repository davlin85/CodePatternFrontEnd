//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Kanske även Liskov substitution principle då vissa metoder kan bytas ut.

import React from "react";
import { NavLink } from "react-router-dom";
import { GetAllShoes } from "../../utils/functions/Shoes";
import { Card } from "../cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  ShoesOne,
  ShoesTwo,
  ShoesThree,
  ShoesFour,
} from "../../utils/services/ImagesSmall";

const star = <FontAwesomeIcon icon={faStar} size="xs" />;
const one = ShoesOne;
const two = ShoesTwo;
const three = ShoesThree;
const four = ShoesFour;

export function GetShoes() {
  const { allshoes } = GetAllShoes();

  function displayShoes() {
    return allshoes.map((allshoes: any) => {
      return (
        <NavLink key={allshoes.id} to={`/products/shoes/${allshoes.id}`}>
          <Card>
            {allshoes.id === 1 ? one : <></>}
            {allshoes.id === 2 ? two : <></>}
            {allshoes.id === 3 ? three : <></>}
            {allshoes.id === 4 ? four : <></>}
            <div className="category">{allshoes.categoryName}</div>
            <div className="productName">{allshoes.productName}</div>
            <div className="rating">
              {allshoes.rating >= 1 && star}
              {allshoes.rating >= 2 && star}
              {allshoes.rating >= 3 && star}
              {allshoes.rating >= 4 && star}
              {allshoes.rating >= 5 && star}
            </div>
            <div className="price">${allshoes.price}.00</div>
          </Card>
        </NavLink>
      );
    });
  }
  return <>{displayShoes()}</>;
}
