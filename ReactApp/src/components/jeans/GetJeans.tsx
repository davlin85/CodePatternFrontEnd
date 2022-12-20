//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Kanske även Liskov substitution principle då vissa metoder kan bytas ut.

import React from "react";
import { NavLink } from "react-router-dom";
import { GetAllJeans } from "../../utils/functions/Jeans";
import { Card } from "../cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  JeansFour,
  JeansOne,
  JeansThree,
  JeansTwo,
} from "../../utils/services/ImagesSmall";

const star = <FontAwesomeIcon icon={faStar} size="xs" />;
const one = JeansOne;
const two = JeansTwo;
const three = JeansThree;
const four = JeansFour;

export function GetJeans() {
  const { alljeans } = GetAllJeans();

  function displayJeans() {
    return alljeans.map((alljeans: any) => {
      return (
        <NavLink key={alljeans.id} to={`/products/jeans/${alljeans.id}`}>
          <Card>
            {alljeans.id === 1 ? one : <></>}
            {alljeans.id === 2 ? two : <></>}
            {alljeans.id === 3 ? three : <></>}
            {alljeans.id === 4 ? four : <></>}
            <div className="category">{alljeans.categoryName}</div>
            <div className="productName">{alljeans.productName}</div>
            <div className="rating">
              {alljeans.rating >= 1 && star}
              {alljeans.rating >= 2 && star}
              {alljeans.rating >= 3 && star}
              {alljeans.rating >= 4 && star}
              {alljeans.rating >= 5 && star}
            </div>
            <div className="price">${alljeans.price}.00</div>
          </Card>
        </NavLink>
      );
    });
  }
  return <>{displayJeans()}</>;
};
