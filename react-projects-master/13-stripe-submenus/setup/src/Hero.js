import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Infrastructure de paiement pour le commerce en ligne</h1>
          <p>
            Des millions d'entreprises de toutes tailles, des start-up aux
            grandes entreprises, utilisent le logiciel et les API de Stripe pour
            accepter des paiements, effectuer des virements et gérer leurs
            activités en ligne.
            <button className="btn">Démarrer maintenant</button>
          </p>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
