import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link className='btn-reviews' to='/reviews'>
        See All Reviews
      </Link>
    </div>
  );
};

export default Home;
