import React from "react";
import useReviews from "../../Hooks/useReview";
import Review from "../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h1 className='text-sky-600 text-5xl font-bold text-center my-5'>
        What Our Client Say!!
      </h1>
      <div className='container mx-auto grid grid-cols-3 gap-4'>
        {reviews.map((review) => (
          <Review review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
