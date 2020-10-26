import React from "react";
import firstPlan from "../img/888plan.png";
import secondPlan from "../img/1490plan.png";
import thirdPlan from "../img/3990plan.png";
import fourthPlan from "../img/10000plan.png";
import { Link } from "react-router-dom";

export default function Prices() {
  return (
    <div className="prices-section">
      <div className="header">
        <h1>Тарифы</h1>
      </div>
      <div id="prices" className="prices-wrapper">
        <div className="price-card cardone">
          <img src={firstPlan}></img>
          <Link to="/pay">
            <button>Хочу!</button>
          </Link>
        </div>
        <div className="price-card cardtwo">
          <img src={secondPlan}></img>
          <Link to="/pay">
            <button className="cardtwo-button">Хочу!</button>
          </Link>
        </div>
        <div className="price-card cardthree">
          <img src={thirdPlan}></img>
          <Link to="/pay">
            <button className="cardthree-button">Хочу!</button>
          </Link>
        </div>
        <div className="price-card cardfour">
          <img src={fourthPlan}></img>
          <Link to="/pay">
            <button className="cardfour-button">Хочу!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
