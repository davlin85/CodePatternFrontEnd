//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Container } from "../container/Container";

export const Footer = () => {
  return (
    <section id="footer">
        <Container>
      <div className="footerContainer">
        <div className="socialmedia">
          <div className="facebook"><FontAwesomeIcon icon={faFacebookF} size="lg" /></div>
          <div className="instagram"><FontAwesomeIcon icon={faInstagram} size="lg" /></div>
          <div className="twitter"><FontAwesomeIcon icon={faTwitter} size="lg" /></div>
          <div className="google"><FontAwesomeIcon icon={faGoogle} size="lg" /></div>
          <div className="linkedin"><FontAwesomeIcon icon={faLinkedin} size="lg" /></div>
        </div>
        <div className="footerText">© 2022 Fixxo. All Rights Reserved</div>
      </div>
      </Container>
    </section>
  );
};
