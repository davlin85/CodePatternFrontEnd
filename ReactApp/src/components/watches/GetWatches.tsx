//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Kanske även Liskov substitution principle då vissa metoder kan bytas ut.

import React from "react";
import { NavLink } from "react-router-dom";
import { GetAllWatches } from "../../utils/functions/Watches";
import { Card } from "../cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  WatchOne,
  WatchTwo,
  WatchThree,
  WatchFour,
} from "../../utils/services/ImagesSmall";

const star = <FontAwesomeIcon icon={faStar} size="xs" />;
const one = WatchOne;
const two = WatchTwo;
const three = WatchThree;
const four = WatchFour;

export function GetWatches() {
  const { allwatches } = GetAllWatches();

  function displayWatches() {
    return allwatches.map((allwatches: any) => {
      return (
        <NavLink key={allwatches.id} to={`/products/watches/${allwatches.id}`}>
          <Card>
            {allwatches.id === 1 ? one : <></>}
            {allwatches.id === 2 ? two : <></>}
            {allwatches.id === 3 ? three : <></>}
            {allwatches.id === 4 ? four : <></>}
            <div className="category">{allwatches.categoryName}</div>
            <div className="productName">{allwatches.productName}</div>
            <div className="rating">
              {allwatches.rating >= 1 && star}
              {allwatches.rating >= 2 && star}
              {allwatches.rating >= 3 && star}
              {allwatches.rating >= 4 && star}
              {allwatches.rating >= 5 && star}
            </div>
            <div className="price">${allwatches.price}.00</div>
          </Card>
        </NavLink>
      );
    });
  }
  return <>{displayWatches()}</>;
};
