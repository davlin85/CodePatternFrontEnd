//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Kanske även Liskov substitution principle då vissa metoder kan bytas ut.

import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "../cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  JacketFour,
  JacketOne,
  JacketThree,
  JacketTwo,
} from "../../utils/services/ImagesSmall";
import { GetAllJackets } from "../../utils/functions/Jackets";

const star = <FontAwesomeIcon icon={faStar} size="xs" />;
const one = JacketOne;
const two = JacketTwo;
const three = JacketThree;
const four = JacketFour;

export function GetJackets() {
  const { alljackets } = GetAllJackets();

  function displayJackets() {
    return alljackets.map((alljackets: any) => {
      return (
        <NavLink key={alljackets.id} to={`/products/jackets/${alljackets.id}`}>
          <Card>
            {alljackets.id === 1 ? one : <></>}
            {alljackets.id === 2 ? two : <></>}
            {alljackets.id === 3 ? three : <></>}
            {alljackets.id === 4 ? four : <></>}
            <div className="category">{alljackets.categoryName}</div>
            <div className="productName">{alljackets.productName}</div>
            <div className="rating">
              {alljackets.rating >= 1 && star}
              {alljackets.rating >= 2 && star}
              {alljackets.rating >= 3 && star}
              {alljackets.rating >= 4 && star}
              {alljackets.rating >= 5 && star}
            </div>
            <div className="price">${alljackets.price}.00</div>
          </Card>
        </NavLink>
      );
    });
  }
  return <>{displayJackets()}</>;
}
