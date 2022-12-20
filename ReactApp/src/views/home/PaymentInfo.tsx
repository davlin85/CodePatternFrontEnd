//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { Container } from "../../components/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faShield, faTruck } from "@fortawesome/free-solid-svg-icons";

export const PaymentInfo = () => {
  return (
    <section id="paymentInfo">
      <Container>
        <div className="paymentInfoContainer">
          <div className="customerSupport">
            <div className="customerSupportImage">
              <div className="imageContainer">
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </div>
            </div>
            <div className="customerSupportTitle">Customer Support</div>
            <div className="customerSupportText">
              Village did removed enjoyed explain talking.
            </div>
          </div>
          <div className="securedPayment">
            <div className="securedPaymentImage">
              {" "}
              <div className="imageContainer">
                <FontAwesomeIcon icon={faShield} size="lg" />
              </div>
            </div>
            <div className="securedPaymentTitle">Secured Payment</div>
            <div className="securedPaymentText">
              Village did removed enjoyed explain talking.
            </div>
          </div>
          <div className="freeDelivery">
            <div className="freeDeliveryImage">
              {" "}
              <div className="imageContainer">
                <FontAwesomeIcon icon={faTruck} size="lg" />
              </div>
            </div>
            <div className="freeDeliveryTitle">Free Home Delivery</div>
            <div className="freeDeliveryText">
              Village did removed enjoyed explain talking.
            </div>
          </div>
          <div className="reuters">
            <div className="reutersImage">
              {" "}
              <div className="imageContainer">
                <FontAwesomeIcon icon={faTruck} size="lg" />
              </div>
            </div>
            <div className="reutersTitle">30 Day Reuters</div>
            <div className="reutersText">
              Village did removed enjoyed explain talking.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
