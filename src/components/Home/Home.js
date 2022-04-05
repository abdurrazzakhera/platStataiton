import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../Hooks/useReview";
import HomeBanner from "../HomeBanner/HomeBanner";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div>
        <div className='container mx-auto'>
          <HomeBanner></HomeBanner>
        </div>
      </div>
      <div>
        <h2>Top Review</h2>
        <div className='container mx-auto grid grid-cols-3 gap-4 border-2 p-2'>
          {reviews.slice(0, 3).map((review) => (
            <Review review={review}></Review>
          ))}
        </div>
        <div className='my-5'>
          <Link className='btn-reviews' to='/reviews'>
            See All Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
