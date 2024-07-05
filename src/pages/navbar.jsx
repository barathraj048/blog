import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = !!user;

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='flex items-center justify-center py-8'>
      <div className='bg-white px-4 py-6 rounded-xl bg-opacity-45'>
        <ul className='flex flex-wrap justify-center items-center md:justify-start gap-4 md:gap-16 text-lg md:text-xl uppercase'>
          <li className='hover:bg-[#693C72] hover:text-white px-4 py-2 rounded-md cursor-pointer'>
            <Link to={"/"}>
              Home
            </Link>
          </li>
          <li className='hover:bg-[#693C72] hover:text-white px-4 py-2 rounded-md cursor-pointer' onClick={scrollToBlog}>
            Blogs
          </li>
          <li className='hover:bg-[#693C72] hover:text-white px-4 py-2 rounded-md cursor-pointer'>
            <Link to={"/investors"}>
              Investors
            </Link>
          </li>
          {isLoggedIn ? (
            <li className='hover:bg-[#693C72] hover:text-white px-4 py-2 rounded-md cursor-pointer'>
              <Link to={"/profile"}>
                Profile
              </Link>
            </li>
          ) : (
            <li className='hover:bg-[#693C72] hover:text-white px-4 py-2 rounded-md cursor-pointer'>
              <Link to={"/login"}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

