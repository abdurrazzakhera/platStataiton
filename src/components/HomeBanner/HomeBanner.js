import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className='grid grid-cols-5 gap-4 border-2'>
      <div className='col-span-3 mt-5'>
        <h2 className='text-4xl text-sky-600 '>PLAYSTATION 5</h2>
        <h3>PLAY HAS NO LIMITS</h3>
        <p className='text-xl justify-self-center  mx-auto w-9/12 my-3'>
          The PS5 is a genuine leap forward for console gaming, offering
          gorgeous 4K performance, stunningly fast load times and a truly
          game-changing controller that makes playing games more immersive and
          tactile than ever.PlayStation’s brand tagline, "Play Has No Limits,"
          comes to life in an evocative visual metaphor.
        </p>
        <button className='btn-demo '>Live Demo</button>
      </div>
      <div>
        <img
          className='imgSize'
          src='https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1414&q=80'
          alt=''
        />
      </div>
    </div>
  );
};

export default HomeBanner;
