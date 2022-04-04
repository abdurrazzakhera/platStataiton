import React from "react";

const Review = ({ review }) => {
  return (
    <div className='bg-red-200 rounded-lg p-2'>
      <h3 className='text-xl'>{review.name}</h3>
    </div>
  );
};

export default Review;
