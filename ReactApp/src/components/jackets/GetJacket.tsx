//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Kanske även Liskov substitution principle då vissa metoder kan bytas ut.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  JacketFour,
  JacketOne,
  JacketThree,
  JacketTwo,
} from "../../utils/services/ImageLarge";
import { useParams } from "react-router";
import { GetOneJacket } from "../../utils/functions/Jackets";
import { ViewCard } from "../cards/ViewCard";

const star = <FontAwesomeIcon icon={faStar} size="lg" />;
const one = JacketOne;
const two = JacketTwo;
const three = JacketThree;
const four = JacketFour;

export function GetJacket() {
  const { id } = useParams();
  const { jacket } = GetOneJacket(id);

  function displayJackets() {
    return (
      <ViewCard>
        <div className="img">
          {jacket.id === 1 ? one : <></>}
          {jacket.id === 2 ? two : <></>}
          {jacket.id === 3 ? three : <></>}
          {jacket.id === 4 ? four : <></>}
        </div>
        <div className="content">
          <div className="articleNumber">{jacket.articleNumber}</div>
          <div className="brandName">{jacket.brandName}</div>
          <div className="productName">{jacket.productName}</div>
          <div className="shortDescription">{jacket.shortDescription}</div>
          <div className="rating">
            {jacket.rating >= 1 && star}
            {jacket.rating >= 2 && star}
            {jacket.rating >= 3 && star}
            {jacket.rating >= 4 && star}
            {jacket.rating >= 5 && star}
          </div>
          <div className="details">
            <div className="item">
              <div className="one">Fit:</div>
              <div className="two">Cut:</div>
              <div className="three">Length:</div>
              <div className="four">Back Width:</div>
              <div className="five">Color: </div>
              <div className="six">Size: </div>
              <div className="seven">Quantity: </div>
            </div>
            <div className="context">
              <div className="contextone">{jacket.fit}</div>
              <div className="contexttwo">{jacket.cut}</div>
              <div className="contextthree">{jacket.length}</div>
              <div className="contextfour">{jacket.backWidth}</div>
              <div className="contextfive">{jacket.color}</div>
              <div className="contextsix">{jacket.size}</div>
              <div className="contextseven">{jacket.quantity}</div>
            </div>
          </div>

          <div className="price">${jacket.price}.00</div>
        </div>
      </ViewCard>
    );
  }
  return <>{displayJackets()}</>;
}
