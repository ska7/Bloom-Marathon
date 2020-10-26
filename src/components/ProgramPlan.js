import React from "react";
import GoToPricing from "./GoToPricing";

export default function ProgramPlan() {
  return (
    <div className="program-plan-section">
      <div className="header">
        <h1>Программа Марафона</h1>
      </div>
      <div id="program" className="lessons-list">
        <h2>Урок 1</h2>
        <span className="lesson">
          <b> • Самооценка и самоценность</b>
        </span>
        <h2>Урок 2</h2>
        <span className="lesson">
          <b> • Все про комплексы и как от них избавиться</b>
        </span>
        <h2>Урок 3</h2>
        <span className="lesson">
          <b> • Энергия жизни, состояние ресурса</b>
        </span>
        <h2>Урок 4</h2>
        <span className="lesson">
          <b>
            {" "}
            • Мнение близких, мнение общества, критика - как отвечать на подколы
            и шутки
          </b>
        </span>
        <h2>Урок 5</h2>
        <span className="lesson">
          <b>
            {" "}
            • Уверенность в себе и вера в себя; Принятие своего тела: лишний
            вес, растяжки, целлюлит
          </b>
        </span>
        <h2>Урок 5</h2>
        <span className="lesson">
          <b> • Все про комплексы и как от них избавиться</b>
        </span>
        <h2>Урок 7</h2>
        <span className="lesson">
          <b> • Энергия жизни, состояние ресурса</b>
        </span>
        <h2>Урок 8</h2>
        <span className="lesson">
          <b>
            {" "}
            • Мнение близких, мнение общества, критика - как отвечать на подколы
            и шутки
          </b>
        </span>
      </div>
    </div>
  );
}
