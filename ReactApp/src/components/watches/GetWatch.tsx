//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.
//Kanske även Liskov substitution principle då vissa metoder kan bytas ut.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  WatchFour,
  WatchOne,
  WatchThree,
  WatchTwo,
} from "../../utils/services/ImageLarge";
import { useParams } from "react-router";
import { GetOneWatch } from "../../utils/functions/Watches";
import { ViewCard } from "../cards/ViewCard";

const star = <FontAwesomeIcon icon={faStar} size="lg" />;
const one = WatchOne;
const two = WatchTwo;
const three = WatchThree;
const four = WatchFour;

export function GetWatch() {
  const { id } = useParams();
  const { watch } = GetOneWatch(id);

  function displayWatch() {
    return (
      <ViewCard>
        <div className="img">
          {watch.id === 1 ? one : <></>}
          {watch.id === 2 ? two : <></>}
          {watch.id === 3 ? three : <></>}
          {watch.id === 4 ? four : <></>}
        </div>
        <div className="content">
          <div className="articleNumber">{watch.articleNumber}</div>
          <div className="brandName">{watch.brandName}</div>
          <div className="productName">{watch.productName}</div>
          <div className="shortDescription">{watch.shortDescription}</div>
          <div className="rating">
            {watch.rating >= 1 && star}
            {watch.rating >= 2 && star}
            {watch.rating >= 3 && star}
            {watch.rating >= 4 && star}
            {watch.rating >= 5 && star}
          </div>
          <div className="details">
            <div className="item">
              <div className="one">Waterproof:</div>
              <div className="two">Display:</div>
              <div className="three">Clockwork:</div>
              <div className="five">Closure: </div>
              <div className="seven">Color: </div>
              <div className="six">Size: </div>
              <div className="seven">Quantity: </div>
            </div>
            <div className="context">
              <div className="contextone">{watch.waterproof}</div>
              <div className="contexttwo">{watch.display}</div>
              <div className="contextthree">{watch.clockWork}</div>
              <div className="contextfive">{watch.closure}</div>
              <div className="contextfive">{watch.color}</div>
              <div className="contextsix">{watch.size}</div>
              <div className="contextseven">{watch.quantity}</div>
            </div>
          </div>

          <div className="price">${watch.price}.00</div>
        </div>
      </ViewCard>
    );
  }
  return <>{displayWatch()}</>;
}
