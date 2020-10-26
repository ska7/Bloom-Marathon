import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import icon from "../img/instagram-icon.png";
import { Link } from "react-router-dom";

export default function CreditInfo() {
  const [card, setCard] = useState("5168755531719785");
  const [blink, setBlink] = useState(false);
  const handleClick = () => {
    setBlink(true);
    setTimeout(() => {
      setBlink(false);
    }, 500);
  };
  const linkStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="credit-info-section">
      <Link style={linkStyle} to="/">
        <button className="return-button">Назад</button>
      </Link>
      <h2>
        Ты сделала правильный выбор, малышка! Скопируй номер карты и оплати
        любым удобным для тебя способом. Для Сбербанка выбери "Перевод за
        рубеж". После оплаты, скинь мне скриншот в личные сообщения @dia.bloom
      </h2>
      <div className="credit-card">
        <div className={blink && "blink"}></div>
        <p>
          5168&nbsp;&nbsp;&nbsp;7555&nbsp;&nbsp;&nbsp;3171&nbsp;&nbsp;&nbsp;9785
        </p>
        <p>Diana Chornobryvets</p>
        <CopyToClipboard text={card}>
          <button onClick={handleClick}>Копировать</button>
        </CopyToClipboard>
      </div>
      <div className="ig-page-link">
        <h2>
          <a
            style={{ color: "black" }}
            href="https://www.instagram.com/dia.bloom/"
          >
            <img src={icon}></img>dia.bloom
          </a>
        </h2>
      </div>
    </div>
  );
}
