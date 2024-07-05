import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allPosts } from '../pages/data'; // Adjust data import path as needed
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Details = () => {
  const { id } = useParams();
  const post = allPosts.find(post => post.id === parseInt(id));

  const [email, setEmail] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  if (!post) {
    return <div className="text-center mt-8">Post not found!</div>;
  }

  const handleClick = (postId) => {
    console.log(`Post with ID ${postId} clicked`);
    // Add your click handling logic here
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscriptionMessage(`You will receive emails for every new blog.`);
    setEmail('');
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-4 md:mx-16 rounded-md">
        {/* Left Side - Main Content */}
        <div className="col-span-1 md:col-span-4 relative bg-white  rounded-md">
          <div className="max-w-5xl mx-auto px-4 py-4 bg-white p-2 rounded-md">
            <img src={post.image} alt={post.title} className="rounded-lg mb-4 w-full" />
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700"><strong>Date:</strong> {post.date}</p>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2 opacity-80">{post.subheading}</h2>
              <p className="text-gray-700">{post.subcontent}</p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-2 opacity-80">Main Content</h2>
              <p className="text-gray-700">{post.main}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Sidebar */}
        <div className="col-span-1 md:col-span-2 bg-white bg-opacity-40 rounded-md p-4">
          <div className="mb-6">
            <h2 className='text-2xl font-semibold uppercase mb-4'>Recent Blogs</h2>
            <ul>
              {allPosts.map((trendingPost, index) => (
                <li key={index} onClick={() => handleClick(trendingPost.id)} className="bg-white text-black w-full text-lg font-semibold px-4 py-2 rounded-md mt-2 flex items-center my-2 cursor-pointer">
                  <Link to={`/details/${trendingPost.id}`} className="flex justify-between items-center w-full">
                    <div>
                      <h1>{trendingPost.title}</h1>
                    </div>
                    <img src={trendingPost.image} className="w-12 h-12 rounded-full ml-2" alt={trendingPost.title} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Newsletter</h2>
            <form onSubmit={handleSubscribe} className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-full mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-full focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
                Subscribe
              </button>
            </form>
            <h3 className='text-xs ml-6 mt-2'>Stay ahead of the curve with our exclusive daily newsletter directly in your inbox!</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;





