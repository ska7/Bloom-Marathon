import React, { useEffect, useState } from "react";
import {
  fifthQuestion,
  firstQuestion,
  fourthQuestion,
  secondQuestion,
  thirdQuestion,
} from "./questions";
import { Link } from "react-router-dom";

export default function Test() {
  const questions = [
    firstQuestion,
    secondQuestion,
    thirdQuestion,
    fifthQuestion,
    fourthQuestion,
  ];

  const [nextQuestion, setNextQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const result = () => {
    if (answers.includes("no")) {
      return "Этот курс именно для тебя и он поможет тебе решить эти проблемы.";
    } else {
      return "Ты молодец! Я уверена, на курсе ты сможешь подчерпнуть для себя много нового :)";
    }
  };

  const handleYesClick = () => {
    if (nextQuestion < 4) {
      setNextQuestion((prevNumber) => {
        return prevNumber + 1;
      });
      answers.push("yes");
      console.log(answers);
    } else {
      setShowResult(true);
    }
  };

  const handleNoClick = () => {
    if (nextQuestion < 4) {
      setNextQuestion((prevNumber) => {
        return prevNumber + 1;
      });
      answers.push("no");
      console.log(answers);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="test-section">
      <div className="test-card">
        {showResult ? (
          <React.Fragment>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              {result()}
            </h1>
            <Link to="/">
              <button className="after-test-button">Хочу на марафон!</button>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1 className="test-question">{questions[nextQuestion]}</h1>
            <div className="test-buttons">
              <button onClick={handleYesClick} className="test-yes-button">
                Да
              </button>
              <button onClick={handleNoClick} className="test-no-button">
                Нет
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
