//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faShuffle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from "react";

export const ProductLinks = () => {
  return (
    <section id="productLinks">
      <div className="productLinksContainer">
        <div className="search"><FontAwesomeIcon icon={faSearch} size="lg" /></div>
        <div className="random"><FontAwesomeIcon icon={faShuffle} size="lg" /></div>
        <div className="like"><FontAwesomeIcon icon={faHeart} size="lg" /></div>
        <div className="shoppingCart"><FontAwesomeIcon icon={faCartShopping} size="lg" /></div>
      </div>
    </section>
  );
};
