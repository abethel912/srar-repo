import React from "react";
import './Rating.css'
import Card from "./Card";
import starImg from '../media/icon-star.svg'
import { useState } from "react";

const Rating = ({ rating, setRating, setShowThankYouPage }) => {
  const [activeRatings, setActiveRatings] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  })
  const handleSubmit = () => {
    if (!rating) return;
    setShowThankYouPage(true);
  }
  return (
    <Card>
      <div className="star-img-container">
        <img src={starImg} alt="" />
      </div>
      <p className="text">How would you rate this restaurant?</p>
      <div className="rating">
        <div
          className={
            activeRatings.oneStar
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: true,
              twoStar: false,
              threeStar: false,
              fourStar: false,
              fiveStar: false
            });
            setRating(1)
          }}
        >
          1
        </div>
        <div
          className={
            activeRatings.twoStar
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStar: true,
              threeStar: false,
              fourStar: false,
              fiveStar: false
            })
            setRating(2)
          }}
        >
          2
        </div>
        <div
          className={
            activeRatings.threeStar
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStar: false,
              threeStar: true,
              fourStar: false,
              fiveStar: false
            })
            setRating(3)
          }}
        >
          3
        </div>
        <div
          className={
            activeRatings.fourStar
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStar: false,
              threeStar: false,
              fourStar: true,
              fiveStar: false
            })
            setRating(4)
          }}
        >
          4
        </div>
        <div
          className={
            activeRatings.fiveStar
              ? 'rating-container active'
              : 'rating-container'
          }
          onClick={() => {
            setActiveRatings({
              oneStar: false,
              twoStar: false,
              threeStar: false,
              fourStar: false,
              fiveStar: true,
            })
            setRating(5)
          }}
        >
          5
        </div>
      </div>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </Card>
  )
}
 
export default Rating;