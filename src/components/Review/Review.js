import React from "react";

const Review = ({ review }) => {
  const { name, comment, rating } = review;
  return (
    <div className='border border-gray-200 rounded-lg p-2 relative'>
      <h3 className='text-xl font-medium'>Name : {name}</h3>
      <p className='text-justify pb-10'>{comment}</p>
      <p className='text-sky-600 absolute bottom-2 left-2'>
        Ratting :{rating} of 5
      </p>
    </div>
  );
};

export default Review;
