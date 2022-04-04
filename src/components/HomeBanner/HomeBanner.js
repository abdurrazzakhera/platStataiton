import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className='grid grid-cols-5 gap-4 border-2'>
      <div className='col-span-3 mt-5'>
        <h2 className='text-4xl text-sky-600 '>Lorem ipsum dolor sit amet.</h2>
        <p className='text-xl justify-self-center  mx-auto w-9/12 my-3'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          labore, velit voluptas quidem eos magnam quisquam maiores ratione
          dolorum non expedita nam ipsa cupiditate, eum corporis aliquam saepe
          inventore sapiente!
        </p>
        <button className='btn-demo '>Live Demo</button>
      </div>
      <div>
        <img
          className='imgSize'
          src='https://www.reliancedigital.in/medias/Apple-iPhone-13-Mini-Smartphones-491997714-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTYxODl8aW1hZ2UvanBlZ3xpbWFnZXMvaDI0L2gzNC85NjM3MzI1OTYzMjk0LmpwZ3wzNDI5ZTA2ZmE2ZDFkMTYxMzA5MjdjMWU2ZTY5ZjgxNjVlNjAyN2QxZmU1MWI2NjEzODIwODA4OTk4ZDllMjVk'
          alt=''
        />
      </div>
    </div>
  );
};

export default HomeBanner;
