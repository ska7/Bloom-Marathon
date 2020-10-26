import React from "react";
import ReviewCard from "./ReviewCard";
import firstReview from "../img/Reviews/firstReview.jpg";
import secondReview from "../img/Reviews/secondReview.jpg";
import thirdReview from "../img/Reviews/thirdReview.jpg";
import fourthReview from "../img/Reviews/fourthReview.jpg";
import fifthReview from "../img/Reviews/FifthReview.jpg";

export default function Reviews() {
  const reviews = [
    firstReview,
    secondReview,
    thirdReview,
    fourthReview,
    fifthReview,
  ];
  return (
    <div id="reviews" className="reviews-section">
      <div className="header">
        <h1>Отзывы</h1>
      </div>
      <div className="reviews-list">
        <ReviewCard reviews={reviews} />
      </div>
    </div>
  );
}
