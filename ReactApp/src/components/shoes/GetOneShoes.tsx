//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Kanske även Liskov substitution principle då vissa metoder kan bytas ut.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  ShoesFour,
  ShoesOne,
  ShoesThree,
  ShoesTwo,
} from "../../utils/services/ImageLarge";
import { useParams } from "react-router";
import { GetOneShoes } from "../../utils/functions/Shoes";
import { ViewCard } from "../cards/ViewCard";

const star = <FontAwesomeIcon icon={faStar} size="lg" />;
const one = ShoesOne;
const two = ShoesTwo;
const three = ShoesThree;
const four = ShoesFour;

export function GetShoes() {
  const { id } = useParams();
  const { shoes } = GetOneShoes(id);

  function displayShoes() {
    return (
      <ViewCard>
        <div className="img">
          {shoes.id === 1 ? one : <></>}
          {shoes.id === 2 ? two : <></>}
          {shoes.id === 3 ? three : <></>}
          {shoes.id === 4 ? four : <></>}
        </div>
        <div className="content">
          <div className="articleNumber">{shoes.articleNumber}</div>
          <div className="brandName">{shoes.brandName}</div>
          <div className="productName">{shoes.productName}</div>
          <div className="shortDescription">{shoes.shortDescription}</div>
          <div className="rating">
            {shoes.rating >= 1 && star}
            {shoes.rating >= 2 && star}
            {shoes.rating >= 3 && star}
            {shoes.rating >= 4 && star}
            {shoes.rating >= 5 && star}
          </div>
          <div className="details">
            <div className="item">
              <div className="one">Lining:</div>
              <div className="two">Insole:</div>
              <div className="three">Sole:</div>
              <div className="four">Closure:</div>
              <div className="five">Color: </div>
              <div className="six">Size: </div>
              <div className="seven">Quantity: </div>
            </div>
            <div className="context">
              <div className="contextone">{shoes.lining}</div>
              <div className="contexttwo">{shoes.insole}</div>
              <div className="contextthree">{shoes.sole}</div>
              <div className="contextfour">{shoes.closure}</div>
              <div className="contextfive">{shoes.color}</div>
              <div className="contextsix">{shoes.size}</div>
              <div className="contextseven">{shoes.quantity}</div>
            </div>
          </div>

          <div className="price">${shoes.price}.00</div>
        </div>
      </ViewCard>
    );
  }
  return <>{displayShoes()}</>;
}
