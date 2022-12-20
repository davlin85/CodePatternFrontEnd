//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Kanske även Liskov substitution principle då vissa metoder kan bytas ut.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  JeansFour,
  JeansOne,
  JeansThree,
  JeansTwo,
} from "../../utils/services/ImageLarge";
import { useParams } from "react-router";
import { GetOneJeans } from "../../utils/functions/Jeans";
import { ViewCard } from "../cards/ViewCard";

const star = <FontAwesomeIcon icon={faStar} size="lg" />;
const one = JeansOne;
const two = JeansTwo;
const three = JeansThree;
const four = JeansFour;

export function GetJeans() {
  const { id } = useParams();
  const { jeans } = GetOneJeans(id);

  function displayJeans() {
    return (
      <ViewCard>
        <div className="img">
          {jeans.id === 1 ? one : <></>}
          {jeans.id === 2 ? two : <></>}
          {jeans.id === 3 ? three : <></>}
          {jeans.id === 4 ? four : <></>}
        </div>
        <div className="content">
          <div className="articleNumber">{jeans.articleNumber}</div>
          <div className="brandName">{jeans.brandName}</div>
          <div className="productName">{jeans.productName}</div>
          <div className="shortDescription">{jeans.shortDescription}</div>
          <div className="rating">
            {jeans.rating >= 1 && star}
            {jeans.rating >= 2 && star}
            {jeans.rating >= 3 && star}
            {jeans.rating >= 4 && star}
            {jeans.rating >= 5 && star}
          </div>
          <div className="details">
            <div className="item">
              <div className="one">Closure:</div>
              <div className="two">Pockets:</div>
              <div className="three">Fit:</div>
              <div className="five">Color: </div>
              <div className="six">Size: </div>
              <div className="seven">Quantity: </div>
            </div>
            <div className="context">
              <div className="contextone">{jeans.closure}</div>
              <div className="contexttwo">{jeans.pockets}</div>
              <div className="contextthree">{jeans.fit}</div>
              <div className="contextfive">{jeans.color}</div>
              <div className="contextsix">{jeans.size}</div>
              <div className="contextseven">{jeans.quantity}</div>
            </div>
          </div>

          <div className="price">${jeans.price}.00</div>
        </div>
      </ViewCard>
    );
  }
  return <>{displayJeans()}</>;
}
