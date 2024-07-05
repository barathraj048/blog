import React from 'react';
import buff from '../img/buff.jpg';
import Charlie from '../img/charlie.jpg';
import benja from '../img/benja.jpg';
import Navbar from './navbar';

function Investor() {
  const investors = [
    { id: 1, name: 'Warren Buffett', location: 'New York', investment: '$1,000,000', img: buff },
    { id: 2, name: 'Benjamin Graham', location: 'London', investment: '$500,000', img: Charlie },
    { id: 3, name: 'Charlie Munger', location: 'Tokyo', investment: '$750,000', img: benja },
  ];

  return (
<div>
<Navbar/>
<div className="container mx-auto px-4 py-8 h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Investors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {investors.map((investor) => (
          <div key={investor.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <img src={investor.img} alt={investor.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{investor.name}</h2>
            <p className="text-gray-700 mb-2">Location: {investor.location}</p>
            <p className="text-gray-700 mb-2">Investment: {investor.investment}</p>
            {/* Add more details as needed */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
              join Chat
            </button>
          </div>
        ))}
      </div>
    </div>
</div>
  );
}

export default Investor;
