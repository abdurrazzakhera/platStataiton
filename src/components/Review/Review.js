import React from "react";

const Review = ({ review }) => {
  const { name, comment, rating } = review;
  return (
    <div className='border border-gray-500 rounded-lg p-2'>
      <h3 className='text-xl'>Name:{name}</h3>
      <p>{comment}</p>
      <p>
        Ratting :<small> {rating} of 4</small>
      </p>
    </div>
  );
};

export default Review;
