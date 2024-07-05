import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import post from '../img/post1.jpg'; // Assuming this is a placeholder image
import { trendingPosts, allPosts } from '../pages/data';
import AllblogComponent from './allblogcomponent';

export default function Home() {
  const handleClick = (id) => {
    console.log(`Post with ID ${id} clicked`);
    // Add your click handling logic here
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-6 mx-4 md:mx-16 rounded-md gap-4">
        {/* Main Trending Blog */}
        <div className="col-span-1 md:col-span-4 relative bg-white p-2 rounded-md cursor-pointer">
          <Link to={`/details/${trendingPosts[0].id}`}>
            <div className="relative rounded-md overflow-hidden">
              <img src={post} className="w-full h-full object-cover" alt="Wanderlust Chronicles" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black-opacity-20 to-transparent"></div>
            </div>
            <h1 className="absolute bottom-16 left-4 text-white text-2xl">
              {trendingPosts[0].title}
            </h1>
            <div className="flex gap-6 absolute bottom-6 left-4">
              <h1 className='bg-[#BC7FCD] px-2 py-1 rounded-md bg-opacity-55 font-semibold text-white text-sm uppercase'>#1 trending</h1>
              <h2 className='text-white text-xs mt-1'>June 04, 2024</h2>
            </div>
          </Link>
        </div>

        {/* Trending Blogs List */}
        <div className="col-span-1 md:col-span-2 bg-white bg-opacity-40 rounded-md px-6 py-4">
          <span className='text-xl font-semibold uppercase'>Trending Blogs</span>
          <ul>
            {trendingPosts.map((post, index) => (
              <li key={index} onClick={() => handleClick(post.id)} className="bg-white text-black w-full text-lg font-semibold px-4 py-5 rounded-md mt-2 flex items-center my-4 cursor-pointer">
                <Link to={`/details/${post.id}`} className="flex justify-between items-center w-full">
                  <div>
                    <h1>{post.title}</h1>
                  </div>
                  <img src={post.image} className="w-16 h-16 rounded-full ml-2" alt={post.title} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Newsletter Section */}
          <div className="mt-6">
            <span className='text-2xl font-semibold'>Newsletter</span>
            <form className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-full focus:outline-none"
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full ml-2">
                Subscribe
              </button>
            </form>
            <p className='text-xs mt-2'>Stay ahead of the curve with our exclusive daily newsletter directly in your inbox!</p>
          </div>
        </div>
      </div>

      {/* All Blog Components */}
      <div id='blog' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mx-4 lg:mx-10">
        {allPosts.map((post) => (
          <Link key={post.id} to={`/details/${post.id}`}>
            <AllblogComponent
              id={post.id}
              title={post.title}
              image={post.image}
              subcontent={post.subcontent}
              subheading={post.subheading}
              main={post.main}
              date={post.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
