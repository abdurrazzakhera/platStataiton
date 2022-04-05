import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className='flex justify-center space-x-10 my-4'>
        <CustomLink className='btn-manu' to='./home'>
          Home
        </CustomLink>
        <CustomLink className='btn-manu' to='./reviews'>
          Reviews
        </CustomLink>
        <CustomLink className='btn-manu' to='/dashboard'>
          DashBoard
        </CustomLink>
        <CustomLink className='btn-manu' to='/blogs'>
          Blogs
        </CustomLink>
        <CustomLink className='btn-manu' to='/about'>
          About
        </CustomLink>
      </nav>
    </div>
  );
};

export default Header;
